//server.js

//modules ===========================================
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');

//configuration =====================================

//config files
var db = require('./config/db');

//set port
var port = process.env.PORT || 8080;

//connect to mongoDB database
mongoose.connect(db.url);

//get all data of the body (POST) parameters
//parse application/json
app.use(bodyParser.json());

//parse application/vnd.api+json as json
app.use(bodyParser.json({type: 'applicatoin/vnd.api+json'}));

//parse application/x-www-form-urlencoded
app.use(express.static(__dirname + '/public'));

//routes =============================================
require('./app/routes')(app);  //configure routes

//start app ==========================================
//startup our app at http://localhost:8080
app.listen(port);

//shoutout to user
console.log('Magic happens on port ' + port);

//expose app
exports = module.exports = app;
