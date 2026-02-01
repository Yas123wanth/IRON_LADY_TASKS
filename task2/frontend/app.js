/**
 * Iron Lady OpsHub - Frontend Application
 * Dashboard and management interface
 */

const API_BASE = 'http://localhost:3001/api';
const AUTH_TOKEN = 'ironlady-opshub-2026';

// ============================================
// API HELPERS
// ============================================

async function apiCall(endpoint, method = 'GET', body = null) {
    const options = {
        method,
        headers: {
            'Authorization': `Bearer ${AUTH_TOKEN}`,
            'Content-Type': 'application/json'
        }
    };
    
    if (body) {
        options.body = JSON.stringify(body);
    }
    
    try {
        const response = await fetch(`${API_BASE}${endpoint}`, options);
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'API Error');
        }
        
        // Check if response is CSV
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('text/csv')) {
            return await response.text();
        }
        
        return await response.json();
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}

// ============================================
// UI HELPERS
// ============================================

function showSection(sectionName, addToHistory = true) {
    // Hide all sections
    document.querySelectorAll('main > section').forEach(s => s.classList.add('hidden'));
    
    // Show selected section
    document.getElementById(`${sectionName}Section`).classList.remove('hidden');
    
    // Update sidebar active state
    document.querySelectorAll('.sidebar-link').forEach(link => link.classList.remove('active'));
    document.querySelector(`[data-section="${sectionName}"]`)?.classList.add('active');
    
    // Update page title
    const titles = {
        dashboard: { title: 'Dashboard', subtitle: 'Overview of operations' },
        leads: { title: 'Leads', subtitle: 'Manage and track leads' },
        cohorts: { title: 'Cohorts', subtitle: 'Program cohort management' },
        advisors: { title: 'Advisors', subtitle: 'Team performance' },
        enrollments: { title: 'Enrollments', subtitle: 'Track enrollments and payments' },
        reports: { title: 'Reports', subtitle: 'Analytics and exports' }
    };
    
    const info = titles[sectionName] || { title: sectionName, subtitle: '' };
    document.getElementById('pageTitle').textContent = info.title;
    document.getElementById('pageSubtitle').textContent = info.subtitle;
    
    // Update browser URL and history (for back/forward buttons)
    if (addToHistory) {
        window.history.pushState({ section: sectionName }, info.title, `#${sectionName}`);
    }
    
    // Load section data
    loadSectionData(sectionName);
}

function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

// Filter leads from stat card clicks
function filterLeadsByStatus(status) {
    console.log('Filtering leads by status:', status);
    
    // Navigate to leads section
    document.querySelectorAll('main > section').forEach(s => s.classList.add('hidden'));
    document.getElementById('leadsSection').classList.remove('hidden');
    
    // Update sidebar
    document.querySelectorAll('.sidebar-link').forEach(link => link.classList.remove('active'));
    document.querySelector('[data-section="leads"]')?.classList.add('active');
    
    // Update page title
    document.getElementById('pageTitle').textContent = 'Leads';
    document.getElementById('pageSubtitle').textContent = status ? `Filtered by: ${status.toUpperCase()}` : 'All leads';
    
    // Update browser history
    window.history.pushState({ section: 'leads', filter: status }, 'Leads', '#leads');
    
    // Set filter and load
    const filterEl = document.getElementById('filterStatus');
    const priorityEl = document.getElementById('filterPriority');
    const searchEl = document.getElementById('searchLeads');
    
    if (filterEl) filterEl.value = status || '';
    if (priorityEl) priorityEl.value = '';
    if (searchEl) searchEl.value = '';
    
    // Ensure table view is visible
    setLeadsView('table');
    
    loadLeads();
}

function filterLeadsByPriority(priority) {
    console.log('Filtering leads by priority:', priority);
    
    // Navigate to leads section
    document.querySelectorAll('main > section').forEach(s => s.classList.add('hidden'));
    document.getElementById('leadsSection').classList.remove('hidden');
    
    // Update sidebar
    document.querySelectorAll('.sidebar-link').forEach(link => link.classList.remove('active'));
    document.querySelector('[data-section="leads"]')?.classList.add('active');
    
    // Update page title
    document.getElementById('pageTitle').textContent = 'Leads';
    document.getElementById('pageSubtitle').textContent = `Filtered by: ${priority.toUpperCase()} priority`;
    
    // Update browser history
    window.history.pushState({ section: 'leads', priority: priority }, 'Leads', '#leads');
    
    // Set filter and load
    const filterEl = document.getElementById('filterStatus');
    const priorityEl = document.getElementById('filterPriority');
    const searchEl = document.getElementById('searchLeads');
    
    // Ensure table view is visible
    setLeadsView('table');
    
    if (filterEl) filterEl.value = '';
    if (priorityEl) priorityEl.value = priority || '';
    if (searchEl) searchEl.value = '';
    
    loadLeads();
}

function formatDate(dateString) {
    if (!dateString) return '-';
    return new Date(dateString).toLocaleDateString('en-IN', { 
        day: 'numeric', month: 'short', year: 'numeric' 
    });
}

function getStatusBadge(status) {
    // Iron Lady Brand Status Colors
    const colors = {
        new: 'bg-[#FCE4F0] text-[#E6007E] border border-[#E6007E]',
        contacted: 'bg-[#E8F5E9] text-[#1B9C6E] border border-[#1B9C6E]',
        qualified: 'bg-[#E3F2FD] text-[#0056C1] border border-[#0056C1]',
        enrolled: 'bg-[#2D0A31] text-white',
        lost: 'bg-[#FFEBEE] text-[#D32F2F] border border-[#D32F2F]',
        duplicate: 'bg-[#F5F5F5] text-[#555555] border border-[#E0E0E0]'
    };
    const colorClass = colors[status] || colors.new;
    return `<span class="px-2 py-1 rounded text-xs font-semibold uppercase ${colorClass}">${status}</span>`;
}

function getPriorityBadge(priority) {
    const colors = {
        urgent: 'bg-[#FFEBEE] text-[#D32F2F] border border-[#D32F2F]',
        high: 'bg-[#FFF8E1] text-[#FF8F00] border border-[#FFB300]',
        normal: 'bg-[#F5F5F5] text-[#555555] border border-[#E0E0E0]',
        low: 'bg-[#FAFAFA] text-[#9E9E9E] border border-[#E0E0E0]'
    };
    const colorClass = colors[priority] || colors.normal;
    return `<span class="px-2 py-1 rounded text-xs font-semibold uppercase ${colorClass}">${priority}</span>`;
}

// ============================================
// DASHBOARD
// ============================================

async function loadDashboard() {
    try {
        const data = await apiCall('/reports/dashboard');
        
        // Update stats
        document.getElementById('statTotalLeads').textContent = data.leadStats.total;
        document.getElementById('statNewLeads').textContent = data.leadStats.new_leads;
        document.getElementById('statEnrolled').textContent = data.leadStats.enrolled;
        document.getElementById('statUrgent').textContent = data.leadStats.urgent;
        document.getElementById('statSLABreached').textContent = `${data.leadStats.sla_breached} SLA breached`;
        
        const conversionRate = data.leadStats.total > 0 
            ? ((data.leadStats.enrolled / data.leadStats.total) * 100).toFixed(1) 
            : 0;
        document.getElementById('statConversionRate').textContent = `${conversionRate}% conversion`;
        
        // Render funnel
        renderFunnel(data.funnel);
        
        // Render advisor performance
        renderAdvisorPerformance(data.advisorStats);
        
        // Render cohort fill rates
        renderCohortFillRates(data.cohortStats);
        
        // Render recent leads
        renderRecentLeads(data.recentLeads);
        
        // Render revenue forecast
        renderRevenueForecast(data.revenueForecast);
        
        // Render SLA alerts
        renderSLAAlerts(data.slaAlerts);
        
    } catch (error) {
        console.error('Failed to load dashboard:', error);
    }
}

function renderFunnel(funnel) {
    const container = document.getElementById('funnelChart');
    const maxValue = funnel.total || 1;
    
    // Iron Lady Brand Colors
    const stages = [
        { name: 'Total Leads', value: funnel.total, color: '#E6007E' },      // Pink
        { name: 'Contacted', value: funnel.contacted, color: '#1B9C6E' },    // Success Green
        { name: 'Qualified', value: funnel.qualified, color: '#0056C1' },    // Blue
        { name: 'Enrolled', value: funnel.enrolled, color: '#2D0A31' }       // Deep Purple
    ];
    
    container.innerHTML = stages.map(stage => {
        const width = Math.max(20, (stage.value / maxValue) * 100);
        return `
            <div class="w-full">
                <div class="flex justify-between text-sm mb-1">
                    <span class="text-[#555555]">${stage.name}</span>
                    <span class="font-semibold text-[#2D0A31]">${stage.value}</span>
                </div>
                <div class="h-8 bg-[#F5E4F0] rounded-lg overflow-hidden">
                    <div class="h-full rounded-lg transition-all" style="width: ${width}%; background: ${stage.color};"></div>
                </div>
            </div>
        `;
    }).join('');
}

// Store advisors globally for click handlers
window._advisorData = {};

function renderAdvisorPerformance(advisors) {
    const container = document.getElementById('advisorPerformance');
    
    // Store advisor data globally
    advisors.forEach(a => {
        window._advisorData[a.id] = a;
    });
    
    container.innerHTML = advisors.map(advisor => `
        <div class="p-3 bg-[#FFF6FA] rounded-lg border border-[#F0D4E7] cursor-pointer hover:shadow-md transition" onclick="openAdvisorModal('${advisor.id}')">
            <div class="flex items-center justify-between mb-2">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-[#E6007E] text-white rounded-full flex items-center justify-center font-semibold">
                        ${advisor.name.charAt(0)}
                    </div>
                    <div>
                        <p class="font-semibold text-[#E6007E]">${advisor.name}</p>
                        <p class="text-xs text-[#555555]">${advisor.current_load}/${advisor.max_leads} capacity</p>
                    </div>
                </div>
                <div class="text-right">
                    <p class="font-semibold text-[#1B9C6E]">${advisor.conversion_rate || 0}%</p>
                </div>
            </div>
            <div class="flex gap-2 text-xs">
                <span class="px-2 py-1 bg-[#FCE4F0] text-[#E6007E] rounded" title="New leads">🆕 ${advisor.new || 0}</span>
                <span class="px-2 py-1 bg-[#E8F5E9] text-[#1B9C6E] rounded" title="Contacted">📞 ${advisor.contacted || 0}</span>
                <span class="px-2 py-1 bg-[#E3F2FD] text-[#0056C1] rounded" title="Qualified">✓ ${advisor.qualified || 0}</span>
                <span class="px-2 py-1 bg-[#2D0A31] text-white rounded" title="Enrolled">🎓 ${advisor.enrolled || 0}</span>
            </div>
        </div>
    `).join('');
}

// Open advisor modal - simple function called by onclick
function openAdvisorModal(advisorId) {
    console.log('Opening advisor modal for:', advisorId);
    
    // Get advisor from stored data or fetch
    const advisor = window._advisorData[advisorId];
    
    if (advisor) {
        console.log('Found advisor:', advisor.name);
        showAdvisorProfile(advisor, advisorId);
    } else {
        console.log('Advisor not in cache, fetching...');
        // Fetch and show
        apiCall('/advisors').then(advisors => {
            const found = advisors.find(a => a.id === advisorId);
            if (found) {
                showAdvisorProfile(found, advisorId);
            } else {
                alert('Advisor not found');
            }
        }).catch(err => {
            console.error('Error:', err);
            alert('Failed to load advisor');
        });
    }
}

async function showAdvisorProfile(advisor, advisorId) {
    try {
        // Fetch leads for this advisor
        const leadsData = await apiCall(`/leads?advisor_id=${advisorId}&limit=100`);
        const leads = leadsData.leads || [];
        
        // Calculate stats
        const stats = {
            total: leads.length,
            new: leads.filter(l => l.status === 'new').length,
            contacted: leads.filter(l => l.status === 'contacted').length,
            qualified: leads.filter(l => l.status === 'qualified').length,
            enrolled: leads.filter(l => l.status === 'enrolled').length,
            lost: leads.filter(l => l.status === 'lost').length
        };
        stats.pending = stats.new + stats.contacted + stats.qualified;
        stats.conversionRate = stats.total > 0 ? Math.round((stats.enrolled / stats.total) * 100) : 0;
        
        // Calculate targets (based on max_leads)
        const monthlyTarget = Math.round(advisor.max_leads * 0.3); // 30% of capacity as monthly enrollment target
        const targetProgress = monthlyTarget > 0 ? Math.round((stats.enrolled / monthlyTarget) * 100) : 0;
        
        // Update modal header
        const avatarEl = document.getElementById('advisorAvatar');
        const nameEl = document.getElementById('advisorDetailName');
        const emailEl = document.getElementById('advisorDetailEmail');
        const specEl = document.getElementById('advisorDetailSpec');
        
        if (avatarEl) avatarEl.textContent = advisor.name ? advisor.name.charAt(0).toUpperCase() : 'A';
        if (nameEl) nameEl.textContent = advisor.name || 'Unknown Advisor';
        if (emailEl) emailEl.textContent = advisor.email || 'No email';
        if (specEl) specEl.textContent = advisor.specialization ? '📚 ' + advisor.specialization.replace(/_/g, ' ').toUpperCase() : '📚 General';
        
        console.log('Header updated:', advisor.name, advisor.email);
        
        // Render content
        document.getElementById('advisorDetailContent').innerHTML = `
            <!-- Stats Overview -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div class="bg-[#FCE4F0] rounded-xl p-4 text-center">
                    <p class="text-2xl font-bold text-[#E6007E]">${stats.total}</p>
                    <p class="text-xs text-[#555555]">Total Assigned</p>
                </div>
                <div class="bg-[#E8F5E9] rounded-xl p-4 text-center">
                    <p class="text-2xl font-bold text-[#1B9C6E]">${stats.enrolled}</p>
                    <p class="text-xs text-[#555555]">Enrolled</p>
                </div>
                <div class="bg-[#E3F2FD] rounded-xl p-4 text-center">
                    <p class="text-2xl font-bold text-[#0056C1]">${stats.pending}</p>
                    <p class="text-xs text-[#555555]">In Progress</p>
                </div>
                <div class="bg-[#FFEBEE] rounded-xl p-4 text-center">
                    <p class="text-2xl font-bold text-[#D32F2F]">${stats.lost}</p>
                    <p class="text-xs text-[#555555]">Lost</p>
                </div>
            </div>
            
            <!-- Target Progress -->
            <div class="bg-[#FFF6FA] rounded-xl p-5 mb-6 border border-[#F0D4E7]">
                <div class="flex justify-between items-center mb-3">
                    <h4 class="font-semibold text-[#2D0A31]">🎯 Monthly Target</h4>
                    <span class="text-sm font-medium ${targetProgress >= 100 ? 'text-[#1B9C6E]' : targetProgress >= 50 ? 'text-[#FFB300]' : 'text-[#D32F2F]'}">${targetProgress}% achieved</span>
                </div>
                <div class="flex items-center gap-4">
                    <div class="flex-1">
                        <div class="h-4 bg-gray-200 rounded-full overflow-hidden">
                            <div class="h-full rounded-full transition-all ${targetProgress >= 100 ? 'bg-[#1B9C6E]' : targetProgress >= 50 ? 'bg-[#FFB300]' : 'bg-[#E6007E]'}" style="width: ${Math.min(targetProgress, 100)}%"></div>
                        </div>
                    </div>
                    <span class="text-sm font-semibold text-[#2D0A31]">${stats.enrolled} / ${monthlyTarget}</span>
                </div>
                <p class="text-xs text-[#555555] mt-2">Target: ${monthlyTarget} enrollments per month (based on ${advisor.max_leads} lead capacity)</p>
            </div>
            
            <!-- Capacity -->
            <div class="bg-white rounded-xl p-5 mb-6 border border-[#F0D4E7]">
                <div class="flex justify-between items-center mb-3">
                    <h4 class="font-semibold text-[#2D0A31]">📊 Current Workload</h4>
                    <span class="text-sm font-medium text-[#555555]">${advisor.current_load} / ${advisor.max_leads} leads</span>
                </div>
                <div class="h-4 bg-gray-200 rounded-full overflow-hidden">
                    <div class="h-full bg-[#0056C1] rounded-full transition-all" style="width: ${Math.round((advisor.current_load / advisor.max_leads) * 100)}%"></div>
                </div>
                <div class="flex justify-between text-xs text-[#555555] mt-2">
                    <span>Available: ${advisor.max_leads - advisor.current_load} slots</span>
                    <span>Specialization: ${advisor.specialization ? advisor.specialization.replace('_', ' ').toUpperCase() : 'General'}</span>
                </div>
            </div>
            
            <!-- Pipeline Breakdown -->
            <div class="bg-white rounded-xl p-5 mb-6 border border-[#F0D4E7]">
                <h4 class="font-semibold text-[#2D0A31] mb-4">📈 Pipeline Breakdown</h4>
                <div class="space-y-3">
                    <div class="flex items-center gap-3">
                        <span class="w-24 text-sm text-[#555555]">New</span>
                        <div class="flex-1 h-6 bg-gray-100 rounded-full overflow-hidden">
                            <div class="h-full bg-[#E6007E] rounded-full" style="width: ${stats.total > 0 ? (stats.new / stats.total) * 100 : 0}%"></div>
                        </div>
                        <span class="w-8 text-sm font-semibold text-[#2D0A31]">${stats.new}</span>
                    </div>
                    <div class="flex items-center gap-3">
                        <span class="w-24 text-sm text-[#555555]">Contacted</span>
                        <div class="flex-1 h-6 bg-gray-100 rounded-full overflow-hidden">
                            <div class="h-full bg-[#1B9C6E] rounded-full" style="width: ${stats.total > 0 ? (stats.contacted / stats.total) * 100 : 0}%"></div>
                        </div>
                        <span class="w-8 text-sm font-semibold text-[#2D0A31]">${stats.contacted}</span>
                    </div>
                    <div class="flex items-center gap-3">
                        <span class="w-24 text-sm text-[#555555]">Qualified</span>
                        <div class="flex-1 h-6 bg-gray-100 rounded-full overflow-hidden">
                            <div class="h-full bg-[#0056C1] rounded-full" style="width: ${stats.total > 0 ? (stats.qualified / stats.total) * 100 : 0}%"></div>
                        </div>
                        <span class="w-8 text-sm font-semibold text-[#2D0A31]">${stats.qualified}</span>
                    </div>
                    <div class="flex items-center gap-3">
                        <span class="w-24 text-sm text-[#555555]">Enrolled</span>
                        <div class="flex-1 h-6 bg-gray-100 rounded-full overflow-hidden">
                            <div class="h-full bg-[#2D0A31] rounded-full" style="width: ${stats.total > 0 ? (stats.enrolled / stats.total) * 100 : 0}%"></div>
                        </div>
                        <span class="w-8 text-sm font-semibold text-[#2D0A31]">${stats.enrolled}</span>
                    </div>
                    <div class="flex items-center gap-3">
                        <span class="w-24 text-sm text-[#555555]">Lost</span>
                        <div class="flex-1 h-6 bg-gray-100 rounded-full overflow-hidden">
                            <div class="h-full bg-[#D32F2F] rounded-full" style="width: ${stats.total > 0 ? (stats.lost / stats.total) * 100 : 0}%"></div>
                        </div>
                        <span class="w-8 text-sm font-semibold text-[#2D0A31]">${stats.lost}</span>
                    </div>
                </div>
            </div>
            
            <!-- Conversion Rate -->
            <div class="bg-gradient-to-r from-[#1B9C6E] to-[#158a5f] rounded-xl p-5 mb-6 text-white">
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-sm opacity-80">Conversion Rate</p>
                        <p class="text-4xl font-bold">${stats.conversionRate}%</p>
                    </div>
                    <div class="text-right">
                        <p class="text-sm opacity-80">Enrolled / Total</p>
                        <p class="text-2xl font-semibold">${stats.enrolled} / ${stats.total}</p>
                    </div>
                </div>
            </div>
            
            <!-- Actions -->
            <div class="flex gap-3">
                <button onclick="closeModal('advisorDetailModal'); goToAdvisorLeads('${advisorId}', '${advisor.name}')" class="flex-1 px-4 py-3 bg-[#E6007E] text-white rounded-lg hover:bg-[#B10373] font-medium transition">
                    👥 View All Leads
                </button>
                <button onclick="closeModal('advisorDetailModal')" class="px-4 py-3 border border-[#F0D4E7] text-[#555555] rounded-lg hover:bg-gray-50 font-medium transition">
                    Close
                </button>
            </div>
        `;
        
        console.log('Opening modal now...');
        document.getElementById('advisorDetailModal').classList.add('active');
        console.log('Modal should be visible');
        
    } catch (error) {
        console.error('Failed to load advisor details:', error);
        alert('Failed to load advisor: ' + error.message);
    }
}

// View advisor's leads (navigate to leads page)
function goToAdvisorLeads(advisorId, advisorName) {
    document.querySelectorAll('main > section').forEach(s => s.classList.add('hidden'));
    document.getElementById('leadsSection').classList.remove('hidden');
    
    document.querySelectorAll('.sidebar-link').forEach(link => link.classList.remove('active'));
    document.querySelector('[data-section="leads"]')?.classList.add('active');
    
    document.getElementById('pageTitle').textContent = 'Leads';
    document.getElementById('pageSubtitle').textContent = 'Assigned to: ' + advisorName;
    
    loadLeadsByAdvisor(advisorId);
}

async function loadLeadsByAdvisor(advisorId) {
    try {
        const data = await apiCall(`/leads?advisor_id=${advisorId}&limit=100`);
        renderLeadsTable(data.leads);
        renderKanbanBoard(data.leads);
    } catch (error) {
        console.error('Failed to load advisor leads:', error);
    }
}

function renderCohortFillRates(cohorts) {
    const container = document.getElementById('cohortFillRates');
    
    container.innerHTML = cohorts.map(cohort => {
        // Iron Lady Brand Colors for fill rates
        const fillColor = cohort.fill_rate >= 80 ? '#1B9C6E' : cohort.fill_rate >= 50 ? '#FFB300' : '#E6007E';
        return `
        <div class="p-3 bg-[#FFF6FA] rounded-lg border border-[#F0D4E7]">
            <div class="flex justify-between mb-2">
                <div>
                    <p class="font-medium text-sm text-[#2D0A31]">${cohort.name}</p>
                    <p class="text-xs text-[#555555]">${cohort.program_name}</p>
                </div>
                <span class="text-sm font-semibold text-[#2D0A31]">${cohort.fill_rate}%</span>
            </div>
            <div class="h-2 bg-[#F5E4F0] rounded-full overflow-hidden">
                <div class="h-full rounded-full" style="width: ${cohort.fill_rate}%; background: ${fillColor};"></div>
            </div>
            <p class="text-xs text-[#555555] mt-1">${cohort.filled_seats}/${cohort.total_seats} seats</p>
        </div>
    `}).join('');
}

function renderRecentLeads(leads) {
    const tbody = document.getElementById('recentLeadsTable');
    
    tbody.innerHTML = leads.map(lead => `
        <tr class="hover:bg-[#FFF6FA]">
            <td class="px-3 py-3 text-[#2D0A31] cursor-pointer font-medium" onclick="viewLeadDetail('${lead.id}')">${lead.name}</td>
            <td class="px-3 py-3 text-[#555555]">${lead.program_name || '-'}</td>
            <td class="px-3 py-3 text-[#555555]">${lead.advisor_name || 'Unassigned'}</td>
            <td class="px-3 py-3">${getStatusBadge(lead.status)}</td>
            <td class="px-3 py-3">${getPriorityBadge(lead.priority)}</td>
            <td class="px-3 py-3">
                <div class="flex gap-2">
                    ${lead.phone ? `
                        <button onclick="event.stopPropagation(); quickCall('${lead.phone}')" 
                            class="px-2 py-1 bg-[#E8F5E9] text-[#1B9C6E] hover:bg-[#1B9C6E] hover:text-white rounded text-xs font-medium transition" 
                            title="Call ${lead.phone}">
                            📞 Call
                        </button>
                        <button onclick="event.stopPropagation(); quickWhatsApp('${lead.phone}', '${lead.name}')" 
                            class="px-2 py-1 bg-[#E8F5E9] text-[#25D366] hover:bg-[#25D366] hover:text-white rounded text-xs font-medium transition" 
                            title="WhatsApp">
                            💬 WA
                        </button>
                    ` : ''}
                    <button onclick="event.stopPropagation(); quickEmail('${lead.email}', '${lead.name}')" 
                        class="px-2 py-1 bg-[#E3F2FD] text-[#0056C1] hover:bg-[#0056C1] hover:text-white rounded text-xs font-medium transition" 
                        title="Email ${lead.email}">
                        📧 Email
                    </button>
                    <button onclick="event.stopPropagation(); sendReminder('${lead.id}', '${lead.email}', '${lead.name}', '${lead.recommended_program || ''}')" 
                        class="px-2 py-1 bg-[#FFF8E1] text-[#FF8F00] hover:bg-[#FF8F00] hover:text-white rounded text-xs font-medium transition" 
                        title="Send Follow-up Reminder">
                        🔔 Remind
                    </button>
                    <button onclick="event.stopPropagation(); scheduleCall('${lead.name}', '${lead.email}', '${lead.phone || ''}', '${lead.recommended_program || ''}')" 
                        class="px-2 py-1 bg-[#F3E5F5] text-[#7B1FA2] hover:bg-[#7B1FA2] hover:text-white rounded text-xs font-medium transition" 
                        title="Schedule Call">
                        📅 Schedule
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

// Quick Actions - Professional Modal-Based Approach
function quickCall(phone) {
    const cleanPhone = phone.replace(/\s/g, '');
    window._callData = { phone: phone, cleanPhone: cleanPhone };
    
    const existing = document.getElementById('contactActionModal');
    if (existing) existing.remove();
    
    const modal = document.createElement('div');
    modal.id = 'contactActionModal';
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100]';
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
    
    modal.innerHTML = `
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 overflow-hidden" onclick="event.stopPropagation()">
            <div class="p-5 text-center" style="background: #E8F5E9">
                <div class="text-4xl mb-2">📞</div>
                <h3 class="text-xl font-bold" style="color: #1B9C6E">Call Lead</h3>
            </div>
            <div class="p-4 bg-gray-50 border-y border-gray-100">
                <div class="bg-white rounded-lg p-4 border border-gray-200 text-center">
                    <p class="text-2xl font-bold text-gray-800">${phone}</p>
                </div>
            </div>
            <div class="p-4 space-y-3">
                <button onclick="window.open('tel:${cleanPhone}', '_self'); document.getElementById('contactActionModal').remove();" 
                    class="w-full py-3 rounded-lg font-semibold text-white transition hover:opacity-90" style="background: #1B9C6E">
                    📱 Open Phone App
                </button>
                <button onclick="copyToClipboard('${cleanPhone}', 'Phone number copied!');" 
                    class="w-full py-2 rounded-lg font-medium text-sm border border-gray-200 hover:bg-gray-50 text-gray-700">
                    📋 Copy Number
                </button>
            </div>
            <div class="px-4 pb-4">
                <button onclick="document.getElementById('contactActionModal').remove()" 
                    class="w-full py-2 text-gray-500 hover:text-gray-700 text-sm font-medium">Cancel</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

function quickWhatsApp(phone, name) {
    const cleanPhone = phone.replace(/[^0-9]/g, '');
    const message = `Hi ${name}, this is from Iron Lady. Following up on your interest in our leadership programs.`;
    const waLink = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
    
    window._waData = { phone: phone, cleanPhone: cleanPhone, message: message, waLink: waLink };
    
    const existing = document.getElementById('contactActionModal');
    if (existing) existing.remove();
    
    const modal = document.createElement('div');
    modal.id = 'contactActionModal';
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100]';
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
    
    modal.innerHTML = `
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 overflow-hidden" onclick="event.stopPropagation()">
            <div class="p-5 text-center" style="background: #E8F5E9">
                <div class="text-4xl mb-2">💬</div>
                <h3 class="text-xl font-bold" style="color: #25D366">WhatsApp Message</h3>
                <p class="text-sm text-gray-600 mt-1">To: ${phone}</p>
            </div>
            <div class="p-4 bg-gray-50 border-y border-gray-100">
                <div class="bg-white rounded-lg p-3 border border-gray-200 max-h-32 overflow-y-auto">
                    <p class="text-sm text-gray-700">${message}</p>
                </div>
            </div>
            <div class="p-4 space-y-3">
                <button onclick="window.open(window._waData.waLink, '_blank'); document.getElementById('contactActionModal').remove();" 
                    class="w-full py-3 rounded-lg font-semibold text-white transition hover:opacity-90" style="background: #25D366">
                    💬 Open WhatsApp
                </button>
                <div class="grid grid-cols-2 gap-2">
                    <button onclick="copyToClipboard(window._waData.message, 'Message copied!');" 
                        class="py-2 px-3 rounded-lg font-medium text-sm border border-gray-200 hover:bg-gray-50 text-gray-700">
                        📋 Copy Message
                    </button>
                    <button onclick="copyToClipboard(window._waData.cleanPhone, 'Number copied!');" 
                        class="py-2 px-3 rounded-lg font-medium text-sm border border-gray-200 hover:bg-gray-50 text-gray-700">
                        📋 Copy Number
                    </button>
                </div>
            </div>
            <div class="px-4 pb-4">
                <button onclick="document.getElementById('contactActionModal').remove()" 
                    class="w-full py-2 text-gray-500 hover:text-gray-700 text-sm font-medium">Cancel</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

function quickEmail(email, name) {
    const subject = 'Iron Lady - Following up on your inquiry';
    const body = `Hi ${name},

Thank you for your interest in Iron Lady's leadership programs.

I'd love to schedule a call to discuss which program would be the best fit for your goals.

When would be a convenient time for you?

Best regards,
Iron Lady Team`;
    
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const gmailLink = `https://mail.google.com/mail/?view=cm&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const outlookLink = `https://outlook.live.com/mail/0/deeplink/compose?to=${email}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Store links globally for modal access
    window._emailLinks = { gmail: gmailLink, outlook: outlookLink, mailto: mailtoLink, email: email, body: body };
    
    showEmailModal(email, body);
}

function showEmailModal(email, body) {
    const existing = document.getElementById('contactActionModal');
    if (existing) existing.remove();
    
    const modal = document.createElement('div');
    modal.id = 'contactActionModal';
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100]';
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
    
    modal.innerHTML = `
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 overflow-hidden" onclick="event.stopPropagation()">
            <!-- Header -->
            <div class="p-5 text-center" style="background: #E3F2FD">
                <div class="text-4xl mb-2">📧</div>
                <h3 class="text-xl font-bold" style="color: #0056C1">Send Email</h3>
                <p class="text-sm text-gray-600 mt-1">To: ${email}</p>
            </div>
            
            <!-- Value Display -->
            <div class="p-4 bg-gray-50 border-y border-gray-100">
                <div class="bg-white rounded-lg p-3 border border-gray-200 max-h-32 overflow-y-auto">
                    <p class="text-sm text-gray-700 whitespace-pre-line font-mono">${body}</p>
                </div>
            </div>
            
            <!-- Actions -->
            <div class="p-4 space-y-3">
                <!-- Primary Action -->
                <button onclick="window.open(window._emailLinks.gmail, '_blank'); document.getElementById('contactActionModal').remove();" 
                    class="w-full py-3 rounded-lg font-semibold text-white transition hover:opacity-90"
                    style="background: #0056C1">
                    📧 Open Gmail
                </button>
                
                <!-- Secondary Actions -->
                <div class="grid grid-cols-2 gap-2">
                    <button onclick="window.open(window._emailLinks.outlook, '_blank');" 
                        class="py-2 px-3 rounded-lg font-medium text-sm transition border border-gray-200 hover:bg-gray-50 text-gray-700">
                        📮 Open Outlook
                    </button>
                    <button onclick="window.location.href = window._emailLinks.mailto;" 
                        class="py-2 px-3 rounded-lg font-medium text-sm transition border border-gray-200 hover:bg-gray-50 text-gray-700">
                        💻 Default Mail App
                    </button>
                    <button onclick="copyToClipboard(window._emailLinks.email, 'Email copied!');" 
                        class="py-2 px-3 rounded-lg font-medium text-sm transition border border-gray-200 hover:bg-gray-50 text-gray-700">
                        📋 Copy Email
                    </button>
                    <button onclick="copyToClipboard(window._emailLinks.body, 'Message copied!');" 
                        class="py-2 px-3 rounded-lg font-medium text-sm transition border border-gray-200 hover:bg-gray-50 text-gray-700">
                        📋 Copy Message
                    </button>
                </div>
            </div>
            
            <!-- Close -->
            <div class="px-4 pb-4">
                <button onclick="document.getElementById('contactActionModal').remove()" 
                    class="w-full py-2 text-gray-500 hover:text-gray-700 text-sm font-medium">
                    Cancel
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}



// Copy to clipboard helper
function copyToClipboard(text, successMessage) {
    navigator.clipboard.writeText(text).then(() => {
        showToast(successMessage || 'Copied!');
    }).catch(() => {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast(successMessage || 'Copied!');
    });
}

// Toast notification
function showToast(message) {
    const existing = document.getElementById('toast-notification');
    if (existing) existing.remove();
    
    const toast = document.createElement('div');
    toast.id = 'toast-notification';
    toast.className = 'fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-[#2D0A31] text-white px-6 py-3 rounded-lg shadow-lg z-[200] flex items-center gap-2';
    toast.innerHTML = `<span class="text-[#1B9C6E]">✓</span> ${message}`;
    document.body.appendChild(toast);
    
    setTimeout(() => toast.remove(), 2500);
}

// ============================================
// EMAIL REMINDER (Simulated for Demo)
// ============================================
function sendReminder(leadId, email, name, program) {
    const programNames = {
        'leadership_essentials': 'Leadership Essentials',
        'hundred_board_members': '100 Board Members',
        'csuite_mastery': 'C-Suite Mastery',
        'masterclass': 'Masterclass'
    };
    const programName = programNames[program] || 'our leadership programs';
    
    const emailContent = {
        to: email,
        subject: `Reminder: Your Iron Lady ${programName} Journey Awaits!`,
        body: `Hi ${name},

I hope this message finds you well!

I wanted to follow up on your interest in Iron Lady's ${programName} program. Our next cohort is filling up fast, and I'd love to help you secure your spot.

Here's what you'll gain:
✅ Expert-led leadership training
✅ Exclusive networking with ambitious women
✅ Career growth strategies that work
✅ Lifetime community access

Would you like to schedule a quick 15-minute call to discuss your goals and how this program can help you achieve them?

Simply reply to this email or call us at +91 83098 82198.

Looking forward to hearing from you!

Warm regards,
Iron Lady Team
hello@ironlady.co`
    };
    
    // Show preview modal
    showReminderModal(emailContent, leadId, name);
}

function showReminderModal(emailContent, leadId, leadName) {
    const existing = document.getElementById('reminderModal');
    if (existing) existing.remove();
    
    const modal = document.createElement('div');
    modal.id = 'reminderModal';
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100]';
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
    
    modal.innerHTML = `
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg mx-4 overflow-hidden" onclick="event.stopPropagation()">
            <!-- Header -->
            <div class="p-5 bg-gradient-to-r from-[#FF8F00] to-[#FFB300] text-white">
                <div class="flex items-center gap-3">
                    <span class="text-3xl">🔔</span>
                    <div>
                        <h3 class="text-xl font-bold">Send Follow-up Reminder</h3>
                        <p class="text-sm opacity-90">Email preview for ${leadName}</p>
                    </div>
                </div>
            </div>
            
            <!-- Email Preview -->
            <div class="p-4 space-y-3 max-h-[400px] overflow-y-auto">
                <div class="bg-gray-50 rounded-lg p-3">
                    <p class="text-xs text-gray-500 mb-1">To:</p>
                    <p class="text-sm font-medium">${emailContent.to}</p>
                </div>
                <div class="bg-gray-50 rounded-lg p-3">
                    <p class="text-xs text-gray-500 mb-1">Subject:</p>
                    <p class="text-sm font-medium">${emailContent.subject}</p>
                </div>
                <div class="bg-gray-50 rounded-lg p-3">
                    <p class="text-xs text-gray-500 mb-1">Message:</p>
                    <p class="text-sm whitespace-pre-line text-gray-700">${emailContent.body}</p>
                </div>
            </div>
            
            <!-- Actions -->
            <div class="p-4 bg-gray-50 border-t flex gap-3">
                <button onclick="document.getElementById('reminderModal').remove()" 
                    class="flex-1 py-2 px-4 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-100 transition">
                    Cancel
                </button>
                <button onclick="simulateSendReminder('${leadId}', '${leadName}')" 
                    class="flex-1 py-2 px-4 bg-[#FF8F00] text-white rounded-lg font-medium hover:bg-[#E65100] transition flex items-center justify-center gap-2">
                    <span>📤</span> Send Reminder
                </button>
            </div>
            
            <!-- Demo Notice -->
            <div class="px-4 pb-4 bg-gray-50">
                <p class="text-xs text-center text-gray-400">
                    ℹ️ Demo mode: Email will be simulated (logged to console)
                </p>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

function simulateSendReminder(leadId, leadName) {
    // Close modal
    document.getElementById('reminderModal')?.remove();
    
    // Show sending state
    showToast('📤 Sending reminder...');
    
    // Simulate API call delay
    setTimeout(() => {
        // Log to console (simulated email send)
        console.log('📧 EMAIL REMINDER SENT (Simulated)');
        console.log('Lead ID:', leadId);
        console.log('Lead Name:', leadName);
        console.log('Timestamp:', new Date().toISOString());
        
        // Show success
        showToast(`✅ Reminder sent to ${leadName}!`);
        
        // In production, this would call:
        // await apiCall(`/leads/${leadId}/send-reminder`, 'POST');
    }, 1500);
}

// ============================================
// CALENDAR SCHEDULING (Real Google Calendar)
// ============================================
function scheduleCall(name, email, phone, program) {
    const programNames = {
        'leadership_essentials': 'Leadership Essentials',
        'hundred_board_members': '100 Board Members',
        'csuite_mastery': 'C-Suite Mastery',
        'masterclass': 'Masterclass'
    };
    const programName = programNames[program] || 'Leadership Program';
    
    // Default to tomorrow at 10 AM
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(10, 0, 0, 0);
    
    const endTime = new Date(tomorrow);
    endTime.setMinutes(endTime.getMinutes() + 30);
    
    showScheduleModal(name, email, phone, programName, tomorrow, endTime);
}

function showScheduleModal(name, email, phone, programName, startTime, endTime) {
    const existing = document.getElementById('scheduleModal');
    if (existing) existing.remove();
    
    const formatDateForInput = (date) => {
        return date.toISOString().slice(0, 16);
    };
    
    const modal = document.createElement('div');
    modal.id = 'scheduleModal';
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100]';
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
    
    modal.innerHTML = `
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 overflow-hidden" onclick="event.stopPropagation()">
            <!-- Header -->
            <div class="p-5 bg-gradient-to-r from-[#7B1FA2] to-[#9C27B0] text-white">
                <div class="flex items-center gap-3">
                    <span class="text-3xl">📅</span>
                    <div>
                        <h3 class="text-xl font-bold">Schedule Call</h3>
                        <p class="text-sm opacity-90">With ${name}</p>
                    </div>
                </div>
            </div>
            
            <!-- Form -->
            <div class="p-4 space-y-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Meeting Title</label>
                    <input type="text" id="scheduleTitle" 
                        value="Iron Lady - ${programName} Discussion with ${name}"
                        class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500">
                </div>
                
                <div class="grid grid-cols-2 gap-3">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Start Time</label>
                        <input type="datetime-local" id="scheduleStart" 
                            value="${formatDateForInput(startTime)}"
                            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-sm">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                        <select id="scheduleDuration" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500">
                            <option value="15">15 minutes</option>
                            <option value="30" selected>30 minutes</option>
                            <option value="45">45 minutes</option>
                            <option value="60">1 hour</option>
                        </select>
                    </div>
                </div>
                
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <textarea id="scheduleDesc" rows="3" 
                        class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-sm"
                    >Discovery call with ${name} about ${programName}.

Contact: ${email}${phone ? `\nPhone: ${phone}` : ''}

Agenda:
- Understand career goals
- Discuss program fit
- Answer questions
- Next steps</textarea>
                </div>
            </div>
            
            <!-- Actions -->
            <div class="p-4 bg-gray-50 border-t space-y-3">
                <button onclick="openGoogleCalendar()" 
                    class="w-full py-3 bg-[#4285F4] text-white rounded-lg font-medium hover:bg-[#3367D6] transition flex items-center justify-center gap-2">
                    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.5 3h-15A1.5 1.5 0 003 4.5v15A1.5 1.5 0 004.5 21h15a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0019.5 3zm-9 15h-3v-6h3v6zm0-8h-3V7h3v3zm4.5 8h-3V10h3v8zm0-10h-3V7h3v1zm4.5 10h-3v-4h3v4zm0-6h-3V7h3v5z"/>
                    </svg>
                    Open in Google Calendar
                </button>
                
                <div class="grid grid-cols-2 gap-2">
                    <button onclick="openOutlookCalendar()" 
                        class="py-2 px-3 bg-[#0078D4] text-white rounded-lg font-medium hover:bg-[#005A9E] transition text-sm flex items-center justify-center gap-1">
                        📮 Outlook
                    </button>
                    <button onclick="copyCalendarDetails()" 
                        class="py-2 px-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-100 transition text-sm flex items-center justify-center gap-1">
                        📋 Copy Details
                    </button>
                </div>
                
                <button onclick="document.getElementById('scheduleModal').remove()" 
                    class="w-full py-2 text-gray-500 hover:text-gray-700 text-sm font-medium">
                    Cancel
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

function openGoogleCalendar() {
    const title = document.getElementById('scheduleTitle').value;
    const startInput = document.getElementById('scheduleStart').value;
    const duration = parseInt(document.getElementById('scheduleDuration').value);
    const desc = document.getElementById('scheduleDesc').value;
    
    const startDate = new Date(startInput);
    const endDate = new Date(startDate);
    endDate.setMinutes(endDate.getMinutes() + duration);
    
    // Format for Google Calendar (YYYYMMDDTHHmmss)
    const formatGoogleDate = (date) => {
        return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    };
    
    const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${formatGoogleDate(startDate)}/${formatGoogleDate(endDate)}&details=${encodeURIComponent(desc)}&sf=true`;
    
    window.open(googleUrl, '_blank');
    document.getElementById('scheduleModal')?.remove();
    showToast('📅 Opening Google Calendar...');
}

function openOutlookCalendar() {
    const title = document.getElementById('scheduleTitle').value;
    const startInput = document.getElementById('scheduleStart').value;
    const duration = parseInt(document.getElementById('scheduleDuration').value);
    const desc = document.getElementById('scheduleDesc').value;
    
    const startDate = new Date(startInput);
    const endDate = new Date(startDate);
    endDate.setMinutes(endDate.getMinutes() + duration);
    
    const outlookUrl = `https://outlook.live.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(title)}&startdt=${startDate.toISOString()}&enddt=${endDate.toISOString()}&body=${encodeURIComponent(desc)}`;
    
    window.open(outlookUrl, '_blank');
    document.getElementById('scheduleModal')?.remove();
    showToast('📅 Opening Outlook Calendar...');
}

function copyCalendarDetails() {
    const title = document.getElementById('scheduleTitle').value;
    const startInput = document.getElementById('scheduleStart').value;
    const duration = document.getElementById('scheduleDuration').value;
    const desc = document.getElementById('scheduleDesc').value;
    
    const startDate = new Date(startInput);
    const details = `📅 MEETING DETAILS
─────────────────
Title: ${title}
Date: ${startDate.toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
Time: ${startDate.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}
Duration: ${duration} minutes

${desc}`;
    
    copyToClipboard(details, 'Meeting details copied!');
}

// ============================================
// REVENUE FORECAST
// ============================================

function renderRevenueForecast(forecast) {
    if (!forecast) {
        document.getElementById('totalRevenueForecast').textContent = '₹0';
        document.getElementById('revenueByProgram').innerHTML = '<p class="text-white/60 text-sm">No qualified leads yet</p>';
        return;
    }
    
    document.getElementById('totalRevenueForecast').textContent = `₹${forecast.total.toLocaleString('en-IN')}`;
    
    const container = document.getElementById('revenueByProgram');
    container.innerHTML = forecast.byProgram.map(p => `
        <div class="flex items-center justify-between text-sm">
            <div class="flex items-center gap-2">
                <div class="w-2 h-2 rounded-full" style="background: ${p.color}"></div>
                <span class="text-white/80">${p.name}</span>
            </div>
            <div class="text-right">
                <span class="font-semibold">₹${p.amount.toLocaleString('en-IN')}</span>
                <span class="text-white/60 text-xs ml-1">(${p.count} leads)</span>
            </div>
        </div>
    `).join('');
}

// ============================================
// SLA ALERTS
// ============================================

function renderSLAAlerts(alerts) {
    const container = document.getElementById('slaAlerts');
    
    if (!alerts || (alerts.breached.length === 0 && alerts.warning.length === 0)) {
        container.innerHTML = `
            <div class="flex items-center gap-3 p-4 bg-[#E8F5E9] rounded-lg">
                <span class="text-2xl">✅</span>
                <div>
                    <p class="font-semibold text-[#1B9C6E]">All Clear!</p>
                    <p class="text-sm text-[#555555]">No SLA breaches or warnings</p>
                </div>
            </div>
        `;
        return;
    }
    
    let html = '';
    
    // Breached SLAs (Red - Critical)
    if (alerts.breached.length > 0) {
        html += `
            <div class="p-3 bg-[#FFEBEE] rounded-lg border border-[#D32F2F]">
                <div class="flex items-center gap-2 mb-2">
                    <span class="text-lg">🔴</span>
                    <span class="font-semibold text-[#D32F2F]">${alerts.breached.length} SLA Breached</span>
                </div>
                <div class="space-y-1">
                    ${alerts.breached.slice(0, 3).map(lead => `
                        <div class="flex items-center justify-between text-sm">
                            <span class="text-[#2D0A31]">${lead.name}</span>
                            <button onclick="viewLeadDetail('${lead.id}')" class="text-[#D32F2F] hover:underline text-xs font-medium">Contact Now →</button>
                        </div>
                    `).join('')}
                    ${alerts.breached.length > 3 ? `<p class="text-xs text-[#D32F2F]">+${alerts.breached.length - 3} more</p>` : ''}
                </div>
            </div>
        `;
    }
    
    // Warning SLAs (Amber - Approaching)
    if (alerts.warning.length > 0) {
        html += `
            <div class="p-3 bg-[#FFF8E1] rounded-lg border border-[#FFB300]">
                <div class="flex items-center gap-2 mb-2">
                    <span class="text-lg">⚠️</span>
                    <span class="font-semibold text-[#FF8F00]">${alerts.warning.length} Approaching SLA</span>
                </div>
                <div class="space-y-1">
                    ${alerts.warning.slice(0, 3).map(lead => `
                        <div class="flex items-center justify-between text-sm">
                            <span class="text-[#2D0A31]">${lead.name}</span>
                            <span class="text-xs text-[#FF8F00]">${lead.hours_left}h left</span>
                        </div>
                    `).join('')}
                    ${alerts.warning.length > 3 ? `<p class="text-xs text-[#FF8F00]">+${alerts.warning.length - 3} more</p>` : ''}
                </div>
            </div>
        `;
    }
    
    container.innerHTML = html;
}

// ============================================
// LEADS
// ============================================

// Current view state
let currentLeadsView = 'table';
let allLeadsData = [];

async function loadLeads() {
    try {
        const search = document.getElementById('searchLeads')?.value || '';
        const status = document.getElementById('filterStatus')?.value || '';
        const priority = document.getElementById('filterPriority')?.value || '';
        
        let url = '/leads?limit=100';
        if (search) url += `&search=${encodeURIComponent(search)}`;
        if (status) url += `&status=${status}`;
        if (priority) url += `&priority=${priority}`;
        
        console.log('Loading leads with URL:', url);
        const data = await apiCall(url);
        console.log('Received leads:', data);
        
        if (!data || !data.leads) {
            console.error('No leads data received');
            return;
        }
        
        allLeadsData = data.leads;
        console.log('Rendering', data.leads.length, 'leads');
        
        // Render both views
        renderLeadsTable(data.leads);
        renderKanbanBoard(data.leads);
        
    } catch (error) {
        console.error('Failed to load leads:', error);
    }
}

// View Toggle
function setLeadsView(view) {
    currentLeadsView = view;
    
    const tableView = document.getElementById('tableView');
    const kanbanView = document.getElementById('kanbanView');
    const tableBtn = document.getElementById('tableViewBtn');
    const kanbanBtn = document.getElementById('kanbanViewBtn');
    
    if (view === 'table') {
        tableView.classList.remove('hidden');
        kanbanView.classList.add('hidden');
        tableBtn.classList.add('bg-white', 'text-[#2D0A31]', 'shadow-sm');
        tableBtn.classList.remove('text-[#555555]');
        kanbanBtn.classList.remove('bg-white', 'text-[#2D0A31]', 'shadow-sm');
        kanbanBtn.classList.add('text-[#555555]');
    } else {
        tableView.classList.add('hidden');
        kanbanView.classList.remove('hidden');
        kanbanBtn.classList.add('bg-white', 'text-[#2D0A31]', 'shadow-sm');
        kanbanBtn.classList.remove('text-[#555555]');
        tableBtn.classList.remove('bg-white', 'text-[#2D0A31]', 'shadow-sm');
        tableBtn.classList.add('text-[#555555]');
    }
}

// Kanban Board Rendering
function renderKanbanBoard(leads) {
    const statuses = ['new', 'contacted', 'qualified', 'enrolled', 'lost'];
    
    statuses.forEach(status => {
        const statusLeads = leads.filter(l => l.status === status);
        const container = document.getElementById(`kanban${status.charAt(0).toUpperCase() + status.slice(1)}`);
        const countEl = document.getElementById(`kanban${status.charAt(0).toUpperCase() + status.slice(1)}Count`);
        
        if (countEl) countEl.textContent = statusLeads.length;
        
        if (container) {
            container.innerHTML = statusLeads.slice(0, 10).map(lead => `
                <div class="bg-white rounded-lg p-3 shadow-sm border border-gray-100 hover:shadow-md transition cursor-pointer" onclick="viewLeadDetail('${lead.id}')">
                    <div class="flex items-start justify-between mb-2">
                        <p class="font-semibold text-[#2D0A31] text-sm">${lead.name}</p>
                        ${lead.priority === 'urgent' ? '<span class="text-xs bg-[#FFEBEE] text-[#D32F2F] px-1.5 py-0.5 rounded">🔴</span>' : ''}
                        ${lead.priority === 'high' ? '<span class="text-xs bg-[#FFF8E1] text-[#FF8F00] px-1.5 py-0.5 rounded">🟠</span>' : ''}
                    </div>
                    <p class="text-xs text-[#555555] mb-2 truncate">${lead.program_name || 'No program'}</p>
                    <div class="flex items-center justify-between">
                        <span class="text-xs text-[#555555]">${lead.advisor_name || 'Unassigned'}</span>
                        <div class="flex gap-1">
                            ${lead.phone ? `<button onclick="event.stopPropagation(); quickCall('${lead.phone}')" class="p-1 hover:bg-[#E8F5E9] rounded text-xs" title="Call">📞</button>` : ''}
                            ${lead.phone ? `<button onclick="event.stopPropagation(); quickWhatsApp('${lead.phone}', '${lead.name}')" class="p-1 hover:bg-[#E8F5E9] rounded text-xs" title="WhatsApp">💬</button>` : ''}
                            <button onclick="event.stopPropagation(); scheduleCall('${lead.name}', '${lead.email}', '${lead.phone || ''}', '${lead.recommended_program || ''}')" class="p-1 hover:bg-[#F3E5F5] rounded text-xs" title="Schedule">📅</button>
                        </div>
                    </div>
                </div>
            `).join('');
            
            if (statusLeads.length > 10) {
                container.innerHTML += `<p class="text-xs text-center text-[#555555] py-2">+${statusLeads.length - 10} more</p>`;
            }
            
            if (statusLeads.length === 0) {
                container.innerHTML = `<p class="text-xs text-center text-[#555555] py-4 opacity-50">No leads</p>`;
            }
        }
    });
}

function renderLeadsTable(leads) {
    const tbody = document.getElementById('leadsTable');
    
    tbody.innerHTML = leads.map((lead, index) => `
        <tr class="hover:bg-[#FFF6FA] transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'}">
            <td class="px-4 py-3">
                <div class="font-semibold text-[#2D0A31] truncate">${lead.name}</div>
                <div class="text-xs text-[#555555] capitalize">${lead.career_stage || '-'}</div>
            </td>
            <td class="px-3 py-3">
                <div class="text-xs text-[#2D0A31] truncate">${lead.email}</div>
                <div class="text-xs text-[#555555]">${lead.phone || '-'}</div>
            </td>
            <td class="px-3 py-3">
                <span class="text-xs px-2 py-1 bg-[#F5E4F0] text-[#2D0A31] rounded-full font-medium">${lead.source}</span>
            </td>
            <td class="px-3 py-3">
                <div class="text-xs font-medium text-[#2D0A31] truncate">${lead.program_name || '-'}</div>
            </td>
            <td class="px-3 py-3">
                <div class="text-xs text-[#555555] truncate">${lead.advisor_name || 'Unassigned'}</div>
            </td>
            <td class="px-3 py-3 text-center">${getStatusBadge(lead.status)}</td>
            <td class="px-3 py-3 text-center">${getPriorityBadge(lead.priority)}</td>
            <td class="px-3 py-3">
                <div class="flex gap-1 justify-center">
                    <button onclick="viewLeadDetail('${lead.id}')" class="p-1.5 text-[#0056C1] hover:bg-[#E3F2FD] rounded-lg transition" title="View">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                    </button>
                    <button onclick="updateLeadStatus('${lead.id}', 'contacted')" class="p-1.5 text-[#1B9C6E] hover:bg-[#E8F5E9] rounded-lg transition" title="Mark Contacted">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                    </button>
                    <button onclick="deleteLead('${lead.id}')" class="p-1.5 text-[#D32F2F] hover:bg-[#FFEBEE] rounded-lg transition" title="Delete">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

async function viewLeadDetail(leadId) {
    try {
        const lead = await apiCall(`/leads/${leadId}`);
        
        document.getElementById('leadDetailTitle').textContent = lead.name;
        
        const interactionsHTML = lead.interactions?.length > 0 
            ? lead.interactions.map(i => `
                <div class="flex gap-3 p-3 bg-gray-50 rounded-lg">
                    <div class="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-sm">
                        ${i.type === 'call' ? '📞' : i.type === 'email' ? '📧' : i.type === 'whatsapp' ? '💬' : '📝'}
                    </div>
                    <div class="flex-1">
                        <p class="font-medium capitalize">${i.type}</p>
                        <p class="text-sm text-gray-600">${i.description}</p>
                        ${i.outcome ? `<p class="text-xs text-gray-500">Outcome: ${i.outcome}</p>` : ''}
                        <p class="text-xs text-gray-400">${formatDate(i.created_at)}</p>
                    </div>
                </div>
            `).join('')
            : '<p class="text-gray-500 text-sm">No interactions yet</p>';
        
        document.getElementById('leadDetailContent').innerHTML = `
            <div class="grid grid-cols-2 gap-6 mb-6">
                <div>
                    <h4 class="font-semibold mb-3">Contact Info</h4>
                    <div class="space-y-2 text-sm">
                        <p><span class="text-gray-500">Email:</span> ${lead.email}</p>
                        <p><span class="text-gray-500">Phone:</span> ${lead.phone || '-'}</p>
                        <p><span class="text-gray-500">Source:</span> ${lead.source}</p>
                    </div>
                </div>
                <div>
                    <h4 class="font-semibold mb-3">Profile</h4>
                    <div class="space-y-2 text-sm">
                        <p><span class="text-gray-500">Career Stage:</span> ${lead.career_stage || '-'}</p>
                        <p><span class="text-gray-500">Goal:</span> ${lead.goal || '-'}</p>
                        <p><span class="text-gray-500">Challenges:</span> ${lead.challenges || '-'}</p>
                    </div>
                </div>
            </div>
            
            <div class="grid grid-cols-2 gap-6 mb-6">
                <div>
                    <h4 class="font-semibold mb-3">Assignment</h4>
                    <div class="space-y-2 text-sm">
                        <p><span class="text-gray-500">Advisor:</span> ${lead.advisor_name || 'Unassigned'}</p>
                        <p><span class="text-gray-500">Program:</span> ${lead.program_name || '-'}</p>
                        <p><span class="text-gray-500">Status:</span> ${getStatusBadge(lead.status)}</p>
                        <p><span class="text-gray-500">Priority:</span> ${getPriorityBadge(lead.priority)}</p>
                    </div>
                </div>
                <div>
                    <h4 class="font-semibold mb-3">Dates</h4>
                    <div class="space-y-2 text-sm">
                        <p><span class="text-gray-500">Created:</span> ${formatDate(lead.created_at)}</p>
                        <p><span class="text-gray-500">First Contact:</span> ${formatDate(lead.first_contact_at)}</p>
                        <p><span class="text-gray-500">Last Contact:</span> ${formatDate(lead.last_contact_at)}</p>
                        <p><span class="text-gray-500">SLA Deadline:</span> ${formatDate(lead.sla_deadline)}</p>
                    </div>
                </div>
            </div>
            
            ${lead.notes ? `<div class="mb-6"><h4 class="font-semibold mb-2">Notes</h4><p class="text-sm bg-yellow-50 p-3 rounded-lg">${lead.notes}</p></div>` : ''}
            
            <div class="mb-6">
                <h4 class="font-semibold mb-3">Timeline</h4>
                <div class="space-y-3">${interactionsHTML}</div>
            </div>
            
            <div class="flex gap-3 border-t pt-4">
                <button onclick="addInteraction('${lead.id}', 'call')" class="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">📞 Log Call</button>
                <button onclick="addInteraction('${lead.id}', 'email')" class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">📧 Log Email</button>
                <button onclick="addInteraction('${lead.id}', 'whatsapp')" class="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600">💬 WhatsApp</button>
                <button onclick="updateLeadStatus('${lead.id}', 'qualified')" class="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600">✓ Qualify</button>
                <button onclick="enrollLead('${lead.id}')" class="px-4 py-2 bg-iron-pink text-white rounded-lg hover:bg-pink-700">🎓 Enroll</button>
            </div>
        `;
        
        openModal('leadDetailModal');
        
    } catch (error) {
        alert('Failed to load lead details');
    }
}

async function updateLeadStatus(leadId, newStatus) {
    try {
        await apiCall(`/leads/${leadId}`, 'PUT', { status: newStatus });
        loadLeads();
        loadDashboard();
        if (document.getElementById('leadDetailModal').classList.contains('active')) {
            viewLeadDetail(leadId);
        }
    } catch (error) {
        alert('Failed to update status');
    }
}

async function deleteLead(leadId) {
    if (!confirm('Are you sure you want to delete this lead?')) return;
    
    try {
        await apiCall(`/leads/${leadId}`, 'DELETE');
        loadLeads();
        loadDashboard();
    } catch (error) {
        alert('Failed to delete lead');
    }
}

async function addInteraction(leadId, type) {
    const description = prompt(`Enter ${type} notes:`);
    if (!description) return;
    
    const outcome = prompt('Outcome (optional):');
    
    try {
        await apiCall(`/leads/${leadId}/interactions`, 'POST', { type, description, outcome });
        viewLeadDetail(leadId);
    } catch (error) {
        alert('Failed to add interaction');
    }
}

async function enrollLead(leadId) {
    try {
        const cohorts = await apiCall('/cohorts?status=enrolling');
        
        if (cohorts.length === 0) {
            alert('No cohorts available for enrollment');
            return;
        }
        
        const cohortOptions = cohorts.map(c => `${c.name} (${c.program_name}) - ${c.total_seats - c.filled_seats} seats`).join('\n');
        const selected = prompt(`Select cohort (enter number):\n${cohorts.map((c, i) => `${i + 1}. ${c.name}`).join('\n')}`);
        
        if (!selected) return;
        
        const cohort = cohorts[parseInt(selected) - 1];
        if (!cohort) {
            alert('Invalid selection');
            return;
        }
        
        await apiCall('/enrollments', 'POST', { lead_id: leadId, cohort_id: cohort.id });
        alert('Lead enrolled successfully!');
        closeModal('leadDetailModal');
        loadDashboard();
        
    } catch (error) {
        alert('Failed to enroll: ' + error.message);
    }
}

// ============================================
// COHORTS
// ============================================

async function loadCohorts() {
    try {
        const cohorts = await apiCall('/cohorts');
        renderCohortsGrid(cohorts);
    } catch (error) {
        console.error('Failed to load cohorts:', error);
    }
}

function renderCohortsGrid(cohorts) {
    const container = document.getElementById('cohortsGrid');
    
    container.innerHTML = cohorts.map(cohort => {
        const fillRate = ((cohort.filled_seats / cohort.total_seats) * 100).toFixed(0);
        const statusColors = {
            upcoming: 'bg-blue-100 text-blue-800',
            enrolling: 'bg-green-100 text-green-800',
            in_progress: 'bg-yellow-100 text-yellow-800',
            completed: 'bg-gray-100 text-gray-800',
            cancelled: 'bg-red-100 text-red-800'
        };
        
        return `
            <div class="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition">
                <div class="flex justify-between items-start mb-4">
                    <div>
                        <h4 class="font-semibold text-lg">${cohort.name}</h4>
                        <p class="text-sm text-gray-500">${cohort.program_name}</p>
                    </div>
                    <span class="px-2 py-1 rounded-full text-xs font-medium ${statusColors[cohort.status]}">${cohort.status}</span>
                </div>
                
                <div class="mb-4">
                    <div class="flex justify-between text-sm mb-1">
                        <span>Seats</span>
                        <span class="font-semibold">${cohort.filled_seats}/${cohort.total_seats}</span>
                    </div>
                    <div class="h-3 bg-gray-100 rounded-full overflow-hidden">
                        <div class="h-full ${fillRate >= 80 ? 'bg-green-500' : fillRate >= 50 ? 'bg-yellow-500' : 'bg-gray-400'} rounded-full" style="width: ${fillRate}%"></div>
                    </div>
                </div>
                
                <div class="text-sm text-gray-500 space-y-1">
                    <p>📅 Start: ${formatDate(cohort.start_date)}</p>
                    <p>📅 End: ${formatDate(cohort.end_date)}</p>
                </div>
                
                <div class="mt-4 pt-4 border-t flex gap-2">
                    <button onclick="updateCohortStatus('${cohort.id}', 'enrolling')" class="flex-1 px-3 py-1 text-sm bg-green-100 text-green-700 rounded hover:bg-green-200">Open</button>
                    <button onclick="updateCohortStatus('${cohort.id}', 'in_progress')" class="flex-1 px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200">Start</button>
                </div>
            </div>
        `;
    }).join('');
}

async function updateCohortStatus(cohortId, newStatus) {
    try {
        await apiCall(`/cohorts/${cohortId}`, 'PUT', { status: newStatus });
        loadCohorts();
    } catch (error) {
        alert('Failed to update cohort');
    }
}

// ============================================
// ADVISORS
// ============================================

async function loadAdvisors() {
    try {
        const advisors = await apiCall('/advisors');
        renderAdvisorsGrid(advisors);
    } catch (error) {
        console.error('Failed to load advisors:', error);
    }
}

function renderAdvisorsGrid(advisors) {
    const container = document.getElementById('advisorsGrid');
    
    container.innerHTML = advisors.map(advisor => {
        const loadPercent = ((advisor.current_load / advisor.max_leads) * 100).toFixed(0);
        const statusColors = {
            active: 'bg-green-100 text-green-800',
            inactive: 'bg-gray-100 text-gray-800',
            on_leave: 'bg-yellow-100 text-yellow-800'
        };
        
        return `
            <div class="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition">
                <div class="flex items-center gap-4 mb-4">
                    <div class="w-16 h-16 bg-gradient-to-br from-iron-pink to-iron-purple text-white rounded-full flex items-center justify-center text-2xl font-bold">
                        ${advisor.name.charAt(0)}
                    </div>
                    <div>
                        <h4 class="font-semibold text-lg text-[#E6007E]">${advisor.name}</h4>
                        <p class="text-sm text-gray-500">${advisor.specialization || 'General'}</p>
                        <span class="px-2 py-0.5 rounded-full text-xs font-medium ${statusColors[advisor.status]}">${advisor.status}</span>
                    </div>
                </div>
                
                <div class="space-y-2 text-sm">
                    <p>📧 ${advisor.email}</p>
                    <p>📞 ${advisor.phone || '-'}</p>
                </div>
                
                <div class="mt-4">
                    <div class="flex justify-between text-sm mb-1">
                        <span>Workload</span>
                        <span class="font-semibold">${advisor.current_load}/${advisor.max_leads}</span>
                    </div>
                    <div class="h-3 bg-gray-100 rounded-full overflow-hidden">
                        <div class="h-full ${loadPercent >= 80 ? 'bg-red-500' : loadPercent >= 50 ? 'bg-yellow-500' : 'bg-green-500'} rounded-full" style="width: ${loadPercent}%"></div>
                    </div>
                </div>
                
                <div class="mt-4 pt-4 border-t grid grid-cols-2 gap-2 text-center">
                    <div>
                        <p class="text-2xl font-bold text-gray-800">${advisor.total_leads || 0}</p>
                        <p class="text-xs text-gray-500">Total Leads</p>
                    </div>
                    <div>
                        <p class="text-2xl font-bold text-green-600">${advisor.enrolled_leads || 0}</p>
                        <p class="text-xs text-gray-500">Enrolled</p>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// ============================================
// ENROLLMENTS
// ============================================

async function loadEnrollments() {
    try {
        const enrollments = await apiCall('/enrollments');
        renderEnrollmentsTable(enrollments);
    } catch (error) {
        console.error('Failed to load enrollments:', error);
    }
}

function renderEnrollmentsTable(enrollments) {
    const tbody = document.getElementById('enrollmentsTable');
    
    const statusColors = {
        pending: 'bg-yellow-100 text-yellow-800',
        confirmed: 'bg-blue-100 text-blue-800',
        paid: 'bg-green-100 text-green-800',
        cancelled: 'bg-red-100 text-red-800'
    };
    
    const paymentColors = {
        unpaid: 'bg-red-100 text-red-800',
        partial: 'bg-yellow-100 text-yellow-800',
        paid: 'bg-green-100 text-green-800'
    };
    
    tbody.innerHTML = enrollments.map(e => `
        <tr class="hover:bg-gray-50">
            <td class="px-6 py-4">
                <div class="font-medium">${e.lead_name}</div>
                <div class="text-xs text-gray-500">${e.lead_email}</div>
            </td>
            <td class="px-6 py-4">${e.program_name}</td>
            <td class="px-6 py-4">${e.cohort_name}</td>
            <td class="px-6 py-4"><span class="px-2 py-1 rounded-full text-xs font-medium ${statusColors[e.status]}">${e.status}</span></td>
            <td class="px-6 py-4"><span class="px-2 py-1 rounded-full text-xs font-medium ${paymentColors[e.payment_status]}">${e.payment_status}</span></td>
            <td class="px-6 py-4">₹${(e.payment_amount || 0).toLocaleString()}</td>
            <td class="px-6 py-4">
                <button onclick="updateEnrollmentPayment('${e.id}')" class="text-green-500 hover:text-green-700">Mark Paid</button>
            </td>
        </tr>
    `).join('');
}

async function updateEnrollmentPayment(enrollmentId) {
    const amount = prompt('Enter payment amount:');
    if (!amount) return;
    
    try {
        await apiCall(`/enrollments/${enrollmentId}`, 'PUT', { 
            payment_status: 'paid', 
            payment_amount: parseInt(amount),
            status: 'paid'
        });
        loadEnrollments();
        loadDashboard();
    } catch (error) {
        alert('Failed to update payment');
    }
}

// ============================================
// REPORTS
// ============================================

async function exportLeadsCSV() {
    try {
        const csv = await apiCall('/reports/export/leads');
        
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `leads_export_${new Date().toISOString().split('T')[0]}.csv`;
        a.click();
        URL.revokeObjectURL(url);
        
    } catch (error) {
        alert('Failed to export CSV');
    }
}

async function exportAdvisorReport() {
    try {
        const csv = await apiCall('/reports/export/advisors');
        
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `advisor_report_${new Date().toISOString().split('T')[0]}.csv`;
        a.click();
        URL.revokeObjectURL(url);
        
    } catch (error) {
        alert('Failed to export advisor report');
    }
}

async function exportCohortReport() {
    try {
        const csv = await apiCall('/reports/export/cohorts');
        
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `cohort_report_${new Date().toISOString().split('T')[0]}.csv`;
        a.click();
        URL.revokeObjectURL(url);
        
    } catch (error) {
        alert('Failed to export cohort report');
    }
}

// ============================================
// SECTION DATA LOADER
// ============================================

function loadSectionData(sectionName) {
    switch(sectionName) {
        case 'dashboard': loadDashboard(); break;
        case 'leads': loadLeads(); break;
        case 'cohorts': loadCohorts(); break;
        case 'advisors': loadAdvisors(); break;
        case 'enrollments': loadEnrollments(); break;
        case 'reports': loadReports(); break;
    }
}

// ============================================
// REPORTS & ANALYTICS
// ============================================

async function loadReports() {
    try {
        const data = await apiCall('/reports/analytics');
        
        // Update summary stats
        const totalLeads = data.bySource.reduce((sum, s) => sum + s.count, 0);
        const totalEnrolled = data.conversionBySource.reduce((sum, s) => sum + s.enrolled, 0);
        const conversionRate = totalLeads > 0 ? Math.round((totalEnrolled / totalLeads) * 100) : 0;
        const topSource = data.bySource.length > 0 ? data.bySource[0].source : '-';
        
        document.getElementById('reportTotalLeads').textContent = totalLeads;
        document.getElementById('reportEnrolled').textContent = totalEnrolled;
        document.getElementById('reportConversion').textContent = `${conversionRate}%`;
        document.getElementById('reportTopSource').textContent = topSource.charAt(0).toUpperCase() + topSource.slice(1);
        
        renderSourceChart(data.bySource);
        renderProgramChart(data.byProgram);
        renderConversionBySource(data.conversionBySource);
    } catch (error) {
        console.error('Failed to load reports:', error);
    }
}

function renderSourceChart(sources) {
    const container = document.getElementById('sourceChart');
    if (!sources || sources.length === 0) {
        container.innerHTML = '<p class="text-[#555555] text-center py-8">No data available</p>';
        return;
    }
    
    const total = sources.reduce((sum, s) => sum + s.count, 0);
    const maxCount = Math.max(...sources.map(s => s.count));
    const colors = {
        pathfinder: '#E6007E',
        website: '#2D0A31',
        referral: '#1B9C6E',
        linkedin: '#0056C1',
        event: '#FFB300'
    };
    const icons = {
        pathfinder: '🤖',
        website: '🌐',
        referral: '👥',
        linkedin: '💼',
        event: '📅'
    };
    
    container.innerHTML = sources.map(source => {
        const width = (source.count / maxCount) * 100;
        const percent = Math.round((source.count / total) * 100);
        const color = colors[source.source] || '#555555';
        const icon = icons[source.source] || '📊';
        return `
            <div class="flex items-center gap-3">
                <span class="text-xl w-8">${icon}</span>
                <div class="flex-1">
                    <div class="flex justify-between text-sm mb-1">
                        <span class="text-[#2D0A31] font-medium capitalize">${source.source}</span>
                        <span class="text-[#555555]">${source.count} leads <span class="text-xs">(${percent}%)</span></span>
                    </div>
                    <div class="h-4 bg-[#F5E4F0] rounded-full overflow-hidden">
                        <div class="h-full rounded-full transition-all" style="width: ${width}%; background: ${color};"></div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function renderProgramChart(programs) {
    const container = document.getElementById('programChart');
    if (!programs || programs.length === 0) {
        container.innerHTML = '<p class="text-[#555555] text-center py-8">No data available</p>';
        return;
    }
    
    const total = programs.reduce((sum, p) => sum + p.count, 0);
    const maxCount = Math.max(...programs.map(p => p.count));
    const colors = {
        leadership_essentials: '#E6007E',
        hundred_board_members: '#2D0A31',
        csuite_mastery: '#0056C1',
        masterclass: '#1B9C6E'
    };
    const icons = {
        leadership_essentials: '👩‍💼',
        hundred_board_members: '👑',
        csuite_mastery: '🎯',
        masterclass: '📚'
    };
    
    container.innerHTML = programs.map(program => {
        const width = (program.count / maxCount) * 100;
        const percent = Math.round((program.count / total) * 100);
        const color = colors[program.program_id] || '#555555';
        const icon = icons[program.program_id] || '📊';
        return `
            <div class="flex items-center gap-3">
                <span class="text-xl w-8">${icon}</span>
                <div class="flex-1">
                    <div class="flex justify-between text-sm mb-1">
                        <span class="text-[#2D0A31] font-medium">${program.name}</span>
                        <span class="text-[#555555]">${program.count} leads <span class="text-xs">(${percent}%)</span></span>
                    </div>
                    <div class="h-4 bg-[#F5E4F0] rounded-full overflow-hidden">
                        <div class="h-full rounded-full transition-all" style="width: ${width}%; background: ${color};"></div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function renderConversionBySource(data) {
    const container = document.getElementById('conversionBySource');
    if (!data || data.length === 0) {
        container.innerHTML = '<p class="text-[#555555] col-span-5 text-center py-8">No data available</p>';
        return;
    }
    
    container.innerHTML = data.map(source => {
        const rateColor = source.conversion_rate >= 30 ? '#1B9C6E' : source.conversion_rate >= 15 ? '#FFB300' : '#D32F2F';
        return `
            <div class="bg-[#FFF6FA] rounded-xl p-4 text-center border border-[#F0D4E7]">
                <p class="text-xs text-[#555555] uppercase tracking-wide mb-1 capitalize">${source.source}</p>
                <p class="text-2xl font-bold" style="color: ${rateColor}">${source.conversion_rate}%</p>
                <p class="text-xs text-[#555555] mt-1">${source.enrolled}/${source.total} enrolled</p>
            </div>
        `;
    }).join('');
}

function refreshData() {
    const activeSection = document.querySelector('main > section:not(.hidden)');
    if (activeSection) {
        loadSectionData(activeSection.id.replace('Section', ''));
    }
}

// ============================================
// FORM HANDLERS
// ============================================

document.getElementById('addLeadForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    try {
        await apiCall('/leads', 'POST', data);
        closeModal('addLeadModal');
        e.target.reset();
        loadLeads();
        loadDashboard();
        alert('Lead created successfully!');
    } catch (error) {
        alert('Failed to create lead: ' + error.message);
    }
});

document.getElementById('addCohortForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    try {
        await apiCall('/cohorts', 'POST', data);
        closeModal('addCohortModal');
        e.target.reset();
        loadCohorts();
        alert('Cohort created successfully!');
    } catch (error) {
        alert('Failed to create cohort: ' + error.message);
    }
});

document.getElementById('addAdvisorForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    try {
        await apiCall('/advisors', 'POST', data);
        closeModal('addAdvisorModal');
        e.target.reset();
        loadAdvisors();
        alert('Advisor added successfully!');
    } catch (error) {
        alert('Failed to add advisor: ' + error.message);
    }
});

// ============================================
// INITIALIZE
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Check URL hash for initial section
    const hash = window.location.hash.replace('#', '');
    const validSections = ['dashboard', 'leads', 'cohorts', 'advisors', 'enrollments', 'reports'];
    
    if (hash && validSections.includes(hash)) {
        showSection(hash, false); // Don't add to history on initial load
    } else {
        showSection('dashboard', false);
    }
});

// Handle browser back/forward buttons
window.addEventListener('popstate', (event) => {
    if (event.state && event.state.section) {
        showSection(event.state.section, false); // Don't add to history again
    } else {
        // Check URL hash as fallback
        const hash = window.location.hash.replace('#', '');
        const validSections = ['dashboard', 'leads', 'cohorts', 'advisors', 'enrollments', 'reports'];
        if (hash && validSections.includes(hash)) {
            showSection(hash, false);
        } else {
            showSection('dashboard', false);
        }
    }
});

// Expose functions to window for onclick handlers
window.openAdvisorModal = openAdvisorModal;
window.showAdvisorProfile = showAdvisorProfile;
window.goToAdvisorLeads = goToAdvisorLeads;
window.closeModal = closeModal;
window.openModal = openModal;
window.filterLeadsByStatus = filterLeadsByStatus;
window.filterLeadsByPriority = filterLeadsByPriority;
window.showSection = showSection;
window.loadLeads = loadLeads;
window.setLeadsView = setLeadsView;
window.quickCall = quickCall;
window.quickWhatsApp = quickWhatsApp;
window.quickEmail = quickEmail;
window.copyToClipboard = copyToClipboard;
window.sendReminder = sendReminder;
window.simulateSendReminder = simulateSendReminder;
window.scheduleCall = scheduleCall;
window.openGoogleCalendar = openGoogleCalendar;
window.openOutlookCalendar = openOutlookCalendar;
window.copyCalendarDetails = copyCalendarDetails;
