const mongoose = require('mongoose');

let catModel;

const Catschema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    bedsOwned : {
        type: Number,
        min: 0,
        required: true,
    },
    createdDate : { 
        type: Date,
        default: Date.now,
    },

});

catModel = mongoose.model('Cat', Catschema);
module.exports = catModel;