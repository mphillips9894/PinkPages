//Require database information and Google Maps for geocoding
var mongoose = require('mongoose');
var dbconfig = require('./config/db');
var gmconfig = require('./config/googlemaps');
var Resource = require('./app/models/resource');
var mapsClient = require('@google/maps').createClient({key: gmconfig.key});
mongoose.connect(dbconfig.url);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    //Resources to be added go here
    var list = [
        {
            name: 'Gay and Lesbian Community Center',
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

    //use geocoder to get lat/lng pair for each resource entry, and save them in db
    for(x in list){
        mapsClient.geocode({address: list[x].address}, function(err, response){
            if(err) return console.error(err);
            //check for an "OK" response.  get the coordinates and add object to db
            else if(response.json.status==='OK') {
                list[x].latlng = response.json.results[0].geometry.location;
                Resource.create(list[x], function(err, result){
                    if(err) return console.error(err);
                    console.log("added resource to db");
                });
            } else console.log(response.status);
        });
    }

    

});
