'use strict'

const express = require('express'),
      router = express.Router(),
      passport = require('passport'),
      app = express()

let User = require('../models/user')

router.get('/register', (req, res) => {
  res.render('register')
})

router.post('/register', (req, res) => {

  User.create({username: req.body.username, password: req.body.password},
    (err) => {
    (err) ? console.log(err) : res.redirect('/')
  })



})

module.exports = router
