// app/routes.js

// grab database models
var Resource = require('./models/resource');
var Category = require('./models/category');


    module.exports = function(app){
        // server routes
        app.get('/api/:cat_id', function(req, res){
            Resource.find( {category: req.params.cat_id}, function(err, list){
                if(err)
                    res.send(err);
                res.json(list);
            });
        });

        //frontend routes **********
        // route to handle all angular requests
        app.get('*', function(req, res){
            res.sendfile('./public/views/index.html'); //load public index.html file
        });
    };
