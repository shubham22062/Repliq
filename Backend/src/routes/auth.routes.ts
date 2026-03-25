import express from "express"

const router = express.Router();


router.post("/signup" , (req,res)=>{
    console.log("THis is a signup route")
})

router.post("/Login", (req,res)=>{
    console.log("This is a login route ")
})