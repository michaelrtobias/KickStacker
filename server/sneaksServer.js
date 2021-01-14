const express = require("express");
const app = express();
const dotenv = require("dotenv").config();

const SneaksAPI = require("sneaks-api");

const sneaks = new SneaksAPI();

// const sneaks = require("./index.js");

// sneaks.getProducts("year of the snake", function (err, products) {
//   console.log(products);
// });

app.get("/sneakerdata", (req, res) => {
  sneaks.getProducts(req.body.term, (err, shoes) => {
    if (err) {
      throw err;
    } else {
      callback(null, shoes);
    }
  });
});
