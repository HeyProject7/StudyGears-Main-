const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const langSchema = new Schema({
    currentlang: {
        type: String,
        required: true
    }
});

const ModeModel = mongoose.model("Lang", langSchema);

module.exports = ModeModel;
