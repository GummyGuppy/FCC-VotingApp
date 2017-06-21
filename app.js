'use strict'

const express = require('express'),
      ejs = require('ejs'),
      path = require('path')

//bring in models
let poll = require('./models/poll'),
    user = require('./models/user')

const app = express()


//set view engine
app.engine('ejs', require('express-ejs-extend'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('login')
})

//import routes
let users = require('./routes/users')
app.use('/', users)



app.listen(3000, () => {
  console.log('started server on port 3000')
})
