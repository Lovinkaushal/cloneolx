const { number, required,defaults } = require("joi");
const mongoose = require("mongoose")
const citySchema= new mongoose.Schema({

    districtName: {
        type: String,
        required:true,
        minlength: 3,
      
    },
    cityName: [String]
    
})
module.exports = mongoose.model('cityLocation', citySchema);