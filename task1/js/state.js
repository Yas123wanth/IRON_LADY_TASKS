/**
 * Iron Lady Pathfinder - State Management
 * Conversation states, user profile, personality exercise data
 */

// ============================================
// Conversation States
// ============================================

const ConversationState = {
    WELCOME: 'welcome',
    PROGRAM_EXPLORE: 'program_explore',
    PERSONALITY_EXERCISE: 'personality_exercise',
    ASK_CAREER_STAGE: 'ask_career_stage',
    ASK_GOAL: 'ask_goal',
    ASK_CHALLENGES: 'ask_challenges',
    SHOW_RECOMMENDATION: 'show_recommendation',
    POST_RECOMMENDATION: 'post_recommendation',
    LEAD_CAPTURE: 'lead_capture',
    FAQ: 'faq',
    FREE_CHAT: 'free_chat',
    LOW_CONFIDENCE_SUPPORT: 'low_confidence_support',
    CONFIDENCE_FOLLOWUP: 'confidence_followup',
    SHOWING_CONTACT: 'showing_contact'
};

// ============================================
// Personality Exercise Questions
// ============================================

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

// ============================================
// User Profile & Conversation State
// ============================================

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
        allScores: null,
        emotionallyVulnerable: false,
        lastEmotionalKeyword: null,
        struggleArea: null
    },
    messageHistory: []
};

// ============================================
// Career Stages & Goals Definitions
// ============================================

const careerStages = [
    { id: 'early', label: 'Early Career (0-5 years)', icon: '🌱' },
    { id: 'mid', label: 'Mid Career (5-15 years)', icon: '📈' },
    { id: 'senior', label: 'Senior/Executive (15+ years)', icon: '👑' },
    { id: 'entrepreneur', label: 'Entrepreneur/Founder', icon: '🚀' }
];

const goals = [
    { id: 'promotion', label: 'Get promoted faster', icon: '⬆️' },
    { id: 'salary', label: 'Increase my salary', icon: '💰' },
    { id: 'return', label: 'Return after career break', icon: '🔄' },
    { id: 'leadership', label: 'Develop leadership skills', icon: '👥' },
    { id: 'board', label: 'Reach board/C-suite', icon: '🎯' },
    { id: 'quick_start', label: 'Quick start/momentum', icon: '⚡' }
];

const challenges = [
    { id: 'confidence', label: 'Confidence & visibility', icon: '💪' },
    { id: 'bias', label: 'Workplace bias', icon: '⚖️' },
    { id: 'recognition', label: 'Not getting recognition', icon: '🏆' },
    { id: 'missed_promotions', label: 'Missed promotions', icon: '🚫' },
    { id: 'clarity', label: 'Lack of clarity', icon: '🔍' }
];

// ============================================
// Reset Conversation
// ============================================

function resetConversation() {
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
            allScores: null,
            emotionallyVulnerable: false,
            lastEmotionalKeyword: null,
            struggleArea: null
        },
        messageHistory: []
    };
    personalityAnswers = {};
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { 
        ConversationState, 
        PERSONALITY_EXERCISE, 
        conversation, 
        personalityAnswers,
        careerStages,
        goals,
        challenges,
        resetConversation
    };
}
