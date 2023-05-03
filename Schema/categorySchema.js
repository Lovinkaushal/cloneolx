const { number, required } = require("joi");
const mongoose = require("mongoose")
const categorySchema = new mongoose.Schema({
    
    categoryName: {
        type: String,
        required:true,
        minlength: 3,
        unique:true
    },
});
module.exports = mongoose.model('categories', categorySchema);


