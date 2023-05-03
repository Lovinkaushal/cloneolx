const { number, required } = require("joi");
const mongoose = require("mongoose")
const propertiesSchema= new mongoose.Schema({

    categories: {
        type: String,
        required:true,
        minlength: 3,
    },
    locations: {
        type: String,
        required:true,
        minlength: 3,
    },
    budget: {
        type: String,
        required:true,
        minlength: 3,
    },
})
module.exports = mongoose.model('propertiesSubCategories', propertiesSchema);
