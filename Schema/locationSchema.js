const{number,required, defaults}=require('joi')
const mongoose=require('mongoose')
const locationSchema=new mongoose.Schema({

    
    state:{
        type:String,
        required:true,
        minlength:2,
        maxlength:30
    },
    districtId:{
        type:String,
        required:false,
        minlength:2,
        maxlength:30
    }
})
module.exports = mongoose.model('locations',locationSchema);