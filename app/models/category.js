// app/models/category.js
//get mongoose module and necessary definitions
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// define category schema
var catSchema = new Schema({
    name: {type: String, required: true, unique: true},
    address: {type: String, required: true, unique: true},
    phone: {type: String, required: true, unique: true}
});

// define and export model for category
module.exports = mongoose.model('Category', catSchema);
