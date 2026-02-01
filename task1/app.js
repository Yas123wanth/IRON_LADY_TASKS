/**
 * Iron Lady Pathfinder - AI Concierge Application
 * An intelligent chatbot that guides users through program discovery and enrollment
 */

// ============================================
// Knowledge Base (Single Source of Truth)
// ============================================

const KB = {
    brand: {
        mission: "Enable a million women to reach the top.",
        philosophy: "Business War Tactics: practical strategies to win without fighting—overcoming bias, politics, and glass ceilings while fast-tracking results.",
        community_note: "Supportive, non-judgmental communities that share tactics and celebrate wins.",
        legal_disclaimer: "This is an offline information assistant. For current schedules, cohort sizes, and prices, contact the advisor."
    },
    
    // Alumni Network Power Stats
    alumni_stats: {
        total_alumni: "10,000+",
        companies_represented: "500+",
        countries: "15+",
        cities_india: "50+",
        avg_salary_increase: "35-40%",
        promotion_rate: "68%",
        network_events_monthly: "4+",
        satisfaction_rate: "92%",
        notable_companies: [
            "Google", "Microsoft", "Amazon", "Meta", "TCS", "Infosys", 
            "Wipro", "Accenture", "Deloitte", "McKinsey", "Flipkart", "Zomato"
        ],
        achievements: [
            { stat: "10,000+", label: "Women Trained", icon: "👩‍💼" },
            { stat: "500+", label: "Companies", icon: "🏢" },
            { stat: "35-40%", label: "Avg Salary Increase", icon: "💰" },
            { stat: "68%", label: "Got Promoted", icon: "📈" },
            { stat: "15+", label: "Countries", icon: "🌍" },
            { stat: "92%", label: "Satisfaction", icon: "⭐" }
        ],
        community_features: [
            "Private WhatsApp groups by cohort",
            "Monthly virtual networking events",
            "Alumni job board & referrals",
            "Lifetime access to community",
            "Annual in-person meetups",
            "Mentor matching program"
        ]
    },
    
    contact: {
        advisor_phone: "+91 98765 43210",
        enrollment_link: "https://ironlady.co/enroll",
        email: "hello@ironlady.co"
    },
    programs: [
        {
            id: "leadership_essentials",
            name: "Leadership Essentials",
            who: ["Early-career professionals (0-5 years)", "Career returnees after a break", "Anyone needing core confidence and strategic positioning"],
            who_examples: [
                "Software engineer wanting to become a tech lead",
                "Marketing executive returning after maternity leave",
                "Analyst seeking first management role"
            ],
            prerequisites: "None - open to all career stages",
            outcomes: [
                "Build unwavering confidence to speak up in meetings",
                "Master shameless pitching of your ambitions",
                "Navigate office politics & bias using practical tactics",
                "Create a personal brand that gets you noticed",
                "Develop a 90-day career acceleration plan"
            ],
            modules: [
                "Week 1: Strategic Self-Assessment & Goal Setting",
                "Week 2: Confidence Building & Communication Mastery",
                "Week 3: Office Politics Navigation & Bias Neutralization",
                "Week 4: Personal Branding & Shameless Pitching",
                "Day 1 Workshop: B-HAG Definition & Strategy Mapping",
                "Day 2 Workshop: Mock Pitches & Peer Feedback"
            ],
            deliverables: [
                "Personal Career Playbook",
                "90-Day Action Plan",
                "Pitch Deck for Next Opportunity",
                "Access to Alumni Community"
            ],
            success_metrics: "75% of participants report increased confidence within 30 days",
            format: "4 weeks online + 2 full-day workshops",
            why_it_works: "Moves from hesitation to action with practical templates and repeatable plays.",
            proof_points: [
                "Learners report daily-use techniques.",
                "Alumni highlight breakthroughs after career breaks.",
                "Average confidence score increases by 40%."
            ],
            ideal_for_challenges: ["confidence", "clarity", "bias"],
            not_for: [
                "You want a quick certificate without putting in effort",
                "You're not ready to speak up and take action",
                "You expect instant results without practice",
                "You're already at Director+ level seeking C-Suite"
            ],
            weekly_schedule: {
                title: "A Typical Week",
                days: [
                    { day: "Mon", activity: "Watch 20-min video lesson", icon: "📺" },
                    { day: "Tue", activity: "Complete reflection worksheet", icon: "📝" },
                    { day: "Wed", activity: "Live Q&A with coach (7-8pm)", icon: "💬" },
                    { day: "Thu", activity: "Peer discussion in community", icon: "👥" },
                    { day: "Fri", activity: "Submit weekly assignment", icon: "✅" },
                    { day: "Sat-Sun", activity: "Optional catch-up & practice", icon: "🔄" }
                ],
                total_time: "4-6 hours/week"
            }
        },
        {
            id: "hundred_board_members",
            name: "100 Board Members Program",
            who: ["Mid-career professionals (5-15 years)", "Managers/Leads stuck at same level", "High performers not getting promoted"],
            who_examples: [
                "Senior manager wanting to become Director",
                "Tech lead aiming for VP Engineering",
                "Product manager seeking leadership role"
            ],
            prerequisites: "Minimum 5 years work experience recommended",
            outcomes: [
                "Career breakthroughs in ~6–18 months",
                "Practical acceleration with weekly accountability",
                "Greater visibility among decision-makers",
                "Strategic influence and stakeholder management",
                "Board-level thinking and communication"
            ],
            modules: [
                "Month 1-2: Strategic Positioning & Visibility",
                "Month 3-4: Influence Without Authority",
                "Month 5-6: Executive Presence & Board Exposure",
                "Weekly: Live Q&A with Senior Leaders",
                "Monthly: 1:1 Coaching Sessions"
            ],
            deliverables: [
                "Personal Board of Advisors Framework",
                "Promotion Pitch Deck",
                "Stakeholder Influence Map",
                "Executive Summary Writing Skills",
                "LinkedIn Optimization for Leadership"
            ],
            success_metrics: "68% of participants get promoted or significant role expansion within 18 months",
            format: "6 months, online, weekly live Q&A",
            why_it_works: "Combines innovative techniques with measurable progress and feedback loops.",
            proof_points: [
                "Chosen by women across Fortune 500 companies.",
                "Alumni cite rapid promotions and role expansions.",
                "Average salary increase of 35% post-program."
            ],
            ideal_for_challenges: ["recognition", "missed_promotions", "bias"],
            not_for: [
                "You're in early career (less than 5 years experience)",
                "You're not willing to commit 6 months to the journey",
                "You want to stay in your current role without growth",
                "You're already in C-Suite or board positions"
            ],
            weekly_schedule: {
                title: "A Typical Week",
                days: [
                    { day: "Mon-Tue", activity: "Self-paced module content", icon: "📚" },
                    { day: "Wed", activity: "Live Strategy Session (8-9pm)", icon: "🎯" },
                    { day: "Thu", activity: "1:1 peer accountability call", icon: "📞" },
                    { day: "Fri", activity: "Weekly reflection & planning", icon: "📋" },
                    { day: "Sat", activity: "Optional networking event", icon: "🤝" },
                    { day: "Monthly", activity: "1:1 coaching session", icon: "💎" }
                ],
                total_time: "5-7 hours/week"
            }
        },
        {
            id: "csuite_mastery",
            name: "C-Suite Mastery",
            who: ["Senior professionals (VP/Director+)", "Functional heads", "Entrepreneurs transitioning to CXO roles"],
            who_examples: [
                "VP seeking Chief Officer role",
                "Director wanting board positions",
                "Founder scaling to enterprise CEO"
            ],
            prerequisites: "VP/Director level or 15+ years experience",
            outcomes: [
                "Competitor-/market-centric leadership lens",
                "Operate at senior compensation bands",
                "Thrive in C-suite dynamics with executive presence",
                "Board-ready communication and governance",
                "Strategic M&A and business development thinking"
            ],
            modules: [
                "Module 1: From Functional to Enterprise Leadership",
                "Module 2: Market & Competitive Strategy",
                "Module 3: Board Dynamics & Governance",
                "Module 4: Executive Presence at Scale",
                "Module 5: Building & Leading Executive Teams",
                "Executive Coaching: 6 personalized sessions"
            ],
            deliverables: [
                "C-Suite Readiness Assessment",
                "Board Bio & Executive Profile",
                "Strategic Vision Document",
                "Executive Network Introductions",
                "Personal Leadership Brand"
            ],
            success_metrics: "45% of participants reach C-Suite or board position within 2 years",
            format: "4 months, cohort-based, advanced modules",
            why_it_works: "Shifts the operating model from functional excellence to market power and value creation.",
            proof_points: [
                "Designed with inputs from global CEOs/CXOs.",
                "Blends strategy with presence and influence.",
                "Alumni include CXOs at leading companies."
            ],
            ideal_for_challenges: ["recognition", "clarity", "missed_promotions"],
            not_for: [
                "You're in early/mid career (need VP/Director experience first)",
                "You're looking for hands-on tactical training",
                "You're not ready for high-level strategic thinking",
                "Budget is a concern (this is our premium offering)"
            ],
            weekly_schedule: {
                title: "A Typical Week",
                days: [
                    { day: "Mon", activity: "Executive module + case study", icon: "📊" },
                    { day: "Tue-Wed", activity: "Strategic reading & analysis", icon: "📖" },
                    { day: "Thu", activity: "Live Mastermind (7-9pm)", icon: "🧠" },
                    { day: "Fri", activity: "Board simulation exercise", icon: "🎭" },
                    { day: "Bi-weekly", activity: "1:1 executive coaching", icon: "💎" },
                    { day: "Monthly", activity: "CXO guest speaker session", icon: "🎤" }
                ],
                total_time: "6-8 hours/week"
            }
        },
        {
            id: "masterclass",
            name: "2-Day Transformational Masterclass",
            who: ["Any stage seeking a fast start", "Professionals facing bias/politics/recognition", "Those wanting to test Iron Lady approach"],
            who_examples: [
                "Anyone wanting quick momentum",
                "Professional considering longer program",
                "Someone needing immediate confidence boost"
            ],
            prerequisites: "None - open to all",
            outcomes: [
                "Define a B-HAG (Big Hairy Audacious Goal)",
                "Map specific actions for the next 90 days",
                "Apply salary/promotion acceleration tactics",
                "Build peer network for accountability",
                "Experience Iron Lady methodology firsthand"
            ],
            modules: [
                "Friday Evening: Goal Setting & Self-Assessment",
                "Saturday Morning: Business War Tactics Deep Dive",
                "Saturday Afternoon: Personal Strategy Workshop",
                "Saturday Evening: Peer Accountability Setup"
            ],
            deliverables: [
                "B-HAG Definition Document",
                "90-Day Action Calendar",
                "Salary Negotiation Scripts",
                "Peer Accountability Partner"
            ],
            success_metrics: "82% of participants report taking action within 7 days",
            format: "2 days (Friday evening + Saturday full day)",
            why_it_works: "Compact, high-energy format to kickstart momentum and confidence.",
            proof_points: [
                "Thousands trained with salary breakthrough stories.",
                "Many participants upgrade to full programs.",
                "Immediate actionable takeaways."
            ],
            ideal_for_challenges: ["confidence", "clarity", "bias"],
            not_for: [
                "You need deep, long-term mentorship (consider our longer programs)",
                "You can't commit to a full weekend",
                "You prefer self-paced learning without live interaction",
                "You're already highly confident and just need advanced strategy"
            ],
            weekly_schedule: {
                title: "The 2-Day Experience",
                days: [
                    { day: "Fri 6pm", activity: "Welcome & goal-setting kickoff", icon: "🎯" },
                    { day: "Fri 7pm", activity: "Self-assessment workshop", icon: "🔍" },
                    { day: "Sat 9am", activity: "Business War Tactics deep-dive", icon: "⚔️" },
                    { day: "Sat 12pm", activity: "Lunch & networking", icon: "🤝" },
                    { day: "Sat 2pm", activity: "Personal strategy workshop", icon: "📋" },
                    { day: "Sat 5pm", activity: "90-day plan & peer matching", icon: "🚀" }
                ],
                total_time: "One intensive weekend"
            }
        }
    ],
    faqs: [
        {
            q: "What makes Iron Lady different?",
            a: "A results-first approach called Business War Tactics—practical ways to advance despite bias/politics, paired with a strong community."
        },
        {
            q: "Do I need to be a manager to join?",
            a: "No. Programs match your stage—from early career to C-suite."
        },
        {
            q: "Fees and schedules?",
            a: "Check the program details or contact our advisor for the latest schedule and fee information."
        }
    ],
    
    // Objection Handling Bank
    objections: {
        career_break: {
            keywords: ["career break", "gap", "returning", "comeback", "resume gap", "took time off", "maternity", "sabbatical"],
            response: {
                empathy: "Career breaks are more common than you think, and they don't define your potential.",
                solution: "Our Leadership Essentials program is specifically designed for career returnees. Many of our most successful alumni joined after breaks of 2-7 years.",
                proof: "Anjali R. landed a Tech Lead role after a 5-year break. Her words: 'Iron Lady gave me the confidence to own my narrative.'",
                recommendation: "leadership_essentials"
            }
        },
        language: {
            keywords: ["english", "language", "not fluent", "communication", "speaking", "accent", "not confident speaking"],
            response: {
                empathy: "Communication confidence is a skill we actively build—it's not about perfect English.",
                solution: "Our programs focus on strategic communication, not linguistic perfection. We have participants from diverse backgrounds, and many find their voice through our supportive cohort environment.",
                proof: "Women from non-English speaking backgrounds have thrived—what matters is your ideas, not your accent.",
                recommendation: null
            }
        },
        fees_roi: {
            keywords: ["expensive", "afford", "roi", "return on investment", "worth it", "value", "justify cost", "budget"],
            response: {
                empathy: "Investing in yourself is a big decision, and you should feel confident about the returns.",
                solution: "On average, our alumni see a 35-40% salary increase within 18 months. The program cost is typically recovered within the first raise or promotion.",
                proof: "Many participants negotiate raises that exceed the program cost within months of completion.",
                recommendation: null
            }
        },
        time_commitment: {
            keywords: ["time", "busy", "commitment", "hours", "schedule", "workload", "manage time", "too much"],
            response: {
                empathy: "We understand you're already juggling a lot—that's exactly why our programs are designed for busy professionals.",
                solution: "Most programs require 4-6 hours per week, with flexible async content. Live sessions are recorded. The 2-Day Masterclass is a compact option if you prefer an intensive format.",
                proof: "Working mothers, executives with demanding jobs, and entrepreneurs all successfully complete our programs.",
                recommendation: "masterclass"
            }
        },
        not_tech: {
            keywords: ["not tech", "non-tech", "not from tech", "different industry", "traditional", "non-it"],
            response: {
                empathy: "Iron Lady is industry-agnostic—our methods work across all sectors.",
                solution: "We have alumni from finance, healthcare, manufacturing, education, retail, and more. The principles of visibility, influence, and strategic positioning are universal.",
                proof: "Our community includes women from 50+ industries, and the cross-industry networking is often cited as a key benefit.",
                recommendation: null
            }
        },
        location: {
            keywords: ["location", "city", "remote", "online", "travel", "where", "in-person", "virtual"],
            response: {
                empathy: "Geography shouldn't limit your growth.",
                solution: "All our programs are online-first, with participants from across India and globally. Live sessions are at India-friendly times (usually evenings/weekends IST).",
                proof: "We have active alumni from 15+ countries and 50+ cities in India.",
                recommendation: null
            }
        },
        company_sponsorship: {
            keywords: ["company sponsor", "employer pay", "L&D budget", "learning budget", "reimbursement", "company approval"],
            response: {
                empathy: "Many companies do sponsor professional development—it's worth exploring.",
                solution: "We can provide a formal proposal document for your L&D/HR team. Some participants get partial or full sponsorship. We also offer payment plans.",
                proof: "Women from companies like Google, Microsoft, TCS, Infosys, and many startups have had their programs sponsored.",
                recommendation: null
            }
        },
        skeptical: {
            keywords: ["skeptical", "scam", "real", "legitimate", "trust", "reviews", "proof", "guarantee"],
            response: {
                empathy: "Healthy skepticism is good—you should vet any program before committing.",
                solution: "We encourage you to: (1) Attend a free webinar or masterclass, (2) Connect with alumni on LinkedIn, (3) Read verified reviews. We don't promise overnight miracles—we provide frameworks that work with consistent application.",
                proof: "10,000+ women trained, 85% report career growth, alumni at 50+ leading companies.",
                recommendation: "masterclass"
            }
        },
        age: {
            keywords: ["too old", "too young", "age", "senior", "junior", "experienced", "fresher"],
            response: {
                empathy: "Career growth has no age limit—we've seen breakthroughs at every stage.",
                solution: "Our youngest participant was 23, our oldest 58. What matters is your ambition and willingness to apply the frameworks. We match you to the right program for your stage.",
                proof: "Women in their 40s and 50s have landed their first board positions through our C-Suite Mastery program.",
                recommendation: null
            }
        }
    },
    onboarding_checklist: [
        "Clarify your 90-day goal",
        "List 3 strengths and 3 blockers",
        "Draft a 'shameless pitch' for your next opportunity",
        "Block calendar for sessions",
        "Join the community channel once enrolled"
    ],
    success_stories: [
        {
            name: "Priya M.",
            initials: "PM",
            role: "Product Manager → Senior Director",
            program: "hundred_board_members",
            quote: "I was stuck at the same level for 4 years. Within 8 months of joining, I got promoted twice and increased my salary by 60%.",
            outcome: "2 promotions in 8 months",
            // Situational tags for matching
            situations: ["stuck", "mid_career", "promotion"],
            career_stage: "mid",
            challenges: ["missed_promotions", "recognition"],
            salary_increase: "60%"
        },
        {
            name: "Anjali R.",
            initials: "AR",
            role: "Career Break → Tech Lead",
            program: "leadership_essentials",
            quote: "After a 5-year career break, I was terrified to return. Iron Lady gave me the confidence and tactics to land a leadership role.",
            outcome: "Landed dream job after 5-year break",
            situations: ["career_break", "returning", "confidence"],
            career_stage: "early",
            challenges: ["confidence", "clarity"],
            years_break: 5
        },
        {
            name: "Meera S.",
            initials: "MS",
            role: "VP Engineering → CTO",
            program: "csuite_mastery",
            quote: "The C-Suite Mastery program completely shifted how I think about my role. I now operate as a strategic leader, not just a functional head.",
            outcome: "Promoted to CTO within 1 year",
            situations: ["senior", "executive", "strategic"],
            career_stage: "senior",
            challenges: ["clarity", "recognition"],
            salary_increase: "45%"
        },
        {
            name: "Kavitha J.",
            initials: "KJ",
            role: "Manager → Board Member",
            program: "hundred_board_members",
            quote: "I never thought board positions were accessible to someone like me. Iron Lady showed me exactly how to get there.",
            outcome: "Joined first board within 18 months",
            situations: ["board", "mid_career", "aspiring"],
            career_stage: "mid",
            challenges: ["recognition", "missed_promotions"],
            goal: "board"
        },
        {
            name: "Deepa N.",
            initials: "DN",
            role: "Individual Contributor → Team Lead",
            program: "masterclass",
            quote: "The 2-day masterclass was a turning point. I defined my B-HAG and achieved it in just 90 days.",
            outcome: "Achieved 90-day goal ahead of schedule",
            situations: ["quick_start", "early_career", "first_leadership"],
            career_stage: "early",
            challenges: ["confidence", "clarity"],
            goal: "promotion"
        },
        // Additional situational stories
        {
            name: "Sunita K.",
            initials: "SK",
            role: "Homemaker → Entrepreneur",
            program: "leadership_essentials",
            quote: "I was financially dependent on my husband for 12 years. Iron Lady gave me the confidence to start my own consulting business. Now I earn more than I ever did.",
            outcome: "Started business, now financially independent",
            situations: ["dependent", "homemaker", "restart", "confidence"],
            career_stage: "early",
            challenges: ["confidence", "clarity"],
            emotional: true
        },
        {
            name: "Lakshmi V.",
            initials: "LV",
            role: "Failed Startup → VP Product",
            program: "hundred_board_members",
            quote: "After my startup failed, I felt like a complete failure. Iron Lady helped me see my experience as strength, not weakness. I'm now VP at a Fortune 500.",
            outcome: "From 'failure' to VP in 14 months",
            situations: ["failure", "setback", "entrepreneur", "recovery"],
            career_stage: "mid",
            challenges: ["confidence", "recognition"],
            emotional: true
        },
        {
            name: "Rashmi P.",
            initials: "RP",
            role: "Passed Over 3 Times → Director",
            program: "hundred_board_members",
            quote: "I watched 3 male colleagues get promoted over me despite my better results. Iron Lady taught me how to make my work visible. I got Director title within 6 months.",
            outcome: "Finally promoted after being passed over 3 times",
            situations: ["bias", "passed_over", "frustrated", "unfair"],
            career_stage: "mid",
            challenges: ["bias", "missed_promotions", "recognition"],
            emotional: true
        },
        {
            name: "Neha G.",
            initials: "NG",
            role: "Anxious Speaker → Keynote Speaker",
            program: "leadership_essentials",
            quote: "I used to shake when presenting to 5 people. Now I speak at conferences with 500+ attendees. The confidence techniques literally changed my life.",
            outcome: "From anxiety to keynote speaker",
            situations: ["nervous", "anxious", "speaking", "confidence"],
            career_stage: "early",
            challenges: ["confidence"],
            emotional: true
        },
        {
            name: "Divya M.",
            initials: "DM",
            role: "Unhappy Engineer → Happy Leader",
            program: "masterclass",
            quote: "I was miserable in my job, dragging myself to work every day. The masterclass helped me realize what I actually wanted. I switched roles and love my work now.",
            outcome: "Found career clarity and happiness",
            situations: ["unhappy", "stuck", "unfulfilled", "confused"],
            career_stage: "early",
            challenges: ["clarity"],
            emotional: true,
            goal: "clarity"
        }
    ],
    
    // ============================================
    // Free Resources (for users asking about free content)
    // ============================================
    free_resources: [
        {
            id: "confidence_worksheet",
            name: "Confidence Building Worksheet",
            type: "PDF Download",
            description: "A step-by-step guide to identify and overcome confidence blockers",
            icon: "📋",
            hasContent: true,
            content: {
                title: "Confidence Building Worksheet",
                sections: [
                    {
                        heading: "Step 1: Identify Your Confidence Blockers",
                        items: [
                            "What situations make you feel most uncertain?",
                            "When do you hold back from speaking up?",
                            "What negative self-talk do you notice?",
                            "List 3 fears that stop you from taking action"
                        ]
                    },
                    {
                        heading: "Step 2: Challenge Your Inner Critic",
                        items: [
                            "For each fear, ask: 'Is this fact or feeling?'",
                            "What would you tell a friend in this situation?",
                            "What's the worst that could happen? Can you survive it?",
                            "What's the BEST that could happen?"
                        ]
                    },
                    {
                        heading: "Step 3: Build Your Confidence Bank",
                        items: [
                            "List 5 achievements you're proud of (any size)",
                            "List 3 compliments you've received at work",
                            "List 2 challenges you've overcome",
                            "List 1 time you surprised yourself"
                        ]
                    },
                    {
                        heading: "Step 4: Your 7-Day Confidence Challenge",
                        items: [
                            "Day 1: Speak up once in a meeting (even to agree)",
                            "Day 2: Share one idea with a colleague",
                            "Day 3: Ask one question you've been holding back",
                            "Day 4: Say 'no' to one thing that drains you",
                            "Day 5: Volunteer for one small visible task",
                            "Day 6: Give genuine praise to someone",
                            "Day 7: Reflect and celebrate your progress"
                        ]
                    }
                ],
                quote: "Confidence is not 'I will succeed.' It's 'I will be okay either way.'"
            }
        },
        {
            id: "daily_rituals",
            name: "Daily Leadership Rituals",
            type: "PDF Download",
            description: "3 small daily tasks that rebuild belief and create momentum",
            icon: "🌅",
            hasContent: true,
            content: {
                title: "Daily Leadership Rituals",
                sections: [
                    {
                        heading: "🌅 Morning Power Ritual (5 minutes)",
                        items: [
                            "Write 3 things you're grateful for",
                            "State your ONE priority for today",
                            "Affirmation: 'I am capable, I am worthy, I am enough'",
                            "Visualize yourself succeeding at today's challenge"
                        ]
                    },
                    {
                        heading: "💪 Midday Momentum Check (2 minutes)",
                        items: [
                            "Did I make progress on my ONE priority?",
                            "Did I speak up or contribute today?",
                            "Am I taking care of my energy (water, break, movement)?",
                            "Quick reset: 3 deep breaths if feeling overwhelmed"
                        ]
                    },
                    {
                        heading: "🌙 Evening Reflection (5 minutes)",
                        items: [
                            "What went well today? (Write at least 1 win)",
                            "What did I learn?",
                            "What will I do differently tomorrow?",
                            "Self-compassion: 'I did my best with what I knew'"
                        ]
                    },
                    {
                        heading: "📅 Weekly Leadership Habits",
                        items: [
                            "Monday: Set 3 weekly goals (not tasks, goals)",
                            "Wednesday: Check-in — Am I on track?",
                            "Friday: Celebrate wins, plan next week",
                            "Weekend: Rest, recharge, read/learn something new"
                        ]
                    }
                ],
                quote: "Small daily disciplines lead to massive long-term results."
            }
        },
        {
            id: "bias_guide",
            name: "Bias Navigation Mini Guide",
            type: "PDF Download",
            description: "Quick tactics to handle workplace bias without confrontation",
            icon: "⚖️",
            hasContent: true,
            content: {
                title: "Bias Navigation Tactics",
                sections: [
                    {
                        heading: "🎯 Tactic 1: The Record & Redirect",
                        items: [
                            "When interrupted: 'I'd like to finish my point...'",
                            "When idea is stolen: 'Thanks for building on my earlier suggestion...'",
                            "Document incidents privately (date, time, witnesses)",
                            "Focus on patterns, not single events"
                        ]
                    },
                    {
                        heading: "🤝 Tactic 2: Build Strategic Allies",
                        items: [
                            "Identify 2-3 colleagues who will amplify your voice",
                            "Practice mutual credit-giving",
                            "Create pre-meeting agreements to support each other",
                            "Allies can call out bias without you seeming defensive"
                        ]
                    },
                    {
                        heading: "📊 Tactic 3: Make Your Work Visible",
                        items: [
                            "Send weekly progress updates to your manager",
                            "Share wins in team meetings (not bragging, informing)",
                            "Volunteer for visible projects",
                            "Document your contributions for reviews"
                        ]
                    },
                    {
                        heading: "🛡️ Tactic 4: Protect Your Energy",
                        items: [
                            "Not every bias needs a response — pick your battles",
                            "Build a support network outside your team",
                            "Set boundaries on emotional labor",
                            "Know when to escalate vs. when to document"
                        ]
                    }
                ],
                quote: "You don't have to fight every battle. But document every incident."
            }
        },
        {
            id: "free_webinar",
            name: "Free Masterclass Preview",
            type: "Video",
            description: "Watch an inspiring preview of Iron Lady's Business War Tactics",
            icon: "🎥",
            hasContent: false,
            videoUrl: "https://www.youtube.com/watch?v=TeaRkjJ5LKY"
        },
        {
            id: "intro_call",
            name: "Free 10-min Clarity Call",
            type: "Phone Call",
            description: "Speak with an Iron Lady mentor who understands your journey",
            icon: "📞",
            hasContent: false,
            isCallBooking: true
        }
    ],
    
    // ============================================
    // Empowerment Messages (Brand-toned coaching)
    // ============================================
    empowerment_messages: {
        validation: [
            "Feeling like you're 'failing' or 'dependent' does NOT define your worth.",
            "Many strong women started exactly where you are — and still built powerful careers.",
            "Your situation right now is not permanent. It's a chapter, not the whole story.",
            "You do not need to feel strong to take strong steps.",
            "Every Iron Lady started exactly where you are — unsure, scared, undervalued. And still rose."
        ],
        power: [
            "Power is built in silence first — then through action.",
            "You are not starting from zero. You are starting from experience.",
            "Your situation does not define you. Your decisions do.",
            "Confidence doesn't come before action. It comes after.",
            "The difference between stuck and unstoppable is one decision."
        ],
        action: [
            "Let's take ONE small step today — which area do you want to improve first?",
            "You don't need a perfect plan. You need a starting point.",
            "What would change if you believed in yourself for just 30 days?",
            "Small wins create big momentum. What's one thing you can do this week?",
            "Progress isn't about speed. It's about direction."
        ]
    },
    
    // ============================================
    // Micro-Coaching Blocks (Situation-based guidance)
    // ============================================
    micro_coaching: {
        financial_independence: {
            title: "Path to Financial Independence",
            steps: [
                "🎯 Identify ONE marketable skill you already have",
                "📝 Create visibility: Update LinkedIn, share your expertise",
                "💼 Start with low-barrier projects (freelance, consulting)",
                "📚 Build confidence through small paid wins",
                "🚀 Use those wins to negotiate or find better roles"
            ],
            program_fit: "leadership_essentials"
        },
        career_restart: {
            title: "Career Restart Roadmap",
            steps: [
                "📋 Audit your skills — you have more than you think",
                "🔗 Reconnect with 3 former colleagues this week",
                "📝 Update your narrative: 'I took a break to [X], now I'm ready to [Y]'",
                "🎯 Target return-friendly companies and roles",
                "💪 Start with part-time or project work to rebuild confidence"
            ],
            program_fit: "leadership_essentials"
        },
        daily_confidence: {
            title: "Daily Confidence Rituals",
            steps: [
                "🌅 Morning: Write 3 things you're grateful for",
                "💪 Midday: Complete ONE small task you've been avoiding",
                "📝 Evening: Write down ONE win from today (no matter how small)",
                "🎤 Weekly: Speak up once in a meeting or conversation",
                "🏆 Monthly: Celebrate progress, not perfection"
            ],
            program_fit: "masterclass"
        },
        toxic_environment: {
            title: "Navigating a Difficult Environment",
            steps: [
                "📝 Document everything — protect yourself",
                "🤝 Build allies quietly — find supportive colleagues",
                "🎯 Focus on portable skills — what can you take anywhere",
                "🚪 Create an exit plan — even if you don't use it",
                "💜 Protect your energy — set boundaries where possible"
            ],
            program_fit: "leadership_essentials"
        }
    },
    
    // ============================================
    // Low Confidence Support Responses
    // ============================================
    low_confidence_support: {
        initial_response: `I hear you, and I want you to know something important:

<strong>Feeling like you're "failing" or "dependent" does NOT mean you are weak.</strong>

Many strong and successful women have felt exactly the same during career breaks, family challenges, or periods of low confidence. But here's the truth: <strong>your situation right now is not permanent.</strong>

Iron Lady's core belief is:
<em>"You do not need confidence first. You need a direction. Confidence comes after action."</em>`,
        
        followup_question: "If you're comfortable, tell me: <strong>What part of your life feels the hardest right now?</strong>",
        
        areas: [
            { id: 'confidence', label: '💪 Confidence & Self-Belief', icon: '💪' },
            { id: 'career', label: '💼 Career & Growth', icon: '💼' },
            { id: 'financial', label: '💰 Financial Independence', icon: '💰' },
            { id: 'family', label: '👨‍👩‍👧 Family Pressure', icon: '👨‍👩‍👧' },
            { id: 'environment', label: '🏢 Work Environment', icon: '🏢' },
            { id: 'other', label: '💭 Something Else', icon: '💭' }
        ]
    }
};

// ============================================
// Conversation State Management
// ============================================

const ConversationState = {
    WELCOME: 'welcome',
    PROGRAM_EXPLORE: 'program_explore',               // Browse all programs first
    PERSONALITY_EXERCISE: 'personality_exercise',      // Quick personality quiz
    ASK_CAREER_STAGE: 'ask_career_stage',
    ASK_GOAL: 'ask_goal',
    ASK_CHALLENGES: 'ask_challenges',
    SHOW_RECOMMENDATION: 'show_recommendation',
    POST_RECOMMENDATION: 'post_recommendation',
    LEAD_CAPTURE: 'lead_capture',
    FAQ: 'faq',
    FREE_CHAT: 'free_chat',
    LOW_CONFIDENCE_SUPPORT: 'low_confidence_support',  // Coaching mode for vulnerable users
    CONFIDENCE_FOLLOWUP: 'confidence_followup',        // Gentle follow-up after emotional support
    SHOWING_CONTACT: 'showing_contact'                 // Showing contact options, awaiting confirmation
};

// Personality Exercise Questions for finding best-fit program
const PERSONALITY_EXERCISE = {
    questions: [
        {
            id: 'work_style',
            question: "When facing a work challenge, what's your first instinct?",
            emoji: '💭',
            options: [
                { id: 'learn', label: 'Research & learn new skills', programs: ['leadership_essentials', 'masterclass'] },
                { id: 'network', label: 'Reach out to mentors/network', programs: ['hundred_board_members', 'csuite_mastery'] },
                { id: 'action', label: 'Take immediate action', programs: ['masterclass', 'leadership_essentials'] },
                { id: 'strategy', label: 'Plan a strategic approach', programs: ['csuite_mastery', 'hundred_board_members'] }
            ]
        },
        {
            id: 'time_availability',
            question: "How much time can you dedicate weekly to your growth?",
            emoji: '⏰',
            options: [
                { id: 'minimal', label: '2-3 hours (busy schedule)', programs: ['masterclass'] },
                { id: 'moderate', label: '4-6 hours (balanced)', programs: ['leadership_essentials', 'masterclass'] },
                { id: 'significant', label: '6-8 hours (committed)', programs: ['hundred_board_members', 'csuite_mastery'] },
                { id: 'intensive', label: '8+ hours (intensive growth)', programs: ['csuite_mastery'] }
            ]
        },
        {
            id: 'career_aspiration',
            question: "Where do you see yourself in 2 years?",
            emoji: '🎯',
            options: [
                { id: 'confident_leader', label: 'Confidently leading my team', programs: ['leadership_essentials'] },
                { id: 'senior_role', label: 'In a senior/director role', programs: ['hundred_board_members'] },
                { id: 'csuite', label: 'In C-suite or board position', programs: ['csuite_mastery'] },
                { id: 'quick_win', label: 'Quick career boost now', programs: ['masterclass'] }
            ]
        }
    ]
};

// Track personality exercise answers
let personalityAnswers = {};

let conversation = {
    state: ConversationState.WELCOME,
    userProfile: {
        careerStage: null,
        goal: null,
        challenges: [],
        name: null,
        email: null,
        phone: null,
        recommendedProgram: null,
        recommendationScore: null,
        alternativeProgram: null,
        alternativeScore: null,
        allScores: null
    },
    messageHistory: []
};

// ============================================
// Local Storage Persistence
// ============================================

const STORAGE_KEY = 'ironlady_pathfinder_conversation';
const ANALYTICS_KEY = 'ironlady_pathfinder_analytics';

// ============================================
// Analytics Tracking System
// ============================================

const Analytics = {
    events: [],
    sessionId: generateSessionId(),
    sessionStart: new Date().toISOString()
};

function generateSessionId() {
    return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

function trackEvent(eventName, eventData = {}) {
    const event = {
        event: eventName,
        timestamp: new Date().toISOString(),
        sessionId: Analytics.sessionId,
        data: {
            ...eventData,
            currentState: conversation.state,
            userProfile: {
                careerStage: conversation.userProfile.careerStage,
                goal: conversation.userProfile.goal,
                challengesCount: conversation.userProfile.challenges.length,
                hasRecommendation: !!conversation.userProfile.recommendedProgram
            }
        }
    };
    
    Analytics.events.push(event);
    
    // Log to console in development
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log('📊 Analytics Event:', event);
    }
    
    // Save to localStorage for persistence
    saveAnalytics();
    
    // Hook for external analytics (Google Analytics, Mixpanel, etc.)
    if (typeof window.gtag === 'function') {
        window.gtag('event', eventName, eventData);
    }
    
    if (typeof window.mixpanel !== 'undefined') {
        window.mixpanel.track(eventName, eventData);
    }
    
    // Custom event for integrations
    window.dispatchEvent(new CustomEvent('ironlady_analytics', { detail: event }));
}

function saveAnalytics() {
    try {
        const analyticsData = {
            sessionId: Analytics.sessionId,
            sessionStart: Analytics.sessionStart,
            events: Analytics.events.slice(-100) // Keep last 100 events
        };
        localStorage.setItem(ANALYTICS_KEY, JSON.stringify(analyticsData));
    } catch (e) {
        console.warn('Could not save analytics:', e);
    }
}

function getAnalyticsSummary() {
    return {
        sessionId: Analytics.sessionId,
        sessionDuration: (new Date() - new Date(Analytics.sessionStart)) / 1000,
        totalEvents: Analytics.events.length,
        events: Analytics.events,
        funnel: {
            started: Analytics.events.some(e => e.event === 'conversation_started'),
            selectedStage: Analytics.events.some(e => e.event === 'career_stage_selected'),
            selectedGoal: Analytics.events.some(e => e.event === 'goal_selected'),
            selectedChallenges: Analytics.events.some(e => e.event === 'challenges_selected'),
            viewedRecommendation: Analytics.events.some(e => e.event === 'recommendation_shown'),
            initiatedEnrollment: Analytics.events.some(e => e.event === 'enrollment_initiated'),
            capturedLead: Analytics.events.some(e => e.event === 'lead_captured')
        }
    };
}

// Export analytics for external use
window.IronLadyAnalytics = {
    track: trackEvent,
    getSummary: getAnalyticsSummary,
    getEvents: () => Analytics.events
};

function saveToLocalStorage() {
    try {
        const dataToSave = {
            state: conversation.state,
            userProfile: conversation.userProfile,
            timestamp: new Date().toISOString()
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
    } catch (e) {
        console.warn('Could not save to localStorage:', e);
    }
}

function loadFromLocalStorage() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            const data = JSON.parse(saved);
            // Check if data is less than 24 hours old
            const savedTime = new Date(data.timestamp);
            const now = new Date();
            const hoursDiff = (now - savedTime) / (1000 * 60 * 60);
            
            if (hoursDiff < 24) {
                return data;
            }
        }
    } catch (e) {
        console.warn('Could not load from localStorage:', e);
    }
    return null;
}

function clearLocalStorage() {
    try {
        localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
        console.warn('Could not clear localStorage:', e);
    }
}

// ============================================
// Career Stage & Goal Definitions
// ============================================

const CAREER_STAGES = [
    { id: 'early', label: 'Early Career', desc: '0-5 years experience', icon: '🌱' },
    { id: 'mid', label: 'Mid Career', desc: '5-15 years, ready to grow', icon: '🚀' },
    { id: 'senior', label: 'Senior/Executive', desc: '15+ years, leadership roles', icon: '⭐' },
    { id: 'entrepreneur', label: 'Entrepreneur', desc: 'Building my own venture', icon: '💡' }
];

const GOALS = [
    { id: 'promotion', label: 'Get Promoted', desc: 'Move to the next level', icon: '📈' },
    { id: 'salary', label: 'Salary Growth', desc: 'Increase compensation', icon: '💰' },
    { id: 'return', label: 'Return to Work', desc: 'After a career break', icon: '🔄' },
    { id: 'leadership', label: 'Leadership Role', desc: 'Lead teams effectively', icon: '👑' },
    { id: 'board', label: 'Board Exposure', desc: 'Board-level positions', icon: '🎯' },
    { id: 'quick_start', label: 'Quick Start', desc: 'Immediate momentum', icon: '⚡' }
];

const CHALLENGES = [
    { id: 'bias', label: 'Bias & Politics', desc: 'Navigating workplace dynamics', icon: '⚖️' },
    { id: 'recognition', label: 'Lack of Recognition', desc: 'Work not being noticed', icon: '🌟' },
    { id: 'missed_promotions', label: 'Missed Promotions', desc: 'Passed over for opportunities', icon: '📉' },
    { id: 'confidence', label: 'Confidence/Speaking Up', desc: 'Finding my voice', icon: '🎤' },
    { id: 'clarity', label: 'Role Clarity', desc: 'Understanding next steps', icon: '🔍' }
];

// Learning path sequences
const LEARNING_PATHS = {
    early: ['masterclass', 'leadership_essentials', 'hundred_board_members'],
    mid: ['masterclass', 'hundred_board_members', 'csuite_mastery'],
    senior: ['hundred_board_members', 'csuite_mastery'],
    entrepreneur: ['masterclass', 'csuite_mastery']
};

// ============================================
// DOM Elements
// ============================================

const chatMessages = document.getElementById('chatMessages');
const quickActions = document.getElementById('quickActions');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const resetChat = document.getElementById('resetChat');
const leadModal = document.getElementById('leadModal');
const leadForm = document.getElementById('leadForm');
const closeModal = document.getElementById('closeModal');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');
const progressBar = document.getElementById('progressBar');

// ============================================
// Progress Indicator Functions
// ============================================

function showProgressBar() {
    progressBar.style.display = 'flex';
}

function hideProgressBar() {
    progressBar.style.display = 'none';
}

function updateProgress(currentStep) {
    const dots = document.querySelectorAll('.progress-dot');
    const lines = document.querySelectorAll('.progress-line');
    const labels = document.querySelectorAll('.progress-label');
    
    dots.forEach((dot, index) => {
        const stepNum = index + 1;
        dot.classList.remove('active', 'completed');
        labels[index].classList.remove('active');
        
        if (stepNum < currentStep) {
            dot.classList.add('completed');
            dot.innerHTML = '✓';
        } else if (stepNum === currentStep) {
            dot.classList.add('active');
            dot.innerHTML = stepNum;
            labels[index].classList.add('active');
        } else {
            dot.innerHTML = stepNum;
        }
    });
    
    lines.forEach((line, index) => {
        line.classList.remove('completed');
        if (index + 1 < currentStep) {
            line.classList.add('completed');
        }
    });
}

// ============================================
// Message Rendering Functions
// ============================================

function addMessage(content, isUser = false, options = {}) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user' : 'assistant'}`;
    if (options.className) messageDiv.classList.add(options.className);
    
    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.textContent = isUser ? 'You' : 'IL';
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.innerHTML = content;
    
    messageDiv.appendChild(avatar);
    messageDiv.appendChild(contentDiv);
    
    chatMessages.appendChild(messageDiv);
    scrollToBottom();
    
    conversation.messageHistory.push({ content, isUser, timestamp: new Date() });
    
    // Voice output for assistant messages ONLY if:
    // 1. Voice output is enabled AND
    // 2. The user's last input was via voice (not keyboard)
    // This prevents voice responses when user is typing
    if (!isUser && !options.silent && voiceOutputEnabled && window._currentInputIsVoice) {
        // Use detected language for speech output
        speak(content, detectedLanguage);
    }
    
    // Save state after each message
    saveToLocalStorage();
}

function showTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message assistant';
    typingDiv.id = 'typingIndicator';
    
    typingDiv.innerHTML = `
        <div class="message-avatar">IL</div>
        <div class="message-content">
            <div class="typing-indicator">
                <span></span><span></span><span></span>
            </div>
        </div>
    `;
    
    chatMessages.appendChild(typingDiv);
    scrollToBottom();
}

function hideTypingIndicator() {
    const indicator = document.getElementById('typingIndicator');
    if (indicator) indicator.remove();
}

function scrollToBottom() {
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function setQuickActions(actions) {
    quickActions.innerHTML = '';
    actions.forEach(action => {
        const btn = document.createElement('button');
        btn.className = `quick-action-btn ${action.type || ''}`;
        btn.textContent = action.label;
        btn.onclick = () => handleQuickAction(action);
        quickActions.appendChild(btn);
    });
}

function clearQuickActions() {
    quickActions.innerHTML = '';
}

// ============================================
// Conversation Flow Handlers
// ============================================

function startConversation() {
    conversation.state = ConversationState.WELCOME;
    trackEvent('conversation_started');
    
    const welcomeMessage = `
        <h3>Welcome to Iron Lady Pathfinder</h3>
        <p>I'm here to help you find the perfect leadership program to accelerate your career.</p>
        <p><strong>Iron Lady's mission:</strong> ${KB.brand.mission}</p>
        <p>Our approach—<strong>Business War Tactics</strong>—gives you practical strategies to win despite bias, politics, and glass ceilings.</p>
        <div class="cta">Let's find your path. Ready to start?</div>
    `;
    
    addMessage(welcomeMessage, false, { className: 'welcome-message' });
    
    setQuickActions([
        { label: "Find all programs", type: 'primary', action: 'list_programs' },
        { label: "Success stories", action: 'show_success_stories' },
        { label: "What is Iron Lady?", action: 'about_iron_lady' }
    ]);
}

function handleQuickAction(action) {
    clearQuickActions();
    
    // Button clicks are NOT voice input
    lastInputWasVoice = false;
    window._currentInputIsVoice = false;
    
    // Echo user selection
    addMessage(action.label, true);
    
    showTypingIndicator();
    
    setTimeout(() => {
        hideTypingIndicator();
        processAction(action.action, action.data);
    }, 500 + Math.random() * 500);
}

// ============================================
// Program Explorer (Shows all programs first)
// ============================================

function showProgramExplorer() {
    conversation.state = ConversationState.PROGRAM_EXPLORE;
    trackEvent('program_explorer_opened');
    
    const config = window.CONFIG || {};
    
    // Get success stories for each program
    const programSuccessStories = {};
    KB.success_stories.forEach(story => {
        if (!programSuccessStories[story.program]) {
            programSuccessStories[story.program] = [];
        }
        programSuccessStories[story.program].push(story);
    });
    
    let programsHTML = `
        <h3>🎯 Explore Our Programs</h3>
        <p>Click on any program to see <strong>full details, cost, and success stories</strong>. Then take a quick personality exercise to find your perfect match!</p>
        
        <div class="program-explorer-grid">
    `;
    
    KB.programs.forEach(program => {
        const schedule = config.schedules?.[program.id] || {};
        const stories = programSuccessStories[program.id] || [];
        const storyPreview = stories[0] ? `"${stories[0].quote.substring(0, 60)}..."` : '';
        
        // Get program icon
        const icons = {
            leadership_essentials: '🌱',
            hundred_board_members: '🚀',
            csuite_mastery: '👑',
            masterclass: '⚡'
        };
        
        programsHTML += `
            <div class="program-explore-card" onclick="openProgramModal('${program.id}')">
                <div class="pec-header">
                    <span class="pec-icon">${icons[program.id] || '📚'}</span>
                    <span class="pec-name">${program.name}</span>
                </div>
                
                <div class="pec-tagline">${program.tagline}</div>
                
                <div class="pec-quick-info">
                    <div class="pec-info-item">
                        <span class="pec-label">Duration</span>
                        <span class="pec-value">${schedule.duration || program.format}</span>
                    </div>
                    <div class="pec-info-item highlight">
                        <span class="pec-label">Investment</span>
                        <span class="pec-value">${schedule.price_range || 'Contact for pricing'}</span>
                    </div>
                </div>
                
                <div class="pec-best-for">
                    <strong>Best for:</strong> ${program.who[0]}
                </div>
                
                ${storyPreview ? `
                <div class="pec-story-preview">
                    <span class="pec-story-icon">⭐</span>
                    <span class="pec-story-text">${storyPreview}</span>
                </div>
                ` : ''}
                
                <div class="pec-cta">👆 Tap for full details</div>
            </div>
        `;
    });
    
    programsHTML += `
        </div>
        <div class="cta" style="margin-top: 16px;">
            After exploring, take a <strong>30-second personality exercise</strong> to find your best match! 🎯
        </div>
    `;
    
    addMessage(programsHTML);
    
    setQuickActions([
        { label: "🎯 Start Personality Exercise", type: 'primary', action: 'start_personality_exercise' },
        { label: "📞 Talk to Advisor First", action: 'book_call' },
        { label: "I know which program I want", action: 'skip_to_assessment' }
    ]);
}

// Open detailed program modal with cost, modules, success stories
function openProgramModal(programId) {
    const program = KB.programs.find(p => p.id === programId);
    if (!program) return;
    
    const config = window.CONFIG || {};
    const schedule = config.schedules?.[programId] || {};
    
    // Get success stories for this program
    const stories = KB.success_stories.filter(s => s.program === programId);
    
    trackEvent('program_modal_opened', { program: programId });
    
    // Build modules list
    const modulesHTML = program.modules ? 
        program.modules.map(m => `<li>${m}</li>`).join('') : 
        '<li>Contact us for curriculum details</li>';
    
    // Build deliverables list
    const deliverablesHTML = program.deliverables ? 
        program.deliverables.map(d => `<li>✓ ${d}</li>`).join('') : '';
    
    // Build success stories
    let storiesHTML = '';
    if (stories.length > 0) {
        storiesHTML = `
            <div class="pm-section">
                <h4>⭐ Success Stories</h4>
                <div class="pm-stories">
                    ${stories.slice(0, 3).map(story => `
                        <div class="pm-story">
                            <div class="pm-story-quote">"${story.quote}"</div>
                            <div class="pm-story-author">
                                <strong>${story.name}</strong> - ${story.role}
                                ${story.result ? `<div class="pm-story-result">📈 ${story.result}</div>` : ''}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
    
    // Icons for programs
    const icons = {
        leadership_essentials: '🌱',
        hundred_board_members: '🚀',
        csuite_mastery: '👑',
        masterclass: '⚡'
    };
    
    const modalHTML = `
        <div class="program-modal-overlay" id="programModalOverlay" onclick="closeProgramModal(event)">
            <div class="program-modal" onclick="event.stopPropagation()">
                <button class="pm-close" onclick="closeProgramModal()">&times;</button>
                
                <div class="pm-header">
                    <span class="pm-icon">${icons[programId] || '📚'}</span>
                    <div>
                        <h3 class="pm-title">${program.name}</h3>
                        <p class="pm-tagline">${program.tagline}</p>
                    </div>
                </div>
                
                <div class="pm-pricing">
                    <div class="pm-price-label">Investment</div>
                    <div class="pm-price-value">${schedule.price_range || 'Contact for pricing'}</div>
                    <div class="pm-price-note">Next Cohort: ${schedule.next_cohort || 'Coming soon'}</div>
                </div>
                
                <div class="pm-section">
                    <h4>📋 Program Details</h4>
                    <div class="pm-details-grid">
                        <div class="pm-detail">
                            <span class="pm-detail-label">Duration</span>
                            <span class="pm-detail-value">${schedule.duration || program.format}</span>
                        </div>
                        <div class="pm-detail">
                            <span class="pm-detail-label">Time/Week</span>
                            <span class="pm-detail-value">${schedule.time_commitment || 'Flexible'}</span>
                        </div>
                        <div class="pm-detail">
                            <span class="pm-detail-label">Cohort Size</span>
                            <span class="pm-detail-value">${schedule.cohort_size || 'Limited seats'}</span>
                        </div>
                        <div class="pm-detail">
                            <span class="pm-detail-label">Sessions</span>
                            <span class="pm-detail-value">${schedule.sessions || 'Live + Async'}</span>
                        </div>
                    </div>
                </div>
                
                <div class="pm-section">
                    <h4>👩‍💼 Best For</h4>
                    <ul class="pm-who-list">
                        ${program.who.map(w => `<li>${w}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="pm-section">
                    <h4>📚 What You'll Learn</h4>
                    <ul class="pm-modules-list">${modulesHTML}</ul>
                </div>
                
                ${deliverablesHTML ? `
                <div class="pm-section">
                    <h4>🎁 What You'll Get</h4>
                    <ul class="pm-deliverables-list">${deliverablesHTML}</ul>
                </div>
                ` : ''}
                
                <div class="pm-section">
                    <h4>🏆 Outcomes</h4>
                    <ul class="pm-outcomes-list">
                        ${program.outcomes.map(o => `<li>✨ ${o}</li>`).join('')}
                    </ul>
                </div>
                
                ${storiesHTML}
                
                <div class="pm-actions">
                    <button class="pm-btn primary" onclick="selectProgramFromModal('${programId}')">
                        This looks right for me!
                    </button>
                    <button class="pm-btn secondary" onclick="closeProgramModal()">
                        Explore other programs
                    </button>
                </div>
            </div>
        </div>
    `;
    
    // Add modal to body
    const existingModal = document.getElementById('programModalOverlay');
    if (existingModal) existingModal.remove();
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

// Close program modal
function closeProgramModal(event) {
    if (event && event.target.id !== 'programModalOverlay') return;
    const modal = document.getElementById('programModalOverlay');
    if (modal) modal.remove();
}

// Select program from modal
function selectProgramFromModal(programId) {
    closeProgramModal();
    conversation.userProfile.recommendedProgram = programId;
    
    addMessage(`Great choice! <strong>${KB.programs.find(p => p.id === programId)?.name}</strong> looks like a strong fit. Let me ask a few quick questions to confirm this is the best match for you.`, true);
    
    showTypingIndicator();
    setTimeout(() => {
        hideTypingIndicator();
        askCareerStage();
    }, 800);
}

// Expose functions globally for onclick handlers
window.openProgramModal = openProgramModal;
window.closeProgramModal = closeProgramModal;
window.selectProgramFromModal = selectProgramFromModal;

// ============================================
// Personality Exercise
// ============================================

function startPersonalityExercise() {
    conversation.state = ConversationState.PERSONALITY_EXERCISE;
    personalityAnswers = {};
    trackEvent('personality_exercise_started');
    
    addMessage(`
        <h3>🎯 Quick Personality Match</h3>
        <p>Answer 3 quick questions to find your perfect program match. Takes only 30 seconds!</p>
    `);
    
    showPersonalityQuestion(0);
}

function showPersonalityQuestion(questionIndex) {
    if (questionIndex >= PERSONALITY_EXERCISE.questions.length) {
        // All questions answered - show results
        showPersonalityResult();
        return;
    }
    
    const q = PERSONALITY_EXERCISE.questions[questionIndex];
    
    const questionHTML = `
        <div class="personality-question">
            <div class="pq-header">
                <span class="pq-number">Question ${questionIndex + 1} of ${PERSONALITY_EXERCISE.questions.length}</span>
                <span class="pq-emoji">${q.emoji}</span>
            </div>
            <div class="pq-text">${q.question}</div>
        </div>
    `;
    
    addMessage(questionHTML);
    
    // Create option buttons
    const actions = q.options.map(opt => ({
        label: opt.label,
        action: 'personality_answer',
        data: { questionId: q.id, answerId: opt.id, questionIndex: questionIndex, programs: opt.programs }
    }));
    
    setQuickActions(actions);
}

function handlePersonalityAnswer(data) {
    const { questionId, answerId, questionIndex, programs } = data;
    
    // Store answer
    personalityAnswers[questionId] = { answerId, programs };
    
    trackEvent('personality_answer', { questionId, answerId });
    
    // Show next question
    showPersonalityQuestion(questionIndex + 1);
}

function showPersonalityResult() {
    // Calculate program scores based on personality answers
    const programScores = {
        leadership_essentials: 0,
        hundred_board_members: 0,
        csuite_mastery: 0,
        masterclass: 0
    };
    
    // Tally scores from personality answers
    Object.values(personalityAnswers).forEach(answer => {
        answer.programs.forEach((programId, index) => {
            // First program gets more weight
            programScores[programId] += (3 - index);
        });
    });
    
    // Find best match
    const sortedPrograms = Object.entries(programScores)
        .sort((a, b) => b[1] - a[1]);
    
    const bestMatch = sortedPrograms[0][0];
    const secondMatch = sortedPrograms[1][0];
    
    const program = KB.programs.find(p => p.id === bestMatch);
    const altProgram = KB.programs.find(p => p.id === secondMatch);
    const config = window.CONFIG || {};
    const schedule = config.schedules?.[bestMatch] || {};
    
    // Store recommendation
    conversation.userProfile.recommendedProgram = bestMatch;
    conversation.userProfile.alternativeProgram = secondMatch;
    
    trackEvent('personality_result', { 
        bestMatch, 
        secondMatch,
        scores: programScores 
    });
    
    // Get a matching success story
    const story = KB.success_stories.find(s => s.program === bestMatch);
    
    const icons = {
        leadership_essentials: '🌱',
        hundred_board_members: '🚀',
        csuite_mastery: '👑',
        masterclass: '⚡'
    };
    
    const resultHTML = `
        <div class="personality-result">
            <div class="pr-header">
                <span class="pr-confetti">🎉</span>
                <h3>Your Perfect Match!</h3>
            </div>
            
            <div class="pr-match-card">
                <div class="pr-match-icon">${icons[bestMatch] || '📚'}</div>
                <div class="pr-match-name">${program.name}</div>
                <div class="pr-match-tagline">${program.tagline}</div>
                
                <div class="pr-match-details">
                    <div class="pr-detail">
                        <span>💰</span> ${schedule.price_range || 'Contact for pricing'}
                    </div>
                    <div class="pr-detail">
                        <span>⏱️</span> ${schedule.duration || program.format}
                    </div>
                    <div class="pr-detail">
                        <span>📅</span> Next: ${schedule.next_cohort || 'Coming soon'}
                    </div>
                </div>
            </div>
            
            <div class="pr-why">
                <h4>Why this matches your personality:</h4>
                <ul>
                    ${program.outcomes.slice(0, 3).map(o => `<li>✓ ${o}</li>`).join('')}
                </ul>
            </div>
            
            ${story ? `
            <div class="pr-story">
                <div class="pr-story-quote">"${story.quote}"</div>
                <div class="pr-story-author">— ${story.name}, ${story.role}</div>
            </div>
            ` : ''}
            
            <div class="pr-alternative">
                <span>Also consider:</span> <strong>${altProgram?.name}</strong>
            </div>
        </div>
    `;
    
    addMessage(resultHTML);
    
    setQuickActions([
        { label: "📋 See Full Program Details", type: 'primary', action: 'show_program_details' },
        { label: "✅ Yes, let's proceed!", type: 'accent', action: 'capture_lead' },
        { label: "📞 Talk to Advisor", action: 'book_call' },
        { label: `Compare with ${altProgram?.name}`, action: 'compare_programs' }
    ]);
    
    conversation.state = ConversationState.SHOW_RECOMMENDATION;
}

function processAction(actionType, data) {
    switch(actionType) {
        case 'start_assessment':
            showProgramExplorer();  // Show all programs first, then personality exercise
            break;
            
        case 'skip_to_assessment':
            askCareerStage();  // Direct path for returning users
            break;
            
        case 'start_personality_exercise':
            startPersonalityExercise();
            break;
            
        case 'personality_answer':
            handlePersonalityAnswer(data);
            break;
            
        case 'compare_programs':
            showProgramComparison();
            break;
            
        case 'compare_all_programs':
            showAllProgramsComparison();
            break;
            
        case 'personalize_with_form':
            openPersonalizationForm();
            break;
            
        case 'about_iron_lady':
            showAboutIronLady();
            break;
            
        case 'list_programs':
            showAllPrograms();
            break;
            
        case 'select_career_stage':
            handleCareerStageSelection(data);
            break;
            
        case 'select_goal':
            handleGoalSelection(data);
            break;
            
        case 'select_challenges':
            handleChallengeSelection(data);
            break;
            
        case 'enroll':
            initiateEnrollment();
            break;
            
        case 'book_call':
            offerCallBooking();
            break;
            
        case 'get_checklist':
            showOnboardingChecklist();
            break;
            
        case 'capture_lead':
            openLeadModal();
            break;
            
        case 'ask_question':
            enableFreeChat();
            break;
            
        case 'show_faq':
            showFAQ();
            break;
            
        case 'business_war_tactics':
            explainBusinessWarTactics();
            break;
            
        case 'restart':
            restartConversation();
            break;
        
        case 'compare_programs':
            showProgramComparison();
            break;
        
        case 'show_success_stories':
            showSuccessStories();
            break;
        
        case 'go_back':
            handleGoBack();
            break;
        
        case 'resume_conversation':
            resumeConversation(data);
            break;
        
        case 'show_alternative':
            showAlternativeProgram();
            break;
        
        case 'skip_to_recommendation':
            trackEvent('challenges_skipped', { challenges: conversation.userProfile.challenges });
            showRecommendation();
            break;
        
        case 'show_program_details':
            showProgramDetails();
            break;
        
        case 'handle_objection':
            handleObjection(data);
            break;
        
        // New: Low confidence support actions
        case 'select_struggle_area':
            handleStruggleAreaSelection(data);
            break;
            
        case 'soft_mentor_call':
            showSoftMentorCall();
            break;
            
        case 'free_resource':
            showFreeResources(data);
            break;
            
        case 'show_all_free_resources':
            showFreeResources();
            break;
            
        case 'whatsapp_contact':
            openWhatsAppContact();
            break;
            
        case 'capture_email_for_resource':
            openLeadModal();
            break;
        
        case 'goal_planner':
            openGoalPlanner();
            break;
            
        default:
            enableFreeChat();
    }
}

// Show detailed program information
function showProgramDetails() {
    const programId = conversation.userProfile.recommendedProgram;
    const program = KB.programs.find(p => p.id === programId);
    
    if (!program) {
        showAllPrograms();
        return;
    }
    
    trackEvent('program_details_viewed', { program: programId });
    
    const config = window.CONFIG;
    const schedule = config?.schedules?.[programId];
    
    const modulesHTML = program.modules ? 
        program.modules.map(m => `<li>${m}</li>`).join('') : '';
    
    const deliverablesHTML = program.deliverables ?
        program.deliverables.map(d => `<li>${d}</li>`).join('') : '';
    
    const whoExamplesHTML = program.who_examples ?
        program.who_examples.map(e => `<li>${e}</li>`).join('') : '';
    
    let scheduleDetails = '';
    if (schedule && config?.features?.show_schedules) {
        scheduleDetails = `
            <div class="program-details">
                <div class="detail-row">
                    <span class="detail-label">Next Cohort</span>
                    <span class="detail-value">${schedule.next_cohort}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Cohort Size</span>
                    <span class="detail-value">${schedule.cohort_size}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Time Commitment</span>
                    <span class="detail-value">${schedule.time_commitment}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Sessions</span>
                    <span class="detail-value">${schedule.sessions}</span>
                </div>
                ${config.features.show_prices ? `
                <div class="detail-row">
                    <span class="detail-label">Investment</span>
                    <span class="detail-value">${schedule.price_range}</span>
                </div>
                ` : ''}
            </div>
        `;
    }
    
    addMessage(`
        <h3>${program.name} - Full Details</h3>
        
        <p><strong>Prerequisites:</strong> ${program.prerequisites || 'None'}</p>
        
        <h4>👥 Ideal For</h4>
        <ul>${whoExamplesHTML}</ul>
        
        ${modulesHTML ? `<h4>📚 Program Modules</h4><ul>${modulesHTML}</ul>` : ''}
        
        ${deliverablesHTML ? `<h4>🎁 What You'll Get</h4><ul>${deliverablesHTML}</ul>` : ''}
        
        ${scheduleDetails}
        
        ${program.success_metrics ? `
        <div class="highlight">
            <strong>Success Metric:</strong> ${program.success_metrics}
        </div>
        ` : ''}
        
        <div class="cta">Ready to get started?</div>
    `);
    
    setQuickActions([
        { label: "🎯 Enroll Now", type: 'accent', action: 'enroll' },
        { label: "📞 Book a Call", type: 'primary', action: 'book_call' },
        { label: "Read Success Stories", action: 'show_success_stories' }
    ]);
}

function showAlternativeProgram() {
    const alternative = getAlternativeProgram();
    if (!alternative) {
        showAllPrograms();
        return;
    }
    
    conversation.userProfile.recommendedProgram = alternative.id;
    
    const outcomesHTML = alternative.outcomes.map(o => `<li>${o}</li>`).join('');
    
    addMessage(`
        <h3>${alternative.name}</h3>
        <div class="program-card">
            <ul class="outcomes">${outcomesHTML}</ul>
            <p><strong>Format:</strong> ${alternative.format}</p>
        </div>
        
        <div class="highlight">
            <strong>Why it works:</strong> ${alternative.why_it_works}
        </div>
        
        <p><strong>Best for:</strong> ${alternative.who.join(', ')}</p>
        
        <div class="cta">Interested in this program?</div>
    `);
    
    setQuickActions([
        { label: "🎯 Enroll Now", type: 'accent', action: 'enroll' },
        { label: "📞 Book a Call", type: 'primary', action: 'book_call' },
        { label: "⬅️ Back to comparison", action: 'compare_programs' }
    ]);
}

function askCareerStage() {
    conversation.state = ConversationState.ASK_CAREER_STAGE;
    showProgressBar();
    updateProgress(1);
    
    let optionsHTML = '<div class="options-grid">';
    CAREER_STAGES.forEach(stage => {
        optionsHTML += `
            <button class="option-btn" data-value="${stage.id}">
                <span class="icon">${stage.icon}</span>
                <span class="label">${stage.label}</span>
                <span class="desc">${stage.desc}</span>
            </button>
        `;
    });
    optionsHTML += '</div>';
    
    addMessage(`
        <p>Great! Let's personalize your journey.</p>
        <p><strong>Where are you in your career right now?</strong></p>
        ${optionsHTML}
    `);
    
    // Add click handlers for option buttons
    setTimeout(() => {
        document.querySelectorAll('.option-btn[data-value]').forEach(btn => {
            btn.onclick = () => {
                const stage = CAREER_STAGES.find(s => s.id === btn.dataset.value);
                addMessage(`${stage.icon} ${stage.label}`, true);
                showTypingIndicator();
                setTimeout(() => {
                    hideTypingIndicator();
                    handleCareerStageSelection(btn.dataset.value);
                }, 600);
            };
        });
    }, 100);
}

function handleCareerStageSelection(stageId) {
    conversation.userProfile.careerStage = stageId;
    conversation.state = ConversationState.ASK_GOAL;
    trackEvent('career_stage_selected', { stage: stageId });
    askGoal();
}

function askGoal() {
    updateProgress(2);
    const stage = CAREER_STAGES.find(s => s.id === conversation.userProfile.careerStage);
    
    let optionsHTML = '<div class="options-grid">';
    GOALS.forEach(goal => {
        optionsHTML += `
            <button class="option-btn" data-goal="${goal.id}">
                <span class="label">${goal.label}</span>
                <span class="desc">${goal.desc}</span>
            </button>
        `;
    });
    optionsHTML += '</div>';
    
    addMessage(`
        <p>Perfect! As someone at the <strong>${stage.label.toLowerCase()}</strong> stage, you have unique opportunities ahead.</p>
        <p><strong>What's your #1 goal for the next 6-12 months?</strong></p>
        ${optionsHTML}
    `);
    
    setTimeout(() => {
        document.querySelectorAll('.option-btn[data-goal]').forEach(btn => {
            btn.onclick = () => {
                const goal = GOALS.find(g => g.id === btn.dataset.goal);
                addMessage(goal.label, true);
                showTypingIndicator();
                setTimeout(() => {
                    hideTypingIndicator();
                    handleGoalSelection(btn.dataset.goal);
                }, 600);
            };
        });
    }, 100);
}

function handleGoalSelection(goalId) {
    conversation.userProfile.goal = goalId;
    conversation.state = ConversationState.ASK_CHALLENGES;
    trackEvent('goal_selected', { goal: goalId });
    askChallenges();
}

function askChallenges() {
    updateProgress(3);
    addMessage(`
        <p>Your goal is valid—and achievable. Let's understand what's standing in your way.</p>
        <p><strong>Which challenges resonate most with you?</strong> (Pick 1-2)</p>
    `);
    
    setQuickActions(CHALLENGES.map(c => ({
        label: c.label,
        action: 'select_challenges',
        data: c.id
    })));
}

function handleChallengeSelection(challengeId) {
    if (!conversation.userProfile.challenges.includes(challengeId)) {
        conversation.userProfile.challenges.push(challengeId);
        trackEvent('challenge_selected', { challenge: challengeId, totalChallenges: conversation.userProfile.challenges.length });
    }
    
    if (conversation.userProfile.challenges.length >= 2) {
        clearQuickActions();
        trackEvent('challenges_completed', { challenges: conversation.userProfile.challenges });
        showRecommendation();
    } else {
        // Show remaining challenges
        const remainingChallenges = CHALLENGES.filter(
            c => !conversation.userProfile.challenges.includes(c.id)
        );
        
        setQuickActions([
            ...remainingChallenges.map(c => ({
                label: c.label,
                action: 'select_challenges',
                data: c.id
            })),
            { label: "That's enough, show me all programs →", type: 'primary', action: 'list_programs' }
        ]);
    }
}

function showRecommendation() {
    conversation.state = ConversationState.SHOW_RECOMMENDATION;
    clearQuickActions();
    updateProgress(4);
    
    const program = recommendProgram();
    conversation.userProfile.recommendedProgram = program.id;
    
    const confidence = getRecommendationConfidence();
    
    const score = conversation.userProfile.recommendationScore || 0;
    
    trackEvent('recommendation_shown', {
        program: program.id,
        programName: program.name,
        confidence: confidence.level,
        score: score,
        alternative: conversation.userProfile.alternativeProgram
    });
    
    // Check for low confidence - suggest advisor call
    if (score < 40) {
        showLowConfidenceRecommendation(program);
        return;
    }
    
    const alternative = getAlternativeProgram();
    
    const goalLabel = GOALS.find(g => g.id === conversation.userProfile.goal)?.label || '';
    const stageLabel = CAREER_STAGES.find(s => s.id === conversation.userProfile.careerStage)?.label || '';
    
    const outcomesHTML = program.outcomes.slice(0, 4).map(o => `<li>${o}</li>`).join('');
    
    // Build "Why this match?" explanation
    const matchExplanation = buildMatchExplanation();
    
    // Get schedule info from CONFIG if available
    const scheduleHTML = buildScheduleCard(program.id);
    
    let alternativeHTML = '';
    if (alternative && conversation.userProfile.alternativeScore > 30) {
        alternativeHTML = `
            <div class="alternative-suggestion">
                <p><strong>Also worth considering:</strong> ${alternative.name}</p>
                <p class="alt-reason">${alternative.why_it_works}</p>
            </div>
        `;
    }
    
    addMessage(`
        <h3>Your Recommended Program</h3>
        <div class="match-badge ${confidence.color}">
            <span class="match-icon">✓</span>
            <span>${confidence.text} for your profile</span>
        </div>
        
        ${matchExplanation}
        
        <div class="program-card recommended">
            <div class="program-header">
                <h4>${program.name}</h4>
                <span class="recommended-badge">Best Match</span>
            </div>
            <ul class="outcomes">${outcomesHTML}</ul>
            <p><strong>Format:</strong> ${program.format}</p>
            ${program.success_metrics ? `<p><strong>Success rate:</strong> ${program.success_metrics}</p>` : ''}
        </div>
        
        ${scheduleHTML}
        
        <div class="highlight">
            <strong>Why this works:</strong> ${program.why_it_works}
        </div>
        
        ${buildROICalculatorHTML()}
        
        ${alternativeHTML}
        
        ${buildMatchingStoriesHTML()}
        
        ${buildAlumniStatsHTML()}
        
        ${buildLearningPath()}
        
        ${buildEditChoicesHTML()}
        
        <div class="cta">Ready to take the next step?</div>
    `);
    
    conversation.state = ConversationState.POST_RECOMMENDATION;
    updateSummaryHeader();
    
    const actions = [
        { label: "🎯 Enroll Now", type: 'accent', action: 'enroll' },
        { label: "📞 Book a Call", type: 'primary', action: 'book_call' },
        { label: "📋 Full Details", action: 'show_program_details' },
        { label: "🗓️ 90-Day Plan", action: 'goal_planner' }
    ];
    
    // Add compare option if there's a viable alternative
    if (alternative && conversation.userProfile.alternativeScore > 30) {
        actions.push({ label: "⚖️ Compare", action: 'compare_programs' });
    }
    
    setQuickActions(actions);
    
    // Show survey after a delay
    setTimeout(() => {
        if (conversation.state === ConversationState.POST_RECOMMENDATION) {
            showSurvey();
        }
    }, 10000);
}

// Build "Why this match?" explanation panel
function buildMatchExplanation() {
    const stageLabel = CAREER_STAGES.find(s => s.id === conversation.userProfile.careerStage)?.label || '';
    const goalLabel = GOALS.find(g => g.id === conversation.userProfile.goal)?.label || '';
    const challengeLabels = conversation.userProfile.challenges
        .map(id => CHALLENGES.find(c => c.id === id)?.label)
        .filter(Boolean);
    
    let factors = [];
    factors.push(`<span class="match-factor"><span class="factor-icon">✓</span> ${stageLabel} stage</span>`);
    factors.push(`<span class="match-factor"><span class="factor-icon">✓</span> ${goalLabel} goal</span>`);
    challengeLabels.forEach(challenge => {
        factors.push(`<span class="match-factor"><span class="factor-icon">✓</span> ${challenge}</span>`);
    });
    
    return `
        <div class="match-explanation">
            <h4>💡 Why this match?</h4>
            <div class="match-factors">
                ${factors.join('')}
            </div>
        </div>
    `;
}

// Build schedule card from CONFIG
function buildScheduleCard(programId) {
    const config = window.CONFIG;
    if (!config?.features?.show_schedules || !config?.schedules?.[programId]) {
        return '';
    }
    
    const schedule = config.schedules[programId];
    
    return `
        <div class="schedule-card">
            <h4>📅 Schedule & Investment</h4>
            <div class="schedule-grid">
                <div class="schedule-item">
                    <span class="schedule-label">Next Cohort</span>
                    <span class="schedule-value">${schedule.next_cohort}</span>
                </div>
                <div class="schedule-item">
                    <span class="schedule-label">Duration</span>
                    <span class="schedule-value">${schedule.duration}</span>
                </div>
                <div class="schedule-item">
                    <span class="schedule-label">Time/Week</span>
                    <span class="schedule-value">${schedule.time_commitment}</span>
                </div>
                ${config.features.show_prices ? `
                <div class="schedule-item">
                    <span class="schedule-label">Investment</span>
                    <span class="schedule-value">${schedule.price_range}</span>
                </div>
                ` : ''}
            </div>
            <div class="last-updated">Last updated: ${config.schedules.last_updated}</div>
        </div>
    `;
}

// Show recommendation when confidence is low
function showLowConfidenceRecommendation(program) {
    const stageLabel = CAREER_STAGES.find(s => s.id === conversation.userProfile.careerStage)?.label || '';
    
    addMessage(`
        <h3>Let's Find Your Perfect Fit</h3>
        
        <div class="low-confidence-warning">
            <h4>🤔 I want to make sure I get this right</h4>
            <p>Based on your responses, I have a suggestion, but speaking with an advisor would help find the ideal program for your unique situation.</p>
        </div>
        
        <p>Here's my initial recommendation:</p>
        
        <div class="program-card">
            <h4>${program.name}</h4>
            <p>${program.why_it_works}</p>
        </div>
        
        <p>An advisor can:</p>
        <ul>
            <li>Understand your specific context better</li>
            <li>Recommend the ideal starting point</li>
            <li>Answer questions about format and commitment</li>
        </ul>
        
        <div class="cta">Would you like to speak with an advisor?</div>
    `);
    
    conversation.state = ConversationState.POST_RECOMMENDATION;
    
    setQuickActions([
        { label: "📞 Yes, connect me", type: 'accent', action: 'book_call' },
        { label: "Show me all programs", action: 'list_programs' },
        { label: "Tell me more about " + program.name, action: 'show_program_details' }
    ]);
}

function recommendProgram() {
    const { careerStage, goal, challenges, struggleArea, emotionallyVulnerable } = conversation.userProfile;
    
    // Scoring system for smarter recommendations
    const scores = {
        leadership_essentials: 0,
        hundred_board_members: 0,
        csuite_mastery: 0,
        masterclass: 0
    };
    
    // Career stage scoring (primary factor - weight: 40)
    const careerWeights = {
        early: { leadership_essentials: 40, masterclass: 20 },
        mid: { hundred_board_members: 40, masterclass: 15 },
        senior: { csuite_mastery: 40, hundred_board_members: 15 },
        entrepreneur: { csuite_mastery: 35, hundred_board_members: 20, masterclass: 10 }
    };
    
    if (careerWeights[careerStage]) {
        Object.entries(careerWeights[careerStage]).forEach(([program, weight]) => {
            scores[program] += weight;
        });
    }
    
    // Goal scoring (secondary factor - weight: 35)
    const goalWeights = {
        promotion: { hundred_board_members: 30, leadership_essentials: 20 },
        salary: { hundred_board_members: 35, csuite_mastery: 20 },
        return: { leadership_essentials: 35, masterclass: 25 },
        leadership: { hundred_board_members: 25, csuite_mastery: 25, leadership_essentials: 15 },
        board: { csuite_mastery: 35, hundred_board_members: 25 },
        quick_start: { masterclass: 50 }
    };
    
    if (goalWeights[goal]) {
        Object.entries(goalWeights[goal]).forEach(([program, weight]) => {
            scores[program] += weight;
        });
    }
    
    // Challenge scoring (tertiary factor - weight: 25)
    const challengeWeights = {
        bias: { leadership_essentials: 15, masterclass: 12, hundred_board_members: 10 },
        recognition: { hundred_board_members: 15, leadership_essentials: 12 },
        missed_promotions: { hundred_board_members: 18, masterclass: 10 },
        confidence: { leadership_essentials: 18, masterclass: 15 },
        clarity: { masterclass: 15, leadership_essentials: 12 }
    };
    
    challenges.forEach(challenge => {
        if (challengeWeights[challenge]) {
            Object.entries(challengeWeights[challenge]).forEach(([program, weight]) => {
                scores[program] += weight;
            });
        }
    });
    
    // NEW: Vulnerability/emotional state scoring boost
    // Users who expressed failing, dependent, hopeless feelings
    // get boosted toward confidence-building programs
    if (emotionallyVulnerable || struggleArea) {
        // Boost Leadership Essentials (confidence rebuilding)
        scores.leadership_essentials += 25;
        // Boost Masterclass (quick win, low pressure)
        scores.masterclass += 15;
        
        // Extra boost based on specific struggle area
        const struggleBoosts = {
            confidence: { leadership_essentials: 10, masterclass: 5 },
            career: { leadership_essentials: 10, hundred_board_members: 5 },
            financial: { leadership_essentials: 10, masterclass: 8 },
            family: { leadership_essentials: 8, masterclass: 10 },
            environment: { leadership_essentials: 12, masterclass: 5 }
        };
        
        if (struggleBoosts[struggleArea]) {
            Object.entries(struggleBoosts[struggleArea]).forEach(([program, weight]) => {
                scores[program] += weight;
            });
        }
    }
    
    // Find best match
    const sortedPrograms = Object.entries(scores)
        .sort((a, b) => b[1] - a[1]);
    
    const bestMatch = sortedPrograms[0];
    const secondBest = sortedPrograms[1];
    
    // Store recommendation confidence and alternatives
    conversation.userProfile.recommendationScore = bestMatch[1];
    conversation.userProfile.alternativeProgram = secondBest[0];
    conversation.userProfile.alternativeScore = secondBest[1];
    conversation.userProfile.allScores = scores;
    
    return KB.programs.find(p => p.id === bestMatch[0]);
}

function getRecommendationConfidence() {
    const score = conversation.userProfile.recommendationScore || 0;
    if (score >= 70) return { level: 'high', text: 'Strong match', color: 'success' };
    if (score >= 50) return { level: 'medium', text: 'Good match', color: 'info' };
    return { level: 'low', text: 'Potential match', color: 'warning' };
}

function getAlternativeProgram() {
    const altId = conversation.userProfile.alternativeProgram;
    return KB.programs.find(p => p.id === altId);
}

// Find success stories that match user's situation
function getMatchingSuccessStories(limit = 2) {
    const { careerStage, goal, challenges, emotionallyVulnerable, lastEmotionalKeyword } = conversation.userProfile;
    const stories = KB.success_stories || [];
    
    // Score each story based on match to user's situation
    const scoredStories = stories.map(story => {
        let score = 0;
        
        // Career stage match (+30)
        if (story.career_stage === careerStage) score += 30;
        
        // Goal match (+25)
        if (story.goal === goal) score += 25;
        
        // Challenge matches (+15 each)
        if (story.challenges && challenges) {
            challenges.forEach(ch => {
                if (story.challenges.includes(ch)) score += 15;
            });
        }
        
        // Emotional situation match (+40 - high priority for vulnerable users)
        if (emotionallyVulnerable && story.emotional) score += 40;
        
        // Situational keyword matches (+20 each)
        if (story.situations && lastEmotionalKeyword) {
            const keyword = lastEmotionalKeyword.toLowerCase();
            story.situations.forEach(sit => {
                if (keyword.includes(sit) || sit.includes(keyword)) score += 20;
            });
        }
        
        // Program match with recommended program (+20)
        if (story.program === conversation.userProfile.recommendedProgram) score += 20;
        
        return { ...story, matchScore: score };
    });
    
    // Sort by score and return top matches
    return scoredStories
        .filter(s => s.matchScore > 0)
        .sort((a, b) => b.matchScore - a.matchScore)
        .slice(0, limit);
}

// Get a story that matches specific emotional state
function getEmotionalMatchingStory(keyword) {
    const lowerKeyword = keyword.toLowerCase();
    
    // Map emotional keywords to situations
    const emotionalMappings = {
        'failing': ['failure', 'setback', 'recovery'],
        'failure': ['failure', 'setback', 'recovery'],
        'dependent': ['dependent', 'homemaker', 'restart'],
        'stuck': ['stuck', 'unfulfilled', 'confused'],
        'unhappy': ['unhappy', 'stuck', 'unfulfilled'],
        'nervous': ['nervous', 'anxious', 'confidence'],
        'anxious': ['nervous', 'anxious', 'confidence'],
        'passed over': ['passed_over', 'bias', 'unfair'],
        'bias': ['bias', 'passed_over', 'unfair'],
        'career break': ['career_break', 'returning', 'restart']
    };
    
    const targetSituations = emotionalMappings[lowerKeyword] || [lowerKeyword];
    
    const match = KB.success_stories.find(story => 
        story.situations && story.situations.some(s => targetSituations.includes(s))
    );
    
    return match;
}

function showAllPrograms() {
    const config = window.CONFIG || {};
    
    trackEvent('all_programs_viewed');
    
    // Icons for programs
    const icons = {
        leadership_essentials: '🌱',
        hundred_board_members: '🚀',
        csuite_mastery: '👑',
        masterclass: '⚡'
    };
    
    addMessage(`<h3>📚 All Iron Lady Programs</h3>
        <p>Here are all our leadership programs with <strong>full details, pricing, and success stories</strong>:</p>`);
    
    // Show each program with FULL details
    KB.programs.forEach((program, index) => {
        const schedule = config.schedules?.[program.id] || {};
        const stories = KB.success_stories.filter(s => s.program === program.id).slice(0, 2);
        
        // Build outcomes list
        const outcomesHTML = program.outcomes.map(o => `<li>✓ ${o}</li>`).join('');
        
        // Build modules list
        const modulesHTML = program.modules ? 
            program.modules.slice(0, 4).map(m => `<li>${m}</li>`).join('') + 
            (program.modules.length > 4 ? `<li><em>+ ${program.modules.length - 4} more...</em></li>` : '') 
            : '';
        
        // Build who it's for
        const whoHTML = program.who.map(w => `<li>👤 ${w}</li>`).join('');
        
        // Build success stories
        let storiesHTML = '';
        if (stories.length > 0) {
            storiesHTML = `
                <div class="program-stories">
                    <h5>⭐ Success Stories</h5>
                    ${stories.map(story => `
                        <div class="mini-story">
                            <div class="mini-story-quote">"${story.quote}"</div>
                            <div class="mini-story-author">— ${story.name}, ${story.role}</div>
                            ${story.result ? `<div class="mini-story-result">📈 ${story.result}</div>` : ''}
                        </div>
                    `).join('')}
                </div>
            `;
        }
        
        const programHTML = `
            <div class="full-program-card" id="program-${program.id}">
                <div class="fpc-header">
                    <span class="fpc-icon">${icons[program.id] || '📚'}</span>
                    <div class="fpc-title-section">
                        <h4 class="fpc-name">${program.name}</h4>
                        <p class="fpc-tagline">${program.tagline || program.why_it_works}</p>
                    </div>
                </div>
                
                <div class="fpc-pricing-bar">
                    <div class="fpc-price">
                        <span class="fpc-price-label">Investment</span>
                        <span class="fpc-price-value">${schedule.price_range || 'Contact for pricing'}</span>
                    </div>
                    <div class="fpc-duration">
                        <span class="fpc-duration-label">Duration</span>
                        <span class="fpc-duration-value">${schedule.duration || program.format}</span>
                    </div>
                    <div class="fpc-next">
                        <span class="fpc-next-label">Next Cohort</span>
                        <span class="fpc-next-value">${schedule.next_cohort || 'Coming soon'}</span>
                    </div>
                </div>
                
                <div class="fpc-section">
                    <h5>👥 Best For</h5>
                    <ul class="fpc-who-list">${whoHTML}</ul>
                </div>
                
                <div class="fpc-section">
                    <h5>🎯 What You'll Achieve</h5>
                    <ul class="fpc-outcomes-list">${outcomesHTML}</ul>
                </div>
                
                ${modulesHTML ? `
                <div class="fpc-section">
                    <h5>📚 Curriculum</h5>
                    <ul class="fpc-modules-list">${modulesHTML}</ul>
                </div>
                ` : ''}
                
                <div class="fpc-details-grid">
                    <div class="fpc-detail">
                        <span class="fpc-detail-icon">⏰</span>
                        <span class="fpc-detail-label">Time/Week</span>
                        <span class="fpc-detail-value">${schedule.time_commitment || 'Flexible'}</span>
                    </div>
                    <div class="fpc-detail">
                        <span class="fpc-detail-icon">👥</span>
                        <span class="fpc-detail-label">Cohort Size</span>
                        <span class="fpc-detail-value">${schedule.cohort_size || 'Limited'}</span>
                    </div>
                    <div class="fpc-detail">
                        <span class="fpc-detail-icon">📊</span>
                        <span class="fpc-detail-label">Success Rate</span>
                        <span class="fpc-detail-value">${program.success_metrics?.split(' ')[0] || 'High'}</span>
                    </div>
                </div>
                
                ${storiesHTML}
                
                <div class="fpc-actions">
                    <button class="fpc-btn primary" onclick="selectProgramDirect('${program.id}')">
                        Choose ${program.name.split(' ')[0]}
                    </button>
                    <button class="fpc-btn secondary" onclick="openProgramModal('${program.id}')">
                        📋 Full Details
                    </button>
                </div>
            </div>
        `;
        
        addMessage(programHTML);
    });
    
    // Final CTA
    addMessage(`
        <div class="all-programs-footer">
            <p><strong>Not sure which to choose?</strong> Take our quick assessment to get a personalized recommendation!</p>
        </div>
    `);
    
    setQuickActions([
        { label: "🎯 Help me choose (Assessment)", type: 'primary', action: 'start_assessment' },
        { label: "📞 Talk to Advisor", action: 'book_call' },
        { label: "Compare Programs", action: 'compare_all_programs' }
    ]);
}

// Select program directly from all programs view
function selectProgramDirect(programId) {
    conversation.userProfile.recommendedProgram = programId;
    const program = KB.programs.find(p => p.id === programId);
    
    trackEvent('program_selected_direct', { program: programId });
    
    addMessage(`Great choice! <strong>${program?.name}</strong> is an excellent program. Let me help you take the next step.`);
    
    setQuickActions([
        { label: "🎯 Enroll Now", type: 'accent', action: 'enroll' },
        { label: "📞 Book a Call", action: 'book_call' },
        { label: "Share my contact", action: 'capture_lead' },
        { label: "🗓️ 90-Day Plan", action: 'show_goal_planner' }
    ]);
}

// Expose to window
window.selectProgramDirect = selectProgramDirect;

// Compare all programs side by side
function showAllProgramsComparison() {
    const config = window.CONFIG || {};
    
    trackEvent('all_programs_comparison_viewed');
    
    let tableHTML = `
        <h3>📊 Program Comparison</h3>
        <p>Compare all programs side by side:</p>
        
        <div class="comparison-table-wrapper">
            <table class="full-compare-table">
                <thead>
                    <tr>
                        <th>Feature</th>
                        <th>🌱 Leadership Essentials</th>
                        <th>🚀 100 Board Members</th>
                        <th>👑 C-Suite Mastery</th>
                        <th>⚡ Masterclass</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Best For</strong></td>
                        <td>Early career (0-5 yrs)</td>
                        <td>Mid career (5-15 yrs)</td>
                        <td>Senior (VP/Director+)</td>
                        <td>Any stage</td>
                    </tr>
                    <tr>
                        <td><strong>Duration</strong></td>
                        <td>${config.schedules?.leadership_essentials?.duration || '4 weeks'}</td>
                        <td>${config.schedules?.hundred_board_members?.duration || '6 months'}</td>
                        <td>${config.schedules?.csuite_mastery?.duration || '4 months'}</td>
                        <td>${config.schedules?.masterclass?.duration || '2 days'}</td>
                    </tr>
                    <tr>
                        <td><strong>Investment</strong></td>
                        <td>${config.schedules?.leadership_essentials?.price_range || '₹25K-35K'}</td>
                        <td>${config.schedules?.hundred_board_members?.price_range || '₹75K-1L'}</td>
                        <td>${config.schedules?.csuite_mastery?.price_range || '₹1.5L-2L'}</td>
                        <td>${config.schedules?.masterclass?.price_range || '₹5K-10K'}</td>
                    </tr>
                    <tr>
                        <td><strong>Time/Week</strong></td>
                        <td>4-6 hours</td>
                        <td>5-7 hours</td>
                        <td>6-8 hours</td>
                        <td>One weekend</td>
                    </tr>
                    <tr>
                        <td><strong>Key Outcome</strong></td>
                        <td>Build confidence & visibility</td>
                        <td>Get promoted to senior roles</td>
                        <td>Reach C-Suite/Board</td>
                        <td>Quick momentum boost</td>
                    </tr>
                    <tr>
                        <td><strong>Success Rate</strong></td>
                        <td>75% confidence boost</td>
                        <td>68% get promoted</td>
                        <td>45% reach C-Suite</td>
                        <td>82% take action</td>
                    </tr>
                    <tr>
                        <td><strong>Next Cohort</strong></td>
                        <td>${config.schedules?.leadership_essentials?.next_cohort || 'March 2026'}</td>
                        <td>${config.schedules?.hundred_board_members?.next_cohort || 'February 2026'}</td>
                        <td>${config.schedules?.csuite_mastery?.next_cohort || 'April 2026'}</td>
                        <td>${config.schedules?.masterclass?.next_cohort || 'Every month'}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
    
    addMessage(tableHTML);
    
    setQuickActions([
        { label: "🎯 Help me choose", type: 'primary', action: 'start_assessment' },
        { label: "📋 See full details", action: 'list_programs' },
        { label: "📞 Talk to Advisor", action: 'book_call' }
    ]);
}

function showAboutIronLady() {
    trackEvent('about_viewed');
    
    addMessage(`
        <h3>About Iron Lady</h3>
        <p><strong>Our Mission:</strong> ${KB.brand.mission}</p>
        <p><strong>Our Philosophy:</strong> ${KB.brand.philosophy}</p>
        <p><strong>Community:</strong> ${KB.brand.community_note}</p>
        
        <div class="highlight">
            Iron Lady is for women who are ready to stop waiting for permission and start winning on their own terms.
        </div>
        
        <div class="cta">Ready to find your path?</div>
    `);
    
    setQuickActions([
        { label: "Find my program", type: 'primary', action: 'start_assessment' },
        { label: "What are Business War Tactics?", action: 'business_war_tactics' },
        { label: "Success stories", action: 'show_success_stories' },
        { label: "See all programs", action: 'list_programs' }
    ]);
}

function explainBusinessWarTactics() {
    addMessage(`
        <h3>Business War Tactics</h3>
        <p>They're <strong>practical strategies to win without fighting</strong>—navigating bias, politics, and glass ceilings while fast-tracking results.</p>
        
        <p>Here's what that means in practice:</p>
        <ul>
            <li><strong>Strategic Maximization:</strong> Make your work visible to the right people</li>
            <li><strong>Shameless Pitching:</strong> Advocate for yourself without apology</li>
            <li><strong>Political Navigation:</strong> Turn office dynamics into opportunities</li>
            <li><strong>Bias Neutralization:</strong> Counter stereotypes with strategic positioning</li>
        </ul>
        
        <div class="cta">Share your top challenge and I'll show how to apply them in your context.</div>
    `);
    
    setQuickActions([
        { label: "Find my program", type: 'primary', action: 'start_assessment' },
        { label: "I have a specific challenge", action: 'ask_question' }
    ]);
}

function initiateEnrollment() {
    const program = KB.programs.find(p => p.id === conversation.userProfile.recommendedProgram);
    const programName = program ? program.name : 'your selected program';
    
    trackEvent('enrollment_initiated', {
        program: conversation.userProfile.recommendedProgram,
        programName: programName
    });
    
    addMessage(`
        <h3>Enroll in ${programName}</h3>
        <p>Excellent choice! Here's how to secure your spot:</p>
        
        <ol>
            <li><strong>Visit the enrollment page:</strong> <a href="${KB.contact.enrollment_link}" target="_blank">${KB.contact.enrollment_link}</a></li>
            <li><strong>Select your cohort:</strong> Choose dates that work for your schedule</li>
            <li><strong>Complete payment:</strong> Secure your seat</li>
            <li><strong>Get onboarding materials:</strong> Prepare with our checklist</li>
        </ol>
        
        <div class="highlight">
            <strong>Note:</strong> This offline assistant doesn't have live schedule/fee data. For the most current information, contact us directly.
        </div>
        
        <div class="cta">Would you like to share your contact info so an advisor can reach out?</div>
    `);
    
    setQuickActions([
        { label: "Yes, contact me", type: 'accent', action: 'capture_lead' },
        { label: "📞 Call " + KB.contact.advisor_phone, action: 'book_call' },
        { label: "📋 Get Prep Checklist", action: 'get_checklist' }
    ]);
}

function offerCallBooking() {
    trackEvent('call_booking_initiated');
    
    const config = window.CONFIG || {};
    const contact = config.contact || KB.contact;
    
    const phoneDisplay = contact.advisor_phone_display || contact.advisor_phone;
    
    let contactCardsHTML = `
        <div class="contact-cards">
            <a href="tel:${contact.advisor_phone}" class="contact-card phone" target="_blank">
                <div class="contact-icon">📞</div>
                <div class="contact-info">
                    <div class="contact-label">Call Advisor</div>
                    <div class="contact-detail">
                        ${phoneDisplay}
                        <button class="copy-btn" onclick="event.preventDefault(); event.stopPropagation(); copyToClipboard('${contact.advisor_phone}', this);" title="Copy number">📋</button>
                    </div>
                </div>
                <div class="contact-arrow">→</div>
            </a>
    `;
    
    if (config.features?.enable_whatsapp !== false) {
        const waMessage = encodeURIComponent(contact.whatsapp_message || "Hi! I'm interested in Iron Lady programs.");
        contactCardsHTML += `
            <a href="https://wa.me/${contact.whatsapp_number}?text=${waMessage}" class="contact-card whatsapp" target="_blank">
                <div class="contact-icon">💬</div>
                <div class="contact-info">
                    <div class="contact-label">WhatsApp</div>
                    <div class="contact-detail">Chat with us instantly</div>
                </div>
                <div class="contact-arrow">→</div>
            </a>
        `;
    }
    
    if (config.features?.enable_calendar_booking !== false && contact.calendar_link) {
        let calendarIcon, calendarLabel, calendarDetail;
        
        switch(contact.calendar_type) {
            case 'google':
                calendarIcon = '📆';
                calendarLabel = 'Book via Google Calendar';
                calendarDetail = 'Pick a time that works for you';
                break;
            case 'email':
                calendarIcon = '📧';
                calendarLabel = 'Email to Book a Call';
                calendarDetail = 'Request a callback time';
                break;
            default:
                calendarIcon = '📅';
                calendarLabel = 'Book a Call';
                calendarDetail = 'Pick a time that works for you';
        }
        
        contactCardsHTML += `
            <a href="${contact.calendar_link}" class="contact-card calendar-booking" target="_blank">
                <div class="contact-icon">${calendarIcon}</div>
                <div class="contact-info">
                    <div class="contact-label">${calendarLabel}</div>
                    <div class="contact-detail">${calendarDetail}</div>
                </div>
                <div class="contact-arrow">→</div>
            </a>
        `;
    }
    
    contactCardsHTML += '</div>';
    
    addMessage(`
        <h3>Connect with an Advisor</h3>
        <p>Our advisors can answer your questions about programs, schedules, and fees.</p>
        
        ${contactCardsHTML}
        
        <p style="margin-top: var(--space-md);"><strong>📧 Email:</strong> <a href="mailto:${contact.email}">${contact.email}</a></p>
        
        <div class="highlight">
            Or share your details and we'll reach out to you within 24 hours.
        </div>
    `);
    
    setQuickActions([
        { label: "Share my contact info", type: 'accent', action: 'capture_lead' },
        { label: "Ask another question", action: 'ask_question' }
    ]);
}

function showOnboardingChecklist() {
    const checklistHTML = KB.onboarding_checklist
        .map((item, i) => `<li><strong>Step ${i + 1}:</strong> ${item}</li>`)
        .join('');
    
    addMessage(`
        <h3>Your Onboarding Prep Checklist</h3>
        <p>Complete these steps before your program starts:</p>
        <ol>${checklistHTML}</ol>
        
        <div class="highlight">
            Pro tip: The more clarity you bring to Day 1, the faster you'll see results.
        </div>
        
        <div class="cta">Want this sent to your email?</div>
    `);
    
    setQuickActions([
        { label: "Yes, email me the checklist", type: 'primary', action: 'capture_lead' },
        { label: "I'm ready to enroll", type: 'accent', action: 'enroll' },
        { label: "Ask another question", action: 'ask_question' }
    ]);
}

function showFAQ() {
    let faqHTML = '<h3>Frequently Asked Questions</h3>';
    
    KB.faqs.forEach(faq => {
        faqHTML += `
            <div class="program-card">
                <h4>${faq.q}</h4>
                <p>${faq.a}</p>
            </div>
        `;
    });
    
    addMessage(faqHTML);
    
    setQuickActions([
        { label: "Find my program", type: 'primary', action: 'start_assessment' },
        { label: "📞 Talk to Advisor", action: 'book_call' },
        { label: "Ask something else", action: 'ask_question' }
    ]);
}

function enableFreeChat() {
    addMessage(`
        <p>I'm here to help! Type your question below, or choose from these common topics:</p>
    `);
    
    setQuickActions([
        { label: "What makes Iron Lady different?", action: 'about_iron_lady' },
        { label: "Business War Tactics?", action: 'business_war_tactics' },
        { label: "See all programs", action: 'list_programs' },
        { label: "FAQs", action: 'show_faq' }
    ]);
    
    conversation.state = ConversationState.FREE_CHAT;
}

function restartConversation() {
    conversation = {
        state: ConversationState.WELCOME,
        userProfile: {
            careerStage: null,
            goal: null,
            challenges: [],
            name: null,
            email: null,
            phone: null,
            recommendedProgram: null,
            recommendationScore: null,
            alternativeProgram: null,
            alternativeScore: null,
            allScores: null
        },
        messageHistory: []
    };
    
    chatMessages.innerHTML = '';
    clearQuickActions();
    hideProgressBar();
    clearLocalStorage();
    startConversation();
}

// ============================================
// Success Stories
// ============================================

function showSuccessStories(programId = null) {
    let stories = KB.success_stories;
    
    // Filter by program if specified
    if (programId) {
        stories = stories.filter(s => s.program === programId);
    }
    
    // Show max 3 stories
    stories = stories.slice(0, 3);
    
    let storiesHTML = '<h3>Success Stories</h3><p>Real women, real results:</p>';
    
    stories.forEach(story => {
        storiesHTML += `
            <div class="success-story">
                <div class="success-story-header">
                    <div class="story-avatar">${story.initials}</div>
                    <div class="story-meta">
                        <div class="story-name">${story.name}</div>
                        <div class="story-role">${story.role}</div>
                    </div>
                </div>
                <p class="story-quote">"${story.quote}"</p>
                <div class="story-outcome">
                    <span>✓</span>
                    <span>${story.outcome}</span>
                </div>
            </div>
        `;
    });
    
    storiesHTML += '<div class="cta">Ready to write your success story?</div>';
    
    addMessage(storiesHTML);
    
    setQuickActions([
        { label: "Find my program", type: 'primary', action: 'start_assessment' },
        { label: "📞 Talk to Advisor", action: 'book_call' },
        { label: "See all programs", action: 'list_programs' }
    ]);
}

// ============================================
// Program Comparison
// ============================================

function showProgramComparison() {
    const recommended = KB.programs.find(p => p.id === conversation.userProfile.recommendedProgram);
    const alternative = getAlternativeProgram();
    
    if (!recommended || !alternative) {
        showAllPrograms();
        return;
    }
    
    const compareHTML = `
        <h3>Program Comparison</h3>
        <p>Here's how your top two matches compare:</p>
        
        <table class="compare-table">
            <thead>
                <tr>
                    <th>Feature</th>
                    <th class="compare-highlight">${recommended.name}</th>
                    <th>${alternative.name}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Best For</td>
                    <td class="compare-highlight">${recommended.who[0]}</td>
                    <td>${alternative.who[0]}</td>
                </tr>
                <tr>
                    <td>Format</td>
                    <td class="compare-highlight">${recommended.format}</td>
                    <td>${alternative.format}</td>
                </tr>
                <tr>
                    <td>Key Outcome</td>
                    <td class="compare-highlight">${recommended.outcomes[0]}</td>
                    <td>${alternative.outcomes[0]}</td>
                </tr>
                <tr>
                    <td>Match Score</td>
                    <td class="compare-highlight"><strong>${conversation.userProfile.recommendationScore} points</strong></td>
                    <td>${conversation.userProfile.alternativeScore} points</td>
                </tr>
            </tbody>
        </table>
        
        <div class="highlight">
            <strong>My recommendation:</strong> ${recommended.name} is your best match because it aligns with your ${CAREER_STAGES.find(s => s.id === conversation.userProfile.careerStage)?.label.toLowerCase()} stage and ${GOALS.find(g => g.id === conversation.userProfile.goal)?.label.toLowerCase()} goal.
        </div>
        
        <div class="cta">Which program interests you more?</div>
    `;
    
    addMessage(compareHTML);
    
    setQuickActions([
        { label: `Choose ${recommended.name}`, type: 'accent', action: 'enroll' },
        { label: `Learn more about ${alternative.name}`, action: 'show_alternative' },
        { label: "📞 Talk to Advisor", action: 'book_call' }
    ]);
}

// ============================================
// Back Navigation
// ============================================

function handleGoBack() {
    const currentState = conversation.state;
    
    switch(currentState) {
        case ConversationState.ASK_GOAL:
            conversation.userProfile.careerStage = null;
            askCareerStage();
            break;
        case ConversationState.ASK_CHALLENGES:
            conversation.userProfile.goal = null;
            askGoal();
            break;
        case ConversationState.SHOW_RECOMMENDATION:
        case ConversationState.POST_RECOMMENDATION:
            conversation.userProfile.challenges = [];
            askChallenges();
            break;
        default:
            restartConversation();
    }
}

// ============================================
// Lead Capture Modal
// ============================================

function openLeadModal() {
    leadModal.classList.add('active');
}

function closeLeadModal() {
    leadModal.classList.remove('active');
}

// ============================================
// Personalization Form (Get info first, then personalize)
// ============================================

function openPersonalizationForm() {
    trackEvent('personalization_form_opened');
    
    // Show inline form in chat
    const formHTML = `
        <div class="personalization-form-card">
            <h3>📝 Let's Personalize Your Journey</h3>
            <p>Share a few details so we can find the <strong>perfect program</strong> for you:</p>
            
            <form id="personalizationForm" class="inline-personalization-form">
                <div class="pf-field">
                    <label for="pf-name">Your Name *</label>
                    <input type="text" id="pf-name" name="name" placeholder="Enter your name" required>
                </div>
                
                <div class="pf-field">
                    <label for="pf-email">Email Address *</label>
                    <input type="email" id="pf-email" name="email" placeholder="your.email@example.com" required>
                </div>
                
                <div class="pf-field">
                    <label for="pf-phone">Phone (Optional)</label>
                    <input type="tel" id="pf-phone" name="phone" placeholder="+91 98765 43210">
                </div>
                
                <div class="pf-field">
                    <label for="pf-goal">What's your biggest career goal right now?</label>
                    <select id="pf-goal" name="goal">
                        <option value="">Select your goal...</option>
                        <option value="promotion">Get promoted faster</option>
                        <option value="salary">Increase my salary</option>
                        <option value="return">Return after career break</option>
                        <option value="leadership">Develop leadership skills</option>
                        <option value="board">Reach board/C-suite</option>
                        <option value="quick_start">Quick momentum boost</option>
                    </select>
                </div>
                
                <div class="pf-consent">
                    <label>
                        <input type="checkbox" id="pf-consent" required>
                        I agree to receive personalized recommendations via email
                    </label>
                </div>
                
                <div class="pf-actions">
                    <button type="submit" class="pf-submit-btn">🎯 Get My Personalized Recommendation</button>
                    <button type="button" class="pf-skip-btn" onclick="skipPersonalizationForm()">Skip, just show me programs</button>
                </div>
            </form>
        </div>
    `;
    
    addMessage(formHTML);
    
    // Add form submit handler
    setTimeout(() => {
        const form = document.getElementById('personalizationForm');
        if (form) {
            form.addEventListener('submit', handlePersonalizationFormSubmit);
        }
    }, 100);
    
    clearQuickActions();
}

function handlePersonalizationFormSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById('pf-name').value.trim();
    const email = document.getElementById('pf-email').value.trim();
    const phone = document.getElementById('pf-phone').value.trim();
    const goal = document.getElementById('pf-goal').value;
    
    // Validate
    if (!name || !email) {
        alert('Please fill in your name and email');
        return;
    }
    
    // Store user info
    conversation.userProfile.name = name;
    conversation.userProfile.email = email;
    conversation.userProfile.phone = phone;
    if (goal) {
        conversation.userProfile.goal = goal;
    }
    
    trackEvent('personalization_form_submitted', { hasGoal: !!goal });
    
    // Save to localStorage
    saveToLocalStorage();
    
    // Send to backend
    submitLeadToBackend();
    
    addMessage(`Thanks ${name}! 🎉 Now let me find the perfect program for you...`, true);
    
    // If they selected a goal, we can skip to recommendations faster
    if (goal) {
        // Go directly to career stage question (we already have goal)
        showTypingIndicator();
        setTimeout(() => {
            hideTypingIndicator();
            askCareerStageOnly();
        }, 800);
    } else {
        // Start full assessment
        showTypingIndicator();
        setTimeout(() => {
            hideTypingIndicator();
            showProgramExplorer();
        }, 800);
    }
}

function skipPersonalizationForm() {
    trackEvent('personalization_form_skipped');
    addMessage("No problem! Let me show you all our programs.", true);
    
    showTypingIndicator();
    setTimeout(() => {
        hideTypingIndicator();
        showAllPrograms();
    }, 500);
}

// Ask only career stage (when we already have goal from form)
function askCareerStageOnly() {
    conversation.state = ConversationState.ASK_CAREER_STAGE;
    showProgressBar(1);
    
    addMessage(`
        <p><strong>Where are you in your career right now?</strong></p>
        <p>This helps me recommend the most suitable program level.</p>
    `);
    
    setQuickActions([
        { label: "🌱 Early Career (0-5 years)", action: 'select_career_stage', data: 'early' },
        { label: "📈 Mid Career (5-15 years)", action: 'select_career_stage', data: 'mid' },
        { label: "👑 Senior/Executive (15+ years)", action: 'select_career_stage', data: 'senior' },
        { label: "🚀 Entrepreneur/Founder", action: 'select_career_stage', data: 'entrepreneur' }
    ]);
}

// Expose to window
window.skipPersonalizationForm = skipPersonalizationForm;

// ============================================
// Form Validation
// ============================================

const ValidationRules = {
    name: {
        required: true,
        minLength: 2,
        pattern: /^[a-zA-Z\s\-'.]+$/,
        messages: {
            required: 'Please enter your name',
            minLength: 'Name must be at least 2 characters',
            pattern: 'Please enter a valid name'
        }
    },
    email: {
        required: true,
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        messages: {
            required: 'Please enter your email',
            pattern: 'Please enter a valid email address'
        }
    },
    phone: {
        required: false,
        pattern: /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\./0-9]*$/,
        minLength: 10,
        messages: {
            pattern: 'Please enter a valid phone number',
            minLength: 'Phone number must be at least 10 digits'
        }
    }
};

function validateField(fieldName, value) {
    const rules = ValidationRules[fieldName];
    if (!rules) return { valid: true };
    
    // Check required
    if (rules.required && (!value || value.trim() === '')) {
        return { valid: false, message: rules.messages.required };
    }
    
    // Skip other validations if field is optional and empty
    if (!rules.required && (!value || value.trim() === '')) {
        return { valid: true };
    }
    
    // Check minLength
    if (rules.minLength && value.length < rules.minLength) {
        return { valid: false, message: rules.messages.minLength };
    }
    
    // Check pattern
    if (rules.pattern && !rules.pattern.test(value)) {
        return { valid: false, message: rules.messages.pattern };
    }
    
    return { valid: true };
}

function showFieldError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const formGroup = field.closest('.form-group');
    
    // Remove any existing error
    clearFieldError(fieldId);
    
    field.classList.add('error');
    field.classList.remove('valid');
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    formGroup.appendChild(errorDiv);
}

function clearFieldError(fieldId) {
    const field = document.getElementById(fieldId);
    const formGroup = field.closest('.form-group');
    
    field.classList.remove('error');
    const existingError = formGroup.querySelector('.error-message');
    if (existingError) existingError.remove();
}

function showFieldValid(fieldId) {
    const field = document.getElementById(fieldId);
    clearFieldError(fieldId);
    field.classList.add('valid');
}

function validateForm() {
    let isValid = true;
    
    const fields = ['leadName', 'leadEmail', 'leadPhone'];
    const fieldMap = { leadName: 'name', leadEmail: 'email', leadPhone: 'phone' };
    
    fields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        const result = validateField(fieldMap[fieldId], field.value);
        
        if (!result.valid) {
            showFieldError(fieldId, result.message);
            isValid = false;
        } else if (field.value) {
            showFieldValid(fieldId);
        }
    });
    
    // Check consent
    const consent = document.getElementById('leadConsent');
    if (!consent.checked) {
        isValid = false;
        showToast('Please accept the consent to continue');
    }
    
    return isValid;
}

function handleLeadSubmission(e) {
    e.preventDefault();
    
    // Honeypot check - if filled, silently reject (bot detected)
    const honeypot = document.getElementById('company');
    if (honeypot && honeypot.value) {
        console.log('Bot detected via honeypot');
        closeLeadModal();
        return;
    }
    
    if (!validateForm()) {
        return;
    }
    
    const formData = new FormData(leadForm);
    conversation.userProfile.name = formData.get('name').trim();
    conversation.userProfile.email = formData.get('email').trim();
    conversation.userProfile.phone = formData.get('phone')?.trim() || '';
    
    // Set the program interest
    const programField = document.getElementById('leadProgram');
    if (programField) {
        programField.value = conversation.userProfile.recommendedProgram || '';
    }
    
    // Send lead to backend if configured
    submitLeadToBackend();
    
    // Save to localStorage
    saveToLocalStorage();
    
    // Track lead capture
    trackEvent('lead_captured', {
        hasPhone: !!conversation.userProfile.phone,
        recommendedProgram: conversation.userProfile.recommendedProgram
    });
    
    closeLeadModal();
    leadForm.reset();
    
    // Clear validation states
    ['leadName', 'leadEmail', 'leadPhone'].forEach(clearFieldError);
    
    showToast('Thank you! We\'ll be in touch soon.');
    
    addMessage(`
        <h3>Thank you, ${conversation.userProfile.name}! 🎉</h3>
        <p>Your information has been received. Here's what happens next:</p>
        <ol>
            <li>An Iron Lady advisor will reach out within 24 hours</li>
            <li>You'll receive program details and next cohort dates</li>
            <li>We'll help you prepare for your leadership journey</li>
        </ol>
        
        <div class="highlight">
            <strong>Meanwhile:</strong> Feel free to explore more or ask any questions!
        </div>
    `);
    
    setQuickActions([
        { label: "See my recommended program", action: 'show_recommendation' },
        { label: "Explore other programs", action: 'list_programs' },
        { label: "Read success stories", action: 'show_success_stories' }
    ]);
}

// Submit lead to backend (if configured)
async function submitLeadToBackend() {
    const config = window.CONFIG;
    
    console.log('=== SUBMITTING LEAD TO BACKEND ===');
    console.log('Config:', config?.api);
    
    if (!config?.api?.lead_endpoint) {
        console.log('No backend configured - lead stored locally only');
        return;
    }
    
    const leadData = {
        name: conversation.userProfile.name,
        email: conversation.userProfile.email,
        phone: conversation.userProfile.phone,
        recommended_program: conversation.userProfile.recommendedProgram,
        career_stage: conversation.userProfile.careerStage,
        goal: conversation.userProfile.goal,
        challenges: Array.isArray(conversation.userProfile.challenges) 
            ? conversation.userProfile.challenges.join(', ') 
            : conversation.userProfile.challenges,
        source: 'pathfinder'
    };
    
    console.log('Lead data:', leadData);
    console.log('Sending to:', config.api.lead_endpoint);
    
    try {
        const response = await fetch(config.api.lead_endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(leadData)
        });
        
        const result = await response.json();
        console.log('Backend response:', result);
        
        if (response.ok) {
            console.log('✅ Lead submitted successfully!');
            trackEvent('lead_submitted_to_backend', { success: true });
        } else {
            console.error('❌ Backend error:', result);
        }
    } catch (error) {
        console.error('❌ Failed to submit lead to backend:', error);
        trackEvent('lead_submitted_to_backend', { success: false, error: error.message });
    }
    
    // Also send to notification webhook if configured
    if (config?.api?.notification_webhook) {
        try {
            await fetch(config.api.notification_webhook, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    text: `New Lead: ${leadData.name} (${leadData.email}) interested in ${leadData.program}`
                })
            });
        } catch (error) {
            console.warn('Failed to send notification:', error);
        }
    }
}

// Real-time validation on blur
function setupFormValidation() {
    const fields = [
        { id: 'leadName', name: 'name' },
        { id: 'leadEmail', name: 'email' },
        { id: 'leadPhone', name: 'phone' }
    ];
    
    fields.forEach(({ id, name }) => {
        const field = document.getElementById(id);
        if (field) {
            field.addEventListener('blur', () => {
                const result = validateField(name, field.value);
                if (!result.valid) {
                    showFieldError(id, result.message);
                } else if (field.value) {
                    showFieldValid(id);
                } else {
                    clearFieldError(id);
                }
            });
            
            // Clear error on input
            field.addEventListener('input', () => {
                clearFieldError(id);
            });
        }
    });
}

function showToast(message) {
    toastMessage.textContent = message;
    toast.classList.add('active');
    
    setTimeout(() => {
        toast.classList.remove('active');
    }, 3000);
}

// ============================================
// Enhanced NLP with Fuzzy Matching
// ============================================

// Intent patterns with synonyms and fuzzy matching
const IntentPatterns = {
    pricing: {
        keywords: [
            // English
            'fee', 'fees', 'price', 'pricing', 'cost', 'costs', 'how much', 'expensive', 'affordable', 'budget', 'payment', 'pay', 'schedule', 'date', 'dates', 'when', 'cohort', 'batch', 'timing',
            // Telugu
            'ధర', 'ఖర్చు', 'ఎంత', 'ఫీజు', 'చెల్లింపు',
            // Hindi  
            'कीमत', 'फीस', 'कितना', 'खर्च',
            // Tamil
            'விலை', 'கட்டணம்'
        ],
        action: 'handle_pricing'
    },
    tactics: {
        keywords: ['business war', 'war tactics', 'tactics', 'strategy', 'strategies', 'approach', 'methodology', 'method', 'technique', 'techniques', 'వ్యూహం', 'रणनीति'],
        action: 'business_war_tactics'
    },
    programs: {
        keywords: [
            // English
            'program', 'programs', 'course', 'courses', 'offering', 'offerings', 'options', 'what do you offer', 'services', 'training', 'workshop', 'what are the', 'show me', 'tell me about', 'list',
            // Telugu (including transliteration)
            'ప్రోగ్రామ్', 'ప్రోగ్రామ్స్', 'కోర్సు', 'కోర్సులు', 'ఏమి', 'ఏమిటి', 'చెప్పండి', 'చూపించు', 'ఏం ఉన్నాయి', 'వాట్ ఆర్', 'దట్ ఆర్',
            // Hindi
            'प्रोग्राम', 'कोर्स', 'क्या है', 'बताओ', 'दिखाओ',
            // Tamil
            'நிரல்', 'படிப்பு', 'என்ன'
        ],
        action: 'list_programs'
    },
    enroll: {
        keywords: [
            'enroll', 'enrol', 'join the program', 'sign up', 'signup', 'register', 'registration', 'apply now', 'application', 'book a spot', 'reserve my spot', 'i want to enroll', 'ready to enroll', 'how to enroll', 'enroll me',
            // Telugu
            'చేరాలి', 'జాయిన్', 'రిజిస్టర్',
            // Hindi
            'जुड़ना', 'रजिस्टर',
            // Tamil
            'சேர'
        ],
        action: 'enroll'
    },
    contact: {
        keywords: [
            'call', 'phone', 'contact', 'speak', 'talk', 'advisor', 'consultant', 'human', 'person', 'connect', 'reach out', 'get in touch',
            // Telugu
            'కాల్', 'ఫోన్', 'మాట్లాడు', 'సంప్రదించు',
            // Hindi
            'कॉल', 'फोन', 'बात',
            // Tamil
            'அழைப்பு', 'தொடர்பு'
        ],
        action: 'book_call'
    },
    about: {
        keywords: [
            'iron lady', 'about', 'who are you', 'what is', 'tell me', 'different', 'unique', 'why you', 'why iron lady', 'company', 'organization', 'mission',
            // Telugu
            'ఐరన్ లేడీ', 'గురించి', 'ఎవరు', 'ఏమిటి',
            // Hindi
            'के बारे में', 'कौन', 'क्या है'
        ],
        action: 'about_iron_lady'
    },
    start: {
        keywords: [
            // Career start phrases (should lead to assessment, not enrollment)
            'start my career', 'begin my career', 'need to start', 'want to start', 'starting my career',
            'start career', 'begin career', 'grow my career', 'advance my career', 'career growth',
            'get started', 'start now', 'help me start', 'where do i start', 'how do i start',
            'new career', 'career change', 'career switch', 'career transition',
            // General help/recommendation
            'help', 'start', 'begin', 'recommend', 'recommendation', 'find program', 'which program', 
            'right program', 'best program', 'suitable', 'match', 'fit', 'guide me', 'assist',
            'what should i do', 'what do you suggest', 'suggest', 'advice', 'advise me',
            'i need help', 'i want help', 'can you help',
            // Telugu
            'సహాయం', 'మొదలు', 'సిఫార్సు', 'ఏ ప్రోగ్రామ్', 'సరైన', 'కెరీర్ మొదలు', 'కెరీర్ ప్రారంభం',
            // Hindi
            'मदद', 'शुरू', 'सिफारिश', 'कौन सा प्रोग्राम', 'करियर शुरू', 'करियर में मदद',
            // Tamil
            'உதவி', 'தொடங்கு'
        ],
        action: 'start_assessment'
    },
    success: {
        keywords: [
            'success', 'stories', 'testimonial', 'testimonials', 'review', 'reviews', 'results', 'outcomes', 'alumni', 'graduates', 'case study',
            // Telugu
            'విజయం', 'కథలు', 'రివ్యూ',
            // Hindi
            'सफलता', 'कहानी', 'समीक्षा'
        ],
        action: 'show_success_stories'
    },
    faq: {
        keywords: ['faq', 'faqs', 'frequently asked', 'common questions', 'questions', 'doubt', 'doubts', 'query', 'queries', 'ప్రశ్నలు', 'सवाल', 'கேள்விகள்'],
        action: 'show_faq'
    },
    leadership_essentials: {
        keywords: ['leadership essentials', 'essentials program', 'beginner', 'entry level', 'early career', 'foundation', 'basics', 'confidence building', 'లీడర్‌షిప్', 'नेतृत्व'],
        action: 'show_program_leadership_essentials'
    },
    board_members: {
        keywords: ['board members', '100 board', 'hundred board', 'mid career', 'acceleration', 'accelerate', 'breakthrough', 'promotion', 'బోర్డ్', 'बोर्ड'],
        action: 'show_program_board_members'
    },
    csuite: {
        keywords: ['c-suite', 'csuite', 'c suite', 'executive', 'cxo', 'ceo', 'cto', 'cfo', 'senior leader', 'top management', 'సీనియర్', 'सीनियर'],
        action: 'show_program_csuite'
    },
    masterclass: {
        keywords: ['masterclass', 'master class', '2 day', 'two day', 'weekend', 'quick', 'fast', 'short', 'intensive', 'bootcamp', 'boot camp', 'మాస్టర్‌క్లాస్', 'मास्टरक्लास'],
        action: 'show_program_masterclass'
    },
    greeting: {
        keywords: [
            'hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening', 'namaste', 'howdy',
            // Telugu
            'హాయ్', 'హలో', 'నమస్కారం', 'నమస్తే',
            // Hindi
            'नमस्ते', 'नमस्कार',
            // Tamil
            'வணக்கம்'
        ],
        action: 'handle_greeting'
    },
    thanks: {
        keywords: [
            'thank', 'thanks', 'thank you', 'appreciate', 'grateful', 'awesome', 'great', 'wonderful', 'helpful',
            // Telugu
            'ధన్యవాదాలు', 'థ్యాంక్స్',
            // Hindi
            'धन्यवाद', 'शुक्रिया',
            // Tamil
            'நன்றி'
        ],
        action: 'handle_thanks'
    }
};

// Levenshtein distance for fuzzy matching
function levenshteinDistance(str1, str2) {
    const m = str1.length;
    const n = str2.length;
    const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));
    
    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;
    
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
            }
        }
    }
    return dp[m][n];
}

// Check if word is similar (fuzzy match)
function isSimilar(word1, word2, threshold = 2) {
    if (word1.length < 4 || word2.length < 4) {
        return word1 === word2;
    }
    return levenshteinDistance(word1, word2) <= threshold;
}

// Detect intent from text
function detectIntent(text) {
    const lowerText = text.toLowerCase().trim();
    const words = lowerText.split(/\s+/);
    
    let bestMatch = { intent: null, score: 0 };
    
    for (const [intentName, config] of Object.entries(IntentPatterns)) {
        let score = 0;
        
        for (const keyword of config.keywords) {
            // Exact phrase match (highest priority)
            if (lowerText.includes(keyword)) {
                score += keyword.split(' ').length * 10;
            } else {
                // Word-level fuzzy matching
                const keywordWords = keyword.split(' ');
                for (const kw of keywordWords) {
                    for (const word of words) {
                        if (isSimilar(word, kw)) {
                            score += 5;
                        }
                    }
                }
            }
        }
        
        if (score > bestMatch.score) {
            bestMatch = { intent: intentName, action: config.action, score };
        }
    }
    
    // Minimum threshold for intent detection
    if (bestMatch.score >= 5) {
        return bestMatch;
    }
    
    return null;
}

function processUserInput(text) {
    // Track the query
    trackEvent('user_query', { query: text });
    
    // First check for objections
    const objection = detectObjection(text);
    if (objection) {
        trackEvent('objection_detected', { objection: objection.type });
        return handleObjection(objection);
    }
    
    const intent = detectIntent(text);
    
    if (intent) {
        trackEvent('intent_detected', { intent: intent.intent, score: intent.score });
        
        switch(intent.action) {
            case 'handle_pricing':
                return handlePricingQuery();
            case 'handle_greeting':
                return handleGreeting();
            case 'handle_thanks':
                return handleThanks();
            case 'show_program_leadership_essentials':
                return showSpecificProgram('leadership_essentials');
            case 'show_program_board_members':
                return showSpecificProgram('hundred_board_members');
            case 'show_program_csuite':
                return showSpecificProgram('csuite_mastery');
            case 'show_program_masterclass':
                return showSpecificProgram('masterclass');
            default:
                return processAction(intent.action);
        }
    }
    
    // Default response for unrecognized input
    return handleUnknownQuery(text);
}

// Detect objections in user input
function detectObjection(text) {
    const lowerText = text.toLowerCase();
    
    for (const [type, config] of Object.entries(KB.objections)) {
        for (const keyword of config.keywords) {
            if (lowerText.includes(keyword)) {
                return { type, ...config.response };
            }
        }
    }
    
    return null;
}

// Handle detected objection with empathy and solution
function handleObjection(objection) {
    let responseHTML = `
        <div class="objection-card">
            <h4>I hear you</h4>
            <p>${objection.empathy}</p>
        </div>
        
        <p>${objection.solution}</p>
    `;
    
    if (objection.proof) {
        responseHTML += `
            <div class="highlight">
                <strong>Proof point:</strong> ${objection.proof}
            </div>
        `;
    }
    
    responseHTML += `<div class="cta">Would you like to explore further?</div>`;
    
    addMessage(responseHTML);
    
    const actions = [
        { label: "Find my program", type: 'primary', action: 'start_assessment' },
        { label: "📞 Talk to Advisor", action: 'book_call' }
    ];
    
    if (objection.recommendation) {
        actions.unshift({
            label: `Learn about ${KB.programs.find(p => p.id === objection.recommendation)?.name || 'recommended program'}`,
            type: 'accent',
            action: 'show_program_' + objection.recommendation.replace('_', '_')
        });
    }
    
    actions.push({ label: "Ask another question", action: 'ask_question' });
    
    setQuickActions(actions);
}

function handleGreeting() {
    const lang = detectedLanguage || 'en-IN';
    
    const greetings = {
        'en-IN': [
            "Hello! I'm here to help you find your path to leadership excellence.",
            "Hi there! Welcome to Iron Lady Pathfinder.",
            "Hey! Ready to accelerate your career?"
        ],
        'te-IN': [
            "నమస్కారం! మీ లీడర్‌షిప్ ప్రయాణంలో సహాయం చేయడానికి నేను ఇక్కడ ఉన్నాను.",
            "హలో! Iron Lady Pathfinder కి స్వాగతం.",
            "హాయ్! మీ కెరీర్‌ను వేగవంతం చేయడానికి సిద్ధంగా ఉన్నారా?"
        ],
        'hi-IN': [
            "नमस्ते! मैं आपकी लीडरशिप यात्रा में मदद करने के लिए यहां हूं।",
            "हेलो! Iron Lady Pathfinder में आपका स्वागत है।",
            "हाय! अपने करियर को तेज करने के लिए तैयार हैं?"
        ],
        'ta-IN': [
            "வணக்கம்! உங்கள் தலைமைத்துவ பயணத்தில் உதவ நான் இங்கே இருக்கிறேன்.",
            "ஹலோ! Iron Lady Pathfinder க்கு வரவேற்கிறோம்.",
            "ஹாய்! உங்கள் வாழ்க்கையை விரைவுபடுத்த தயாரா?"
        ]
    };
    
    const helpText = {
        'en-IN': "I can help you find the perfect program, answer questions about our approach, or connect you with an advisor.",
        'te-IN': "సరైన ప్రోగ్రామ్ కనుగొనడంలో, మా విధానం గురించి ప్రశ్నలకు సమాధానం ఇవ్వడంలో లేదా అడ్వైజర్‌తో కనెక్ట్ చేయడంలో నేను మీకు సహాయం చేయగలను.",
        'hi-IN': "मैं सही प्रोग्राम खोजने, हमारे दृष्टिकोण के बारे में सवालों के जवाब देने, या एक सलाहकार से जोड़ने में मदद कर सकती हूं।",
        'ta-IN': "சரியான திட்டத்தைக் கண்டறிய, எங்கள் அணுகுமுறை பற்றிய கேள்விகளுக்கு பதிலளிக்க அல்லது ஆலோசகருடன் இணைக்க நான் உதவ முடியும்."
    };
    
    const ctaText = {
        'en-IN': "What would you like to explore?",
        'te-IN': "మీరు ఏమి తెలుసుకోవాలనుకుంటున్నారు?",
        'hi-IN': "आप क्या जानना चाहेंगे?",
        'ta-IN': "நீங்கள் என்ன அறிய விரும்புகிறீர்கள்?"
    };
    
    const langGreetings = greetings[lang] || greetings['en-IN'];
    
    addMessage(`
        <p>${langGreetings[Math.floor(Math.random() * langGreetings.length)]}</p>
        <p>${helpText[lang] || helpText['en-IN']}</p>
        <div class="cta">${ctaText[lang] || ctaText['en-IN']}</div>
    `);
    
    const buttons = {
        'en-IN': [
            { label: "Find my program", type: 'primary', action: 'start_assessment' },
            { label: "See all programs", action: 'list_programs' },
            { label: "Success stories", action: 'show_success_stories' }
        ],
        'te-IN': [
            { label: "నా ప్రోగ్రామ్ కనుగొనండి", type: 'primary', action: 'start_assessment' },
            { label: "అన్ని ప్రోగ్రామ్‌లు చూడండి", action: 'list_programs' },
            { label: "విజయ గాథలు", action: 'show_success_stories' }
        ],
        'hi-IN': [
            { label: "मेरा प्रोग्राम खोजें", type: 'primary', action: 'start_assessment' },
            { label: "सभी प्रोग्राम देखें", action: 'list_programs' },
            { label: "सफलता की कहानियां", action: 'show_success_stories' }
        ],
        'ta-IN': [
            { label: "என் திட்டத்தைக் கண்டறியுங்கள்", type: 'primary', action: 'start_assessment' },
            { label: "அனைத்து திட்டங்களையும் பாருங்கள்", action: 'list_programs' },
            { label: "வெற்றிக் கதைகள்", action: 'show_success_stories' }
        ]
    };
    
    setQuickActions(buttons[lang] || buttons['en-IN']);
}

function handleThanks() {
    const lang = detectedLanguage || 'en-IN';
    
    const responses = {
        'en-IN': [
            "You're welcome! Is there anything else I can help you with?",
            "Happy to help! Let me know if you have more questions.",
            "Glad I could assist! What else would you like to explore?"
        ],
        'te-IN': [
            "మీకు స్వాగతం! నేను ఇంకా ఏదైనా సహాయం చేయగలనా?",
            "సహాయం చేయడం సంతోషం! మీకు మరిన్ని ప్రశ్నలు ఉంటే చెప్పండి.",
            "సహాయం చేయగలిగినందుకు సంతోషం! మీరు ఇంకా ఏమి తెలుసుకోవాలనుకుంటున్నారు?"
        ],
        'hi-IN': [
            "आपका स्वागत है! क्या मैं और कुछ मदद कर सकती हूं?",
            "मदद करके खुशी हुई! अगर और सवाल हों तो बताइए।",
            "सहायता कर पाने में खुशी हुई! और क्या जानना चाहेंगे?"
        ],
        'ta-IN': [
            "நன்றி! வேறு ஏதாவது உதவ முடியுமா?",
            "உதவி செய்வதில் மகிழ்ச்சி! மேலும் கேள்விகள் இருந்தால் கேளுங்கள்.",
            "உதவ முடிந்ததில் மகிழ்ச்சி! வேறு என்ன அறிய விரும்புகிறீர்கள்?"
        ]
    };
    
    const langResponses = responses[lang] || responses['en-IN'];
    
    addMessage(`
        <p>${langResponses[Math.floor(Math.random() * langResponses.length)]}</p>
    `);
    
    setQuickActions([
        { label: "Find my program", type: 'primary', action: 'start_assessment' },
        { label: "📞 Talk to Advisor", action: 'book_call' },
        { label: "I'm done for now", action: 'restart' }
    ]);
}

function showSpecificProgram(programId) {
    const program = KB.programs.find(p => p.id === programId);
    if (!program) {
        showAllPrograms();
        return;
    }
    
    const outcomesHTML = program.outcomes.map(o => `<li>${o}</li>`).join('');
    const relatedStories = KB.success_stories.filter(s => s.program === programId).slice(0, 1);
    
    let storyHTML = '';
    if (relatedStories.length > 0) {
        const story = relatedStories[0];
        storyHTML = `
            <div class="success-story">
                <div class="success-story-header">
                    <div class="story-avatar">${story.initials}</div>
                    <div class="story-meta">
                        <div class="story-name">${story.name}</div>
                        <div class="story-role">${story.role}</div>
                    </div>
                </div>
                <p class="story-quote">"${story.quote}"</p>
            </div>
        `;
    }
    
    addMessage(`
        <h3>${program.name}</h3>
        <p><strong>Best for:</strong> ${program.who.join(', ')}</p>
        
        <div class="program-card">
            <h4>What you'll achieve:</h4>
            <ul class="outcomes">${outcomesHTML}</ul>
            <p><strong>Format:</strong> ${program.format}</p>
        </div>
        
        <div class="highlight">
            <strong>Why it works:</strong> ${program.why_it_works}
        </div>
        
        ${storyHTML}
        
        <div class="cta">Interested in ${program.name}?</div>
    `);
    
    conversation.userProfile.recommendedProgram = programId;
    
    setQuickActions([
        { label: "🎯 Enroll Now", type: 'accent', action: 'enroll' },
        { label: "📞 Book a Call", action: 'book_call' },
        { label: "Compare with others", action: 'list_programs' },
        { label: "Take assessment", action: 'start_assessment' }
    ]);
}

function handlePricingQuery() {
    addMessage(`
        <p>This offline version doesn't store live fee/schedule data.</p>
        <p>I can help you get the latest information:</p>
        <ul>
            <li><strong>📞 Call:</strong> ${KB.contact.advisor_phone}</li>
            <li><strong>📧 Email:</strong> ${KB.contact.email}</li>
            <li><strong>🔗 Enrollment:</strong> <a href="${KB.contact.enrollment_link}" target="_blank">${KB.contact.enrollment_link}</a></li>
        </ul>
        <p>Would you like me to have an advisor contact you with the details?</p>
    `);
    
    setQuickActions([
        { label: "Yes, contact me", type: 'primary', action: 'capture_lead' },
        { label: "I'll reach out myself", action: 'ask_question' }
    ]);
}

function handleUnknownQuery(query) {
    addMessage(`
        <p>I appreciate your question! While I may not have the specific answer you're looking for, I can help you with:</p>
        <ul>
            <li>Finding the right program for your career stage</li>
            <li>Understanding our Business War Tactics approach</li>
            <li>Connecting you with an advisor for detailed questions</li>
        </ul>
        <p>What would be most helpful?</p>
    `);
    
    setQuickActions([
        { label: "Find my program", type: 'primary', action: 'start_assessment' },
        { label: "📞 Talk to Advisor", action: 'book_call' },
        { label: "See FAQs", action: 'show_faq' }
    ]);
}

// ============================================
// Event Listeners
// ============================================

function handleSend() {
    const text = userInput.value.trim();
    if (!text) return;
    
    // Check if this is from keyboard (not voice)
    // Voice input sets lastInputWasVoice = true before calling handleSend
    const isFromVoice = lastInputWasVoice;
    
    // Reset for next input
    lastInputWasVoice = false;
    
    addMessage(text, true);
    userInput.value = '';
    userInput.style.height = 'auto';
    clearQuickActions();
    
    showTypingIndicator();
    
    setTimeout(() => {
        hideTypingIndicator();
        // Pass voice flag to processUserInput context
        window._currentInputIsVoice = isFromVoice;
        processUserInput(text);
        window._currentInputIsVoice = false;
    }, 600 + Math.random() * 400);
}

// Send button click
sendBtn.addEventListener('click', handleSend);

// Enter key to send (Shift+Enter for newline)
userInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSend();
    }
});

// Auto-resize textarea
userInput.addEventListener('input', () => {
    userInput.style.height = 'auto';
    userInput.style.height = Math.min(userInput.scrollHeight, 180) + 'px';
});

// Reset chat
resetChat.addEventListener('click', restartConversation);

// Lead form
leadForm.addEventListener('submit', handleLeadSubmission);
closeModal.addEventListener('click', closeLeadModal);

// Close modal on overlay click
leadModal.addEventListener('click', (e) => {
    if (e.target === leadModal) closeLeadModal();
});

// Keyboard accessibility for modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && leadModal.classList.contains('active')) {
        closeLeadModal();
    }
});

// ============================================
// Accessibility Improvements
// ============================================

function setupAccessibility() {
    // Add skip link functionality
    addSkipLink();
    
    // Setup keyboard navigation for quick actions
    setupQuickActionKeyboard();
    
    // Announce messages to screen readers
    setupScreenReaderAnnouncements();
}

function addSkipLink() {
    const skipLink = document.createElement('a');
    skipLink.href = '#chatMessages';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'Skip to chat';
    skipLink.addEventListener('click', (e) => {
        e.preventDefault();
        chatMessages.focus();
    });
    document.body.insertBefore(skipLink, document.body.firstChild);
}

function setupQuickActionKeyboard() {
    quickActions.addEventListener('keydown', (e) => {
        const buttons = quickActions.querySelectorAll('.quick-action-btn');
        const currentIndex = Array.from(buttons).indexOf(document.activeElement);
        
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            e.preventDefault();
            const nextIndex = (currentIndex + 1) % buttons.length;
            buttons[nextIndex]?.focus();
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            e.preventDefault();
            const prevIndex = currentIndex <= 0 ? buttons.length - 1 : currentIndex - 1;
            buttons[prevIndex]?.focus();
        }
    });
}

function setupScreenReaderAnnouncements() {
    // Create live region for announcements
    const liveRegion = document.createElement('div');
    liveRegion.id = 'sr-announcements';
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    document.body.appendChild(liveRegion);
}

function announceToScreenReader(message) {
    const liveRegion = document.getElementById('sr-announcements');
    if (liveRegion) {
        liveRegion.textContent = '';
        // Small delay to ensure announcement
        setTimeout(() => {
            liveRegion.textContent = message;
        }, 100);
    }
}

// Enhanced addMessage with accessibility
const originalAddMessage = addMessage;
addMessage = function(content, isUser = false, options = {}) {
    originalAddMessage(content, isUser, options);
    
    // Announce new message to screen readers
    const plainText = content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    const truncatedText = plainText.length > 200 ? plainText.substring(0, 200) + '...' : plainText;
    announceToScreenReader(isUser ? `You said: ${truncatedText}` : `Iron Lady: ${truncatedText}`);
    
    // Focus management - move focus to new message for keyboard users
    const messages = chatMessages.querySelectorAll('.message');
    const lastMessage = messages[messages.length - 1];
    if (lastMessage) {
        lastMessage.setAttribute('tabindex', '-1');
    }
};

// Enhanced setQuickActions with accessibility
const originalSetQuickActions = setQuickActions;
setQuickActions = function(actions) {
    originalSetQuickActions(actions);
    
    // Add ARIA attributes to quick action buttons
    const buttons = quickActions.querySelectorAll('.quick-action-btn');
    buttons.forEach((btn, index) => {
        btn.setAttribute('role', 'button');
        btn.setAttribute('tabindex', '0');
        btn.setAttribute('aria-label', btn.textContent);
    });
    
    // Announce available actions
    if (actions.length > 0) {
        const actionLabels = actions.map(a => a.label).join(', ');
        announceToScreenReader(`Available options: ${actionLabels}`);
    }
    
    // Focus first button after a short delay
    setTimeout(() => {
        if (buttons[0]) buttons[0].focus();
    }, 300);
};

// ============================================
// Initialize
// ============================================

function initializeApp() {
    // Always start fresh - no resume prompts
    clearLocalStorage();
    startConversation();
}

function showResumeOption(savedData) {
    // Always start fresh - redirect to welcome screen
    clearLocalStorage();
    startConversation();
    return;
    
    // Old code below (not executed)
    const stageLabel = CAREER_STAGES.find(s => s.id === savedData.userProfile.careerStage)?.label || '';
    const goalLabel = GOALS.find(g => g.id === savedData.userProfile.goal)?.label || '';
    
    let resumeInfo = `<strong>${stageLabel}</strong>`;
    if (goalLabel) {
        resumeInfo += ` looking to <strong>${goalLabel.toLowerCase()}</strong>`;
    }
    
    addMessage(`
        <h3>Welcome Back!</h3>
        <p>I noticed you were here before. You mentioned you're ${resumeInfo}.</p>
        <p>Would you like to continue where you left off?</p>
    `);
    
    setQuickActions([
        { label: "Yes, continue", type: 'primary', action: 'resume_conversation', data: savedData },
        { label: "Start fresh", action: 'restart' }
    ]);
}

function resumeConversation(savedData) {
    conversation.userProfile = savedData.userProfile;
    conversation.state = savedData.state;
    
    // Determine where to resume based on state
    if (savedData.userProfile.recommendedProgram) {
        showRecommendation();
    } else if (savedData.userProfile.challenges.length > 0) {
        showRecommendation();
    } else if (savedData.userProfile.goal) {
        askChallenges();
    } else if (savedData.userProfile.careerStage) {
        askGoal();
    } else {
        startConversation();
    }
}

// ============================================
// Analytics Modal & Demo Mode
// ============================================

function setupAnalyticsModal() {
    const analyticsModal = document.getElementById('analyticsModal');
    const closeAnalytics = document.getElementById('closeAnalytics');
    const exportAnalytics = document.getElementById('exportAnalytics');
    const showAnalytics = document.getElementById('showAnalytics');
    
    if (closeAnalytics) {
        closeAnalytics.addEventListener('click', () => {
            analyticsModal.classList.remove('active');
        });
    }
    
    if (showAnalytics) {
        showAnalytics.addEventListener('click', openAnalyticsModal);
    }
    
    if (exportAnalytics) {
        exportAnalytics.addEventListener('click', exportAnalyticsCSV);
    }
    
    // Close on overlay click
    if (analyticsModal) {
        analyticsModal.addEventListener('click', (e) => {
            if (e.target === analyticsModal) {
                analyticsModal.classList.remove('active');
            }
        });
    }
}

function openAnalyticsModal() {
    const analyticsModal = document.getElementById('analyticsModal');
    const analyticsContent = document.getElementById('analyticsContent');
    
    if (!analyticsModal || !analyticsContent) return;
    
    const summary = getAnalyticsSummary();
    
    // Build funnel visualization
    const funnelSteps = [
        { name: 'Started', key: 'started', count: summary.funnel.started ? 1 : 0 },
        { name: 'Selected Stage', key: 'selectedStage', count: summary.funnel.selectedStage ? 1 : 0 },
        { name: 'Selected Goal', key: 'selectedGoal', count: summary.funnel.selectedGoal ? 1 : 0 },
        { name: 'Selected Challenges', key: 'selectedChallenges', count: summary.funnel.selectedChallenges ? 1 : 0 },
        { name: 'Viewed Recommendation', key: 'viewedRecommendation', count: summary.funnel.viewedRecommendation ? 1 : 0 },
        { name: 'Initiated Enrollment', key: 'initiatedEnrollment', count: summary.funnel.initiatedEnrollment ? 1 : 0 },
        { name: 'Lead Captured', key: 'capturedLead', count: summary.funnel.capturedLead ? 1 : 0 }
    ];
    
    const maxCount = 1;
    
    let funnelHTML = '<div class="funnel-chart">';
    funnelSteps.forEach(step => {
        const width = step.count > 0 ? 100 : 20;
        const complete = step.count > 0;
        funnelHTML += `
            <div class="funnel-step">
                <div class="funnel-bar">
                    <div class="funnel-fill ${complete ? 'complete' : ''}" style="width: ${width}%">
                        <span class="funnel-label">${step.name}</span>
                    </div>
                </div>
                <span class="funnel-count">${complete ? '✓' : '○'}</span>
            </div>
        `;
    });
    funnelHTML += '</div>';
    
    // Stats
    const minutes = Math.round(summary.sessionDuration / 60);
    
    analyticsContent.innerHTML = `
        <h4>Session Funnel</h4>
        ${funnelHTML}
        
        <div class="analytics-stats">
            <div class="stat-item">
                <div class="stat-value">${summary.totalEvents}</div>
                <div class="stat-label">Total Events</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">${minutes}m</div>
                <div class="stat-label">Session Duration</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">${conversation.userProfile.recommendedProgram ? '✓' : '○'}</div>
                <div class="stat-label">Got Recommendation</div>
            </div>
        </div>
        
        <h4 style="margin-top: var(--space-md);">User Profile</h4>
        <div class="program-details">
            <div class="detail-row">
                <span class="detail-label">Career Stage</span>
                <span class="detail-value">${conversation.userProfile.careerStage || 'Not set'}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Goal</span>
                <span class="detail-value">${conversation.userProfile.goal || 'Not set'}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Challenges</span>
                <span class="detail-value">${conversation.userProfile.challenges.join(', ') || 'None'}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Recommended Program</span>
                <span class="detail-value">${conversation.userProfile.recommendedProgram || 'None'}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Lead Captured</span>
                <span class="detail-value">${conversation.userProfile.email ? 'Yes' : 'No'}</span>
            </div>
        </div>
    `;
    
    analyticsModal.classList.add('active');
}

function exportAnalyticsCSV() {
    const summary = getAnalyticsSummary();
    
    let csv = 'Event,Timestamp,Data\n';
    summary.events.forEach(event => {
        const data = JSON.stringify(event.data).replace(/"/g, '""');
        csv += `"${event.event}","${event.timestamp}","${data}"\n`;
    });
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ironlady_analytics_${Analytics.sessionId}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    
    showToast('Analytics exported!');
}

function setupDemoMode() {
    const config = window.CONFIG;
    const demoBanner = document.getElementById('demoBanner');
    
    if (config?.features?.demo_mode && demoBanner) {
        demoBanner.style.display = 'flex';
    }
    
    // Also show analytics button if enabled
    if (config?.features?.enable_analytics_modal) {
        // Add keyboard shortcut for analytics (Ctrl/Cmd + Shift + .)
        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === '.') {
                e.preventDefault();
                openAnalyticsModal();
            }
        });
    }
    
    // Add click handler for analytics button in header
    const analyticsBtn = document.getElementById('analyticsBtn');
    if (analyticsBtn) {
        analyticsBtn.addEventListener('click', openAnalyticsModal);
    }
}

// ============================================
// Program Details Modal
// ============================================

function openProgramModal(programId) {
    const program = KB.programs.find(p => p.id === programId);
    if (!program) return;
    
    const modal = document.getElementById('programModal');
    const content = document.getElementById('programModalContent');
    
    const config = window.CONFIG;
    const schedule = config?.schedules?.[programId];
    
    const modulesHTML = program.modules ? 
        program.modules.map(m => `<li>${m}</li>`).join('') : '';
    
    const deliverablesHTML = program.deliverables ?
        program.deliverables.map(d => `<li>${d}</li>`).join('') : '';
    
    const whoExamplesHTML = program.who_examples ?
        program.who_examples.map(e => `<li>${e}</li>`).join('') : '';
    
    const relatedStory = KB.success_stories.find(s => s.program === programId);
    
    content.innerHTML = `
        <div class="program-modal-header">
            <div class="program-modal-icon">📚</div>
            <div class="program-modal-title">
                <h2>${program.name}</h2>
                <p class="subtitle">${program.format}</p>
            </div>
        </div>
        
        <div class="program-meta-grid">
            ${schedule ? `
                <div class="program-meta-item">
                    <div class="program-meta-value">${schedule.next_cohort}</div>
                    <div class="program-meta-label">Next Cohort</div>
                </div>
                <div class="program-meta-item">
                    <div class="program-meta-value">${schedule.time_commitment}</div>
                    <div class="program-meta-label">Time/Week</div>
                </div>
                <div class="program-meta-item">
                    <div class="program-meta-value">${schedule.cohort_size}</div>
                    <div class="program-meta-label">Cohort Size</div>
                </div>
                ${config?.features?.show_prices ? `
                <div class="program-meta-item">
                    <div class="program-meta-value">${schedule.price_range}</div>
                    <div class="program-meta-label">Investment</div>
                </div>
                ` : ''}
            ` : ''}
        </div>
        
        <div class="program-section">
            <h3>👤 Who It's For</h3>
            <ul>${whoExamplesHTML || program.who.map(w => `<li>${w}</li>`).join('')}</ul>
        </div>
        
        ${program.not_for ? `
        <div class="program-section not-for-section">
            <h3>🚫 Not For You If...</h3>
            <ul class="not-for-list">${program.not_for.map(n => `<li>${n}</li>`).join('')}</ul>
        </div>
        ` : ''}
        
        ${modulesHTML ? `
        <div class="program-section">
            <h3>📚 Program Modules</h3>
            <ul>${modulesHTML}</ul>
        </div>
        ` : ''}
        
        ${program.weekly_schedule ? `
        <div class="program-section day-in-life">
            <h3>📅 ${program.weekly_schedule.title}</h3>
            <div class="schedule-grid">
                ${program.weekly_schedule.days.map(d => `
                    <div class="schedule-item">
                        <span class="schedule-icon">${d.icon}</span>
                        <span class="schedule-day">${d.day}</span>
                        <span class="schedule-activity">${d.activity}</span>
                    </div>
                `).join('')}
            </div>
            <div class="schedule-total">
                <strong>Total commitment:</strong> ${program.weekly_schedule.total_time}
            </div>
        </div>
        ` : ''}
        
        ${deliverablesHTML ? `
        <div class="program-section">
            <h3>🎁 What You'll Get</h3>
            <ul>${deliverablesHTML}</ul>
        </div>
        ` : ''}
        
        <div class="program-section">
            <h3>✨ Key Outcomes</h3>
            <ul>${program.outcomes.map(o => `<li>${o}</li>`).join('')}</ul>
        </div>
        
        ${relatedStory ? `
        <div class="success-story">
            <div class="success-story-header">
                <div class="story-avatar">${relatedStory.initials}</div>
                <div class="story-meta">
                    <div class="story-name">${relatedStory.name}</div>
                    <div class="story-role">${relatedStory.role}</div>
                </div>
            </div>
            <p class="story-quote">"${relatedStory.quote}"</p>
            <div class="story-outcome">
                <span>✓</span>
                <span>${relatedStory.outcome}</span>
            </div>
        </div>
        ` : ''}
        
        ${program.success_metrics ? `
        <div class="highlight">
            <strong>Success Rate:</strong> ${program.success_metrics}
        </div>
        ` : ''}
        
        <div class="program-modal-actions">
            <button class="btn-secondary" onclick="closeProgramModal()">Close</button>
            <button class="btn-primary" onclick="closeProgramModal(); processAction('enroll')">
                🎯 Enroll Now
            </button>
        </div>
    `;
    
    modal.classList.add('active');
    trackEvent('program_modal_opened', { program: programId });
}

function closeProgramModal() {
    document.getElementById('programModal').classList.remove('active');
}

// ============================================
// Program Comparison Modal
// ============================================

function openComparisonModal() {
    const modal = document.getElementById('comparisonModal');
    const content = document.getElementById('comparisonModalContent');
    
    const recommended = KB.programs.find(p => p.id === conversation.userProfile.recommendedProgram);
    const alternative = getAlternativeProgram();
    
    if (!recommended || !alternative) {
        showAllPrograms();
        return;
    }
    
    const config = window.CONFIG;
    const recSchedule = config?.schedules?.[recommended.id];
    const altSchedule = config?.schedules?.[alternative.id];
    
    const attributes = [
        { label: 'Best For', rec: recommended.who[0], alt: alternative.who[0] },
        { label: 'Duration', rec: recSchedule?.duration || recommended.format, alt: altSchedule?.duration || alternative.format },
        { label: 'Time/Week', rec: recSchedule?.time_commitment || 'Varies', alt: altSchedule?.time_commitment || 'Varies' },
        { label: 'Format', rec: recSchedule?.sessions || 'Online', alt: altSchedule?.sessions || 'Online' },
        { label: 'Key Outcome', rec: recommended.outcomes[0], alt: alternative.outcomes[0] },
        { label: 'Success Metric', rec: recommended.success_metrics || 'N/A', alt: alternative.success_metrics || 'N/A' }
    ];
    
    if (config?.features?.show_prices) {
        attributes.push({
            label: 'Investment',
            rec: recSchedule?.price_range || 'Contact for pricing',
            alt: altSchedule?.price_range || 'Contact for pricing'
        });
    }
    
    const tableRows = attributes.map(attr => `
        <tr>
            <td>${attr.label}</td>
            <td class="recommended">${attr.rec}</td>
            <td>${attr.alt}</td>
        </tr>
    `).join('');
    
    content.innerHTML = `
        <div class="comparison-header">
            <h2>Program Comparison</h2>
            <p>Compare your top two matches side by side</p>
        </div>
        
        <div class="comparison-table-wrapper">
            <table class="comparison-table">
                <thead>
                    <tr>
                        <th>Attribute</th>
                        <th class="recommended">
                            ${recommended.name}
                            <br><small>⭐ Best Match</small>
                        </th>
                        <th>${alternative.name}</th>
                    </tr>
                </thead>
                <tbody>
                    ${tableRows}
                    <tr>
                        <td>Match Score</td>
                        <td class="recommended"><strong>${conversation.userProfile.recommendationScore} pts</strong></td>
                        <td>${conversation.userProfile.alternativeScore} pts</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <div class="comparison-verdict">
            <h4>💡 My Recommendation</h4>
            <p><strong>${recommended.name}</strong> is your best match because ${recommended.why_it_works}</p>
        </div>
        
        <div class="program-modal-actions">
            <button class="btn-secondary" onclick="closeComparisonModal(); openProgramModal('${alternative.id}')">
                Learn More: ${alternative.name}
            </button>
            <button class="btn-primary" onclick="closeComparisonModal(); processAction('enroll')">
                Choose ${recommended.name}
            </button>
        </div>
    `;
    
    modal.classList.add('active');
    trackEvent('comparison_modal_opened');
}

function closeComparisonModal() {
    document.getElementById('comparisonModal').classList.remove('active');
}

// ============================================
// 90-Day Goal Planner
// ============================================

function openGoalPlanner() {
    const modal = document.getElementById('goalPlannerModal');
    const content = document.getElementById('goalPlannerContent');
    
    const goalLabel = GOALS.find(g => g.id === conversation.userProfile.goal)?.label || 'your goal';
    
    content.innerHTML = `
        <div class="goal-planner-header">
            <h2>🎯 Your 90-Day Action Plan</h2>
            <p>Map your path to <strong>${goalLabel.toLowerCase()}</strong> with clear milestones</p>
        </div>
        
        <div class="goal-timeline">
            <div class="goal-milestone active">
                <div class="milestone-label">30-Day Action</div>
                <input type="text" class="milestone-input" id="goal30" 
                    placeholder="e.g., Complete Leadership Essentials Week 1-2, identify 3 visibility opportunities">
            </div>
            
            <div class="goal-milestone">
                <div class="milestone-label">60-Day Milestone</div>
                <input type="text" class="milestone-input" id="goal60" 
                    placeholder="e.g., Pitch one idea in leadership meeting, build relationship with one senior leader">
            </div>
            
            <div class="goal-milestone">
                <div class="milestone-label">90-Day Result</div>
                <input type="text" class="milestone-input" id="goal90" 
                    placeholder="e.g., Receive positive feedback from leadership, initiate promotion conversation">
            </div>
        </div>
        
        <div class="highlight" style="margin-top: var(--space-lg);">
            <strong>Pro Tip:</strong> Start with your 90-day result and work backwards. What needs to happen at 60 days for that to be possible?
        </div>
        
        <div class="goal-planner-actions">
            <button class="btn-secondary" onclick="closeGoalPlanner()">Cancel</button>
            <button class="btn-primary" onclick="saveGoalPlan()">
                📥 Save & Download Plan
            </button>
        </div>
    `;
    
    modal.classList.add('active');
    trackEvent('goal_planner_opened');
}

function closeGoalPlanner() {
    document.getElementById('goalPlannerModal').classList.remove('active');
}

function saveGoalPlan() {
    const goal30 = document.getElementById('goal30').value;
    const goal60 = document.getElementById('goal60').value;
    const goal90 = document.getElementById('goal90').value;
    
    conversation.userProfile.goalPlan = { goal30, goal60, goal90 };
    saveToLocalStorage();
    
    trackEvent('goal_plan_saved', { hasContent: !!(goal30 || goal60 || goal90) });
    
    closeGoalPlanner();
    exportRecommendationPDF();
}

// ============================================
// PDF Export
// ============================================

function exportRecommendationPDF() {
    const program = KB.programs.find(p => p.id === conversation.userProfile.recommendedProgram);
    const stageLabel = CAREER_STAGES.find(s => s.id === conversation.userProfile.careerStage)?.label || '';
    const goalLabel = GOALS.find(g => g.id === conversation.userProfile.goal)?.label || '';
    const challengeLabels = conversation.userProfile.challenges
        .map(id => CHALLENGES.find(c => c.id === id)?.label)
        .filter(Boolean);
    
    const config = window.CONFIG || {};
    const schedule = config.schedules?.[program?.id];
    
    const goalPlan = conversation.userProfile.goalPlan || {};
    
    // Create printable HTML
    const printContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Iron Lady Pathfinder - Your Recommendation</title>
            <style>
                body { font-family: 'Segoe UI', Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 40px; color: #333; }
                h1 { color: #8B1538; border-bottom: 3px solid #D4AF37; padding-bottom: 10px; }
                h2 { color: #8B1538; margin-top: 30px; }
                .header { text-align: center; margin-bottom: 40px; }
                .logo { font-size: 24px; font-weight: bold; color: #8B1538; }
                .section { margin-bottom: 30px; }
                .profile-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
                .profile-item { background: #f5f5f5; padding: 15px; border-radius: 8px; }
                .profile-label { font-size: 12px; color: #666; text-transform: uppercase; }
                .profile-value { font-size: 18px; font-weight: 600; color: #333; }
                .program-box { background: linear-gradient(135deg, #8B1538 0%, #6B0F2A 100%); color: white; padding: 25px; border-radius: 12px; margin: 20px 0; }
                .program-box h3 { margin: 0 0 10px 0; font-size: 24px; }
                .outcomes { list-style: none; padding: 0; }
                .outcomes li { padding: 8px 0; padding-left: 25px; position: relative; }
                .outcomes li::before { content: '✓'; position: absolute; left: 0; color: #D4AF37; font-weight: bold; }
                .why-match { background: #fff8e7; border-left: 4px solid #D4AF37; padding: 15px; margin: 20px 0; }
                .goal-plan { background: #f0f9ff; border-radius: 8px; padding: 20px; margin: 20px 0; }
                .milestone { margin-bottom: 15px; padding-bottom: 15px; border-bottom: 1px solid #e0e0e0; }
                .milestone:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
                .milestone-label { font-size: 12px; color: #8B1538; font-weight: 600; text-transform: uppercase; }
                .contact-box { background: #333; color: white; padding: 20px; border-radius: 8px; text-align: center; margin-top: 30px; }
                .contact-box a { color: #D4AF37; }
                .footer { text-align: center; margin-top: 40px; font-size: 12px; color: #666; }
                @media print { body { padding: 20px; } }
            </style>
        </head>
        <body>
            <div class="header">
                <div class="logo">⬆ IRON LADY PATHFINDER</div>
                <p>Your Personalized Leadership Journey</p>
            </div>
            
            <div class="section">
                <h2>📋 Your Profile</h2>
                <div class="profile-grid">
                    <div class="profile-item">
                        <div class="profile-label">Career Stage</div>
                        <div class="profile-value">${stageLabel}</div>
                    </div>
                    <div class="profile-item">
                        <div class="profile-label">Primary Goal</div>
                        <div class="profile-value">${goalLabel}</div>
                    </div>
                    <div class="profile-item" style="grid-column: span 2;">
                        <div class="profile-label">Key Challenges</div>
                        <div class="profile-value">${challengeLabels.join(', ') || 'Not specified'}</div>
                    </div>
                </div>
            </div>
            
            ${program ? `
            <div class="section">
                <h2>🎯 Recommended Program</h2>
                <div class="program-box">
                    <h3>${program.name}</h3>
                    <p>${program.format}</p>
                    ${schedule ? `<p><strong>Next Cohort:</strong> ${schedule.next_cohort}</p>` : ''}
                </div>
                
                <h3>What You'll Achieve</h3>
                <ul class="outcomes">
                    ${program.outcomes.map(o => `<li>${o}</li>`).join('')}
                </ul>
                
                <div class="why-match">
                    <strong>Why This Match?</strong><br>
                    ${program.why_it_works}
                </div>
            </div>
            ` : ''}
            
            ${(goalPlan.goal30 || goalPlan.goal60 || goalPlan.goal90) ? `
            <div class="section">
                <h2>🗓 Your 90-Day Plan</h2>
                <div class="goal-plan">
                    ${goalPlan.goal30 ? `
                    <div class="milestone">
                        <div class="milestone-label">30-Day Action</div>
                        <p>${goalPlan.goal30}</p>
                    </div>
                    ` : ''}
                    ${goalPlan.goal60 ? `
                    <div class="milestone">
                        <div class="milestone-label">60-Day Milestone</div>
                        <p>${goalPlan.goal60}</p>
                    </div>
                    ` : ''}
                    ${goalPlan.goal90 ? `
                    <div class="milestone">
                        <div class="milestone-label">90-Day Result</div>
                        <p>${goalPlan.goal90}</p>
                    </div>
                    ` : ''}
                </div>
            </div>
            ` : ''}
            
            <div class="section">
                <h2>📞 Next Steps</h2>
                <ol>
                    <li>Book a 10-minute call with an advisor</li>
                    <li>Get answers to your specific questions</li>
                    <li>Secure your spot in the next cohort</li>
                    <li>Start your leadership transformation!</li>
                </ol>
            </div>
            
            <div class="contact-box">
                <p><strong>Ready to start?</strong></p>
                <p>📞 ${config.contact?.advisor_phone_display || '+91 98765 43210'}</p>
                <p>📧 ${config.contact?.email || 'hello@ironlady.co'}</p>
                <p>🔗 <a href="${config.contact?.enrollment_link || '#'}">${config.contact?.enrollment_link || 'ironlady.co/enroll'}</a></p>
            </div>
            
            <div class="footer">
                <p>Generated by Iron Lady Pathfinder on ${new Date().toLocaleDateString()}</p>
                <p>Iron Lady's Mission: Enable a million women to reach the top.</p>
            </div>
        </body>
        </html>
    `;
    
    // Open print dialog
    const printWindow = window.open('', '_blank');
    printWindow.document.write(printContent);
    printWindow.document.close();
    printWindow.focus();
    
    setTimeout(() => {
        printWindow.print();
    }, 500);
    
    trackEvent('pdf_exported');
    showToast('Opening print dialog for PDF export');
}

// ============================================
// Micro Survey
// ============================================

function showSurvey() {
    const modal = document.getElementById('surveyModal');
    modal.classList.add('active');
    
    // Setup survey button handlers
    document.querySelectorAll('.survey-btn').forEach(btn => {
        btn.onclick = () => {
            document.querySelectorAll('.survey-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            
            // Show feedback textarea if "no"
            const feedback = document.getElementById('surveyFeedback');
            if (btn.dataset.value === 'no') {
                feedback.style.display = 'block';
            } else {
                feedback.style.display = 'none';
            }
        };
    });
    
    trackEvent('survey_shown');
}

function closeSurvey() {
    document.getElementById('surveyModal').classList.remove('active');
}

function submitSurvey() {
    const selectedBtn = document.querySelector('.survey-btn.selected');
    const feedbackText = document.getElementById('surveyText').value;
    
    trackEvent('survey_submitted', {
        rating: selectedBtn?.dataset.value || 'skipped',
        feedback: feedbackText || null
    });
    
    closeSurvey();
    showToast('Thanks for your feedback!');
}

// ============================================
// Voice Output (Text-to-Speech)
// ============================================

let voiceOutputEnabled = false;
let currentUtterance = null;
let selectedVoice = null;

function setupVoiceOutput() {
    const voiceToggle = document.getElementById('voiceOutputToggle');
    
    if (!('speechSynthesis' in window)) {
        voiceToggle.classList.add('not-supported');
        voiceToggle.title = 'Voice output not supported in this browser';
        return;
    }
    
    // Load saved preference
    voiceOutputEnabled = localStorage.getItem('voiceOutputEnabled') === 'true';
    updateVoiceOutputUI();
    
    // Get available voices
    function loadVoices() {
        const voices = speechSynthesis.getVoices();
        // Prefer female English voices for Iron Lady brand
        selectedVoice = voices.find(v => 
            v.lang.includes('en') && 
            (v.name.toLowerCase().includes('female') || 
             v.name.toLowerCase().includes('samantha') ||
             v.name.toLowerCase().includes('victoria') ||
             v.name.toLowerCase().includes('karen') ||
             v.name.toLowerCase().includes('moira') ||
             v.name.toLowerCase().includes('fiona'))
        ) || voices.find(v => v.lang.includes('en-IN')) 
          || voices.find(v => v.lang.includes('en')) 
          || voices[0];
    }
    
    // Voices may load asynchronously
    loadVoices();
    speechSynthesis.onvoiceschanged = loadVoices;
    
    // Toggle voice output OR stop current speech
    voiceToggle.addEventListener('click', () => {
        // If currently speaking, just stop the speech (don't toggle)
        if (document.body.classList.contains('speaking')) {
            stopSpeaking();
            showToast('Voice stopped');
            trackEvent('voice_output_stopped');
            return;
        }
        
        // Otherwise toggle voice output on/off
        voiceOutputEnabled = !voiceOutputEnabled;
        localStorage.setItem('voiceOutputEnabled', voiceOutputEnabled);
        updateVoiceOutputUI();
        
        if (voiceOutputEnabled) {
            // Speak a confirmation
            speak("Voice output enabled. I'll speak my responses to you.");
            trackEvent('voice_output_enabled');
        } else {
            // Stop any current speech
            speechSynthesis.cancel();
            showToast('Voice output disabled');
            trackEvent('voice_output_disabled');
        }
    });
}

function updateVoiceOutputUI() {
    const voiceToggle = document.getElementById('voiceOutputToggle');
    const speakerOn = voiceToggle.querySelector('.speaker-on-icon');
    const speakerOff = voiceToggle.querySelector('.speaker-off-icon');
    
    if (voiceOutputEnabled) {
        voiceToggle.classList.add('active');
        voiceToggle.title = 'Voice output ON (click to mute)';
        speakerOn.style.display = 'block';
        speakerOff.style.display = 'none';
    } else {
        voiceToggle.classList.remove('active');
        voiceToggle.title = 'Voice output OFF (click to enable)';
        speakerOn.style.display = 'none';
        speakerOff.style.display = 'block';
    }
}

function speak(text, langCode = null) {
    if (!voiceOutputEnabled || !('speechSynthesis' in window)) return;
    
    // Cancel any ongoing speech
    speechSynthesis.cancel();
    
    // Clean the text - remove HTML and emojis
    const cleanText = text
        .replace(/<[^>]*>/g, ' ')  // Remove HTML tags
        .replace(/[\u{1F600}-\u{1F64F}]/gu, '') // Emoticons
        .replace(/[\u{1F300}-\u{1F5FF}]/gu, '') // Symbols
        .replace(/[\u{1F680}-\u{1F6FF}]/gu, '') // Transport
        .replace(/[\u{1F1E0}-\u{1F1FF}]/gu, '') // Flags
        .replace(/[\u{2600}-\u{26FF}]/gu, '')   // Misc symbols
        .replace(/[\u{2700}-\u{27BF}]/gu, '')   // Dingbats
        .replace(/\s+/g, ' ')
        .trim();
    
    if (!cleanText) return;
    
    // Use detected language or provided language
    const speakLang = langCode || detectedLanguage || 'en-IN';
    
    // Find appropriate voice for the language
    const voices = speechSynthesis.getVoices();
    let voice = voices.find(v => v.lang === speakLang) ||
                voices.find(v => v.lang.startsWith(speakLang.split('-')[0])) ||
                selectedVoice ||
                voices.find(v => v.lang.includes('en'));
    
    // Determine voice tone based on emotional state
    let rate = 0.95;
    let pitch = 1.0;
    let volume = 1.0;
    
    // MOTIVATIONAL VOICE for sad/emotional users
    if (userEmotionalState === 'sad' || userEmotionalState === 'low_confidence') {
        rate = 0.9;      // Slower, calmer
        pitch = 1.15;    // Warmer, more uplifting tone
        volume = 1.0;
        console.log('Using motivational voice tone');
    } else if (userEmotionalState === 'excited') {
        rate = 1.05;     // Slightly faster, energetic
        pitch = 1.1;
    }
    
    // Split long text into chunks (max ~200 chars per utterance for better performance)
    const chunks = splitTextIntoChunks(cleanText, 200);
    
    chunks.forEach((chunk, index) => {
        const utterance = new SpeechSynthesisUtterance(chunk);
        
        if (voice) {
            utterance.voice = voice;
        }
        utterance.lang = speakLang;
        
        utterance.rate = rate;
        utterance.pitch = pitch;
        utterance.volume = volume;
        
        // Track when speaking starts/ends for UI feedback
        if (index === 0) {
            utterance.onstart = () => {
                document.body.classList.add('speaking');
            };
        }
        
        if (index === chunks.length - 1) {
            utterance.onend = () => {
                document.body.classList.remove('speaking');
            };
        }
        
        speechSynthesis.speak(utterance);
    });
}

function splitTextIntoChunks(text, maxLength) {
    const chunks = [];
    const sentences = text.split(/(?<=[.!?])\s+/);
    let currentChunk = '';
    
    sentences.forEach(sentence => {
        if ((currentChunk + ' ' + sentence).length <= maxLength) {
            currentChunk += (currentChunk ? ' ' : '') + sentence;
        } else {
            if (currentChunk) chunks.push(currentChunk);
            currentChunk = sentence;
        }
    });
    
    if (currentChunk) chunks.push(currentChunk);
    return chunks;
}

function stopSpeaking() {
    if ('speechSynthesis' in window) {
        speechSynthesis.cancel();
        document.body.classList.remove('speaking');
    }
}

// Stop speech with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.body.classList.contains('speaking')) {
        stopSpeaking();
        showToast('Voice stopped');
    }
});

// ============================================
// Voice Input (Speech-to-Text) - Multi-language Support
// ============================================

// Supported languages for voice input
const VOICE_LANGUAGES = [
    { code: 'en-IN', name: 'English (India)', flag: '🇮🇳', script: /^[\x00-\x7F]*$/ },
    { code: 'te-IN', name: 'Telugu', flag: '🇮🇳', script: /[\u0C00-\u0C7F]/ },
    { code: 'hi-IN', name: 'Hindi', flag: '🇮🇳', script: /[\u0900-\u097F]/ },
    { code: 'ta-IN', name: 'Tamil', flag: '🇮🇳', script: /[\u0B80-\u0BFF]/ },
    { code: 'kn-IN', name: 'Kannada', flag: '🇮🇳', script: /[\u0C80-\u0CFF]/ },
    { code: 'ml-IN', name: 'Malayalam', flag: '🇮🇳', script: /[\u0D00-\u0D7F]/ },
    { code: 'mr-IN', name: 'Marathi', flag: '🇮🇳', script: /[\u0900-\u097F]/ },
    { code: 'bn-IN', name: 'Bengali', flag: '🇮🇳', script: /[\u0980-\u09FF]/ },
    { code: 'gu-IN', name: 'Gujarati', flag: '🇮🇳', script: /[\u0A80-\u0AFF]/ },
    { code: 'pa-IN', name: 'Punjabi', flag: '🇮🇳', script: /[\u0A00-\u0A7F]/ },
    { code: 'en-US', name: 'English (US)', flag: '🇺🇸', script: /^[\x00-\x7F]*$/ },
    { code: 'en-GB', name: 'English (UK)', flag: '🇬🇧', script: /^[\x00-\x7F]*$/ }
];

let currentVoiceLang = localStorage.getItem('voiceLanguage') || 'en-IN'; // Default to English
let detectedLanguage = localStorage.getItem('detectedLanguage') || 'en-IN';
let autoDetectMode = true; // Enable auto language detection
let userEmotionalState = null; // Track emotional state for voice tone
let recognitionLang = 'en-IN'; // Recognition always starts with English for best accuracy
let lastInputWasVoice = false; // Track if last input was voice or keyboard

// Detect language from text based on script/characters
function detectLanguageFromText(text) {
    if (!text || text.length < 2) return VOICE_LANGUAGES.find(l => l.code === 'en-IN');
    
    // Check each language's script pattern (prioritize Indian languages)
    for (const lang of VOICE_LANGUAGES) {
        if (lang.code !== 'en-IN' && lang.code !== 'en-US' && lang.code !== 'en-GB') {
            if (lang.script && lang.script.test(text)) {
                console.log('Detected language:', lang.name, 'from text:', text.substring(0, 50));
                return lang;
            }
        }
    }
    // Default to English if no Indian script detected
    return VOICE_LANGUAGES.find(l => l.code === 'en-IN');
}

// Basic translations for key phrases
const TRANSLATIONS = {
    'te-IN': {
        greeting: "నమస్కారం! Iron Lady Pathfinder కి స్వాగతం. మీ లీడర్‌షిప్ ప్రయాణాన్ని కనుగొనడంలో నేను మీకు సహాయం చేస్తాను.",
        emotional_support: "మీ భావాలను పంచుకున్నందుకు ధన్యవాదాలు. మీరు ఒంటరిగా లేరు. చాలా మంది శక్తివంతమైన మహిళలు ఇక్కడ నుండే ప్రారంభించారు.",
        encouragement: "మీరు ధైర్యంగా ఉన్నారు. ప్రతి పెద్ద ప్రయాణం ఒక చిన్న అడుగుతో ప్రారంభమవుతుంది.",
        next_step: "మీకు ఏ విధంగా సహాయం చేయగలను?",
        confidence: "మీలో అద్భుతమైన సామర్థ్యం ఉంది. మీరు దానిని గుర్తించాలి.",
        programs: "మా ప్రోగ్రామ్‌లు మీ కెరీర్ ని మార్చగలవు."
    },
    'hi-IN': {
        greeting: "नमस्ते! Iron Lady Pathfinder में आपका स्वागत है। मैं आपकी लीडरशिप यात्रा में मदद करूंगी।",
        emotional_support: "अपनी भावनाएं साझा करने के लिए धन्यवाद। आप अकेली नहीं हैं। कई मजबूत महिलाओं ने यहीं से शुरुआत की।",
        encouragement: "आप बहादुर हैं। हर बड़ी यात्रा एक छोटे कदम से शुरू होती है।",
        next_step: "मैं आपकी कैसे मदद कर सकती हूं?",
        confidence: "आपमें अद्भुत क्षमता है। आपको बस इसे पहचानना है।",
        programs: "हमारे प्रोग्राम आपके करियर को बदल सकते हैं।"
    },
    'ta-IN': {
        greeting: "வணக்கம்! Iron Lady Pathfinder க்கு வரவேற்கிறோம். உங்கள் தலைமைத்துவ பயணத்தில் உதவ நான் இங்கே இருக்கிறேன்.",
        emotional_support: "உங்கள் உணர்வுகளைப் பகிர்ந்ததற்கு நன்றி. நீங்கள் தனியாக இல்லை. பல வலிமையான பெண்கள் இங்கிருந்தே தொடங்கினர்.",
        encouragement: "நீங்கள் தைரியமானவர். ஒவ்வொரு பெரிய பயணமும் ஒரு சிறிய அடியில் தொடங்குகிறது.",
        next_step: "நான் உங்களுக்கு எப்படி உதவ முடியும்?",
        confidence: "உங்களிடம் அற்புதமான திறன் உள்ளது. நீங்கள் அதை உணர வேண்டும்.",
        programs: "எங்கள் திட்டங்கள் உங்கள் வாழ்க்கையை மாற்றும்."
    }
};

// Get translated response based on detected language
function getTranslatedResponse(key, fallbackText) {
    const lang = detectedLanguage || 'en-IN';
    if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
        return TRANSLATIONS[lang][key];
    }
    return fallbackText;
}

function setupVoiceInput() {
    const voiceBtn = document.getElementById('voiceBtn');
    
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        voiceBtn.classList.add('not-supported');
        return;
    }
    
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    
    recognition.continuous = false;
    recognition.interimResults = true;
    
    // Supported languages for voice recognition
    const VOICE_LANG_OPTIONS = [
        { code: 'en-IN', name: 'English', flag: '🇬🇧' },
        { code: 'te-IN', name: 'Telugu', flag: 'తె' },
        { code: 'hi-IN', name: 'Hindi', flag: 'हि' },
        { code: 'ta-IN', name: 'Tamil', flag: 'த' },
        { code: 'kn-IN', name: 'Kannada', flag: 'ಕ' },
        { code: 'ml-IN', name: 'Malayalam', flag: 'മ' }
    ];
    
    // Smart default: use previously detected language from text/voice
    // This enables "auto-detection" by remembering user's language preference
    let currentVoiceLang = localStorage.getItem('voiceLang') || 
                           localStorage.getItem('detectedLanguage') || 
                           'en-IN';
    recognition.lang = currentVoiceLang;
    recognitionLang = currentVoiceLang;
    
    console.log('Voice recognition initialized with language:', currentVoiceLang);
    
    // Create language selector popup
    function createLangSelector() {
        const existing = document.getElementById('voiceLangSelector');
        if (existing) {
            existing.remove();
            return null;
        }
        
        const selector = document.createElement('div');
        selector.id = 'voiceLangSelector';
        selector.className = 'voice-lang-selector';
        selector.innerHTML = `
            <div class="lang-selector-header">🎤 Select Voice Language</div>
            <div class="lang-options">
                ${VOICE_LANG_OPTIONS.map(lang => `
                    <button class="lang-option ${currentVoiceLang === lang.code ? 'active' : ''}" 
                            data-lang="${lang.code}">
                        <span class="lang-flag">${lang.flag}</span>
                        <span class="lang-name">${lang.name}</span>
                    </button>
                `).join('')}
            </div>
            <div class="lang-selector-hint">Tip: Select language before speaking</div>
        `;
        
        // Position near voice button
        const voiceBtnRect = voiceBtn.getBoundingClientRect();
        selector.style.position = 'fixed';
        selector.style.bottom = (window.innerHeight - voiceBtnRect.top + 10) + 'px';
        selector.style.right = (window.innerWidth - voiceBtnRect.right) + 'px';
        
        document.body.appendChild(selector);
        
        // Handle language selection
        selector.querySelectorAll('.lang-option').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const lang = e.currentTarget.dataset.lang;
                currentVoiceLang = lang;
                recognition.lang = lang;
                recognitionLang = lang;
                localStorage.setItem('voiceLang', lang);
                
                // Update active state
                selector.querySelectorAll('.lang-option').forEach(b => b.classList.remove('active'));
                e.currentTarget.classList.add('active');
                
                // Show confirmation
                const langName = VOICE_LANG_OPTIONS.find(l => l.code === lang)?.name || lang;
                showToast(`🎤 Voice: ${langName}`);
                
                // Close selector after selection
                setTimeout(() => selector.remove(), 300);
            });
        });
        
        // Close on outside click
        setTimeout(() => {
            document.addEventListener('click', function closeSelector(e) {
                if (!selector.contains(e.target) && e.target !== voiceBtn) {
                    selector.remove();
                    document.removeEventListener('click', closeSelector);
                }
            });
        }, 100);
        
        return selector;
    }
    
    // Show current language indicator on voice button
    function updateVoiceBtnIndicator() {
        const lang = VOICE_LANG_OPTIONS.find(l => l.code === currentVoiceLang);
        if (lang) {
            voiceBtn.title = `Voice input (${lang.name})\nDouble-click to change language\nRight-click for all languages`;
            voiceBtn.setAttribute('data-lang', lang.flag);
            
            // Also update placeholder hint
            const userInput = document.getElementById('userInput');
            if (userInput && !isListening) {
                userInput.placeholder = `Type or speak (${lang.name})...`;
            }
        }
    }
    updateVoiceBtnIndicator();
    
    // Expose function globally for other parts of the app
    window.updateVoiceLang = function(langCode) {
        const lang = VOICE_LANG_OPTIONS.find(l => l.code === langCode);
        if (lang) {
            currentVoiceLang = langCode;
            recognition.lang = langCode;
            recognitionLang = langCode;
            localStorage.setItem('voiceLang', langCode);
            updateVoiceBtnIndicator();
        }
    };
    
    let isListening = false;
    
    // Double-click to cycle language, single-click to start listening
    let clickCount = 0;
    let clickTimer = null;
    
    voiceBtn.addEventListener('click', (e) => {
        clickCount++;
        
        if (clickCount === 1) {
            // Wait to see if it's a double-click
            clickTimer = setTimeout(() => {
                clickCount = 0;
                // Single click - start/stop listening
                if (isListening) {
                    recognition.stop();
                    return;
                }
                
                recognition.lang = currentVoiceLang;
                recognition.start();
                trackEvent('voice_input_started', { language: currentVoiceLang });
            }, 250);
        } else if (clickCount === 2) {
            // Double-click - cycle language
            clearTimeout(clickTimer);
            clickCount = 0;
            
            const currentIndex = VOICE_LANG_OPTIONS.findIndex(l => l.code === currentVoiceLang);
            const nextIndex = (currentIndex + 1) % VOICE_LANG_OPTIONS.length;
            const nextLang = VOICE_LANG_OPTIONS[nextIndex];
            
            currentVoiceLang = nextLang.code;
            recognition.lang = nextLang.code;
            recognitionLang = nextLang.code;
            localStorage.setItem('voiceLang', nextLang.code);
            updateVoiceBtnIndicator();
            
            showToast(`🎤 ${nextLang.name} - Click to speak`);
        }
    });
    
    // Right-click to show full language selector
    voiceBtn.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        createLangSelector();
    });
    
    // Long-press for mobile - cycle language
    let longPressTimer;
    let longPressTriggered = false;
    
    voiceBtn.addEventListener('touchstart', (e) => {
        longPressTriggered = false;
        longPressTimer = setTimeout(() => {
            longPressTriggered = true;
            // Cycle to next language
            const currentIndex = VOICE_LANG_OPTIONS.findIndex(l => l.code === currentVoiceLang);
            const nextIndex = (currentIndex + 1) % VOICE_LANG_OPTIONS.length;
            const nextLang = VOICE_LANG_OPTIONS[nextIndex];
            
            currentVoiceLang = nextLang.code;
            recognition.lang = nextLang.code;
            recognitionLang = nextLang.code;
            localStorage.setItem('voiceLang', nextLang.code);
            updateVoiceBtnIndicator();
            
            showToast(`🎤 ${nextLang.name} - Tap to speak`);
            
            // Vibrate if supported
            if (navigator.vibrate) navigator.vibrate(50);
        }, 500);
    });
    
    voiceBtn.addEventListener('touchend', (e) => {
        clearTimeout(longPressTimer);
        if (longPressTriggered) {
            e.preventDefault();
            longPressTriggered = false;
        }
    });
    
    voiceBtn.addEventListener('touchmove', () => {
        clearTimeout(longPressTimer);
    });
    
    recognition.onstart = () => {
        isListening = true;
        voiceBtn.classList.add('listening');
        userInput.placeholder = '🎤 Listening... Speak now!';
        userInput.value = '';  // Clear any previous text
        userInput.style.height = 'auto';  // Reset height
        
        // Stop any bot speech so user can be heard clearly
        stopSpeaking();
        
        // Language detection happens AFTER transcription from the text content
    };
    
    recognition.onresult = (event) => {
        const transcript = Array.from(event.results)
            .map(result => result[0].transcript)
            .join('');
        
        userInput.value = transcript;
        
        // Auto-resize textarea as text grows
        userInput.style.height = 'auto';
        userInput.style.height = Math.min(userInput.scrollHeight, 180) + 'px';
        
        // Only detect language when we have final result (not during interim)
        if (event.results[0].isFinal) {
            // Auto-detect language from the transcribed text
            const detected = detectLanguageFromText(transcript);
            if (detected) {
                detectedLanguage = detected.code;
                localStorage.setItem('detectedLanguage', detected.code);
                console.log('Language detected:', detected.name, 'from:', transcript.substring(0, 30));
                
                // If detected language is different from current recognition language, 
                // update for next time and notify user
                if (detected.code !== currentVoiceLang) {
                    currentVoiceLang = detected.code;
                    recognition.lang = detected.code;
                    localStorage.setItem('voiceLang', detected.code);
                    updateVoiceBtnIndicator();
                    showToast(`🎤 Switched to ${detected.name}`);
                }
            }
            userInput.placeholder = `✓ ${detected?.name || 'Got it!'} - Sending...`;
        }
    };
    
    recognition.onend = () => {
        isListening = false;
        voiceBtn.classList.remove('listening');
        
        const transcribedText = userInput.value.trim();
        console.log('Voice recognition ended. Transcribed:', transcribedText);
        
        // Auto-send if we have content
        if (transcribedText) {
            userInput.placeholder = '✓ Sending...';
            trackEvent('voice_input_completed', { 
                length: transcribedText.length,
                language: detectedLanguage 
            });
            
            // Auto-enable voice output for voice-to-voice conversation
            if (!voiceOutputEnabled) {
                voiceOutputEnabled = true;
                localStorage.setItem('voiceOutputEnabled', 'true');
                updateVoiceOutputUI();
                trackEvent('voice_output_auto_enabled');
            }
            
            // Mark this as voice input so bot responds with voice
            lastInputWasVoice = true;
            
            // Auto-send the message after a short delay
            setTimeout(() => {
                const textToSend = userInput.value.trim();
                if (textToSend) {
                    console.log('Auto-sending voice message:', textToSend);
                    handleSend();
                }
                userInput.placeholder = 'Type your message...';
            }, 300);
        } else {
            userInput.placeholder = 'Type your message...';
            showToast('No speech detected. Please try again.');
        }
    };
    
    recognition.onerror = (event) => {
        isListening = false;
        voiceBtn.classList.remove('listening');
        userInput.placeholder = 'Type your message...';
        
        if (event.error === 'no-speech') {
            showToast('No speech detected. Try again.');
        } else if (event.error === 'language-not-supported') {
            showToast('Language not supported. Try another.');
        }
    };
}

// Language is always auto-detected from user's voice
// No manual selector needed - the system detects language from text automatically

// ============================================
// Dark Mode
// ============================================

function setupDarkMode() {
    const toggle = document.getElementById('darkModeToggle');
    const sunIcon = toggle.querySelector('.sun-icon');
    const moonIcon = toggle.querySelector('.moon-icon');
    
    // Check saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    }
    
    toggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        
        if (currentTheme === 'dark') {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        }
        
        trackEvent('theme_toggled', { theme: document.documentElement.getAttribute('data-theme') || 'light' });
    });
}

// ============================================
// PWA Install Prompt
// ============================================

let deferredPrompt;

function setupPWA() {
    // Register service worker
    if ('serviceWorker' in navigator) {
        // Use relative path so it works from any folder
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log('Service Worker registered'))
            .catch(err => console.log('Service Worker registration failed:', err));
    }
    
    // Handle install prompt
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        
        // Show install prompt after a delay
        setTimeout(showInstallPrompt, 30000); // 30 seconds
    });
}

function showInstallPrompt() {
    if (!deferredPrompt) return;
    
    // Check if already dismissed
    if (localStorage.getItem('pwa_dismissed')) return;
    
    const prompt = document.createElement('div');
    prompt.className = 'install-prompt';
    prompt.innerHTML = `
        <div class="install-prompt-text">
            <div class="install-prompt-title">Install Iron Lady Pathfinder</div>
            <div class="install-prompt-subtitle">Access anytime, even offline</div>
        </div>
        <button class="install-btn" id="installApp">Install</button>
        <button class="install-dismiss" id="dismissInstall">×</button>
    `;
    
    document.body.appendChild(prompt);
    
    document.getElementById('installApp').addEventListener('click', async () => {
        prompt.remove();
        deferredPrompt.prompt();
        
        const { outcome } = await deferredPrompt.userChoice;
        trackEvent('pwa_install_prompt', { outcome });
        
        deferredPrompt = null;
    });
    
    document.getElementById('dismissInstall').addEventListener('click', () => {
        prompt.remove();
        localStorage.setItem('pwa_dismissed', 'true');
        trackEvent('pwa_install_dismissed');
    });
}

// ============================================
// Emotional State Handling (NLP Extension)
// ============================================

const EmotionalPatterns = {
    // HIGH PRIORITY: Deep emotional struggles requiring special handling
    failing_self_belief: {
        keywords: [
            'failing', 'failure', 'failed', 'useless', 'powerless', 'dependent', 'weak', 
            'hopeless', 'giving up', 'worthless', 'no confidence', 'lost everything',
            'wasting my life', 'nothing is changing', 'feel useless', 'feel left behind',
            'i am failing', 'i feel like a failure', 'i have failed'
        ],
        severity: 'high',
        triggerLowConfidenceMode: true,
        response: null // Uses KB.low_confidence_support instead
    },
    
    // Women-specific struggles
    dependency: {
        keywords: [
            'financially dependent', 'family dependent', 'dependent woman', 'dependent on',
            'marriage stopped my career', 'no one supports me', 'everyone doubts me',
            'i doubt myself', 'i feel small', 'husband controls', 'stuck at home',
            'trapped in marriage', 'no independence', 'can\'t earn', 'no income'
        ],
        severity: 'high',
        triggerLowConfidenceMode: true,
        response: null
    },
    
    // Career struggles and dissatisfaction
    career_struggle: {
        keywords: [
            'stuck in life', 'stuck at home', 'no growth', 'no improvement',
            'career is over', 'too late for me', 'missed my chance', 'passed my prime',
            'no opportunities', 'no one hires', 'age discrimination', 'overqualified',
            'underqualified', 'gap in resume', 'career gap',
            // Unhappiness keywords
            'unhappy', 'unhappy with my career', 'unhappy with my job', 'hate my job',
            'frustrated', 'dissatisfied', 'unfulfilled', 'meaningless', 'pointless',
            'going nowhere', 'dead end', 'no future', 'wasting time', 'not satisfied',
            'not happy', 'miserable', 'depressed about work', 'dread going to work'
        ],
        severity: 'medium',
        triggerLowConfidenceMode: false,
        response: "I hear you. Feeling unhappy with your career is more common than you might think — and it's often a sign that you're ready for something more meaningful. Many Iron Lady alumni felt exactly this way before they found their path. Your dissatisfaction isn't a weakness; it's a signal that you deserve better. Let me understand your situation so I can help you find the right direction."
    },
    
    // Standard emotional patterns (from before)
    nervous: {
        keywords: ['nervous', 'scared', 'anxious', 'afraid', 'worry', 'worried', 'intimidated', 'overwhelmed', 'terrified', 'panic'],
        severity: 'medium',
        triggerLowConfidenceMode: false,
        response: "It's completely normal to feel that way. Many of our most successful alumni started exactly where you are. The difference is they took action despite the fear. Iron Lady's philosophy is: you don't need to feel confident to act confident. We give you the scripts and tactics to project confidence while you build it internally."
    },
    
    imposter: {
        keywords: ['not good enough', 'imposter', 'don\'t belong', 'unqualified', 'not smart enough', 'fake', 'fraud', 'don\'t deserve', 'not worthy'],
        severity: 'medium',
        triggerLowConfidenceMode: false,
        response: "What you're describing is imposter syndrome, and it affects over 70% of high-achieving women. The irony? The most competent people often feel it the strongest. At Iron Lady, we teach you to recognize imposter syndrome for what it is—a feeling, not a fact—and give you tools to act decisively anyway. Your doubts don't disqualify you."
    },
    
    uncertain: {
        keywords: ['not sure', 'don\'t know if', 'leadership is for me', 'right fit', 'meant for this', 'doubt myself', 'confused about career'],
        severity: 'low',
        triggerLowConfidenceMode: false,
        response: "Leadership isn't something you're born into—it's a skill you develop. The fact that you're here, asking questions, shows initiative that many never take. Iron Lady's approach isn't about becoming someone else; it's about maximizing who you already are. You don't need to have all the answers. You just need to take the next step."
    },
    
    stuck: {
        keywords: [
            'stuck', 'i feel stuck', 'feel stuck', 'feeling stuck', 'i am stuck', 'im stuck',
            'trapped', 'no way out', 'nothing works', 'tried everything',
            'stack', 'feel stack', 'i feel stack' // Common typos
        ],
        severity: 'high', // Changed to high to trigger support mode
        triggerLowConfidenceMode: true, // Now triggers low confidence support
        response: null // Will use the low confidence support response
    }
};

// ============================================
// Enhanced Emotional Detection
// ============================================

function detectEmotionalState(text) {
    const lowerText = text.toLowerCase();
    let bestMatch = null;
    let highestSeverity = null;
    
    const severityOrder = { high: 3, medium: 2, low: 1 };
    
    for (const [state, config] of Object.entries(EmotionalPatterns)) {
        for (const keyword of config.keywords) {
            if (lowerText.includes(keyword)) {
                const currentSeverity = severityOrder[config.severity] || 1;
                const bestSeverity = severityOrder[highestSeverity] || 0;
                
                if (currentSeverity > bestSeverity) {
                    bestMatch = { 
                        state, 
                        response: config.response,
                        severity: config.severity,
                        triggerLowConfidenceMode: config.triggerLowConfidenceMode
                    };
                    highestSeverity = config.severity;
                }
                break;
            }
        }
    }
    
    return bestMatch;
}

// ============================================
// Low Confidence Support Mode
// ============================================

function enterLowConfidenceMode() {
    conversation.state = ConversationState.LOW_CONFIDENCE_SUPPORT;
    conversation.userProfile.emotionallyVulnerable = true;
    userEmotionalState = 'low_confidence'; // Set emotional state for motivational voice
    trackEvent('low_confidence_mode_entered');
    
    const support = KB.low_confidence_support;
    const randomEmpowerment = KB.empowerment_messages.validation[
        Math.floor(Math.random() * KB.empowerment_messages.validation.length)
    ];
    
    // Get translated emotional support if available
    const lang = detectedLanguage || 'en-IN';
    let emotionalResponse = support.initial_response;
    let followupQuestion = support.followup_question;
    
    if (TRANSLATIONS[lang]) {
        emotionalResponse = TRANSLATIONS[lang].emotional_support + '<br><br>' + TRANSLATIONS[lang].encouragement;
        followupQuestion = TRANSLATIONS[lang].next_step;
    }
    
    addMessage(`
        <div class="emotional-support-card">
            <div class="support-header">💜 ${lang === 'te-IN' ? 'నేను మీ మాటలు విన్నాను' : lang === 'hi-IN' ? 'मैं आपकी बात सुन रही हूं' : lang === 'ta-IN' ? 'நான் உங்கள் பேச்சைக் கேட்கிறேன்' : 'I hear you'}</div>
            <div class="support-content">
                ${emotionalResponse}
            </div>
            <div class="empowerment-quote">
                "${TRANSLATIONS[lang]?.confidence || randomEmpowerment}"
            </div>
        </div>
        
        <p>${followupQuestion}</p>
    `);
    
    // Show gentle options
    const options = support.areas.map(area => ({
        label: area.label,
        action: 'select_struggle_area',
        data: area.id
    }));
    
    setQuickActions(options);
}

function handleStruggleAreaSelection(areaId) {
    conversation.state = ConversationState.CONFIDENCE_FOLLOWUP;
    conversation.userProfile.struggleArea = areaId;
    trackEvent('struggle_area_selected', { area: areaId });
    
    // Get appropriate micro-coaching
    let coaching = null;
    let programRecommendation = 'leadership_essentials';
    
    switch(areaId) {
        case 'confidence':
            coaching = KB.micro_coaching.daily_confidence;
            break;
        case 'career':
            coaching = KB.micro_coaching.career_restart;
            break;
        case 'financial':
            coaching = KB.micro_coaching.financial_independence;
            break;
        case 'family':
        case 'environment':
            coaching = KB.micro_coaching.toxic_environment;
            break;
        default:
            coaching = KB.micro_coaching.daily_confidence;
    }
    
    // Build coaching response
    let stepsHTML = coaching.steps.map(step => `<li>${step}</li>`).join('');
    
    const program = KB.programs.find(p => p.id === coaching.program_fit);
    const powerMessage = KB.empowerment_messages.power[
        Math.floor(Math.random() * KB.empowerment_messages.power.length)
    ];
    
    addMessage(`
        <div class="coaching-card">
            <h4>🌟 ${coaching.title}</h4>
            <p>Here's a starting point that has helped many women in similar situations:</p>
            <ol class="coaching-steps">
                ${stepsHTML}
            </ol>
            <div class="power-quote">"${powerMessage}"</div>
        </div>
        
        <div class="gentle-recommendation">
            <p>When you're ready, <strong>${program?.name || 'Leadership Essentials'}</strong> might be a good fit for you because it:</p>
            <ul>
                <li>Rebuilds confidence through practical actions</li>
                <li>Creates identity shift and personal branding</li>
                <li>Teaches visibility tactics in a supportive environment</li>
                <li>Includes community support from women who understand</li>
            </ul>
        </div>
    `);
    
    // Soft CTAs
    setQuickActions([
        { label: "💬 Talk to a mentor who understands", type: 'primary', action: 'soft_mentor_call' },
        { label: "📋 Get free confidence worksheet", action: 'free_resource', data: 'confidence_worksheet' },
        { label: "🎥 Watch free masterclass preview", action: 'free_resource', data: 'free_webinar' },
        { label: "📝 Start the assessment when ready", action: 'start_assessment' }
    ]);
}

function showFreeResources(specificResource = null) {
    trackEvent('free_resources_viewed', { specific: specificResource });
    
    const resources = KB.free_resources;
    
    if (specificResource) {
        const resource = resources.find(r => r.id === specificResource);
        if (resource) {
            // Handle video resource - open in new tab
            if (resource.videoUrl) {
                trackEvent('video_resource_opened', { resource: specificResource });
                window.open(resource.videoUrl, '_blank');
                
                addMessage(`
                    <div class="resource-card video-card">
                        <div class="resource-icon">🎥</div>
                        <div class="resource-info">
                            <h4>${resource.name}</h4>
                            <p>Opening video in a new tab...</p>
                            <a href="${resource.videoUrl}" target="_blank" class="video-link">
                                ▶️ Click here if it didn't open automatically
                            </a>
                        </div>
                    </div>
                    <p>After watching, would you like to take the next step?</p>
                `);
                
                setQuickActions([
                    { label: "🎯 Start the assessment", type: 'primary', action: 'start_assessment' },
                    { label: "📞 Talk to an advisor", action: 'book_call' },
                    { label: "🎁 More free resources", action: 'show_all_free_resources' }
                ]);
                return;
            }
            
            // Handle call booking
            if (resource.isCallBooking) {
                showSoftMentorCall();
                return;
            }
            
            // Handle content-based resources (worksheets, guides)
            if (resource.hasContent && resource.content) {
                displayResourceContent(resource);
                return;
            }
            
            // Fallback: ask for email
            addMessage(`
                <div class="resource-card">
                    <div class="resource-icon">${resource.icon}</div>
                    <div class="resource-info">
                        <h4>${resource.name}</h4>
                        <p>${resource.description}</p>
                        <span class="resource-type">${resource.type}</span>
                    </div>
                </div>
                <p>To receive this free resource, please share your email and we'll send it right over:</p>
            `);
            
            conversation.userProfile.requestedResource = specificResource;
            setQuickActions([
                { label: "📧 Get it via email", type: 'primary', action: 'capture_email_for_resource' },
                { label: "📞 Or call to request", action: 'book_call' },
                { label: "← Back", action: 'show_all_free_resources' }
            ]);
            return;
        }
    }
    
    // Show all free resources
    let resourcesHTML = resources.map(r => `
        <div class="resource-item" data-resource="${r.id}">
            <span class="resource-icon">${r.icon}</span>
            <div class="resource-details">
                <strong>${r.name}</strong>
                <span class="resource-type">${r.type}</span>
            </div>
        </div>
    `).join('');
    
    addMessage(`
        <h3>🎁 Free Resources</h3>
        <p>Here are some free tools to help you get started on your journey:</p>
        
        <div class="resources-list">
            ${resourcesHTML}
        </div>
        
        <p>Which one would you like?</p>
    `);
    
    setQuickActions(resources.map(r => ({
        label: `${r.icon} ${r.name}`,
        action: 'free_resource',
        data: r.id
    })));
}

// Display full content for PDF-style resources
function displayResourceContent(resource) {
    trackEvent('resource_content_viewed', { resource: resource.id });
    
    const content = resource.content;
    
    let sectionsHTML = content.sections.map(section => {
        const itemsHTML = section.items.map(item => `<li>${item}</li>`).join('');
        return `
            <div class="worksheet-section">
                <h4>${section.heading}</h4>
                <ul>${itemsHTML}</ul>
            </div>
        `;
    }).join('');
    
    addMessage(`
        <div class="worksheet-container">
            <div class="worksheet-header">
                <span class="worksheet-icon">${resource.icon}</span>
                <h3>${content.title}</h3>
            </div>
            
            <div class="worksheet-content">
                ${sectionsHTML}
            </div>
            
            <div class="worksheet-quote">
                <em>"${content.quote}"</em>
            </div>
            
            <div class="worksheet-actions">
                <button class="print-worksheet-btn" onclick="printWorksheet()">🖨️ Print / Save as PDF</button>
            </div>
        </div>
        
        <p>Would you like to explore more resources or take the next step?</p>
    `);
    
    setQuickActions([
        { label: "🎯 Start the assessment", type: 'primary', action: 'start_assessment' },
        { label: "🎁 More free resources", action: 'show_all_free_resources' },
        { label: "📞 Talk to an advisor", action: 'book_call' }
    ]);
}

// Print worksheet function
function printWorksheet() {
    trackEvent('worksheet_printed');
    
    const worksheetContent = document.querySelector('.worksheet-container');
    if (!worksheetContent) return;
    
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Iron Lady - Free Resource</title>
            <style>
                body { 
                    font-family: Georgia, serif; 
                    max-width: 800px; 
                    margin: 40px auto; 
                    padding: 20px;
                    line-height: 1.6;
                }
                h3 { 
                    color: #8B1538; 
                    border-bottom: 2px solid #D4AF37;
                    padding-bottom: 10px;
                }
                h4 { 
                    color: #333; 
                    margin-top: 25px;
                }
                ul { 
                    margin: 15px 0;
                }
                li { 
                    margin: 8px 0; 
                    padding: 5px 0;
                    border-bottom: 1px dotted #ddd;
                }
                .worksheet-quote {
                    margin-top: 30px;
                    padding: 20px;
                    background: #f9f9f9;
                    border-left: 4px solid #D4AF37;
                    font-style: italic;
                }
                .header {
                    text-align: center;
                    margin-bottom: 30px;
                }
                .header img { max-width: 150px; }
                .footer {
                    margin-top: 40px;
                    text-align: center;
                    color: #666;
                    font-size: 0.9em;
                }
                @media print {
                    body { margin: 20px; }
                }
            </style>
        </head>
        <body>
            <div class="header">
                <h2>🏆 Iron Lady Pathfinder</h2>
                <p>Your Leadership Journey Starts Here</p>
            </div>
            ${worksheetContent.innerHTML}
            <div class="footer">
                <p>© Iron Lady | hello@ironlady.co | ironlady.co</p>
                <p>Enable a million women to reach the top.</p>
            </div>
        </body>
        </html>
    `);
    printWindow.document.close();
    printWindow.print();
}

function openWhatsAppContact() {
    trackEvent('whatsapp_contact_clicked');
    
    const config = window.CONFIG || {};
    const contact = config.contact || {};
    const whatsappNumber = contact.whatsapp_number || '918309882198';
    const message = encodeURIComponent(contact.whatsapp_message || "Hi Iron Lady! I'm interested in learning more about your programs.");
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    
    addMessage(`
        <div class="contact-success">
            <span class="success-icon">💬</span>
            <p>Opening WhatsApp... If it didn't open automatically, <a href="${whatsappUrl}" target="_blank">click here</a>.</p>
        </div>
    `);
    
    setQuickActions([
        { label: "🎯 Start Assessment", type: 'primary', action: 'start_assessment' },
        { label: "📚 See Programs", action: 'list_programs' }
    ]);
}

function showSoftMentorCall() {
    trackEvent('soft_mentor_call_clicked');
    
    // Set state to track we're showing contact options
    conversation.state = ConversationState.SHOWING_CONTACT;
    
    addMessage(`
        <div class="mentor-card">
            <h4>💜 Talk to Someone Who Understands</h4>
            <p>Our mentors are women who have been through similar challenges — career breaks, confidence struggles, feeling stuck or dependent.</p>
            <p>This isn't a sales call. It's a <strong>10-minute clarity conversation</strong> where you can:</p>
            <ul>
                <li>Share what you're going through (in confidence)</li>
                <li>Get honest advice on your next step</li>
                <li>Ask any questions about Iron Lady programs</li>
            </ul>
            <p><em>"Sometimes you just need someone to say: I've been there, and here's what helped me."</em></p>
        </div>
    `);
    
    // Show contact options with quick actions
    setQuickActions([
        { label: "📞 Call Now", type: 'primary', action: 'book_call' },
        { label: "📝 Request Callback", type: 'accent', action: 'capture_lead' },
        { label: "💬 WhatsApp", action: 'whatsapp_contact' },
        { label: "🎯 Start Assessment Instead", action: 'start_assessment' }
    ]);
}

// Update processUserInput to check emotional state with enhanced detection
const originalProcessUserInput = processUserInput;
processUserInput = function(text) {
    // Detect language from input text
    // Auto-detect language from user input
    const inputLang = detectLanguageFromText(text);
    if (inputLang && inputLang.code !== 'en-IN') {
        detectedLanguage = inputLang.code;
        localStorage.setItem('detectedLanguage', inputLang.code);
        
        // Also update voice recognition language for next voice input
        // This makes voice "follow" the user's language automatically
        if (typeof recognitionLang !== 'undefined') {
            recognitionLang = inputLang.code;
            localStorage.setItem('voiceLang', inputLang.code);
            console.log('Voice language auto-updated to:', inputLang.name);
        }
    }
    
    const lowerText = text.toLowerCase().trim();
    
    // Handle affirmative responses based on current state
    const affirmativeResponses = ['ok', 'okay', 'yes', 'sure', 'yep', 'yeah', 'ya', 'yea', 'alright', 'fine', 'good', 'great', 'sounds good', 'let\'s do it', 'proceed', 'go ahead', 'continue'];
    const negativeResponses = ['no', 'nope', 'not now', 'later', 'maybe later', 'not interested', 'cancel', 'nevermind'];
    
    const isAffirmative = affirmativeResponses.some(r => lowerText === r || lowerText.startsWith(r + ' '));
    const isNegative = negativeResponses.some(r => lowerText === r || lowerText.startsWith(r + ' '));
    
    // Context-aware response handling
    if (isAffirmative) {
        // If showing contact options, proceed with callback request
        if (conversation.state === ConversationState.SHOWING_CONTACT) {
            trackEvent('affirmative_to_contact', { response: text });
            openLeadModal();
            return;
        }
        // If in post-recommendation, proceed with enrollment
        if (conversation.state === ConversationState.POST_RECOMMENDATION) {
            initiateEnrollment();
            return;
        }
        // If in confidence followup, start assessment
        if (conversation.state === ConversationState.CONFIDENCE_FOLLOWUP) {
            askCareerStage();
            return;
        }
    }
    
    if (isNegative) {
        // Gracefully handle rejection
        if (conversation.state === ConversationState.SHOWING_CONTACT || 
            conversation.state === ConversationState.LEAD_CAPTURE) {
            addMessage(`
                <p>No problem at all! Take your time. When you're ready, I'm here to help.</p>
                <p>Is there anything else I can help you with?</p>
            `);
            setQuickActions([
                { label: "🎯 Find my program", type: 'primary', action: 'start_assessment' },
                { label: "📚 See all programs", action: 'list_programs' },
                { label: "🎁 Free resources", action: 'show_all_free_resources' },
                { label: "❓ FAQs", action: 'show_faq' }
            ]);
            return;
        }
    }
    
    // Check for "free" keywords (multiple languages)
    const freeKeywords = ['free', 'ఉచిత', 'फ्री', 'இலவச', 'ಉಚಿತ']; // English, Telugu, Hindi, Tamil, Kannada
    const hasFreeKeyword = freeKeywords.some(k => lowerText.includes(k));
    
    if (hasFreeKeyword) {
        trackEvent('free_resources_requested');
        showFreeResources();
        return;
    }
    
    // Check for emotional state first using enhanced detection
    const emotional = detectEmotionalState(text);
    if (emotional) {
        userEmotionalState = emotional.severity === 'high' ? 'low_confidence' : 'sad';
        
        trackEvent('emotional_state_detected', { 
            state: emotional.state,
            severity: emotional.severity,
            triggerLowConfidence: emotional.triggerLowConfidenceMode,
            language: detectedLanguage
        });
        
        // HIGH SEVERITY: Enter low confidence support mode
        if (emotional.triggerLowConfidenceMode) {
            enterLowConfidenceMode();
            return;
        }
        
        // Get translated response
        const lang = detectedLanguage || 'en-IN';
        let headerText = '💜 I hear you';
        let ctaText = 'Ready to take the first step?';
        let responseText = emotional.response;
        
        if (TRANSLATIONS[lang]) {
            headerText = lang === 'te-IN' ? '💜 నేను మీ మాటలు విన్నాను' : 
                        lang === 'hi-IN' ? '💜 मैं आपकी बात सुन रही हूं' :
                        lang === 'ta-IN' ? '💜 நான் உங்கள் பேச்சைக் கேட்கிறேன்' : headerText;
            ctaText = TRANSLATIONS[lang].next_step || ctaText;
            responseText = TRANSLATIONS[lang].emotional_support + ' ' + TRANSLATIONS[lang].encouragement;
        }
        
        // MEDIUM/LOW SEVERITY: Show empathetic response but continue to program options
        addMessage(`
            <div class="objection-card" style="border-left-color: var(--primary);">
                <h4>${headerText}</h4>
                <p>${responseText}</p>
            </div>
            
            <div class="cta">${ctaText}</div>
        `);
        
        setQuickActions([
            { label: "Yes, help me find my program", type: 'primary', action: 'personalize_with_form' },
            { label: "Tell me more about Iron Lady", action: 'about_iron_lady' },
            { label: "🎁 Show free resources", action: 'show_all_free_resources' },
            { label: "Read success stories", action: 'show_success_stories' }
        ]);
        
        return;
    }
    
    // Reset emotional state for non-emotional messages
    userEmotionalState = null;
    
    // Otherwise use original processing
    return originalProcessUserInput(text);
};

// ============================================
// Setup Modal Event Listeners
// ============================================

function setupModals() {
    // Program modal
    const closeProgramBtn = document.getElementById('closeProgramModal');
    if (closeProgramBtn) {
        closeProgramBtn.addEventListener('click', closeProgramModal);
    }
    
    // Comparison modal
    const closeComparisonBtn = document.getElementById('closeComparisonModal');
    if (closeComparisonBtn) {
        closeComparisonBtn.addEventListener('click', closeComparisonModal);
    }
    
    // Goal planner modal
    const closeGoalBtn = document.getElementById('closeGoalPlanner');
    if (closeGoalBtn) {
        closeGoalBtn.addEventListener('click', closeGoalPlanner);
    }
    
    // Survey modal
    const skipSurvey = document.getElementById('skipSurvey');
    const submitSurveyBtn = document.getElementById('submitSurvey');
    if (skipSurvey) skipSurvey.addEventListener('click', closeSurvey);
    if (submitSurveyBtn) submitSurveyBtn.addEventListener('click', submitSurvey);
    
    // Close modals on overlay click
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.classList.remove('active');
            }
        });
    });
}

// ============================================
// Update Quick Actions for New Features
// ============================================

// Override compare_programs action
const originalProcessAction = processAction;
processAction = function(actionType, data) {
    switch(actionType) {
        case 'compare_programs':
            openComparisonModal();
            break;
        case 'open_program_modal':
            openProgramModal(data);
            break;
        case 'goal_planner':
            openGoalPlanner();
            break;
        case 'export_pdf':
            exportRecommendationPDF();
            break;
        default:
            return originalProcessAction(actionType, data);
    }
};

// ============================================
// Offline Detection
// ============================================

function setupOfflineDetection() {
    const banner = document.getElementById('offlineBanner');
    
    function updateOnlineStatus() {
        if (!navigator.onLine) {
            banner.style.display = 'block';
            trackEvent('went_offline');
        } else {
            banner.style.display = 'none';
        }
    }
    
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
    updateOnlineStatus();
}

// ============================================
// Mini Summary Header
// ============================================

function updateSummaryHeader() {
    const header = document.getElementById('summaryHeader');
    const { careerStage, goal, challenges, recommendedProgram } = conversation.userProfile;
    
    // Only show if we have at least career stage
    if (!careerStage) {
        header.style.display = 'none';
        return;
    }
    
    header.style.display = 'flex';
    
    const stageLabel = CAREER_STAGES.find(s => s.id === careerStage);
    const goalLabel = GOALS.find(g => g.id === goal);
    const challengeLabels = challenges.map(id => CHALLENGES.find(c => c.id === id)?.icon).filter(Boolean);
    
    document.getElementById('summaryStage').innerHTML = `${stageLabel?.icon || ''} <strong>${stageLabel?.label || ''}</strong>`;
    document.getElementById('summaryGoal').innerHTML = goal ? `${goalLabel?.icon || ''} ${goalLabel?.label || ''}` : '';
    document.getElementById('summaryChallenges').innerHTML = challengeLabels.length ? challengeLabels.join(' ') : '';
    
    const matchEl = document.getElementById('summaryMatch');
    if (recommendedProgram) {
        const program = KB.programs.find(p => p.id === recommendedProgram);
        matchEl.textContent = `→ ${program?.name || ''}`;
        matchEl.style.display = 'inline-block';
    } else {
        matchEl.style.display = 'none';
    }
}

// ============================================
// Matching Success Stories
// ============================================

// ============================================
// ROI Calculator
// ============================================

const SALARY_DATA = {
    // Average salaries by career stage (in lakhs per annum)
    averages: {
        early: { min: 4, max: 12, avg: 8 },
        mid: { min: 12, max: 30, avg: 18 },
        senior: { min: 30, max: 80, avg: 50 },
        entrepreneur: { min: 10, max: 50, avg: 25 }
    },
    // Average increase by program
    increases: {
        leadership_essentials: { min: 20, max: 40, avg: 30 },
        hundred_board_members: { min: 30, max: 60, avg: 40 },
        csuite_mastery: { min: 40, max: 80, avg: 55 },
        masterclass: { min: 10, max: 25, avg: 15 }
    },
    // Program costs (approximate in lakhs)
    costs: {
        leadership_essentials: 0.30,
        hundred_board_members: 0.85,
        csuite_mastery: 1.75,
        masterclass: 0.08
    }
};

function buildROICalculatorHTML() {
    const { careerStage, recommendedProgram } = conversation.userProfile;
    const programId = recommendedProgram;
    
    const salaryRange = SALARY_DATA.averages[careerStage] || SALARY_DATA.averages.mid;
    const increaseRange = SALARY_DATA.increases[programId] || SALARY_DATA.increases.masterclass;
    const programCost = SALARY_DATA.costs[programId] || 0.5;
    
    // Calculate potential gains
    const currentSalary = salaryRange.avg;
    const minIncrease = (currentSalary * increaseRange.min / 100);
    const avgIncrease = (currentSalary * increaseRange.avg / 100);
    const maxIncrease = (currentSalary * increaseRange.max / 100);
    
    const roi = Math.round((avgIncrease - programCost) / programCost * 100);
    
    // Format as lakhs
    const formatLakhs = (val) => val >= 1 ? `₹${val.toFixed(1)}L` : `₹${(val * 100).toFixed(0)}K`;
    
    return `
        <div class="roi-calculator">
            <div class="roi-header">
                <span class="roi-icon">📊</span>
                <h4>Your Potential ROI</h4>
            </div>
            
            <div class="roi-scenario">
                <div class="roi-label">If your current salary is around</div>
                <div class="roi-current">${formatLakhs(currentSalary)}/year</div>
            </div>
            
            <div class="roi-projection">
                <div class="roi-arrow">↓</div>
                <div class="roi-range">
                    <div class="roi-item">
                        <span class="roi-range-label">Conservative</span>
                        <span class="roi-value">+${formatLakhs(minIncrease)}</span>
                        <span class="roi-percent">(+${increaseRange.min}%)</span>
                    </div>
                    <div class="roi-item highlight">
                        <span class="roi-range-label">Average</span>
                        <span class="roi-value">+${formatLakhs(avgIncrease)}</span>
                        <span class="roi-percent">(+${increaseRange.avg}%)</span>
                    </div>
                    <div class="roi-item">
                        <span class="roi-range-label">Top Performers</span>
                        <span class="roi-value">+${formatLakhs(maxIncrease)}</span>
                        <span class="roi-percent">(+${increaseRange.max}%)</span>
                    </div>
                </div>
            </div>
            
            <div class="roi-summary">
                <div class="roi-cost">
                    <span>Program Investment:</span>
                    <span>${formatLakhs(programCost)}</span>
                </div>
                <div class="roi-return ${roi > 500 ? 'exceptional' : roi > 200 ? 'great' : 'good'}">
                    <span>Potential ROI:</span>
                    <span class="roi-multiplier">${roi > 1000 ? '10x+' : Math.round(roi/100) + 'x'} return</span>
                </div>
            </div>
            
            <p class="roi-disclaimer">*Based on average outcomes from Iron Lady alumni. Individual results vary.</p>
        </div>
    `;
}

// ============================================
// Alumni Network Stats
// ============================================

function buildAlumniStatsHTML() {
    const stats = KB.alumni_stats;
    if (!stats) return '';
    
    const achievementsHTML = stats.achievements.map(a => `
        <div class="alumni-stat">
            <span class="alumni-stat-icon">${a.icon}</span>
            <span class="alumni-stat-value">${a.stat}</span>
            <span class="alumni-stat-label">${a.label}</span>
        </div>
    `).join('');
    
    const companiesHTML = stats.notable_companies.slice(0, 8).map(c => 
        `<span class="company-tag">${c}</span>`
    ).join('');
    
    const featuresHTML = stats.community_features.slice(0, 4).map(f => 
        `<li>${f}</li>`
    ).join('');
    
    return `
        <div class="alumni-network-section">
            <h4>🌐 Join a Powerful Network</h4>
            
            <div class="alumni-stats-grid">
                ${achievementsHTML}
            </div>
            
            <div class="alumni-companies">
                <span class="companies-label">Alumni at:</span>
                <div class="companies-list">
                    ${companiesHTML}
                    <span class="company-tag more">+more</span>
                </div>
            </div>
            
            <div class="community-features">
                <strong>Community Benefits:</strong>
                <ul>${featuresHTML}</ul>
            </div>
        </div>
    `;
}

// ============================================
// Matching Success Stories
// ============================================

function buildMatchingStoriesHTML() {
    const matchingStories = getMatchingSuccessStories(2);
    
    if (!matchingStories || matchingStories.length === 0) {
        // Fall back to program-related story
        const programStory = KB.success_stories.find(s => 
            s.program === conversation.userProfile.recommendedProgram
        );
        if (programStory) {
            matchingStories.push(programStory);
        }
    }
    
    if (matchingStories.length === 0) return '';
    
    const storiesHTML = matchingStories.map(story => `
        <div class="matching-story">
            <div class="story-header">
                <div class="story-avatar">${story.initials}</div>
                <div class="story-info">
                    <span class="story-name">${story.name}</span>
                    <span class="story-role">${story.role}</span>
                </div>
            </div>
            <p class="story-quote">"${story.quote}"</p>
            <div class="story-outcome">
                <span class="outcome-icon">🎯</span>
                <span class="outcome-text">${story.outcome}</span>
                ${story.salary_increase ? `<span class="salary-badge">+${story.salary_increase} salary</span>` : ''}
            </div>
        </div>
    `).join('');
    
    // Personalized header based on user's situation
    let headerText = "Women Like You Succeeded";
    const { emotionallyVulnerable, careerStage, challenges } = conversation.userProfile;
    
    if (emotionallyVulnerable) {
        headerText = "They Felt the Same Way — And Transformed";
    } else if (challenges.includes('confidence')) {
        headerText = "From Doubt to Leadership";
    } else if (careerStage === 'early') {
        headerText = "Early Career Success Stories";
    } else if (careerStage === 'senior') {
        headerText = "Executive Transformations";
    }
    
    return `
        <div class="matching-stories-section">
            <h4>💫 ${headerText}</h4>
            <div class="stories-grid">
                ${storiesHTML}
            </div>
        </div>
    `;
}

// ============================================
// Learning Path Recommendation
// ============================================

function buildLearningPath() {
    const { careerStage, recommendedProgram } = conversation.userProfile;
    const path = LEARNING_PATHS[careerStage] || LEARNING_PATHS.mid;
    
    if (!path || path.length < 2) return '';
    
    const stepsHTML = path.map((programId, index) => {
        const program = KB.programs.find(p => p.id === programId);
        const isCurrent = programId === recommendedProgram;
        
        let html = `<span class="path-program ${isCurrent ? 'current' : ''}">${program?.name || programId}</span>`;
        
        if (index < path.length - 1) {
            html += '<span class="path-arrow">→</span>';
        }
        
        return html;
    }).join('');
    
    return `
        <div class="learning-path">
            <h4>🛤️ Suggested Learning Path</h4>
            <div class="path-steps">
                ${stepsHTML}
            </div>
        </div>
    `;
}

// ============================================
// Edit Choices Buttons
// ============================================

function buildEditChoicesHTML() {
    return `
        <div class="edit-choices">
            <button class="edit-btn" onclick="editChoice('stage')">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                </svg>
                Edit Stage
            </button>
            <button class="edit-btn" onclick="editChoice('goal')">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                </svg>
                Edit Goal
            </button>
            <button class="edit-btn" onclick="editChoice('challenges')">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                </svg>
                Edit Challenges
            </button>
        </div>
    `;
}

function editChoice(type) {
    trackEvent('edit_choice_clicked', { type });
    
    switch(type) {
        case 'stage':
            conversation.userProfile.careerStage = null;
            conversation.userProfile.goal = null;
            conversation.userProfile.challenges = [];
            conversation.userProfile.recommendedProgram = null;
            askCareerStage();
            break;
        case 'goal':
            conversation.userProfile.goal = null;
            conversation.userProfile.challenges = [];
            conversation.userProfile.recommendedProgram = null;
            askGoal();
            break;
        case 'challenges':
            conversation.userProfile.challenges = [];
            conversation.userProfile.recommendedProgram = null;
            askChallenges();
            break;
    }
    
    updateSummaryHeader();
}

// ============================================
// Copy to Clipboard
// ============================================

function copyToClipboard(text, buttonEl) {
    navigator.clipboard.writeText(text).then(() => {
        buttonEl.classList.add('copied');
        buttonEl.innerHTML = '✓';
        
        setTimeout(() => {
            buttonEl.classList.remove('copied');
            buttonEl.innerHTML = '📋';
        }, 2000);
        
        trackEvent('copied_to_clipboard', { text: text.substring(0, 20) });
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}

// ============================================
// Confetti Animation
// ============================================

function showConfetti() {
    const container = document.createElement('div');
    container.className = 'confetti-container';
    document.body.appendChild(container);
    
    const colors = ['#8B1538', '#D4AF37', '#059669', '#2563EB', '#DC2626', '#7C3AED'];
    const shapes = ['square', 'circle'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        confetti.style.animationDuration = (2 + Math.random() * 2) + 's';
        
        if (shapes[Math.floor(Math.random() * shapes.length)] === 'circle') {
            confetti.style.borderRadius = '50%';
        }
        
        container.appendChild(confetti);
    }
    
    setTimeout(() => {
        container.remove();
    }, 4000);
}

// Update saveGoalPlan to show confetti
const originalSaveGoalPlan = saveGoalPlan;
saveGoalPlan = function() {
    const goal30 = document.getElementById('goal30')?.value;
    const goal60 = document.getElementById('goal60')?.value;
    const goal90 = document.getElementById('goal90')?.value;
    
    // Only show confetti if they actually filled something
    if (goal30 || goal60 || goal90) {
        showConfetti();
    }
    
    originalSaveGoalPlan();
};

// ============================================
// Update askGoal to use icons
// ============================================

const originalAskGoal = askGoal;
askGoal = function() {
    updateProgress(2);
    updateSummaryHeader();
    
    const stage = CAREER_STAGES.find(s => s.id === conversation.userProfile.careerStage);
    
    let optionsHTML = '<div class="options-grid">';
    GOALS.forEach(goal => {
        optionsHTML += `
            <button class="option-btn" data-goal="${goal.id}">
                <span class="goal-icon">${goal.icon}</span>
                <span class="label">${goal.label}</span>
                <span class="desc">${goal.desc}</span>
            </button>
        `;
    });
    optionsHTML += '</div>';
    
    addMessage(`
        <p>Perfect! As someone at the <strong>${stage.label.toLowerCase()}</strong> stage, you have unique opportunities ahead.</p>
        <p><strong>What's your #1 goal for the next 6-12 months?</strong></p>
        ${optionsHTML}
    `);
    
    setTimeout(() => {
        document.querySelectorAll('.option-btn[data-goal]').forEach(btn => {
            btn.onclick = () => {
                const goal = GOALS.find(g => g.id === btn.dataset.goal);
                addMessage(`${goal.icon} ${goal.label}`, true);
                showTypingIndicator();
                setTimeout(() => {
                    hideTypingIndicator();
                    handleGoalSelection(btn.dataset.goal);
                }, 600);
            };
        });
    }, 100);
};

// Update challenge selection to update summary
const originalHandleGoalSelection = handleGoalSelection;
handleGoalSelection = function(goalId) {
    conversation.userProfile.goal = goalId;
    conversation.state = ConversationState.ASK_CHALLENGES;
    trackEvent('goal_selected', { goal: goalId });
    updateSummaryHeader();
    askChallenges();
};

// Update askChallenges to use icons
const originalAskChallenges = askChallenges;
askChallenges = function() {
    updateProgress(3);
    updateSummaryHeader();
    
    addMessage(`
        <p>Your goal is valid—and achievable. Let's understand what's standing in your way.</p>
        <p><strong>Which challenges resonate most with you?</strong> (Pick 1-2)</p>
    `);
    
    setQuickActions(CHALLENGES.map(c => ({
        label: `${c.icon} ${c.label}`,
        action: 'select_challenges',
        data: c.id
    })));
};

document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    setupFormValidation();
    setupAccessibility();
    setupAnalyticsModal();
    setupDemoMode();
    setupModals();
    setupVoiceOutput();  // Text-to-speech
    setupVoiceInput();   // Speech-to-text
    setupDarkMode();
    setupPWA();
    setupOfflineDetection();
});
