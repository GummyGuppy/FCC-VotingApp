'use strict'

const mongoose = require('mongoose'),
      Schema = mongoose.Schema

let pollSchema = new Schema({

  type: String,
  data: {
    labels: Array,
    datasets: {
      label: String,
      data: Array,
      backgroundColor: Array,
      borderWidth: Number,
      borderColor: String
    }

  },
  options: {}

})

let Poll = module.exports = mongoose.model('Poll', pollSchema)
