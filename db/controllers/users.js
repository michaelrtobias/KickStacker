const models = require('../models.js')
const bodyParser = require('body-parser')
const express = require('express');
const app = express();
app.use(bodyParser.json())
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

module.exports = {
  create: (req, res) => {
    models.User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName
    })
    .then(result => res.json(result))
    .catch(err => console.log(err))
    .then(() => console.log('User Created'))
  },

  getUsers: (req, res) => {
    models.User.findAll()
    .then((user) => res.json(user))
    .then(() => console.log('User Recieved'))
    .catch(err => console.log(err))
  }
}

