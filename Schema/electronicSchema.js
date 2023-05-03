const { number, required } = require("joi");
const mongoose = require("mongoose")
const electronicSchema= new mongoose.Schema({

    electronicAndAppliances: {
        type: String,
        required:true,
        minlength: 3
    },
    locations: {
        type: String,
        required:true,
        minlength: 3
    },
    budget: {
        type: String,
        required:true,
        minlength: 3
    },
})
module.exports = mongoose.model('electronicSubCategories', electronicSchema);
