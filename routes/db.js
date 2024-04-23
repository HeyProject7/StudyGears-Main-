const express = require('express');
const router = express.Router();
const ThirdEyeMode = require('../model/ThirdEyeMode');
const ThirdEyeLang = require('../model/ThirdEyeLang');

// Route to switch the mode
router.get('/switchmode/:ob', async (req, res) => {
    const ob = req.params.ob;

    console.log("Received ob:", ob);

    try {
        var result = ThirdEyeMode.create({
            "currentmode": ob
        });

        res.status(201).send("Ob stored in database successfully.");
    } catch (err) {
        console.error("Error storing ob:", err);
        res.status(500).send("Error storing ob in database.");
    }
});

// Route to switch the language
router.get('/switchlang/:lang', async (req, res) => {
    const lang = req.params.lang;

    console.log("Received lang:", lang);

    try {
        var result = ThirdEyeMode.create({
            "currentlang": lang
        });

        res.status(201).send("Language stored in database successfully.");
    } catch (err) {
        console.error("Error storing lang:", err);
        res.status(500).send("Error storing language in database.");
    }
});

module.exports = router;
