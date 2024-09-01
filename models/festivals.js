const mongoose=require('mongoose')
const festivalSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    festivalimg:{
        type:String
    },
    festivalstate:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'state'
    }
},
{
    timestamps:true
})
module.exports=mongoose.model('festivals',festivalSchema)