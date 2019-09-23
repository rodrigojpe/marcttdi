var express = require('express');

var app = express();


const path = require('path');
const fs = require('fs');


app.get('/:tipo/:name', (req, res , next) => {

    var nombre = req.params.name;
    var tipo = req.params.tipo;
    // console.log('llegando a file controllers');
    // console.log(tipo);
    // console.log(nombre);
    
    
    var pathImagen = path.resolve(__dirname , `../upload/${tipo}/${nombre}` );

    // console.log(pathImagen);

    if( fs.existsSync( pathImagen )){
        res.sendFile(pathImagen)


    } else {
        var pathNoImage = path.resolve(__dirname , '../assets/no-img.jpg' );
        res.contentType("application/pdf");
        res.sendFile(pathNoImage);
    }


    // res.status(200).json({
    //     ok: true,
    //     mensaje: 'Peticion realizada correctamente'
    // });
})

module.exports = app;
