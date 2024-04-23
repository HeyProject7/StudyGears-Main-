const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const modeSchema = new Schema({
    currentmode: {
        type: String,
        required: true
    }
});

const ModeModel = mongoose.model("Mode", modeSchema);

module.exports = ModeModel;
