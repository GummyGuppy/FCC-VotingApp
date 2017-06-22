'use strict'

const mongoose = require('mongoose'),
      Schema = mongoose.Schema

let pollSchema = new Schema({

  title: String,
  author: String,
  data: Array

})

let Poll = module.exports = mongoose.model('Poll', pollSchema)
