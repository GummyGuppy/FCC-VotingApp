'use strict'

const express = require('express'),
      router = express.Router(),
      passport = require('passport'),
      app = express()

let User = require('../models/user'),
    Poll = require('../models/poll')


// ===== REGISTER =========
router.get('/register', (req, res) => {
  res.render('register')
})

router.post('/register', (req, res) => {

  User.create({username: req.body.username, password: req.body.password},
    (err) => {
    (err) ? console.log(err) : res.redirect('/home')
  })
})

//====== LOGIN =============
router.get('/login', (req, res) => {
  res.render('login')
})

router.post('/login', (req, res) => {

})

//====== HOME =========
router.get('/home', (req, res) => {

  Poll.find({}, (err, polls) => {
    (err) ? console.log(err) : res.render('home', {polls:polls})
  })



})


module.exports = router
