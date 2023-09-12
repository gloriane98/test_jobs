const { Sequelize } = require("sequelize");

const { DB_NAME, DB_PASSWORD, DB_USER } = require("../config/env_variable");

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;