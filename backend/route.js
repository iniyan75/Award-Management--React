const express= require('express')
const router=express.Router();
const details =require('./model')


router.route("/addinfo").post(async(req,res)=>{
    
    try{
        console.log(req.body)
    const detail=new details({...req.body})
    
    console.log('hi')
    await detail.save();
        res.status(200).json("success")
    }
    catch(err){

        console.log(err.message)
        res.status(500).json({msg:'internal server error'})
    }

})
router.route('/show/:id').get(async(req,res)=>{
    const {id}=req.params
    try{
    const detail = await details.findById(id)
    res.status(200).json(detail)
    }catch(err){
        console.log(err.message)
    }
})
router.route("/").get((req,res)=>{
    
    
    details.find()
    .then(foundreviews=>res.json(foundreviews))
      
})
router.route("/addnew/:id").post(async(req,res)=>{
    const {id}=req.params


    const detail =await  details.findById(id)
    const  newdetail=({...req.body})
  detail.awards.push(newdetail)
    detail.save()


})
router.route("/delete/:id1/:id").post(async(req,res)=>{
    const {id1,id}=req.params
    console.log(id)
    const detail =await  details.findById(id)
    
  detail.awards.remove(id1)
    detail.save()


})

module.exports=router;