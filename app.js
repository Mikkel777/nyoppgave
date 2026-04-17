const express = require("express");
const routes = require("./router/routes");
const path = require("path");
const mongoose = require("mongoose");
const connectDB = require("./config/db");

const app = express();

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

connectDB(); //db

app.use("/", routes);

app.listen(3000, ()=> {
    console.log("Website running at port 3000");
});