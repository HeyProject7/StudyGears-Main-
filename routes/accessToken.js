const express = require('express');
const router = express.Router();
const path = require("path");

router.route('/')
    .post(function(req, res) {
        res.sendFile(path.resolve(__dirname, '..', 'views', 'rootViews', 'accessToken.html'));
    });
module.exports = router;