'use strict'

const mongoose = require('mongoose'),
      Schema = mongoose.Schema

let pollSchema = new Schema({

  name: String,
  labels: Array,
  data: Array

})

let Poll = module.exports = mongoose.model('Poll', pollSchema)
