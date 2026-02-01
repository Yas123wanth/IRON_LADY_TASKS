/**
 * Iron Lady Pathfinder - Knowledge Base
 * Single source of truth for all program data, FAQs, success stories, and content
 */

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
            tagline: "Build your foundation for leadership success",
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
            tagline: "Accelerate to senior leadership positions",
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
            tagline: "Transform into an executive leader",
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
            tagline: "Kickstart your transformation in one weekend",
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
            result: "2 promotions in 8 months",
            outcome: "2 promotions in 8 months",
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
            result: "Landed dream job after 5-year break",
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
            result: "Promoted to CTO within 1 year",
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
            result: "Joined first board within 18 months",
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
            result: "Achieved 90-day goal ahead of schedule",
            outcome: "Achieved 90-day goal ahead of schedule",
            situations: ["quick_start", "early_career", "first_leadership"],
            career_stage: "early",
            challenges: ["confidence", "clarity"],
            goal: "promotion"
        },
        {
            name: "Sunita K.",
            initials: "SK",
            role: "Homemaker → Entrepreneur",
            program: "leadership_essentials",
            quote: "I was financially dependent on my husband for 12 years. Iron Lady gave me the confidence to start my own consulting business. Now I earn more than I ever did.",
            result: "Started business, now financially independent",
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
            result: "From 'failure' to VP in 14 months",
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
            result: "Finally promoted after being passed over 3 times",
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
            result: "From anxiety to keynote speaker",
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
            result: "Found career clarity and happiness",
            outcome: "Found career clarity and happiness",
            situations: ["unhappy", "stuck", "unfulfilled", "confused"],
            career_stage: "early",
            challenges: ["clarity"],
            emotional: true,
            goal: "clarity"
        }
    ],
    
    // Free Resources
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
    
    // Empowerment Messages
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
    
    // Micro-Coaching Blocks
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
    
    // Low Confidence Support
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

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = KB;
}
