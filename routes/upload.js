
var express = require('express');
const fileUpload = require('express-fileupload');
const app = express();

var fs = require('fs');
// default options
app.use(fileUpload());

var Documento = require('../models/document');

app.put('/:id', (req, res , next) => {

    var id = req.params.id;
    
    // Tipo de coleccion 
    if(!req.files) {
        return res.status(400).json({
            ok:false,
            mensaje: 'No selecciono nada',
            errors: { menssage: 'Debe de seleccionar un documento'}
        });
    }
    
    var archivo = req.files.file;
    var nombreCortado = archivo.name.split('.');
    var extencionArchivo = nombreCortado[nombreCortado.length - 1];

    var extencionesValidas = ['pdf','PDF'];

    // Valido los tipos Validos de Extensiones 
    if(extencionesValidas.indexOf(extencionArchivo ) < 0){
        return res.status(400).json({
            ok:false,
            mensaje: 'Extencion no Válida',
            errors: { menssage: 'Las extenciones Validas son: ' + extencionesValidas.join(', ')}
        });
    }
    // console.log(archivo);
    console.log(nombreCortado);
    console.log(extencionArchivo);


    // nombre de archivo Personalizado

    var nombrePdf = `${id}-${ new Date().getMilliseconds()}.${extencionArchivo}`;

    console.log(nombrePdf);

    // Mover el archivo temporal a un path
    var path = `./upload/documents/${nombrePdf}`;
    
    archivo.mv(path, err => {

        if(err){
            return res.status(400).json({
                ok:false,
                mensaje: 'Error al mover al archivo',
                errors:   err
            });
        }
         subirPrototipo( id, nombrePdf, res );
    })
})

function subirPrototipo( id, nombrePdf, res ){

         Documento.findById(id, (err, document) =>{
             console.log(document)
            
            if(!document){
                return res.status(400).json({
                    ok:true,
                    mensaje: 'Usuario no existe',
                    errors:   {message: 'Usuario no existe'}
                });
            }
            console.log(document);
            var pathViejo = './upload/documents/'+ document.file;

            document.file = nombrePdf;

            // si el usuario existe se elimina
            if(fs.existsSync(pathViejo)){
                console.log( pathViejo )
                fs.unlinkSync( pathViejo );
            }

            document.save((err, docActualizado) => {
                console.log(docActualizado)
                
                return res.status(200).json({
                    ok: true,
                    mensaje: 'Archivo de documento Update',
                    usuario: docActualizado
                }); 
            })
        });
}


module.exports = app;