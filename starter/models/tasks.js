const mongoose=require("mongoose")

const TaskSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Enter a valid task!!!"],
        trim:true,
        maxlength:[40,"Max Length can be 40 characters only"]
    },
    completed:{
        type:Boolean,
        default:false
    }
})

module.exports=mongoose.model('Task',TaskSchema)


