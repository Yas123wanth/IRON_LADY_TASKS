/**
 * Iron Lady OpsHub - Database Seed Script
 * Populates database with sample data for demo
 */

const { v4: uuidv4 } = require('uuid');
const db = require('./database');

console.log('🌱 Seeding database...\n');

// Reset database
db.reset();

// ============================================
// SEED PROGRAMS
// ============================================

const programs = [
    { id: 'leadership_essentials', name: 'Leadership Essentials', description: 'Foundation program for early-career professionals and career returnees', duration: '4 weeks', price_min: 25000, price_max: 35000 },
    { id: 'hundred_board_members', name: '100 Board Members', description: 'Accelerator program for mid-career professionals seeking promotions', duration: '6 months', price_min: 75000, price_max: 100000 },
    { id: 'csuite_mastery', name: 'C-Suite Mastery', description: 'Executive program for senior professionals targeting C-level and board positions', duration: '4 months', price_min: 150000, price_max: 200000 },
    { id: 'masterclass', name: '2-Day Transformational Masterclass', description: 'Intensive weekend program for quick momentum', duration: '2 days', price_min: 5000, price_max: 10000 }
];

programs.forEach(p => db.insert('programs', p));
console.log(`✅ Created ${programs.length} programs`);

// ============================================
// SEED ADVISORS
// ============================================

const advisors = [
    { id: uuidv4(), name: 'Priya Sharma', email: 'priya@ironlady.co', phone: '+91 98765 43210', specialization: 'leadership_essentials', max_leads: 40, current_load: 0, status: 'active' },
    { id: uuidv4(), name: 'Meera Krishnan', email: 'meera@ironlady.co', phone: '+91 98765 43211', specialization: 'hundred_board_members', max_leads: 35, current_load: 0, status: 'active' },
    { id: uuidv4(), name: 'Anita Desai', email: 'anita@ironlady.co', phone: '+91 98765 43212', specialization: 'csuite_mastery', max_leads: 25, current_load: 0, status: 'active' },
    { id: uuidv4(), name: 'Kavitha Reddy', email: 'kavitha@ironlady.co', phone: '+91 98765 43213', specialization: null, max_leads: 50, current_load: 0, status: 'active' },
    { id: uuidv4(), name: 'Sunita Patel', email: 'sunita@ironlady.co', phone: '+91 98765 43214', specialization: 'masterclass', max_leads: 60, current_load: 0, status: 'active' }
];

advisors.forEach(a => db.insert('advisors', a));
console.log(`✅ Created ${advisors.length} advisors`);

// ============================================
// SEED COHORTS
// ============================================

const cohorts = [
    { id: uuidv4(), program_id: 'leadership_essentials', name: 'LE March 2026', start_date: '2026-03-01', end_date: '2026-03-28', total_seats: 30, filled_seats: 18, status: 'enrolling' },
    { id: uuidv4(), program_id: 'leadership_essentials', name: 'LE April 2026', start_date: '2026-04-01', end_date: '2026-04-28', total_seats: 30, filled_seats: 5, status: 'upcoming' },
    { id: uuidv4(), program_id: 'hundred_board_members', name: '100BM Feb 2026', start_date: '2026-02-15', end_date: '2026-08-15', total_seats: 25, filled_seats: 22, status: 'enrolling' },
    { id: uuidv4(), program_id: 'hundred_board_members', name: '100BM May 2026', start_date: '2026-05-01', end_date: '2026-11-01', total_seats: 25, filled_seats: 8, status: 'upcoming' },
    { id: uuidv4(), program_id: 'csuite_mastery', name: 'CSM Q2 2026', start_date: '2026-04-01', end_date: '2026-07-31', total_seats: 15, filled_seats: 7, status: 'enrolling' },
    { id: uuidv4(), program_id: 'masterclass', name: 'MC Feb 8-9', start_date: '2026-02-08', end_date: '2026-02-09', total_seats: 50, filled_seats: 35, status: 'enrolling' },
    { id: uuidv4(), program_id: 'masterclass', name: 'MC Feb 22-23', start_date: '2026-02-22', end_date: '2026-02-23', total_seats: 50, filled_seats: 12, status: 'upcoming' }
];

cohorts.forEach(c => db.insert('cohorts', c));
console.log(`✅ Created ${cohorts.length} cohorts`);

// ============================================
// SEED LEADS
// ============================================

const leadStatuses = ['new', 'contacted', 'qualified', 'enrolled', 'lost'];
const priorities = ['low', 'normal', 'high', 'urgent'];
const careerStages = ['early', 'mid', 'senior', 'entrepreneur'];
const goals = ['promotion', 'salary', 'return', 'leadership', 'board', 'quick_start'];
const challengesList = ['bias', 'recognition', 'missed_promotions', 'confidence', 'clarity'];
const sources = ['pathfinder', 'website', 'referral', 'linkedin', 'event'];

const firstNames = ['Anjali', 'Deepika', 'Pooja', 'Shreya', 'Neha', 'Ritu', 'Swati', 'Divya', 'Pallavi', 'Sneha', 'Rashmi', 'Lakshmi', 'Geeta', 'Maya', 'Rekha', 'Usha', 'Kiran', 'Jaya', 'Asha', 'Sonia'];
const lastNames = ['Sharma', 'Patel', 'Kumar', 'Singh', 'Reddy', 'Nair', 'Menon', 'Iyer', 'Gupta', 'Verma', 'Joshi', 'Rao', 'Desai', 'Chopra', 'Kapoor'];

const leads = [];
for (let i = 0; i < 50; i++) {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const status = leadStatuses[Math.floor(Math.random() * leadStatuses.length)];
    const priority = status === 'new' ? priorities[Math.floor(Math.random() * priorities.length)] : 'normal';
    const advisor = advisors[Math.floor(Math.random() * advisors.length)];
    const program = programs[Math.floor(Math.random() * programs.length)];
    
    // Calculate SLA deadline
    const slaDeadline = new Date();
    slaDeadline.setHours(slaDeadline.getHours() + (status === 'new' ? Math.floor(Math.random() * 48) - 24 : 24));
    
    const lead = {
        id: uuidv4(),
        name: `${firstName} ${lastName}`,
        email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}${i}@email.com`,
        phone: `+91 ${Math.floor(Math.random() * 9000000000) + 1000000000}`,
        source: sources[Math.floor(Math.random() * sources.length)],
        career_stage: careerStages[Math.floor(Math.random() * careerStages.length)],
        goal: goals[Math.floor(Math.random() * goals.length)],
        challenges: challengesList.slice(0, Math.floor(Math.random() * 2) + 1).join(', '),
        recommended_program: program.id,
        status: status,
        priority: priority,
        assigned_advisor_id: advisor.id,
        sla_deadline: slaDeadline.toISOString(),
        notes: null,
        first_contact_at: status !== 'new' ? new Date().toISOString() : null,
        last_contact_at: status !== 'new' ? new Date().toISOString() : null
    };
    
    leads.push(lead);
    db.insert('leads', lead);
}
console.log(`✅ Created ${leads.length} leads`);

// Update advisor load counts
advisors.forEach(advisor => {
    const load = leads.filter(l => l.assigned_advisor_id === advisor.id && !['enrolled', 'lost'].includes(l.status)).length;
    db.update('advisors', advisor.id, { current_load: load });
});
console.log('✅ Updated advisor load counts');

// ============================================
// SEED INTERACTIONS
// ============================================

const interactionTypes = ['call', 'email', 'whatsapp', 'meeting', 'note'];
const callOutcomes = ['No answer', 'Left voicemail', 'Scheduled follow-up', 'Interested', 'Not interested', 'Needs more time'];
const emailOutcomes = ['Sent info', 'Awaiting reply', 'Replied - interested', 'Bounced'];

let interactionCount = 0;

leads.filter(l => l.status !== 'new').forEach(lead => {
    const numInteractions = Math.floor(Math.random() * 4) + 1;
    for (let i = 0; i < numInteractions; i++) {
        const type = interactionTypes[Math.floor(Math.random() * interactionTypes.length)];
        let description, outcome;
        
        switch(type) {
            case 'call':
                description = 'Called to discuss program options';
                outcome = callOutcomes[Math.floor(Math.random() * callOutcomes.length)];
                break;
            case 'email':
                description = 'Sent program brochure and pricing';
                outcome = emailOutcomes[Math.floor(Math.random() * emailOutcomes.length)];
                break;
            case 'whatsapp':
                description = 'WhatsApp follow-up message';
                outcome = 'Message delivered';
                break;
            case 'meeting':
                description = 'Virtual meeting for detailed discussion';
                outcome = 'Meeting completed';
                break;
            case 'note':
                description = 'Internal note: ' + ['High potential', 'Needs budget approval', 'Comparing with competitors', 'Very interested'][Math.floor(Math.random() * 4)];
                outcome = null;
                break;
        }
        
        db.insert('lead_interactions', {
            id: uuidv4(),
            lead_id: lead.id,
            type,
            description,
            outcome,
            created_by: 'admin'
        });
        interactionCount++;
    }
});
console.log(`✅ Created ${interactionCount} lead interactions`);

// ============================================
// SEED ENROLLMENTS
// ============================================

const enrolledLeads = leads.filter(l => l.status === 'enrolled');
const enrollmentStatuses = ['pending', 'confirmed', 'paid'];
const paymentStatuses = ['unpaid', 'partial', 'paid'];

let enrollmentCount = 0;

enrolledLeads.forEach(lead => {
    // Find a matching cohort
    const matchingCohort = cohorts.find(c => c.program_id === lead.recommended_program && c.status === 'enrolling');
    if (matchingCohort) {
        const status = enrollmentStatuses[Math.floor(Math.random() * enrollmentStatuses.length)];
        const paymentStatus = status === 'paid' ? 'paid' : paymentStatuses[Math.floor(Math.random() * paymentStatuses.length)];
        const program = programs.find(p => p.id === lead.recommended_program);
        const amount = paymentStatus === 'paid' ? program.price_min : (paymentStatus === 'partial' ? Math.floor(program.price_min / 2) : 0);
        
        db.insert('enrollments', {
            id: uuidv4(),
            lead_id: lead.id,
            cohort_id: matchingCohort.id,
            status,
            payment_status: paymentStatus,
            payment_amount: amount,
            payment_date: paymentStatus === 'paid' ? new Date().toISOString() : null,
            notes: null
        });
        enrollmentCount++;
    }
});
console.log(`✅ Created ${enrollmentCount} enrollments`);

// ============================================
// DONE
// ============================================

console.log(`
╔══════════════════════════════════════════════════════════╗
║                                                          ║
║   🎉 Database seeded successfully!                       ║
║                                                          ║
║   Summary:                                               ║
║   - ${programs.length} programs                                       ║
║   - ${advisors.length} advisors                                        ║
║   - ${cohorts.length} cohorts                                         ║
║   - ${leads.length} leads                                          ║
║   - ${interactionCount} interactions                                   ║
║   - ${enrollmentCount} enrollments                                     ║
║                                                          ║
╚══════════════════════════════════════════════════════════╝
`);

process.exit(0);
