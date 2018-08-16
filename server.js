//require the modules
//lots of help taken from https://scotch.io/tutorials/setting-up-a-mean-stack-single-page-application#toc-setting-up-our-node-application-serverjs
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
//var mongoose = require('mongoose');

//bring in db in config
var db = require('./config/db');
//set port
var port = process.env.PORT || 8080;

//because config/db.js has mongodb connection, can connect here
//mongoose.connect(db.url,{useNewUrlParser:true});

//tells express to use body parser's json as middleware 
app.use(bodyParser.json());
//then tell it to use vendor(vnd) api json instead of application/json 
//https://nordicapis.com/the-benefits-of-using-json-api/
//optimizes http requests http://jsonapi.org/
app.use(bodyParser.json({type:'application/vnd.api+json'}));

//https://stackoverflow.com/questions/39870867/what-does-app-usebodyparser-json-do/39872729
//"bodyParser.urlencoded({extended: ...}) basically tells the system whether you want to use a simple algorithm for shallow parsing (i.e. false) or complex algorithm for deep parsing that can deal with nested objects (i.e. true)."
app.use(bodyParser.urlencoded({extended: true}));

//method-override overrides http requests, this uses the default setting
app.use(methodOverride('X-HTTP-Method-Override'));

//sets the location of static files
app.use(express.static(__dirname + '/public'));

//next bring in routes defined in routes.js file
//https://stackoverflow.com/questions/39171232/what-does-require-app-routes-jsapp-mean-in-this-node-server-example
//this is shorthand; a function is returned and then immediately called
//require('./app/routes') evaluates to be a function, (app) is passed as its arg
require('./app/routes')(app);

//start the app by listening to the port for requests
app.listen(port);

//notify in console
console.log("running on port " + port);

//expose app 
//sets both exports and module.exports to app
exports = module.exports = app;