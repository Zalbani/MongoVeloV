var express = require('express');
var mongoose = require('mongoose');
var nunjucks = require('nunjucks');

mongoose.connect('mongodb://127.0.0.1:27017/test', { useNewUrlParser: true } );

require('./models/velov');

var app = express();


app.use('/css', express.static( __dirname + '/node_modules/bootstrap/dist/css'));

app.use('/customcss', express.static( __dirname + '/src/style'));

app.use('/', require('./routes/velov'));

nunjucks.configure('views', {
    autoescape: true,
    express: app
});


console.log('Test serveur lancee sur le serveur port 3000');
app.listen(3000);
