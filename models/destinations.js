const mongoose=require('mongoose')
const destSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    location:{
        type:String
    },
    destimg:{
        type:String
    },
    deststate:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'state'
    }
},
{
    timestamps:true
})
module.exports=mongoose.model('destination',destSchema)