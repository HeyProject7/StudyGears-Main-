const express = require('express');
const router = express.Router();
const ThirdEyeMode = require('../model/ThirdEyeMode');
const ThirdEyeLang = require('../model/ThirdEyeLang');
const ThirdEyeData = require('../model/ThirdEyeData');

// Route to switch the mode
router.get('/switchmode/:ob', async (req, res) => {
    const ob = req.params.ob;

    console.log("Received mode:", ob);

    try {
        const result = await ThirdEyeMode.create({
            "currentmode": ob
        });

        res.status(201).send("Mode stored in database successfully.");
    } catch (err) {
        console.error("Error storing mode:", err);
        res.status(500).send("Error storing mode in database.");
    }
});

// Route to switch the language
router.get('/switchlang/:lang', async (req, res) => {
    const lang = req.params.lang;

    console.log("Received lang:", lang);

    try {
        const result = await ThirdEyeLang.create({
            "currentlang": lang
        });

        res.status(201).send("Language stored in database successfully.");
    } catch (err) {
        console.error("Error storing language:", err);
        res.status(500).send("Error storing language in database.");
    }
});

// Route to store an object name
router.get('/storeobject/:object', async (req, res) => {
    const object = req.params.object;

    console.log("Received object:", object);

    try {
        const result = await ThirdEyeData.create({
            "object_name": object
        });

        res.status(201).send("Object name stored in database successfully.");
    } catch (err) {
        console.error("Error storing object name:", err);
        res.status(500).send("Error storing object name in database.");
    }
});

// Route to get the current language
router.get('/getlang', async (req, res) => {
    try {
        const lang = await ThirdEyeLang.findOne();
        res.status(200).json(lang);
    } catch (err) {
        console.error("Error getting language:", err);
        res.status(500).send("Error getting language from database.");
    }
});

// Route to get the current mode
router.get('/getmode', async (req, res) => {
    try {
        const mode = await ThirdEyeMode.findOne();
        res.status(200).json(mode);
    } catch (err) {
        console.error("Error getting mode:", err);
        res.status(500).send("Error getting mode from database.");
    }
});

// Route to get the stored object
router.get('/getobject', async (req, res) => {
    try {
        const object = await ThirdEyeData.findOne();
        res.status(200).json(object);
    } catch (err) {
        console.error("Error getting object:", err);
        res.status(500).send("Error getting object from database.");
    }
});



module.exports = router;
