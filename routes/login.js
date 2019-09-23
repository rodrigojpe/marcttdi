
var express = require('express');

var app = express();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var Usuario = require('../models/user');

var SEED = require('../config/config').SEED;

// google
var CLIENT_ID = require('../config/config').CLIENT_ID;
//const {OAuth2Client} = require('google-auth-library');
//const client = new OAuth2Client(CLIENT_ID);


//======================================================
//  Authentication Norma
//======================================================
app.post('/', (req, res) =>{
    var body = req.body;
    console.log('autentcamdo');
    // console.log(body);

    Usuario.findOne({email: body.email}, (err, usuarioBD) =>{
        //  console.log(usuarioBD);  
        // bcrypt.hashSync() 

        if(err){
            return res.status(500).json({
                ok: false,
                mensaje: 'Error en el login',
                errors: err 
            })
        }

        if(!usuarioBD){
            return res.status(500).json({
                ok: false,
                mensaje: 'Error en el login credenciales incorrectas - Email',
                errors: err 
            })
        }

        // if(! bcrypt.compareSync(body.password, usuarioBD.password)){
        //     return res.status(500).json({
        //         ok: false,
        //         mensaje: 'Error en el login credenciales incorrectas - Password',
        //         errors: err 
        //     })
        // }
        // crear token
        usuarioBD.password = ':)';
         var token = jwt.sign({ usuario: usuarioBD}, SEED , {expiresIn: 14400}) // 4 horas

        res.status(200).json({
            ok: true,
            usuario: usuarioBD,
            token: token,
            id: usuarioBD.id
        });
    });
});


module.exports = app;