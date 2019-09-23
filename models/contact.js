'use strict'
var mongoose = require('mongoose');
const { Schema } = mongoose;

var ContactSchema = Schema({
  nombre: { type: String , required: true},
  apellido: { type: String , required: true},
  email: { type: String , required: true},
  message: { type: String , required: true},
});

module.exports = mongoose.model('Contact', ContactSchema);
