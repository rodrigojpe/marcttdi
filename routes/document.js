'use strict'

var express = require('express');
var Documento = require('../models/document');
var app = express.Router();
var fs = require('fs');
var filesize = require("filesize"); 
var path = require('path');

// =================================================================
// Crear Documentos  
// =================================================================

app.post('/', (req , res) => {
    var body = req.body;
        console.log('mostrando params');
        console.log(body);
            
        var documento = new Documento({
            nombre: body.nombre,
            descripcion: body.descripcion,
            file: null
        });

        documento.save( (err, documentGuardado ) => {

           if (err) { 
               console.log(usuario.role);
               return res.status(500).json({
                   ok: false,
                   mensaje: 'Error al guardar el usuario',
                   eroors: err
               }); 
           }
           res.status(201).json({
               ok: true,
               usuarios: documentGuardado
            });
        });
});

// =================================================================
// obtener Documentos  
// =================================================================
app.get('/todos',(req,res) => {
    // console.log('obteniendo imagenes');
    var path_file_acta = './upload/acta/';
    var data = new Array();
        fs.readdir(path_file_acta, function (err, actas) {
            // data.push(actas);
            for(let i =0; i<actas.length; i++){
                let file = path_file_acta + '/' + actas[i];
                
                var stats = fs.statSync(file)
                
                var fileSizeInMb = filesize(stats.size, {round: 0});
                data.push({name: actas[i],size: fileSizeInMb});
                // console.log(fileSizeInMb);
            }
            res.status(200).json({data})
            // console.log(path_file_acta + actas[0]); return;
            // res.status(200).download(path_file_acta + actas[0], actas[0]);
        });   
});

app.post('/download', function(req, res,next) {
    console.log(req.body.filename);
    console.log(req.body.folder);
    
    let folder = req.body.folder;
    
    switch (folder) {
        case 'acta':
        console.log('entrando en actas');
        var path_file = '../upload/acta/';
        var filepath = path.join( __dirname, path_file) + '/' + req.body.filename;
        // console.log(filePath);
        
        res.status(200).sendFile(filepath);
        break;

        case 'convenios':
        console.log('entrando a convenios');
        var path_file = '../upload/convenios/';
        var filepath = path.join( __dirname, path_file) + '/' + req.body.filename;
        // console.log(filePath);
        
        res.status(200).sendFile(filepath);
        break;
        case 'documentos':
        console.log('entrando a convenios');
        var path_file = '../upload/documentos/';
        var filepath = path.join( __dirname, path_file) + '/' + req.body.filename;
        // console.log(filePath);
        
        res.status(200).sendFile(filepath);
        break;
        case 'insumosGenerales':
        console.log('entrando a convenios');
        var path_file = '../upload/insumos generales/';
        var filepath = path.join( __dirname, path_file) + '/' + req.body.filename;
        // console.log(filePath);
        
        res.status(200).sendFile(filepath);
        break;
        case 'insumosGrupo':
        console.log('entrando a convenios');
        var path_file = '../upload/insumos grupo/';
        var filepath = path.join( __dirname, path_file) + '/' + req.body.filename;
        // console.log(filePath);
        
        res.status(200).sendFile(filepath);
        break;
        case 'justiciaJRestaurativa':
        console.log('entrando a convenios');
        var path_file = '../upload/justicia_juvenil_restaurativa/';
        var filepath = path.join( __dirname, path_file) + '/' + req.body.filename;
        // console.log(filePath);
        
        res.status(200).sendFile(filepath);
        break;
        default : 
        console.log('carpeta no existe');
    }
});

app.get('/convenios',(req,res) => {
    // console.log('obteniendo imagenes convenio');
    var path_file_convenios = './upload/convenios/';

    var data = new Array();
        
    fs.readdir(path_file_convenios, function(err,convenios){
        // console.log(convenios);  
        for(let i =0; i<convenios.length; i++){
            let file = path_file_convenios + '/' + convenios[i];
            
            let stats = fs.statSync(file)
            
            let fileSizeInMb = filesize(stats.size, {round: 0});
            data.push({name: convenios[i],size: fileSizeInMb});
        }        
        res.status(200).json({data})
    });
});

app.get('/documentos',(req,res) => {
    // console.log('obteniendo imagenes convenio');
    var path_file_documentos = './upload/documentos/';

    var data = new Array();
        
    fs.readdir(path_file_documentos, function(err,docuemntos){
        //  console.log(docuemntos);  
        for(let i =0; i<docuemntos.length; i++){
            let file = path_file_documentos + '/' + docuemntos[i];
            
            let stats = fs.statSync(file)
            
            let fileSizeInMb = filesize(stats.size, {round: 0});
            data.push({name: docuemntos[i],size: fileSizeInMb});
        }        
        res.status(200).json({data})
    });
});
app.get('/insumosg',(req,res) => {
    // console.log('obteniendo imagenes convenio');
    var path_file_insumosGenerales = './upload/insumos generales/';

    var data = new Array();
        
    fs.readdir(path_file_insumosGenerales, function(err,insumosg){
        // console.log(convenios);  
        for(let i =0; i<insumosg.length; i++){
            let file = path_file_insumosGenerales + '/' + insumosg[i];
            
            let stats = fs.statSync(file)
            
            let fileSizeInMb = filesize(stats.size, {round: 0});
            data.push({name: insumosg[i],size: fileSizeInMb});
        }        
        res.status(200).json({data})
    });
});
app.get('/insumogrupo',(req,res) => {
    // console.log('obteniendo imagenes convenio');
    var path_file_insumoGrupo = './upload/insumos grupo/';

    var data = new Array();
        
    fs.readdir(path_file_insumoGrupo, function(err,insumoGrupo){
        // console.log(convenios);  
        for(let i =0; i<insumoGrupo.length; i++){
            let file = path_file_insumoGrupo + '/' + insumoGrupo[i];
            
            let stats = fs.statSync(file)
            
            let fileSizeInMb = filesize(stats.size, {round: 0});
            data.push({name: insumoGrupo[i],size: fileSizeInMb});
        }        
        res.status(200).json({data})
    });
});
app.get('/jjuvenil',(req,res) => {
    // console.log('obteniendo imagenes convenio');
    let path_file_JusJuvRest = './upload/justicia juvenil restaurativa/';

    var data = new Array();
        
    fs.readdir(path_file_JusJuvRest, function(err,jJuvenil){
        // console.log(convenios);  
        for(let i =0; i<jJuvenil.length; i++){
            let file = path_file_JusJuvRest + '/' + jJuvenil[i];
            
            let stats = fs.statSync(file)
            
            let fileSizeInMb = filesize(stats.size, {round: 0});
            data.push({name: jJuvenil[i],size: fileSizeInMb});
        }        
        res.status(200).json({data})
    });
});

app.get('/normativaI',(req,res) => {
    // console.log('obteniendo imagenes convenio');
    var path_file_JusJuvRest = './upload/normativa_i/';

    var data = new Array();
        
    fs.readdir(path_file_JusJuvRest, function(err,nInternacional){
        // console.log(convenios);  
        for(let i =0; i<nInternacional.length; i++){
            let file = path_file_JusJuvRest + '/' + nInternacional[i];
            
            let stats = fs.statSync(file)
            
            let fileSizeInMb = filesize(stats.size, {round: 0});
            data.push({name: nInternacional[i],size: fileSizeInMb});
        }        
        res.status(200).json({data})
    });
});


app.get('/comunicados',(req,res) => {
    // console.log('obteniendo imagenes convenio');
    var path_file_JusJuvRest = './upload/comunicados/';

    var data = new Array();
        
    fs.readdir(path_file_JusJuvRest, function(err,comunicados){
        // console.log(convenios);  
        for(let i =0; i<comunicados.length; i++){
            let file = path_file_JusJuvRest + '/' + comunicados[i];
            
            let stats = fs.statSync(file)
            
            let fileSizeInMb = filesize(stats.size, {round: 0});
            data.push({name: comunicados[i],size: fileSizeInMb});
        }        
        res.status(200).json({data})
    });
});

app.get('/curriculum',(req,res) => {
    // console.log('obteniendo imagenes convenio');
    var curriculums = './upload/curriculums/';

    var data = new Array();
        
    fs.readdir(curriculums, function(err,cv){
        // console.log(convenios);  
        for(let i =0; i<cv.length; i++){
            let file = curriculums + '/' + cv[i];
            
            let stats = fs.statSync(file)
            
            let fileSizeInMb = filesize(stats.size, {round: 0});
            data.push({name: cv[i],size: fileSizeInMb});
        }        
        res.status(200).json({data})
    });
});

app.get('/noticias',(req,res) => {
    // console.log('obteniendo imagenes convenio');
    var noticias = './upload/noticias/';
    var PdfText = require('pdf-text');
    var data = new Array();
        
    fs.readdir(noticias, function(err,cv){
        //   
        for(let i =0; i<cv.length; i++){
            let file = noticias + '/' + cv[i];
            
            let stats = fs.readFileSync(file);
            // console.log(stats);
            // PdfText(stats, function(err, chunk){
            //     console.log(JSON.parse(stats));
            // })

            // return;
            // let fileSizeInMb = filesize(stats.size, {round: 0});
            data.push({name: stats});
            console.log(data.toString());
        }   
        // return;     
        res.status(200).json({data})
    });
});


module.exports =  app; 