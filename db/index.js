const { Client } = require("pg");
const { Sequelize } = require("sequelize");
const dotenv = require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DATABASE_URL ||
    "postgres://postgres:postgres9696@lacelockerdb.cluster-ceopsevo4lvn.us-east-1.rds.amazonaws.com:5432/LaceLocker",
  { logging: false }
);
try {
  sequelize.authenticate();
  console.log("postgreSQL is connected!");
} catch (error) {
  throw err;
}

module.exports = sequelize;
