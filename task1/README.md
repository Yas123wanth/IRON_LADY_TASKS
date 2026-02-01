# Task 1: Iron Lady Pathfinder

AI-powered concierge chatbot for leadership program discovery.

## Overview

Pathfinder is an intelligent chatbot that guides users through discovering the right Iron Lady leadership program based on their career stage, goals, and challenges.

## Features

### Core Features
- 🎯 **Program Explorer** - Browse all programs with pricing, details, and success stories
- 🧠 **Personality Exercise** - 30-second quiz to find best-fit program
- 💬 **Smart Recommendations** - Algorithm-based program matching
- 📋 **Lead Capture** - Consent-based contact information collection

### Advanced Features
- 🎤 **Voice Input/Output** - Speech recognition and text-to-speech
- 🌐 **Multilingual** - English, Telugu, Hindi, Tamil support
- 💝 **Emotional Intelligence** - Detects and supports vulnerable users
- 📱 **PWA Support** - Installable on mobile devices
- 🌙 **Dark Mode** - Theme toggle support

## Quick Start

```bash
# Start local server
python3 -m http.server 8000

# Open in browser
open http://localhost:8000
```

## File Structure

```
task1/
├── index.html          # Main HTML entry
├── app.js              # Application logic (6400+ lines)
├── style.css           # All styles (4500+ lines)
├── config.js           # Editable configuration
├── manifest.json       # PWA manifest
├── sw.js               # Service worker
├── icons/              # App icons
│   ├── icon.svg
│   └── generate-icons.html
├── js/                 # Modular JS (reference)
│   ├── kb.js           # Knowledge Base
│   ├── state.js        # State management
│   └── storage.js      # Storage & analytics
├── CODE_STRUCTURE.md   # Code documentation
├── DEMO_GUIDE.md       # Demo instructions
└── README.md           # This file
```

## Configuration

Edit `config.js` to customize:

```javascript
const CONFIG = {
    contact: {
        advisor_phone: "+918309882198",
        whatsapp_number: "918309882198",
        email: "hello@ironlady.co",
        calendar_link: "mailto:...",
    },
    schedules: {
        leadership_essentials: {
            next_cohort: "March 2026",
            price_range: "₹25,000 - ₹35,000",
            // ...
        },
        // ... other programs
    },
    features: {
        show_prices: true,
        enable_whatsapp: true,
        // ...
    },
    api: {
        lead_endpoint: "http://localhost:3001/api/webhook/lead"
    }
};
```

## User Flow

```
Welcome Screen
    ↓
"Yes, let's begin!"
    ↓
Program Explorer (all programs with details)
    ↓
Personality Exercise (3 questions)
    ↓
Personalized Recommendation
    ↓
Lead Capture (optional)
    ↓
Contact Options (Call/WhatsApp/Email)
```

## Programs Available

| Program | Target | Duration | Price Range |
|---------|--------|----------|-------------|
| Leadership Essentials | Early career (0-5 yrs) | 4 weeks | ₹25K-35K |
| 100 Board Members | Mid career (5-15 yrs) | 6 months | ₹75K-1L |
| C-Suite Mastery | Senior (15+ yrs) | 4 months | ₹1.5L-2L |
| Masterclass | Any stage | 2 days | ₹5K-10K |

## Integration with OpsHub (Task 2)

When a user submits their contact info, the lead is sent to OpsHub:

```javascript
// Lead data sent to webhook
{
    name: "User Name",
    email: "user@email.com",
    phone: "+91 9876543210",
    recommended_program: "leadership_essentials",
    career_stage: "early",
    goal: "promotion",
    challenges: "confidence, bias",
    source: "pathfinder"
}
```

**Webhook:** `POST http://localhost:3001/api/webhook/lead`

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Enter` | Send message |
| `Ctrl+Shift+A` | Analytics modal (demo) |
| `Esc` | Close modals |

## Voice Commands

- Click microphone icon to start voice input
- Supports English, Telugu, Hindi, Tamil
- Voice output matches input language

## Browser Support

- Chrome (recommended for voice)
- Firefox
- Safari
- Edge

---

## Copyright

© 2026 Yaswanth Grandhi

**Contact:** yaswanthgrandhi2580@gmail.com
