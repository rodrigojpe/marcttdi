var express = require('express');
    
var app = express();
var bcrypt = require('bcryptjs');

var Usuario = require('../models/usuario');
var SEED = require('../config/config').SEED;

var mdAutentication = require('../middelwares/autenticacion');

// =================================================================
// Obtener todos los usuarios 
// =================================================================
// busca los usuarios pero filtrando solo el nombre email img y role dejando fuera la password
    
        app.get('/', (req, res , next) => {
            var desde = req.query.desde || 0;
            desde = Number(desde);
        
            Usuario.find({ } ,'nombre email role')
                .skip(desde)
                .limit(5)
                .exec((err, usuario) =>{
                    if (err) {
                        return res.status(500).json({
                            ok: false,
                            mensaje: 'Error cargando usuario',
                            eroors: err
                        });    
                    }    
                    Usuario.count({}, (err, conteo) => {
                        res.status(200).json({
                            ok: true,
                            usuarios: usuario,
                            total: conteo
                        });
                    })
                })
        });

// =================================================================
// Actualizar usuarios  
// =================================================================

    app.put('/:id',mdAutentication.verificaToken, (req, res ) =>{

        var id = req.params.id;
        var body = req.body;

        console.log(body);

        console.log(id);

        Usuario.findById( id , (err, usuario) =>{
            if (err) {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error update usuario',
                    eroors: err
                });    
            }

            if (!usuario) {
                return res.status(400).json({
                    ok: false,
                    mensaje: 'El usuario con el id' + id + ' no existe',
                    eroors: { menssage: 'no existe el usuario con ese ID'}
                });    
            }
            
            usuario.nombre = body.nombre;
            usuario.email = body.email;
            usuario.role = body.role;

            usuario.save( (err, usuarioGuardado) => {
                if (err) {
                    return res.status(400).json({
                        ok: false,
                        mensaje: 'Error al actualizar',
                        eroors: err
                    });    
                }
                usuarioGuardado.password = ':)';

                res.status(200).json({
                    ok: true,
                    usuario: usuarioGuardado
                });
            });
        });
    });


    module.exports = app;