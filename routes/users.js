'use strict'

const express = require('express'),
      router = express.Router(),
      passport = require('passport'),
      app = express()


router.get('/register', (req, res) => {
  res.render('register')
})

router.post('register', (req, res) => {

})

module.exports = router
