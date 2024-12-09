const express = require("express");
const db = require("../db/connection");
const router = express.Router();

router.get("/", (req, res) => {
    db.all("SELECT * FROM activities", [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

router.post("/", (req, res) => {
    const { type, duration, date } = req.body;
    db.run(
        "INSERT INTO activities (type, duration, date) VALUES (?, ?, ?)",
        [type, duration, date],
        function (err) {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ id: this.lastID });
        }
    );
});

module.exports = router;
