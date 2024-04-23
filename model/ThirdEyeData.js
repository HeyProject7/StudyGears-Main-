const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for ThirdEyeData
const thirdEyeDataSchema = new Schema({
    object_name: {
        type: String,
        required: true
    },
    // Add more fields as needed
});

// Create the ThirdEyeData model
const ThirdEyeData = mongoose.model("ThirdEyeData", thirdEyeDataSchema);

module.exports = ThirdEyeData;
