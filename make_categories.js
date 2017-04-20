//Require some things, including the DB model from the app directory
var mongoose = require('mongoose');
var dbconfig = require('./config/db');
var Category = require('./app/models/category');
mongoose.connect(dbconfig.url);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    var cats = [
        {"name": "Unicorn Surgeons", "address": "4825 Centre ave", "phone": "7243564077"},
        {"name": "Artisanal Soaps", "address": "404 atlasburg", "phone": "7246786812"},
        {"name": "Kitten Vendors", "address": "235 neville", "phone": "4126789512"}
    ];

    console.log("deleting old things in db");
    Category.remove({}, function(err){
        if (err) return console.error(err);
    });

    console.log("adding things now");
    Category.create(cats, function(err, docs){
        if (err) return console.error(err);
        console.log("added list of things");
    });

});
