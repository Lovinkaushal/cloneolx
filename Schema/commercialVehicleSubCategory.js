const { number, required } = require("joi");
const mongoose = require("mongoose")
const commercialVehicleSchema= new mongoose.Schema({

    categories:  {
        type: String,
        required:true,
        minlength: 3,
    },
    locations:  {
        type: String,
        required:true,
        minlength: 3,
    },    
    budget: {
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
module.exports = mongoose.model('commercialVehicleSubCategory', commercialVehicleSchema);
