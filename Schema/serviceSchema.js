const { number, required } = require("joi");
const mongoose = require("mongoose")
const serviceSchema= new mongoose.Schema({

    
    services: {
        type: String,
        required:true,
        minlength: 3,
    },
    locations: {
        type: String,
        required:true,
        minlength: 3,
    },
})
module.exports = mongoose.model('serviceSubCategories', serviceSchema);
