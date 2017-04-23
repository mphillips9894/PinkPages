// app/models/resources.js
// get mongoose module and retrieve necessary definitions
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var phoneMatch = [/\d{3}-\d{3}-\d{4}/,
    "Phone number must be of format nnn-nnn-nnnn"];

// define resource schema
// note that category is an array, allowing for multiple categories
var resourceSchema = new Schema({
    name: {type: String, required: true},
    address: {type: String, required: true},
    phone: {type: String, match: phoneMatch, required: true},
    category: {type: String, required: true}
});

// create and export model for resource
module.exports =  mongoose.model('Resource', resourceSchema);
