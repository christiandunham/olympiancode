//use mongoose
var mongoose = require('mongoose');

//define schema for model
//this is an instance of a person who wants contacted for updates
var schema = {
    name: {type: String, default: ''},
    email: {type: String, required: true},
    programChoice: {type: String, required: true}
}

//define model
//module.exports means it can be passed to other files
module.exports = mongoose.model('ContactForUpdates',schema)