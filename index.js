// Déclarations

const express = require("express");
const cors = require("cors");
const { PORT, FRONT_PORT } = require("./config/env_variable");
const EmailRoute = require("./routes/emailRoute");



const app = express();
// Lecture de l'application
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/emails", EmailRoute);


module.exports = app;
