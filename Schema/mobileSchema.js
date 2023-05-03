const { number, required } = require("joi");
const mongoose = require("mongoose")
const mobileSchema= new mongoose.Schema({

    mobileCategory:  {
        type: String,
        required:true,
        minlength: 3,
        unique:true
    },
    locations:  {
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
    }
})
module.exports = mongoose.model('mobileSubCategories', mobileSchema);
