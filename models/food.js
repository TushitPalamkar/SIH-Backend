const mongoose=require('mongoose')
const foodScheama= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    recipes:{
        type:String
    },
    foodimg:{
        type:String
    },
    foodstate:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'state'
    }
},
{
    timestamps:true
})
module.exports=mongoose.model('food',foodScheama)