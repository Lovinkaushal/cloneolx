const { number, required } = require("joi");
const mongoose = require("mongoose")
const carSchema= new mongoose.Schema({

    locations:  {
        type: String,
        required:true,
        minlength: 3,
        unique:true
    },
    brandAndModel:  {
        type: String,
        required:true,
        minlength: 3,
        unique:true
    },    
    popularBrand: {
        type: String,
        required:true,
        minlength: 3,
        unique:true
    },
    allBrand:  {
        type: String,
        required:true,
        minlength: 3,
        unique:true
    },    
    allModel: {
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
    year:  {
        type: String,
        required:true,
        minlength: 3,
        unique:true
    },
    noOfOwners:  {
        type: String,
        required:true,
        minlength: 3,
        unique:true
    },    
    inspectionStatus: {
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
    fuel: {
        type: String,
        required:true,
        minlength: 3,
        unique:true
    },
    transmission:  {
        type: String,
        required:true,
        minlength: 3,
        unique:true
    },
})
module.exports = mongoose.model('carSubCategories', carSchema);
