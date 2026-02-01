# Iron Lady - Complete Solution

A comprehensive digital solution for Iron Lady's leadership programs, consisting of two integrated applications.

---

## 🚀 Quick Start (For Reviewers)

### Task 1: Pathfinder (AI Chatbot)
```bash
cd task1
python3 -m http.server 8000
```
Open: **http://localhost:8000**

### Task 2: OpsHub (Internal CRM)
```bash
# Terminal 1 - Start Backend
cd task2/backend
npm install
npm start

# Terminal 2 - Start Frontend
cd task2/frontend
python3 -m http.server 8082
```
Open: **http://localhost:8082**

---

## Project Structure

```
lady_iron/
├── README.md           # This file
├── task1/              # Pathfinder - AI Concierge Chatbot
│   ├── index.html      # Main entry point
│   ├── app.js          # Application logic (6400+ lines)
│   ├── style.css       # Styles (4500+ lines)
│   ├── config.js       # Editable configuration
│   ├── manifest.json   # PWA manifest
│   ├── sw.js           # Service worker
│   ├── icons/          # App icons
│   ├── js/             # Modular JS files
│   └── README.md       # Task 1 documentation
│
└── task2/              # OpsHub - Internal Operations CRM
    ├── frontend/       # Admin dashboard
    │   ├── index.html
    │   └── app.js
    ├── backend/        # Node.js API server
    │   ├── server.js
    │   ├── database.js
    │   └── seed.js
    └── README.md       # Task 2 documentation
```

---

## Task 1: Iron Lady Pathfinder (AI Concierge)

**Location:** `task1/`

An intelligent AI chatbot that guides users through program discovery and enrollment.

### Features
- 🎯 Program Explorer with detailed cards
- 🧠 Personality Exercise (30-sec quiz)
- 💬 Natural Language Processing (multilingual)
- 🎤 Voice Input/Output support
- 💝 Emotional Intelligence (detects vulnerable users)
- 📋 Lead Capture with consent
- 📱 PWA (installable on mobile)

### Quick Start
```bash
cd task1
python3 -m http.server 8000
# Open http://localhost:8000
```

---

## Task 2: Iron Lady OpsHub (Internal CRM)

**Location:** `task2/`

Internal operations dashboard for managing leads, advisors, and cohorts.

### Features
- 📊 Lead Management Dashboard
- 👥 Advisor Assignment (auto load-balancing)
- 📈 Revenue Forecasting
- ⏰ SLA Tracking & Alerts
- 🎯 Conversion Funnel Analytics
- 📋 Cohort Management
- 🔗 Webhook Integration with Pathfinder

### Quick Start
```bash
# Terminal 1: Start Backend
cd task2/backend
npm install
npm start
# API runs on http://localhost:3001

# Terminal 2: Start Frontend
cd task2/frontend
python3 -m http.server 8082
# Dashboard at http://localhost:8082
```

---

## Integration: Task 1 → Task 2

When a user submits their contact info in Pathfinder (Task 1), the lead is automatically sent to OpsHub (Task 2) via webhook.

**Webhook Endpoint:** `POST http://localhost:3001/api/webhook/lead`

### Test the Integration
1. Start both applications
2. Complete Pathfinder flow → Submit contact form
3. Check OpsHub dashboard → New lead appears

---

## Demo URLs

| Application | URL | Description |
|-------------|-----|-------------|
| Pathfinder | http://localhost:8000 | AI Chatbot |
| OpsHub Dashboard | http://localhost:8082 | Admin CRM |
| OpsHub API | http://localhost:3001 | Backend API |

---

## Technology Stack

### Task 1 (Pathfinder)
- Vanilla JavaScript (ES6+)
- CSS3 with CSS Variables
- Web Speech API (voice)
- PWA (Service Worker)

### Task 2 (OpsHub)
- **Frontend:** HTML5, Tailwind CSS, Vanilla JS
- **Backend:** Node.js, Express.js
- **Database:** JSON file-based (no external DB required)

---

## Copyright

© 2026 Yaswanth Grandhi

**Contact:** yaswanthgrandhi2580@gmail.com

---

*Built for Iron Lady Leadership Programs*
