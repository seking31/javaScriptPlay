const mongoose = require('mongoose')

const Inventory = mongoose.model('Inventory', {
    sku: Number, 
    name: String,
    price: Number,
    count: Number,
    Description: String,
    DateIssued: Date,
    Color: String,
    Size: String
 });

 module.exports