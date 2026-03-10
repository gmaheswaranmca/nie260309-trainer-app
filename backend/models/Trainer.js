const mongoose = require("mongoose");

const TrainerSchema = new mongoose.Schema({
    name: String,
    skills: String//,
    //photo: String
});

module.exports = mongoose.model("Trainer", TrainerSchema);