//grab any models
//var ContactForUpdate = require('./models/ContactForUpdates');

//export a function that takes the express app as an argument
//this gets called by server.js
module.exports = function(app){
    //this handles the server routing
    //api calls or pages or anything else

    //creating two api routes for programs to check if new version is available
    app.get('/api/ReceiptTransformer/CurrentVersion', function(req,res){
        //return latest release number
        //hardcoded here for now
        res.send('1.1.1');//one version ahead now for testing purposes
    });
    app.get('/api/EmptyPackageSummary/CurrentVersion',function(req,res){
        res.send('0.3.12');//one version ahead now for testing purposes
    });

    //frontend routes
    //route to handle all angular requests
    app.get('*', function(req, res) {
        var path = require('path');
        res.type('html');
        res.sendFile(path.resolve(__dirname + '/../public/index.html')); // load our public/index.html file
    });

};