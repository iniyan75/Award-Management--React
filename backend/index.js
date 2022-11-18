const express= require('express')
const app=express()
const cors=require("cors")
const mongoose=require('mongoose')
app.use(cors())
app.use(express.json())
const details =require('./model')

mongoose.connect('mongodb+srv://ins:iniyan93@cluster0.oohfvua.mongodb.net/STUaward')

app.use("/",require("./route"))

app.listen(3003,()=>{
    console.log("connected")
})