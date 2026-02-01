/**
 * Iron Lady OpsHub - Database Module
 * Simple JSON file-based storage (no native dependencies)
 */

const fs = require('fs');
const path = require('path');

const DB_FILE = path.join(__dirname, 'opshub-data.json');

// Default database structure
const defaultData = {
    advisors: [],
    programs: [],
    cohorts: [],
    leads: [],
    lead_interactions: [],
    enrollments: [],
    audit_log: []
};

// Load database from file
function loadDB() {
    try {
        if (fs.existsSync(DB_FILE)) {
            const data = fs.readFileSync(DB_FILE, 'utf8');
            return JSON.parse(data);
        }
    } catch (error) {
        console.error('Error loading database:', error);
    }
    return { ...defaultData };
}

// Save database to file
function saveDB(data) {
    try {
        fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
    } catch (error) {
        console.error('Error saving database:', error);
    }
}

// Database instance
let db = loadDB();

// Database API (mimics SQL-like operations)
const database = {
    // Get all records from a table
    all(table) {
        return db[table] || [];
    },
    
    // Get one record by ID
    get(table, id) {
        return (db[table] || []).find(r => r.id === id);
    },
    
    // Find records matching a condition
    find(table, condition) {
        return (db[table] || []).filter(condition);
    },
    
    // Find one record matching a condition
    findOne(table, condition) {
        return (db[table] || []).find(condition);
    },
    
    // Insert a record
    insert(table, record) {
        if (!db[table]) db[table] = [];
        record.created_at = record.created_at || new Date().toISOString();
        record.updated_at = new Date().toISOString();
        db[table].push(record);
        saveDB(db);
        return record;
    },
    
    // Update a record by ID
    update(table, id, updates) {
        const index = (db[table] || []).findIndex(r => r.id === id);
        if (index !== -1) {
            db[table][index] = { 
                ...db[table][index], 
                ...updates, 
                updated_at: new Date().toISOString() 
            };
            saveDB(db);
            return db[table][index];
        }
        return null;
    },
    
    // Delete a record by ID
    delete(table, id) {
        const index = (db[table] || []).findIndex(r => r.id === id);
        if (index !== -1) {
            const deleted = db[table].splice(index, 1)[0];
            saveDB(db);
            return deleted;
        }
        return null;
    },
    
    // Delete records matching a condition
    deleteWhere(table, condition) {
        const before = db[table]?.length || 0;
        db[table] = (db[table] || []).filter(r => !condition(r));
        saveDB(db);
        return before - db[table].length;
    },
    
    // Count records
    count(table, condition) {
        if (condition) {
            return (db[table] || []).filter(condition).length;
        }
        return (db[table] || []).length;
    },
    
    // Reset database
    reset() {
        db = { ...defaultData };
        saveDB(db);
    },
    
    // Raw access
    raw() {
        return db;
    }
};

console.log('✅ Database initialized (JSON file storage)');

module.exports = database;
