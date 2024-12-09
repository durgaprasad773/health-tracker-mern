const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./db/health_tracker.db", (err) => {
    if (err) console.error("Database connection failed:", err.message);
    else console.log("Connected to SQLite database.");
});

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS activities (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            type TEXT NOT NULL,
            duration INTEGER NOT NULL,
            date TEXT NOT NULL
        );
    `);

    db.run(`
        CREATE TABLE IF NOT EXISTS goals (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            target INTEGER NOT NULL,
            progress INTEGER DEFAULT 0
        );
    `);
});

module.exports = db;
