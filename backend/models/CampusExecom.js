const mongoose=require("mongoose");

const ExecomSchema=new mongoose.Schema({
    name:{
        type:String,
    },
    role:{
        type:String,
    },
    muid:{
        type:String,
        unique:true
    },
    campusId:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("CampusExecom",ExecomSchema);