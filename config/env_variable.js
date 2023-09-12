require("dotenv").config();

const PORT = process.env.PORT || 5000;
const FRONT_PORT = process.env.FRONT_PORT;
const DB_NAME=process.env.DB_NAME
const DB_USER=process.env.DB_USER
const DB_PASSWORD=process.env.DB_PASSWORD
const NODE_ENV=process.env.NODE_ENV

module.exports = { PORT , FRONT_PORT, DB_NAME,DB_PASSWORD, DB_USER,NODE_ENV};
