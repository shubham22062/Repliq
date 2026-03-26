import express from "express"
import { signup, login } from "../services/auth.services.js";

const router = express.Router();


router.post("/signup" , async(req,res)=>{
    console.log("THis is a signup route")
    try {
        const {name ,email,password} = req.body;
        const data = await signup(name , email , password);

        res.json(data);
    } catch (error:any) {
        res.status(400).json({message:error.message})
    }
});

router.post("/Login", async (req,res)=>{
    console.log("This is a login route ")
   try {
     const {email,password} = req.body;
     const data = await login(email ,password);
     res.json(data);
 
   } catch (error:any) {
        res.status(400).json({message:error.message})
   }

});


export default router;
