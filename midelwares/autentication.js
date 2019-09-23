var SEED = require('../config/config').SEED;
var jwt = require('jsonwebtoken');

exports.verificaToken = function(req, res, next) {
// =================================================================
// Verificar Token  
// =================================================================

    var token = req.query.token;

    jwt.verify(token, SEED, (err, decode) => {

            if ( err ) {
                return res.status(401).json({
                    ok: false,
                    mensaje: 'Token incorrecto',
                    errors: err
                })
            }
            req.usuario = decode.usuario;
            next();
    });

}