// app/routes.js

// grab database models
var Resource = require('./models/resource');
var Category = require('./models/category');


    module.exports = function(app){
        // server routes
        app.get('/api/:cat', function(req, res){
            
            //callback function for database search
            var respond = function(err, list){
                if(err)
                    res.send(err);
                res.json(list);
            };

            //if the string is "all" then find all resources
            if(req.params.cat === "all")
                Resource.find({}, respond);

            //othersive, use the specified category
            else Resource.find({category: req.params.cat}, respond);

        /*    Resource.find( {category: req.params.cat}, function(err, list){
                if(err)
                    res.send(err);
                res.json(list);
            });*/
        });

        // get request returns all categories
        app.get('/api', function(req, res){
            Category.find(function(err, cats){
                if(err)
                    res.send(err);
                res.json(cats);
            });
        });

        //frontend routes **********
        // route to handle all angular requests
        app.get('*', function(req, res){
            res.sendfile('./public/views/index.html'); //load public index.html file
        });
    };
