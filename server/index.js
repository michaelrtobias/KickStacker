const express = require('express');
const app = express();
const dotenv = require('dotenv').config()
const path = require('path');
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
// const db = require('../db/index.js');
const db = require('../db/controllers/users.js');
const models = require('../db/models.js')
app.use(express.json());


app.use(express.static(path.join(__dirname, '../public')))

app.get('/', (req, res) => {
  res.send('Gotta Catch \'Em All')
})

app.get('/shoes', (req, res) => {
  res.send('get shoes')
})

app.post('/shoes', (req, res) => {
  res.send('post shoes')
})

app.put('/shoes', (req, res) => {
  res.send('update shoes')
})

app.delete('/shoes', (req, res) => {
  res.send('delete shoes')
})


app.post('/users', (req, res) => {
  models.User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName
  })
  .then(result => res.json(result))
  .catch(err => console.log(err))
  .then(() => console.log('User Created'))
})
app.get('/users', (req, res) => {
  models.User.findAll()
  .then((user) => res.json(user))
  .then(() => console.log('User Recieved'))
  .catch(err => console.log(err))
})


app.listen(process.env.PORT || 3000, () => {
  console.log(`Connected on port ${process.env.PORT}`)
})