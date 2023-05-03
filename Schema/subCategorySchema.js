const { number, required } = require("joi");
const mongoose = require("mongoose")
const subCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    categoryId:{
        type:mongoose.Types.ObjectId,
        required:true,
    }
});
module.exports = mongoose.model('subcategories', subCategorySchema);