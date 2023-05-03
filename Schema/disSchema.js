const { number, required,defaults } = require("joi");
const mongoose = require("mongoose")
const disSchema= new mongoose.Schema({

    state: {
        type: String,
        required:true,
        minlength: 3,
      
    },
    districtName: {
        type: String,
        required:true,
        minlength: 3,
      
    },
    cityId: {
        type: String,
        minlength: 3,
       
    },
    
})
module.exports = mongoose.model('disLocation', disSchema);
