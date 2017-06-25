'use strict'

const express = require('express'),
      ejs = require('ejs'),
      path = require('path'),
      mongoose = require('mongoose'),
      bodyParser = require('body-parser')

//import config
const config = require('./config/database')
const app = express()

//bring in models
let Poll = require('./models/poll')

//==== Body Parser Middleware =========
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
//======================================

//set view engine
app.engine('ejs', require('express-ejs-extend'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//=== connect to database ============
mongoose.connect(config.database)
const db = mongoose.connection

db.on('open', () => {
  console.log('connected to database')
})

db.on('error', (err) => {
  throw err
})

//======= LANDING PAGE ============
app.get('/', (req, res) => {

  res.render('create')

})

app.post('/', (req, res) => {

  let labels = req.body.labels.split(','),
      data = req.body.data.split(',')

  let query = {labels: labels,
      data: data}

  let myPoll = new Poll(query)
  myPoll.save((err) => {
    (err) ? console.log(err) : res.redirect('dashboard')
  })
})

//======== DASHBOARD ==============
app.get('/dashboard', (req, res) => {

  Poll.find({}, (err, polls) => {
    (err) ? console.log(err) : res.render('dashboard', {polls})
  })
})

app.listen(3000, () => {
  console.log('started server on port 3000')
})
