const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()

app.use(express.static('public'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", require('./routes'))
app.use("/home", (req, res) => {
  res.send(path.join(__dirname))
})


module.exports = app