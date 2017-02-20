// app/routes.js

// No API modules exist at this time

    module.exports = function(app){
        // no server routes exist

        //frontend routes **********
        // route to handle all angular requests
        app.get('*', function(req, res){
            res.sendfile('./public/views/index.html'); //load public index.html file
        });
    };
