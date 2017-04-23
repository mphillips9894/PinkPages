//Require some things, including the DB model from the app directory
var mongoose = require('mongoose');
var dbconfig = require('./config/db');
var Resource = require('./app/models/resource');
mongoose.connect(dbconfig.url);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    var list = [
        {   name: 'Gay and Lesbian Community Center',
            address: '210 Grant Street, Pittsburgh, PA',
            phone: '412-422-0114',
            category: 'Community Resources'
        }, {
        	name: 'Mary Alice\'s Lightly Used Cats',
        	address: '520 Third Avenue, Pittsburgh, PA',
        	phone: '412-873-3228',
        	category: 'Kitten Vendors'
        }, {
        	name: 'Little Shop of Kittens',
        	address: '429 Fourth Avenue, Pittsburgh, PA',
        	phone: '412-369-2468',
        	category: 'Kitten Vendors'
        }
    ];

    console.log("deleting old things in resource collection");
    Resource.remove({}, function(err){
        if (err) return console.error(err);
    });

    console.log("adding things now");
    Resource.create(list, function(err, docs){
        if (err) return console.error(err);
        console.log("added list of resources");
    });

});
