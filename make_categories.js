//Require some things, including the DB model from the app directory
var mongoose = require('mongoose');
var dbconfig = require('./config/db');
var Category = require('./app/models/category');
mongoose.connect(dbconfig.url);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    var cats = [
        {name: 'Unicorn Surgeons'},
        {name: 'Artisanal Soaps'},
        {name: 'Kitten Vendors'},
        {name: 'Community Resources'}
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
