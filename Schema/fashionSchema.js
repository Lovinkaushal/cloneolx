const{number,required}=require('joi')
const mongoose=require('mongoose')
const fashionSchema=new mongoose.Schema({

    fashion:{
        type:String,
        required:true,
        minlength:2,
        maxlength:30
    },
    locations:{
        type:String,
        required:true,
        minlength:2,
        maxlength:30
    },
    budget:{
        type:String,
        required:true,
        minlength:2,
        maxlength:30
    }
})
module.exports = mongoose.model('fashionSubCategories', fashionSchema);