const {Client} = require('pg');
const {Sequelize} = require('sequelize')
const dotenv = require('dotenv').config();

//still need to connect to particular database once schemas are created

const sequelize = new Sequelize(process.env.DATABASE_URL, {logging: false});
try {
  sequelize.authenticate();
  console.log('postgreSQL is connected!');
} catch (error) {
  throw err;
}


module.exports = sequelize;