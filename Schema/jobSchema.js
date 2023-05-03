const{number,required}=require('joi')
const mongoose=require('mongoose')
const jobSchema=new mongoose.Schema({

    categories:{
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
    }
})
module.exports = mongoose.model('jobSubCategories', jobSchema);