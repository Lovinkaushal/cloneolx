const { number, required } = require("joi");
const mongoose = require("mongoose")
const bikeSchema= new mongoose.Schema({

    bikeCategories: {
        type: String,
        required:true,
        minlength: 3,
        unique:true
    },
    locations: {
        type: String,
        required:true,
        minlength: 3,
        unique:true
    },
    budget: {
        type: String,
        required:true,
        minlength: 3,
        unique:true
    },
    brand: {
        type: String,
        required:true,
        minlength: 3,
        unique:true
    },
    model: {
        type: String,
        required:true,
        minlength: 3,
        unique:true
    },
    kmDriven: {
        type: String,
        required:true,
        minlength: 3,
        unique:true
    },
    year:{
        type: String,
        required:true,
        minlength: 2,
        unique:true
    },
})
module.exports = mongoose.model('bikeSubCategories', bikeSchema);
