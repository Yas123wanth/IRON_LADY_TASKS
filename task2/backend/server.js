/**
 * Iron Lady OpsHub - Backend Server
 * Express API for internal operations automation
 */

const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const db = require('./database');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Simple auth middleware (for demo - in production use proper JWT)
const AUTH_TOKEN = 'ironlady-opshub-2026';
const authenticate = (req, res, next) => {
    const token = req.headers.authorization?.replace('Bearer ', '');
    if (token === AUTH_TOKEN || req.path.startsWith('/api/webhook')) {
        next();
    } else {
        res.status(401).json({ error: 'Unauthorized' });
    }
};

// Apply auth to all /api routes except webhook
app.use('/api', (req, res, next) => {
    if (req.path.startsWith('/webhook')) return next();
    authenticate(req, res, next);
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

function logAudit(entityType, entityId, action, oldValue, newValue, performedBy = 'system') {
    db.insert('audit_log', {
        id: uuidv4(),
        entity_type: entityType,
        entity_id: entityId,
        action: action,
        old_value: oldValue ? JSON.stringify(oldValue) : null,
        new_value: newValue ? JSON.stringify(newValue) : null,
        performed_by: performedBy
    });
}

// Auto-assign advisor with least load
function getAvailableAdvisor(specialization = null) {
    let advisors = db.find('advisors', a => a.status === 'active' && a.current_load < a.max_leads);
    if (specialization) {
        const specialized = advisors.filter(a => a.specialization === specialization);
        if (specialized.length > 0) advisors = specialized;
    }
    advisors.sort((a, b) => a.current_load - b.current_load);
    return advisors[0] || null;
}

// Increment advisor load
function incrementAdvisorLoad(advisorId) {
    const advisor = db.get('advisors', advisorId);
    if (advisor) {
        db.update('advisors', advisorId, { current_load: advisor.current_load + 1 });
    }
}

// Decrement advisor load
function decrementAdvisorLoad(advisorId) {
    const advisor = db.get('advisors', advisorId);
    if (advisor) {
        db.update('advisors', advisorId, { current_load: Math.max(0, advisor.current_load - 1) });
    }
}

// Check for duplicate lead
function isDuplicateLead(email, phone) {
    return db.findOne('leads', l => l.email === email || (phone && l.phone === phone));
}

// Calculate SLA deadline (24 hours for new leads)
function calculateSLADeadline() {
    const deadline = new Date();
    deadline.setHours(deadline.getHours() + 24);
    return deadline.toISOString();
}

// ============================================
// WEBHOOK ENDPOINT (For Pathfinder Integration)
// ============================================

app.post('/api/webhook/lead', (req, res) => {
    try {
        const { name, email, phone, career_stage, goal, challenges, recommended_program, source } = req.body;
        
        // Validate required fields
        if (!name || !email) {
            return res.status(400).json({ error: 'Name and email are required' });
        }
        
        // Check for duplicates
        const duplicate = isDuplicateLead(email, phone);
        if (duplicate) {
            // Update existing lead instead
            db.update('leads', duplicate.id, {
                career_stage: career_stage || duplicate.career_stage,
                goal: goal || duplicate.goal,
                challenges: challenges || duplicate.challenges,
                recommended_program: recommended_program || duplicate.recommended_program
            });
            
            logAudit('lead', duplicate.id, 'updated_from_pathfinder', null, req.body);
            
            return res.json({ 
                success: true, 
                message: 'Lead updated', 
                lead_id: duplicate.id,
                is_duplicate: true 
            });
        }
        
        // Auto-assign advisor
        const advisor = getAvailableAdvisor();
        const leadId = uuidv4();
        const priority = recommended_program ? 'high' : 'normal';
        
        // Create new lead
        db.insert('leads', {
            id: leadId,
            name,
            email,
            phone: phone || null,
            source: source || 'pathfinder',
            career_stage: career_stage || null,
            goal: goal || null,
            challenges: challenges || null,
            recommended_program: recommended_program || null,
            status: 'new',
            priority: priority,
            assigned_advisor_id: advisor?.id || null,
            sla_deadline: calculateSLADeadline(),
            notes: null,
            first_contact_at: null,
            last_contact_at: null
        });
        
        // Increment advisor load if assigned
        if (advisor) {
            incrementAdvisorLoad(advisor.id);
        }
        
        logAudit('lead', leadId, 'created_from_pathfinder', null, req.body);
        
        res.json({ 
            success: true, 
            message: 'Lead created successfully',
            lead_id: leadId,
            assigned_advisor: advisor?.name || 'Unassigned'
        });
        
    } catch (error) {
        console.error('Webhook error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// ============================================
// LEADS CRUD API
// ============================================

// GET all leads with filters
app.get('/api/leads', (req, res) => {
    try {
        const { status, advisor_id, priority, search, limit = 100, offset = 0 } = req.query;
        
        let leads = db.all('leads');
        
        // Apply filters
        if (status) leads = leads.filter(l => l.status === status);
        if (advisor_id) leads = leads.filter(l => l.assigned_advisor_id === advisor_id);
        if (priority) leads = leads.filter(l => l.priority === priority);
        if (search) {
            const s = search.toLowerCase();
            leads = leads.filter(l => 
                l.name?.toLowerCase().includes(s) || 
                l.email?.toLowerCase().includes(s) || 
                l.phone?.includes(s)
            );
        }
        
        // Sort by priority and date
        const priorityOrder = { urgent: 1, high: 2, normal: 3, low: 4 };
        leads.sort((a, b) => {
            const pDiff = (priorityOrder[a.priority] || 4) - (priorityOrder[b.priority] || 4);
            if (pDiff !== 0) return pDiff;
            return new Date(b.created_at) - new Date(a.created_at);
        });
        
        const total = leads.length;
        leads = leads.slice(parseInt(offset), parseInt(offset) + parseInt(limit));
        
        // Enrich with advisor and program names
        const advisors = db.all('advisors');
        const programs = db.all('programs');
        
        leads = leads.map(l => ({
            ...l,
            advisor_name: advisors.find(a => a.id === l.assigned_advisor_id)?.name || null,
            program_name: programs.find(p => p.id === l.recommended_program)?.name || null
        }));
        
        res.json({ leads, total, limit: parseInt(limit), offset: parseInt(offset) });
    } catch (error) {
        console.error('Get leads error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// GET single lead with interactions
app.get('/api/leads/:id', (req, res) => {
    try {
        const lead = db.get('leads', req.params.id);
        
        if (!lead) {
            return res.status(404).json({ error: 'Lead not found' });
        }
        
        const advisor = db.get('advisors', lead.assigned_advisor_id);
        const program = db.get('programs', lead.recommended_program);
        const interactions = db.find('lead_interactions', i => i.lead_id === req.params.id)
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        
        res.json({
            ...lead,
            advisor_name: advisor?.name || null,
            advisor_email: advisor?.email || null,
            program_name: program?.name || null,
            interactions
        });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// CREATE lead
app.post('/api/leads', (req, res) => {
    try {
        const { name, email, phone, source, career_stage, goal, challenges, 
            recommended_program, priority, notes, assigned_advisor_id } = req.body;
        
        if (!name || !email) {
            return res.status(400).json({ error: 'Name and email are required' });
        }
        
        // Check duplicates
        const duplicate = isDuplicateLead(email, phone);
        if (duplicate) {
            return res.status(409).json({ error: 'Lead with this email or phone already exists', existing_id: duplicate.id });
        }
        
        const leadId = uuidv4();
        let advisorId = assigned_advisor_id;
        
        // Auto-assign if not specified
        if (!advisorId) {
            const advisor = getAvailableAdvisor();
            advisorId = advisor?.id;
            if (advisor) incrementAdvisorLoad(advisor.id);
        }
        
        db.insert('leads', {
            id: leadId,
            name,
            email,
            phone: phone || null,
            source: source || 'manual',
            career_stage: career_stage || null,
            goal: goal || null,
            challenges: challenges || null,
            recommended_program: recommended_program || null,
            status: 'new',
            priority: priority || 'normal',
            notes: notes || null,
            assigned_advisor_id: advisorId,
            sla_deadline: calculateSLADeadline(),
            first_contact_at: null,
            last_contact_at: null
        });
        
        logAudit('lead', leadId, 'created', null, req.body);
        
        res.status(201).json({ success: true, id: leadId });
    } catch (error) {
        console.error('Create lead error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// UPDATE lead
app.put('/api/leads/:id', (req, res) => {
    try {
        const oldLead = db.get('leads', req.params.id);
        if (!oldLead) {
            return res.status(404).json({ error: 'Lead not found' });
        }
        
        const { name, email, phone, status, priority, notes, assigned_advisor_id } = req.body;
        
        // Handle advisor change
        if (assigned_advisor_id !== undefined && assigned_advisor_id !== oldLead.assigned_advisor_id) {
            if (oldLead.assigned_advisor_id) {
                decrementAdvisorLoad(oldLead.assigned_advisor_id);
            }
            if (assigned_advisor_id) {
                incrementAdvisorLoad(assigned_advisor_id);
            }
        }
        
        const updates = {};
        if (name !== undefined) updates.name = name;
        if (email !== undefined) updates.email = email;
        if (phone !== undefined) updates.phone = phone;
        if (status !== undefined) updates.status = status;
        if (priority !== undefined) updates.priority = priority;
        if (notes !== undefined) updates.notes = notes;
        if (assigned_advisor_id !== undefined) updates.assigned_advisor_id = assigned_advisor_id;
        
        db.update('leads', req.params.id, updates);
        
        // Log status change as interaction
        if (status && status !== oldLead.status) {
            db.insert('lead_interactions', {
                id: uuidv4(),
                lead_id: req.params.id,
                type: 'status_change',
                description: `Status changed from ${oldLead.status} to ${status}`,
                outcome: null,
                created_by: 'admin'
            });
        }
        
        logAudit('lead', req.params.id, 'updated', oldLead, req.body);
        
        res.json({ success: true });
    } catch (error) {
        console.error('Update lead error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// DELETE lead
app.delete('/api/leads/:id', (req, res) => {
    try {
        const lead = db.get('leads', req.params.id);
        if (!lead) {
            return res.status(404).json({ error: 'Lead not found' });
        }
        
        // Decrement advisor load
        if (lead.assigned_advisor_id) {
            decrementAdvisorLoad(lead.assigned_advisor_id);
        }
        
        // Delete interactions
        db.deleteWhere('lead_interactions', i => i.lead_id === req.params.id);
        
        db.delete('leads', req.params.id);
        
        logAudit('lead', req.params.id, 'deleted', lead, null);
        
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// ADD interaction to lead
app.post('/api/leads/:id/interactions', (req, res) => {
    try {
        const { type, description, outcome } = req.body;
        
        if (!type || !description) {
            return res.status(400).json({ error: 'Type and description are required' });
        }
        
        const lead = db.get('leads', req.params.id);
        if (!lead) {
            return res.status(404).json({ error: 'Lead not found' });
        }
        
        const interactionId = uuidv4();
        
        db.insert('lead_interactions', {
            id: interactionId,
            lead_id: req.params.id,
            type,
            description,
            outcome: outcome || null,
            created_by: 'admin'
        });
        
        // Update lead contact times
        const now = new Date().toISOString();
        db.update('leads', req.params.id, {
            first_contact_at: lead.first_contact_at || now,
            last_contact_at: now
        });
        
        res.status(201).json({ success: true, id: interactionId });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// ============================================
// ADVISORS API
// ============================================

app.get('/api/advisors', (req, res) => {
    try {
        const advisors = db.all('advisors').map(a => {
            const leads = db.find('leads', l => l.assigned_advisor_id === a.id);
            return {
                ...a,
                total_leads: leads.length,
                enrolled_leads: leads.filter(l => l.status === 'enrolled').length
            };
        });
        advisors.sort((a, b) => a.name.localeCompare(b.name));
        res.json(advisors);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/api/advisors', (req, res) => {
    try {
        const { name, email, phone, specialization, max_leads } = req.body;
        
        if (!name || !email) {
            return res.status(400).json({ error: 'Name and email are required' });
        }
        
        // Check for duplicate email
        if (db.findOne('advisors', a => a.email === email)) {
            return res.status(409).json({ error: 'Advisor with this email already exists' });
        }
        
        const id = uuidv4();
        db.insert('advisors', {
            id,
            name,
            email,
            phone: phone || null,
            specialization: specialization || null,
            max_leads: max_leads || 50,
            current_load: 0,
            status: 'active'
        });
        
        logAudit('advisor', id, 'created', null, req.body);
        
        res.status(201).json({ success: true, id });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.put('/api/advisors/:id', (req, res) => {
    try {
        const { name, email, phone, specialization, max_leads, status } = req.body;
        
        const updates = {};
        if (name !== undefined) updates.name = name;
        if (email !== undefined) updates.email = email;
        if (phone !== undefined) updates.phone = phone;
        if (specialization !== undefined) updates.specialization = specialization;
        if (max_leads !== undefined) updates.max_leads = max_leads;
        if (status !== undefined) updates.status = status;
        
        db.update('advisors', req.params.id, updates);
        
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// ============================================
// PROGRAMS API
// ============================================

app.get('/api/programs', (req, res) => {
    try {
        const programs = db.all('programs').map(p => {
            const cohorts = db.find('cohorts', c => c.program_id === p.id);
            return {
                ...p,
                total_cohorts: cohorts.length,
                active_cohorts: cohorts.filter(c => c.status === 'enrolling').length
            };
        });
        res.json(programs);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/api/programs', (req, res) => {
    try {
        const { id, name, description, duration, price_min, price_max } = req.body;
        
        if (!id || !name) {
            return res.status(400).json({ error: 'ID and name are required' });
        }
        
        db.insert('programs', {
            id,
            name,
            description: description || null,
            duration: duration || null,
            price_min: price_min || null,
            price_max: price_max || null
        });
        
        res.status(201).json({ success: true, id });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// ============================================
// COHORTS API
// ============================================

app.get('/api/cohorts', (req, res) => {
    try {
        const { program_id, status } = req.query;
        
        let cohorts = db.all('cohorts');
        
        if (program_id) cohorts = cohorts.filter(c => c.program_id === program_id);
        if (status) cohorts = cohorts.filter(c => c.status === status);
        
        const programs = db.all('programs');
        
        cohorts = cohorts.map(c => ({
            ...c,
            program_name: programs.find(p => p.id === c.program_id)?.name || null,
            enrollment_count: db.count('enrollments', e => e.cohort_id === c.id)
        }));
        
        cohorts.sort((a, b) => new Date(b.start_date || 0) - new Date(a.start_date || 0));
        
        res.json(cohorts);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/api/cohorts', (req, res) => {
    try {
        const { program_id, name, start_date, end_date, total_seats, status } = req.body;
        
        if (!program_id || !name) {
            return res.status(400).json({ error: 'Program ID and name are required' });
        }
        
        const id = uuidv4();
        db.insert('cohorts', {
            id,
            program_id,
            name,
            start_date: start_date || null,
            end_date: end_date || null,
            total_seats: total_seats || 30,
            filled_seats: 0,
            status: status || 'upcoming'
        });
        
        logAudit('cohort', id, 'created', null, req.body);
        
        res.status(201).json({ success: true, id });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.put('/api/cohorts/:id', (req, res) => {
    try {
        const { name, start_date, end_date, total_seats, status } = req.body;
        
        const updates = {};
        if (name !== undefined) updates.name = name;
        if (start_date !== undefined) updates.start_date = start_date;
        if (end_date !== undefined) updates.end_date = end_date;
        if (total_seats !== undefined) updates.total_seats = total_seats;
        if (status !== undefined) updates.status = status;
        
        db.update('cohorts', req.params.id, updates);
        
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// ============================================
// ENROLLMENTS API
// ============================================

app.get('/api/enrollments', (req, res) => {
    try {
        const { cohort_id, status } = req.query;
        
        let enrollments = db.all('enrollments');
        
        if (cohort_id) enrollments = enrollments.filter(e => e.cohort_id === cohort_id);
        if (status) enrollments = enrollments.filter(e => e.status === status);
        
        const leads = db.all('leads');
        const cohorts = db.all('cohorts');
        const programs = db.all('programs');
        
        enrollments = enrollments.map(e => {
            const lead = leads.find(l => l.id === e.lead_id);
            const cohort = cohorts.find(c => c.id === e.cohort_id);
            const program = cohort ? programs.find(p => p.id === cohort.program_id) : null;
            
            return {
                ...e,
                lead_name: lead?.name || null,
                lead_email: lead?.email || null,
                lead_phone: lead?.phone || null,
                cohort_name: cohort?.name || null,
                program_name: program?.name || null
            };
        });
        
        enrollments.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        
        res.json(enrollments);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Enroll a lead
app.post('/api/enrollments', (req, res) => {
    try {
        const { lead_id, cohort_id, notes } = req.body;
        
        if (!lead_id || !cohort_id) {
            return res.status(400).json({ error: 'Lead ID and Cohort ID are required' });
        }
        
        // Check lead exists
        const lead = db.get('leads', lead_id);
        if (!lead) {
            return res.status(404).json({ error: 'Lead not found' });
        }
        
        // Check cohort has seats
        const cohort = db.get('cohorts', cohort_id);
        if (!cohort) {
            return res.status(404).json({ error: 'Cohort not found' });
        }
        
        if (cohort.filled_seats >= cohort.total_seats) {
            return res.status(400).json({ error: 'Cohort is full' });
        }
        
        // Check not already enrolled
        const existing = db.findOne('enrollments', e => e.lead_id === lead_id && e.cohort_id === cohort_id);
        if (existing) {
            return res.status(409).json({ error: 'Lead already enrolled in this cohort' });
        }
        
        const id = uuidv4();
        
        // Create enrollment
        db.insert('enrollments', {
            id,
            lead_id,
            cohort_id,
            status: 'pending',
            payment_status: 'unpaid',
            payment_amount: 0,
            payment_date: null,
            notes: notes || null
        });
        
        // Update cohort seats
        db.update('cohorts', cohort_id, { filled_seats: cohort.filled_seats + 1 });
        
        // Update lead status
        db.update('leads', lead_id, { status: 'enrolled' });
        
        logAudit('enrollment', id, 'created', null, req.body);
        
        res.status(201).json({ success: true, id });
    } catch (error) {
        console.error('Enrollment error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Update enrollment (payment, status)
app.put('/api/enrollments/:id', (req, res) => {
    try {
        const { status, payment_status, payment_amount, notes } = req.body;
        
        const updates = {};
        if (status !== undefined) updates.status = status;
        if (payment_status !== undefined) {
            updates.payment_status = payment_status;
            if (payment_status === 'paid') {
                updates.payment_date = new Date().toISOString();
            }
        }
        if (payment_amount !== undefined) updates.payment_amount = payment_amount;
        if (notes !== undefined) updates.notes = notes;
        
        db.update('enrollments', req.params.id, updates);
        
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// ============================================
// REPORTS & ANALYTICS API
// ============================================

app.get('/api/reports/dashboard', (req, res) => {
    try {
        const leads = db.all('leads');
        const advisors = db.all('advisors');
        const cohorts = db.all('cohorts');
        const programs = db.all('programs');
        
        // Lead stats
        const now = new Date();
        const leadStats = {
            total: leads.length,
            new_leads: leads.filter(l => l.status === 'new').length,
            contacted: leads.filter(l => l.status === 'contacted').length,
            qualified: leads.filter(l => l.status === 'qualified').length,
            enrolled: leads.filter(l => l.status === 'enrolled').length,
            lost: leads.filter(l => l.status === 'lost').length,
            urgent: leads.filter(l => l.priority === 'urgent').length,
            sla_breached: leads.filter(l => l.status === 'new' && new Date(l.sla_deadline) < now).length
        };
        
        // Advisor performance
        const advisorStats = advisors.filter(a => a.status === 'active').map(a => {
            const advisorLeads = leads.filter(l => l.assigned_advisor_id === a.id);
            const newCount = advisorLeads.filter(l => l.status === 'new').length;
            const contacted = advisorLeads.filter(l => l.status === 'contacted').length;
            const qualified = advisorLeads.filter(l => l.status === 'qualified').length;
            const enrolled = advisorLeads.filter(l => l.status === 'enrolled').length;
            const lost = advisorLeads.filter(l => l.status === 'lost').length;
            const pending = newCount + contacted + qualified; // Not yet enrolled/lost
            const total = advisorLeads.length;
            return {
                id: a.id,
                name: a.name,
                current_load: a.current_load,
                max_leads: a.max_leads,
                total_leads: total,
                new: newCount,
                contacted: contacted,
                qualified: qualified,
                enrolled: enrolled,
                lost: lost,
                pending: pending,
                conversion_rate: total > 0 ? Math.round((enrolled / total) * 1000) / 10 : 0
            };
        }).sort((a, b) => b.conversion_rate - a.conversion_rate);
        
        // Cohort fill rates
        const cohortStats = cohorts
            .filter(c => c.status === 'upcoming' || c.status === 'enrolling')
            .map(c => ({
                id: c.id,
                name: c.name,
                program_name: programs.find(p => p.id === c.program_id)?.name || null,
                total_seats: c.total_seats,
                filled_seats: c.filled_seats,
                fill_rate: Math.round((c.filled_seats / c.total_seats) * 1000) / 10,
                status: c.status,
                start_date: c.start_date
            }))
            .sort((a, b) => new Date(a.start_date || 0) - new Date(b.start_date || 0));
        
        // Recent leads
        const recentLeads = leads
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
            .slice(0, 10)
            .map(l => ({
                id: l.id,
                name: l.name,
                email: l.email,
                phone: l.phone,
                status: l.status,
                priority: l.priority,
                created_at: l.created_at,
                advisor_name: advisors.find(a => a.id === l.assigned_advisor_id)?.name || null,
                program_name: programs.find(p => p.id === l.recommended_program)?.name || null
            }));
        
        // Conversion funnel
        const funnel = {
            total: leadStats.total,
            contacted: leadStats.contacted + leadStats.qualified + leadStats.enrolled,
            qualified: leadStats.qualified + leadStats.enrolled,
            enrolled: leadStats.enrolled
        };
        
        // Revenue Forecast (based on qualified + enrolled leads)
        // Program prices - EDIT THESE TO CHANGE REVENUE FORECAST
        const programPrices = {
            leadership_essentials: { min: 25000, avg: 50000, color: '#E6007E' },      // ₹50,000
            hundred_board_members: { min: 75000, avg: 100000, color: '#2D0A31' },     // ₹1,00,000
            csuite_mastery: { min: 150000, avg: 200000, color: '#0056C1' },           // ₹2,00,000
            masterclass: { min: 5000, avg: 15000, color: '#1B9C6E' }                  // ₹15,000
        };
        
        const qualifiedLeads = leads.filter(l => ['qualified', 'enrolled'].includes(l.status));
        const revenueByProgram = {};
        
        qualifiedLeads.forEach(lead => {
            const programId = lead.recommended_program;
            if (programId && programPrices[programId]) {
                if (!revenueByProgram[programId]) {
                    revenueByProgram[programId] = { count: 0, amount: 0 };
                }
                revenueByProgram[programId].count++;
                revenueByProgram[programId].amount += programPrices[programId].avg;
            }
        });
        
        const revenueForecast = {
            total: Object.values(revenueByProgram).reduce((sum, p) => sum + p.amount, 0),
            byProgram: Object.entries(revenueByProgram).map(([id, data]) => ({
                id,
                name: programs.find(p => p.id === id)?.name || id,
                count: data.count,
                amount: data.amount,
                color: programPrices[id]?.color || '#555555'
            })).sort((a, b) => b.amount - a.amount)
        };
        
        // SLA Alerts
        const slaAlerts = {
            breached: [],
            warning: []
        };
        
        const newLeads = leads.filter(l => l.status === 'new');
        newLeads.forEach(lead => {
            const deadline = new Date(lead.sla_deadline);
            const hoursLeft = (deadline - now) / (1000 * 60 * 60);
            
            if (hoursLeft < 0) {
                // Breached
                slaAlerts.breached.push({
                    id: lead.id,
                    name: lead.name,
                    hours_overdue: Math.abs(Math.round(hoursLeft))
                });
            } else if (hoursLeft < 6) {
                // Warning (less than 6 hours left)
                slaAlerts.warning.push({
                    id: lead.id,
                    name: lead.name,
                    hours_left: Math.round(hoursLeft)
                });
            }
        });
        
        // Sort by urgency
        slaAlerts.breached.sort((a, b) => b.hours_overdue - a.hours_overdue);
        slaAlerts.warning.sort((a, b) => a.hours_left - b.hours_left);
        
        res.json({
            leadStats,
            advisorStats,
            cohortStats,
            recentLeads,
            funnel,
            revenueForecast,
            slaAlerts
        });
    } catch (error) {
        console.error('Dashboard error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// CSV Export
app.get('/api/reports/export/leads', (req, res) => {
    try {
        const leads = db.all('leads');
        const advisors = db.all('advisors');
        const programs = db.all('programs');
        
        // Convert to CSV
        const headers = ['ID', 'Name', 'Email', 'Phone', 'Source', 'Career Stage', 'Goal', 'Challenges',
            'Status', 'Priority', 'Advisor', 'Recommended Program', 'Created At', 'First Contact', 'Last Contact'];
        
        let csv = headers.join(',') + '\n';
        
        leads.forEach(lead => {
            const advisor = advisors.find(a => a.id === lead.assigned_advisor_id);
            const program = programs.find(p => p.id === lead.recommended_program);
            
            const row = [
                lead.id,
                `"${lead.name}"`,
                lead.email,
                lead.phone || '',
                lead.source,
                lead.career_stage || '',
                lead.goal || '',
                `"${lead.challenges || ''}"`,
                lead.status,
                lead.priority,
                advisor?.name || '',
                program?.name || '',
                lead.created_at,
                lead.first_contact_at || '',
                lead.last_contact_at || ''
            ];
            csv += row.join(',') + '\n';
        });
        
        res.setHeader('Content-Type', 'text/csv');
        res.setHeader('Content-Disposition', 'attachment; filename=leads_export.csv');
        res.send(csv);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Advisor Performance Report
app.get('/api/reports/export/advisors', (req, res) => {
    try {
        const advisors = db.all('advisors');
        const leads = db.all('leads');
        
        const headers = ['Advisor Name', 'Email', 'Specialization', 'Status', 'Max Leads', 'Current Load', 
            'Total Assigned', 'Enrolled', 'Qualified', 'Lost', 'Conversion Rate %'];
        
        let csv = headers.join(',') + '\n';
        
        advisors.forEach(advisor => {
            const advisorLeads = leads.filter(l => l.assigned_advisor_id === advisor.id);
            const enrolled = advisorLeads.filter(l => l.status === 'enrolled').length;
            const qualified = advisorLeads.filter(l => l.status === 'qualified').length;
            const lost = advisorLeads.filter(l => l.status === 'lost').length;
            const conversionRate = advisorLeads.length > 0 ? Math.round((enrolled / advisorLeads.length) * 100) : 0;
            
            const row = [
                `"${advisor.name}"`,
                advisor.email,
                advisor.specialization || 'general',
                advisor.status,
                advisor.max_leads,
                advisor.current_load,
                advisorLeads.length,
                enrolled,
                qualified,
                lost,
                conversionRate
            ];
            csv += row.join(',') + '\n';
        });
        
        res.setHeader('Content-Type', 'text/csv');
        res.setHeader('Content-Disposition', 'attachment; filename=advisor_report.csv');
        res.send(csv);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Cohort Status Report
app.get('/api/reports/export/cohorts', (req, res) => {
    try {
        const cohorts = db.all('cohorts');
        const programs = db.all('programs');
        const enrollments = db.all('enrollments');
        
        const headers = ['Cohort Name', 'Program', 'Status', 'Start Date', 'End Date', 
            'Total Seats', 'Filled Seats', 'Available', 'Fill Rate %', 'Revenue Potential'];
        
        let csv = headers.join(',') + '\n';
        
        cohorts.forEach(cohort => {
            const program = programs.find(p => p.id === cohort.program_id);
            const available = cohort.total_seats - cohort.filled_seats;
            const fillRate = Math.round((cohort.filled_seats / cohort.total_seats) * 100);
            const revenue = cohort.filled_seats * (program?.price_min || 0);
            
            const row = [
                `"${cohort.name}"`,
                `"${program?.name || ''}"`,
                cohort.status,
                cohort.start_date || '',
                cohort.end_date || '',
                cohort.total_seats,
                cohort.filled_seats,
                available,
                fillRate,
                revenue
            ];
            csv += row.join(',') + '\n';
        });
        
        res.setHeader('Content-Type', 'text/csv');
        res.setHeader('Content-Disposition', 'attachment; filename=cohort_report.csv');
        res.send(csv);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Analytics for Reports
app.get('/api/reports/analytics', (req, res) => {
    try {
        const leads = db.all('leads');
        const programs = db.all('programs');
        
        // Lead count by source
        const sourceCount = {};
        const sourceEnrolled = {};
        leads.forEach(lead => {
            const source = lead.source || 'unknown';
            sourceCount[source] = (sourceCount[source] || 0) + 1;
            if (lead.status === 'enrolled') {
                sourceEnrolled[source] = (sourceEnrolled[source] || 0) + 1;
            }
        });
        
        const bySource = Object.entries(sourceCount)
            .map(([source, count]) => ({ source, count }))
            .sort((a, b) => b.count - a.count);
        
        // Lead count by program
        const programCount = {};
        leads.forEach(lead => {
            if (lead.recommended_program) {
                programCount[lead.recommended_program] = (programCount[lead.recommended_program] || 0) + 1;
            }
        });
        
        const byProgram = Object.entries(programCount)
            .map(([program_id, count]) => ({
                program_id,
                name: programs.find(p => p.id === program_id)?.name || program_id,
                count
            }))
            .sort((a, b) => b.count - a.count);
        
        // Conversion rate by source
        const conversionBySource = Object.entries(sourceCount)
            .map(([source, total]) => ({
                source,
                total,
                enrolled: sourceEnrolled[source] || 0,
                conversion_rate: total > 0 ? Math.round((sourceEnrolled[source] || 0) / total * 100) : 0
            }))
            .sort((a, b) => b.conversion_rate - a.conversion_rate);
        
        res.json({
            bySource,
            byProgram,
            conversionBySource
        });
    } catch (error) {
        console.error('Analytics error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Audit log
app.get('/api/audit-log', (req, res) => {
    try {
        const { entity_type, entity_id, limit = 100 } = req.query;
        
        let logs = db.all('audit_log');
        
        if (entity_type) logs = logs.filter(l => l.entity_type === entity_type);
        if (entity_id) logs = logs.filter(l => l.entity_id === entity_id);
        
        logs = logs
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
            .slice(0, parseInt(limit));
        
        res.json(logs);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// ============================================
// HEALTH CHECK
// ============================================

app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// ============================================
// START SERVER
// ============================================

app.listen(PORT, () => {
    console.log(`
╔══════════════════════════════════════════════════════════╗
║                                                          ║
║   🚀 Iron Lady OpsHub Backend                            ║
║   Running on http://localhost:${PORT}                      ║
║                                                          ║
║   API Endpoints:                                         ║
║   - POST /api/webhook/lead (Pathfinder integration)      ║
║   - GET/POST/PUT/DELETE /api/leads                       ║
║   - GET/POST/PUT /api/advisors                           ║
║   - GET/POST /api/programs                               ║
║   - GET/POST/PUT /api/cohorts                            ║
║   - GET/POST/PUT /api/enrollments                        ║
║   - GET /api/reports/dashboard                           ║
║   - GET /api/reports/export/leads (CSV)                  ║
║                                                          ║
║   Auth Token: ${AUTH_TOKEN}                   ║
║                                                          ║
╚══════════════════════════════════════════════════════════╝
    `);
});

module.exports = app;
