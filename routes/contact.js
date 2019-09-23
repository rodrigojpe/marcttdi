'use strict';
var Contact = require('../models/contact');
const contactCtrl = {};

// mover esto a capa servicio
// configurar cuenta
var express = require('express');
// var express = require('express');
var app = express.Router();

const nodemailer = require('nodemailer');

app.post('/send', (req, res) =>{
    console.log('contact servce in background');
    
    // sendMail = async (req, res) => {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    
    // console.log(req.body.contact.nombre);

    
    var datetime = new Date();
    console.log(datetime.toISOString().slice(0,10));
    // return false;
      var contact = new Contact({
        nombre : req.body.contact.nombre,
        apellido :req.body.contact.apellido,
        email:req.body.contact.correo,
        message:req.body.contact.mensaje
      });
    
      var acount = {
        user : 'academiacp@gmail.com',
        pass: 'martinrodrigo1'
      }
      let option = {
        pool: true,
        host: 'smtp-relay.gmail.com',
        port: 25,
        secure: true, // use TLS
        auth: {
            user: 'academiacp@gmail.com',
            pass: 'martinrodrigo1'
        }
      }
    
     let transporter = nodemailer.createTransport({
    
       service: 'Gmail',
       auth:{
         user: 'academiacp@gmail.com',
         pass: 'martinrodrigo1'
       }
     });
    
    
    // console.log('sen email');
        var img = __dirname+"/logo.jpg";
        var mailOptions = {
            from: 'academiacp@gmail.com', // sender address
            to: 'academiacp@gmail.com', // list of receivers
            subject: 'Secretaria Técnica', // Subject line
            text: contact.nombre, // plain text body
            fecha: datetime.toISOString().slice(0,10),
            html: '<p><b>Estimados soy '+ contact.nombre +' '+ contact.apellido  +' 👻"?</b></p>'+ '<p></p>'+
                '<style>img { width:10; height:7;}</style><img width="300px" height="260px" src="cid:logo"/>'+ '<p></p>'+
                '<div><p><h1> Mensaje :'+ contact.message + '</h1></p></div></br> '+
                '<p>Mi correo es :' +contact.email+' </p></br>',// html body
    
                attachments:[
                  {
                    filename:'logo.jpg',
                    path: __dirname + '/logo.jpg',
                    cid:"logo"
                  },
                ]
        };
    
        // send mail with defined transport object
        
        transporter.sendMail(mailOptions, (error, info) => {
          console.log('sen email 2');
          console.log(error);
          
          
          // return;
          if (error) {
            console.log(error);
            console.log(error);
          }
          
          res.status(200).send({ contact: JSON.stringify(contact) });
    
    
            // console.log('Message sent: %s', info.messageId);
            // // Preview only available when sending through an Ethereal account
            // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        });
    
    // };
});

module.exports = app;
