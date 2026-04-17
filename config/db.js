const mongoose = require("mongoose");

const connectDB = () => {
    mongoose.connect("mongodb://10.12.7.251:27017/foxes")
    .then(() => console.log("MongoDB koblet til"))
    .catch(err => console.log(err));
};

module.exports = connectDB;