/**
 * Iron Lady Pathfinder - Storage & Analytics
 * Local storage persistence and analytics tracking
 */

const STORAGE_KEY = 'ironlady_pathfinder_conversation';
const ANALYTICS_KEY = 'ironlady_pathfinder_analytics';

// ============================================
// Analytics System
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
            currentState: conversation?.state,
            userProfile: conversation?.userProfile ? {
                careerStage: conversation.userProfile.careerStage,
                goal: conversation.userProfile.goal,
                challengesCount: conversation.userProfile.challenges?.length || 0,
                hasRecommendation: !!conversation.userProfile.recommendedProgram
            } : {}
        }
    };
    
    Analytics.events.push(event);
    
    // Log to console in development
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log('📊 Analytics Event:', event);
    }
    
    saveAnalytics();
    
    // Hook for external analytics
    if (typeof window.gtag === 'function') {
        window.gtag('event', eventName, eventData);
    }
    
    if (typeof window.mixpanel !== 'undefined') {
        window.mixpanel.track(eventName, eventData);
    }
    
    window.dispatchEvent(new CustomEvent('ironlady_analytics', { detail: event }));
}

function saveAnalytics() {
    try {
        const analyticsData = {
            sessionId: Analytics.sessionId,
            sessionStart: Analytics.sessionStart,
            events: Analytics.events.slice(-100)
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

// ============================================
// Local Storage Persistence
// ============================================

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
            const savedTime = new Date(data.timestamp);
            const hoursSaved = (new Date() - savedTime) / (1000 * 60 * 60);
            
            if (hoursSaved < 24) {
                conversation.state = data.state;
                conversation.userProfile = data.userProfile;
                return true;
            }
        }
    } catch (e) {
        console.warn('Could not load from localStorage:', e);
    }
    return false;
}

function clearLocalStorage() {
    try {
        localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
        console.warn('Could not clear localStorage:', e);
    }
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        Analytics,
        trackEvent,
        saveAnalytics,
        getAnalyticsSummary,
        saveToLocalStorage,
        loadFromLocalStorage,
        clearLocalStorage,
        STORAGE_KEY,
        ANALYTICS_KEY
    };
}
