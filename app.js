'use strict'

const express = require('express'),
      ejs = require('ejs'),
      path = require('path'),
      mongoose = require('mongoose'),
      config = require('./config/database')

const app = express()

//bring in models
let poll = require('./models/poll'),
    user = require('./models/user')

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

//======================================
//=== home routes ======================
app.get('/', (req, res) => {
  res.render('login')
})

app.get('/about', (req, res) => {
  res.render('about')
})

//import routes
let users = require('./routes/users')
app.use('/', users)



app.listen(3000, () => {
  console.log('started server on port 3000')
})
