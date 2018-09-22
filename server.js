// We will first import the express library into our file

var express = require('express');

// Our app variable will initialize express
// We will be using this variable for serving our web page
// and routing our requests (not covered in this post)
var app = express();

// We will be "serving" our website that is located in our
// "[project root]/client" folder. More on that later.
// "__dirname" simply allows us to dynamically locate our
// client files, and stands for the current directory that
// this file is located in
app.use(express.static(__dirname + "/client"));

// We will be setting our port for our server. Since we are
// running this locally for now, our url will look something
// like "localhost:8000" or "127.0.0.1:8000"
var port = 8080;


require('./api/version-checks')(app);

// Once our port is declared, we'll have our server listen
// to that specific port for any HTTP requests. We'll
// cover routing at another time
app.listen(port);
console.log('Now listening to port ' + port);

//https://medium.com/@kasonjim/building-a-simple-full-stack-mean-application-part-1-926b21392a53