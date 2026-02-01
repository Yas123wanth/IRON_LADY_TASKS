/**
 * Iron Lady Pathfinder - Configuration
 * 
 * This file contains editable configuration that can be updated
 * without modifying the main application code.
 * 
 * LAST UPDATED: 2026-01-31
 */

const CONFIG = {
    // ============================================
    // Contact Information (Update for each deployment)
    // ============================================
    contact: {
        advisor_phone: "+918309882198",  // Without spaces for tel: link
        advisor_phone_display: "+91 83098 82198",  // For display
        whatsapp_number: "918309882198",  // Without + for wa.me link
        whatsapp_message: "Hi Iron Lady! I'm interested in learning more about your leadership programs.",
        email: "hello@ironlady.co",
        // Booking link - using email for scheduling
        // You can replace this with Google Calendar appointment link when ready
        calendar_link: "mailto:hello@ironlady.co?subject=Book%20Advisor%20Call&body=Hi%20Iron%20Lady%20Team%2C%0A%0AI%20would%20like%20to%20schedule%20a%20call%20with%20an%20advisor.%0A%0AMy%20preferred%20time%3A%20%0A%0AThank%20you!",
        calendar_type: "email",  // "google", "calendly", or "email"
        enrollment_link: "https://ironlady.co/enroll"
    },

    // ============================================
    // Schedule Information (Update before demos/launches)
    // ============================================
    schedules: {
        last_updated: "2026-01-31",
        
        leadership_essentials: {
            next_cohort: "March 2026",
            cohort_size: "25-30 participants",
            time_commitment: "4-6 hours/week",
            duration: "4 weeks + 2 full-day sessions",
            price_range: "₹25,000 - ₹35,000",
            sessions: "Weekday evenings (7-9 PM IST) + Weekend workshops"
        },
        
        hundred_board_members: {
            next_cohort: "February 2026",
            cohort_size: "20-25 participants",
            time_commitment: "5-7 hours/week",
            duration: "6 months",
            price_range: "₹75,000 - ₹1,00,000",
            sessions: "Weekly Q&A (Saturdays 10 AM IST) + Async modules"
        },
        
        csuite_mastery: {
            next_cohort: "April 2026",
            cohort_size: "15-20 participants",
            time_commitment: "6-8 hours/week",
            duration: "4 months",
            price_range: "₹1,50,000 - ₹2,00,000",
            sessions: "Bi-weekly live sessions + Executive coaching"
        },
        
        masterclass: {
            next_cohort: "Every month",
            cohort_size: "50-100 participants",
            time_commitment: "2 full days",
            duration: "Friday evening + Full Saturday",
            price_range: "₹5,000 - ₹10,000",
            sessions: "Fri 6-9 PM + Sat 9 AM - 6 PM IST"
        }
    },

    // ============================================
    // Feature Flags
    // ============================================
    features: {
        show_prices: true,          // Show price ranges
        show_schedules: true,       // Show next cohort dates
        enable_whatsapp: true,      // Show WhatsApp CTA
        enable_calendar_booking: true,  // Show calendar booking (Google/Calendly)
        enable_analytics_modal: true,   // Show analytics modal for demos
        demo_mode: false            // When true, shows demo banner
    },

    // ============================================
    // Social Proof Numbers (Update periodically)
    // ============================================
    social_proof: {
        women_trained: "10,000+",
        career_growth_rate: "85%",
        companies_trust: "50+",
        average_salary_increase: "40%",
        promotion_rate: "3x faster"
    },

    // ============================================
    // Backend API (OpsHub Integration - Task 2)
    // ============================================
    api: {
        // OpsHub webhook endpoint - receives leads from Pathfinder
        // Make sure OpsHub backend is running: cd ../task2/backend && npm start
        lead_endpoint: "http://localhost:3001/api/webhook/lead",
        notification_webhook: null  // Slack/Teams webhook URL (optional)
    }
};

// Export for use in main app
window.CONFIG = CONFIG;
