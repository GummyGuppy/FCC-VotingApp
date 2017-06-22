'use strict'

const express = require('express'),
      ejs = require('ejs'),
      path = require('path'),
      mongoose = require('mongoose'),
      config = require('./config/database'),
      bodyParser = require('body-parser')

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

//=== home routes ======================
app.get('/', (req, res) => {

  res.render('create')

})

app.get('/dashboard', (req, res) => {

    Poll.find({}, (err, polls) => {
      console.log('found polls')
      res.render('dashboard', {polls:polls})
    })
})

app.post('/poll/create', (req, res) => {

let myPoll = new Poll({
  title: req.body.title,
  author: req.body.author,
  data: {
    labels: req.body.labels,
    datasets: {
      label: req.body.dLabel,
      data: [req.body.dData, req.body.dData2],
      backgroundColor: ['rgba(245, 233, 19, 0.58)','rgba(245, 233, 19, 0.58)']
    }

  }
})

  myPoll.save((err) => {
    (err) ? console.log(err) :
      console.log('success')

  })

  Poll.find({}, (err, polls) => {
    console.log('found polls')
    res.render('dashboard', {polls:polls})
  })


})



app.listen(3000, () => {
  console.log('started server on port 3000')
})
