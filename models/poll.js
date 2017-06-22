'use strict'

const mongoose = require('mongoose'),
      Schema = mongoose.Schema

let pollSchema = new Schema({

  title: String,
  author: String,
  data: {
    labels: Array,
    datasets: {
      label: String,
      data: Array,
      backgroundColor: Array
    }

  }

})

let Poll = module.exports = mongoose.model('Poll', pollSchema)
