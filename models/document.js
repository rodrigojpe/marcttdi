var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var documentoSchema = new Schema({
    nombre: {type: String, require: [true, 'El nombre es necesario']},
    file: {type: String, require: false },
    fecha: {type: Date, require: false},
    descripcion:{type: String, require: false }
});


module.exports = mongoose.model( 'Documento' , documentoSchema );