# Task 2: Iron Lady OpsHub

Internal operations dashboard and CRM for managing leads, advisors, and cohorts.

## Overview

OpsHub is an internal tool that receives leads from Pathfinder (Task 1) and provides a complete CRM for the Iron Lady operations team.

## Features

### Lead Management
- 📊 **Dashboard** - Overview of all leads with key metrics
- 📋 **Lead Table** - Sortable, filterable lead list
- 🎯 **Kanban Board** - Visual pipeline management
- 🔍 **Search & Filter** - By status, priority, advisor, program

### Advisor Management
- 👥 **Auto-Assignment** - Load-balanced advisor assignment
- 📈 **Performance Tracking** - Conversion rates per advisor
- 👤 **Advisor Profiles** - Detailed advisor information

### Analytics & Reporting
- 📊 **Conversion Funnel** - Lead → Contacted → Enrolled
- 💰 **Revenue Forecast** - Based on pipeline
- ⏰ **SLA Tracking** - Alerts for overdue leads
- 📥 **CSV Export** - Download reports

### Cohort Management
- 🎓 **Cohort Tracking** - Fill rates, enrollments
- 📅 **Schedule Management** - Start dates, capacity

## Quick Start

### 1. Start Backend

```bash
cd backend
npm install
npm start
```

Backend runs on `http://localhost:3001`

### 2. Start Frontend

```bash
cd frontend
python3 -m http.server 8082
```

Dashboard at `http://localhost:8082`

### 3. Seed Demo Data (Optional)

```bash
cd backend
node seed.js
```

## File Structure

```
task2/
├── frontend/
│   ├── index.html      # Dashboard UI
│   └── app.js          # Frontend logic
│
├── backend/
│   ├── server.js       # Express API server
│   ├── database.js     # JSON file database
│   ├── seed.js         # Demo data seeder
│   ├── package.json    # Dependencies
│   └── opshub-data.json # Data file (auto-created)
│
└── README.md           # This file
```

## API Endpoints

### Webhook (Pathfinder Integration)
```
POST /api/webhook/lead
```
Receives leads from Pathfinder chatbot.

### Leads
```
GET    /api/leads              # List leads (with filters)
GET    /api/leads/:id          # Get lead details
POST   /api/leads              # Create lead
PUT    /api/leads/:id          # Update lead
DELETE /api/leads/:id          # Delete lead
PUT    /api/leads/:id/status   # Update status
```

### Advisors
```
GET    /api/advisors           # List advisors
GET    /api/advisors/:id       # Get advisor details
POST   /api/advisors           # Create advisor
PUT    /api/advisors/:id       # Update advisor
```

### Programs & Cohorts
```
GET    /api/programs           # List programs
GET    /api/cohorts            # List cohorts
POST   /api/cohorts            # Create cohort
PUT    /api/cohorts/:id        # Update cohort
```

### Reports
```
GET    /api/reports/dashboard  # Dashboard stats
GET    /api/reports/analytics  # Detailed analytics
GET    /api/reports/export/leads    # CSV export
GET    /api/reports/export/advisors # CSV export
```

## Authentication

All API requests require Bearer token:

```
Authorization: Bearer ironlady-opshub-2026
```

## Lead Lifecycle

```
new → contacted → qualified → enrolled
         ↓
      lost (optional)
```

### SLA Rules
- New leads must be contacted within **24 hours**
- SLA breach triggers alert in dashboard
- Warning shown when **< 6 hours** remaining

## Dashboard Sections

### Stats Cards
- **Total Leads** - Click to see all
- **New Leads** - Requires action
- **Enrolled** - Converted leads
- **Urgent (SLA)** - Needs immediate attention

### Quick Actions
- 📞 **Call** - Modal with phone number + copy option
- 💬 **WhatsApp** - Modal with message preview + copy option
- 📧 **Email** - Opens Gmail/Outlook/Default client + copy
- 🔔 **Remind** - Send follow-up reminder (simulated email)
- 📅 **Schedule** - Create Google/Outlook calendar event (real integration)

### Kanban Pipeline
Visual board showing leads by status:
- New → Contacted → Qualified → Enrolled

### Automation Features (NEW)
- **Email Reminders** - One-click follow-up with pre-written templates
- **Calendar Scheduling** - Direct integration with Google Calendar & Outlook
- **Professional Contact Modals** - Desktop-friendly with copy options

## Integration with Pathfinder (Task 1)

### Webhook Payload
```json
{
    "name": "User Name",
    "email": "user@email.com",
    "phone": "+91 9876543210",
    "recommended_program": "leadership_essentials",
    "career_stage": "early",
    "goal": "promotion",
    "challenges": "confidence, bias",
    "source": "pathfinder"
}
```

### Auto-Processing
1. Duplicate check (by email/phone)
2. Auto-assign to advisor (load-balanced)
3. Set SLA deadline (24 hours)
4. Log audit trail

## Revenue Forecast

Based on program pricing:
```javascript
const programPrices = {
    leadership_essentials: 30000,
    hundred_board_members: 85000,
    csuite_mastery: 175000,
    masterclass: 7500
};
```

## Demo Data

Run `node seed.js` to create:
- 4 programs
- 4 advisors
- 4 cohorts
- 50 sample leads (various statuses)

---

## Copyright

© 2026 Yaswanth Grandhi

**Contact:** yaswanthgrandhi2580@gmail.com
