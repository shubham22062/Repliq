import bcrypt from "bcryptjs";
import User from "../model/user.model.js";
import { generateToken } from "../utlis/jwt.js";


export const signup = async(name:string, email:string, password:string)=>{
    const existingUser = await User.findOne({email});

    if(existingUser){
        throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password,10);

    const user = await User.create({
        name,
        email,
        password: hashedPassword,

    })

    const token = generateToken(user._id.toString());

    
 return {user , token}

}


export const login = async (email:string, password:string) =>{
    const user = await User.findOne({email});

    if(!user){
        throw new Error("Invalid credentials")
    }
 
    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch){
        throw new Error("invalid credentials")


    }

    const token = generateToken(user._id.toString());

 return {user , token}

}