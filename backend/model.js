
const mongoose=require('mongoose')

const userdetails={

    uname:String,
    roll:String,
    password:String,
    image:String,
    email:String,
    department:String,
    class:String,
    
    awards:[
        {
            aname:String,
            aimage:String,
            d:String
        }
    ],
    
}


const details=mongoose.model("details",userdetails)
module.exports=details;