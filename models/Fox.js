const mongoose = require("mongoose");

const foxSchema = new mongoose.Schema({
    foxId: String,
    votes: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model("Fox", foxSchema);