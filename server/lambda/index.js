const { Client } = require("pg");
const models = require("../db/models.js");
const req = require("request");
//instantiates a client to connect to the database, connection settings are passed in
const client = new Client({
  user: "postgres",
  host: "lacelockerdb.cluster-ceopsevo4lvn.us-east-1.rds.amazonaws.com",
  database: "LaceLocker",
  password: "postgres9696",
  port: 5432,
});

//the lambda funtion code
exports.handler = async (event, context, callback) => {
  try {
    await client.connect();
    callback(null, "Connected Successfully");
  } catch (err) {
    callback(null, "Failed to Connect Successfully");
    throw err;
    //error message
  }

  client.end();
};
