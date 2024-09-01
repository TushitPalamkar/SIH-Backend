const mongoose=require('mongoose')
const clothSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    
    clothimg:{
        type:String
    },
    clothstate:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'state'
    }
},
{
    timestamps:true
})
module.exports=mongoose.model('clothes',clothSchema)