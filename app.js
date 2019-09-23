var express = require('express');
var bodyParser =  require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
// const db_URI = require('./config/config').DB_URI;

// Inizializar variables //#endregion
var app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

mongoose.connection.openUri('mongodb://localhost:27017/ttd_i' ,{useNewUrlParser: true }, (err, res)=>{
    if (err) throw err;
    
    console.log('Base de datos mongo: \x1b[32m%s\x1b[0m', 'online');
})

var cors = require('cors');
 
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method");
    res.header("Acces-Control-Allow-Methods", "PUT, POST, DELETE, GET, OPTIONS");
    res.header('Allow','GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

// app.use(cors());
 
// app.get('/', function(req, res, next) {
//     res.json({ msg: 'This is CORS-enabled for all origins!' });
// });
// app.head('/', function(req, res, next) {
//     res.json({ msg: 'This is CORS-enabled for all origins!' });
// });
// app.post('/', function(req, res, next) {
//     res.json({ msg: 'This is CORS-enabled for all origins!' });
// });
// app.put('/', function(req, res, next) {
//     res.json({ msg: 'This is CORS-enabled for all origins!' });
// });

var documentRouter = require('./routes/document');
var uploadRouter = require('./routes/upload');
var fileRouter = require('./routes/file');
var contactRouter = require('./routes/contact');
var login = require('./routes/login');


app.listen(3000, () => {
    console.log('Express en el puerto 3000');
})


 //app.use('/', express.static('client', { redirect:false}));
 app.use(express.static(path.join(__dirname, 'client')));
 app.use('/doc', documentRouter);
 app.use('/upload', uploadRouter);
 app.use('/file', fileRouter );   
 app.use('/contact', contactRouter);
 app.use('/login', login);

//  app.get('*', function(req, res, next){
//     res.sendFile(path.resolve('client/index.html'));
// });