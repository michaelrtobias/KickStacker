const express = require('express');
const app = express();
const dotenv = require('dotenv').config()
const path = require('path');
const db = require('../db/index.js');


app.use(express.static(path.join(__dirname, '../public')))

app.get('/', (req, res) => {
  res.send('Gotta Catch \'Em All')
})

app.listen(process.env.PORT || 3000, () => {
  console.log(`Connected on port ${process.env.PORT}`)
})