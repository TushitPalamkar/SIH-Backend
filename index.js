const express=require('express')
const app=express()
const mongoose=require('mongoose')
const cors=require('cors')
const stateModel=require('./models/states')
const foodModel=require('./models/food')
const destModel=require('./models/destinations')
app.use(express.json())
app.use(cors())
require('dotenv').config()
const PORT=process.env.PORT || 4000
app.use('/sample',async(req,res)=>{
    res.send('Sample server test')
})
mongoose.connect(process.env.MONGO_SIHURL)
.then(()=>{
    console.log('Sucessfully connected to the database')
})
.catch((error)=>{
    console.error(error)
})
app.post('/newstates',async(req,res)=>{
    try{
        const {name,description}=req.body
        const state=await stateModel.create({name,description})
        res.json(state)
    }catch(error)
    {
        console.error(error)
    }
})
app.post('/newfood',async(req,res)=>{
    try{
        const {name,description,recipes,foodimg,foodstate}=req.body
        const food=await foodModel.create({name,description,recipes,foodimg,foodstate})
        res.json(food)
    }catch(error){
        console.error(error)
    }
})
app.post('/newdest',async(req,res)=>{
    try{
        const{name,description,location,destimg,deststate}=req.body
        const destination=await destModel.create({name,description,location,destimg,deststate})
        res.json(destination)
    }catch(error){
        console.error(error)
    }
})
app.get('/states',async(req,res)=>{
    try{

        const state=await stateModel.find()
        res.json(state)
    }
    catch(error){
        console.error(error)
    }
})
app.get('/foodbystate/:stateid',async(req,res)=>{
    try{
        const stateid=req.params.stateid
        const foods = await foodModel.find({ foodstate: stateid });
        res.json(foods)
    }catch(error){
        console.error(error)
    }
})
app.get('/destbystate/:stateid',async(req,res)=>{
    try{
        const stateid=req.params.stateid
        const destination = await destModel.find({ deststate: stateid });
        res.json(destination)
    }catch(error){
        console.error(error)
    }
})
app.listen(PORT,()=>{
    console.log(`App is listening on port: ${port}`)
})
