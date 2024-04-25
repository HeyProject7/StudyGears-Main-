const mongoose = require('mongoose');

// Define Schema for storing IP1 addresses
const ip1Schema = new mongoose.Schema({
    ip: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Define Schema for storing IP2 addresses
const ip2Schema = new mongoose.Schema({
    ip: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Define Schema for storing IP3 addresses
const ip3Schema = new mongoose.Schema({
    ip: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Create models from schemas
const IP1 = mongoose.model('IP1', ip1Schema);
const IP2 = mongoose.model('IP2', ip2Schema);
const IP3 = mongoose.model('IP3', ip3Schema);

module.exports = { IP1, IP2, IP3 };
