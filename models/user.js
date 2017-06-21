'use strict'

const mongoose = require('mongoose'),
      Schema = mongoose.Schema


let userSchema = new Schema({

  name:{
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }

})
