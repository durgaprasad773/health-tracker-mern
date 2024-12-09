const express = require("express");
const db = require("../db/connection");
const router = express.Router();

router.get("/", (req, res) => {
    db.all("SELECT * FROM goals", [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

router.post("/", (req, res) => {
    const { name, target } = req.body;
    db.run(
        "INSERT INTO goals (name, target) VALUES (?, ?)",
        [name, target],
        function (err) {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ id: this.lastID });
        }
    );
});

module.exports = router;
