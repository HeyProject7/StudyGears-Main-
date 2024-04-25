const express = require('express');
const router = express.Router();
const ThirdEyeMode = require('../model/ThirdEyeMode');
const ThirdEyeLang = require('../model/ThirdEyeLang');
const ThirdEyeData = require('../model/ThirdEyeData');
const { IP1, IP2, IP3 } = require('../model/IPAddresses'); // Import IP schemas

// Route to switch the mode
router.get('/switchmode/:ob', async (req, res) => {
    try {
        const ob = req.params.ob;
        if (!ob) {
            throw new Error("Mode parameter is missing");
        }

        console.log("Received mode:", ob);

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
    try {
        const lang = req.params.lang;
        if (!lang) {
            throw new Error("Language parameter is missing");
        }

        console.log("Received lang:", lang);

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
    try {
        const object = req.params.object;
        if (!object) {
            throw new Error("Object parameter is missing");
        }

        console.log("Received object:", object);

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
        const lang = await ThirdEyeLang.findOne().sort({ _id: -1 }).limit(1);
        res.status(200).json(lang);
    } catch (err) {
        console.error("Error getting language:", err);
        res.status(500).send("Error getting language from database.");
    }
});

// Route to get the current mode
router.get('/getmode', async (req, res) => {
    try {
        const mode = await ThirdEyeMode.findOne().sort({ _id: -1 }).limit(1);
        res.status(200).json(mode);
    } catch (err) {
        console.error("Error getting mode:", err);
        res.status(500).send("Error getting mode from database.");
    }
});

// Route to get the stored object
router.get('/getobject', async (req, res) => {
    try {
        const object = await ThirdEyeData.findOne().sort({ _id: -1 }).limit(1);
        res.status(200).json(object);
    } catch (err) {
        console.error("Error getting object:", err);
        res.status(500).send("Error getting object from database.");
    }
});


// Handling IP
// Route to store IP1 address
// Route to store IP1 address with image path
router.get('/store_ip1/:ip/*', async (req, res) => {
    try {
        const ip = req.params.ip;
        const imagePath = req.params[0]; // Extract the image path from the URL

        if (!ip || !imagePath) {
            throw new Error("IP or image path parameter is missing");
        }

        console.log("Received IP1:", ip);
        console.log("Received image path:", imagePath);

        // Store IP1 address and image path in the database
        const result = await IP1.create({
            "ip": ip,
            "imagePath": imagePath
        });

        res.status(201).send("IP1 address and image path stored in database successfully.");
    } catch (err) {
        console.error("Error storing IP1 address and image path:", err);
        res.status(500).send("Error storing IP1 address and image path in database.");
    }
});

// Route to store IP2 address with image path
router.get('/store_ip2/:ip/*', async (req, res) => {
    try {
        const ip = req.params.ip;
        const imagePath = req.params[0]; // Extract the image path from the URL

        if (!ip || !imagePath) {
            throw new Error("IP or image path parameter is missing");
        }

        console.log("Received IP2:", ip);
        console.log("Received image path:", imagePath);

        // Store IP2 address and image path in the database
        const result = await IP2.create({
            "ip": ip,
            "imagePath": imagePath
        });

        res.status(201).send("IP2 address and image path stored in database successfully.");
    } catch (err) {
        console.error("Error storing IP2 address and image path:", err);
        res.status(500).send("Error storing IP2 address and image path in database.");
    }
});


// Route to store IP3 address
// Route to store IP3 address with image path
router.get('/store_ip3/:ip/*', async (req, res) => {
    try {
        const ip = req.params.ip;
        const imagePath = req.params[0]; // Extract the image path from the URL

        if (!ip || !imagePath) {
            throw new Error("IP or image path parameter is missing");
        }

        console.log("Received IP3:", ip);
        console.log("Received image path:", imagePath);

        // Store IP3 address and image path in the database
        const result = await IP3.create({
            "ip": ip,
            "imagePath": imagePath
        });

        res.status(201).send("IP3 address and image path stored in database successfully.");
    } catch (err) {
        console.error("Error storing IP3 address and image path:", err);
        res.status(500).send("Error storing IP3 address and image path in database.");
    }
});

// Route to get IP1 address
router.get('/getIP1', async (req, res) => {
    try {
        const ip = await IP1.findOne().sort({ _id: -1 }).limit(1);
        res.status(200).json(ip);
    } catch (err) {
        console.error("Error getting IP1 address:", err);
        res.status(500).send("Error getting IP1 address from database.");
    }
});

// Route to get IP2 address
router.get('/getIP2', async (req, res) => {
    try {
        const ip = await IP2.findOne().sort({ _id: -1 }).limit(1);
        res.status(200).json(ip);
    } catch (err) {
        console.error("Error getting IP2 address:", err);
        res.status(500).send("Error getting IP2 address from database.");
    }
});

// Route to get IP3 address
router.get('/getIP3', async (req, res) => {
    try {
        const ip = await IP3.findOne().sort({ _id: -1 }).limit(1);
        res.status(200).json(ip);
    } catch (err) {
        console.error("Error getting IP3 address:", err);
        res.status(500).send("Error getting IP3 address from database.");
    }
});

module.exports = router;
