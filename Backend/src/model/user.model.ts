import mongoose, { Schema } from 'mongoose';
import { Interface } from 'node:readline';

export interface IUser extends Document{
    name:string;
    password:string;
    email:string;
    aiModeEnabled:boolean;
   aiPersonaPrompt:string;
}



const userSchema = new mongoose.Schema<IUser>({
    name:String,
    password:String,
    email:String,
    aiModeEnabled:{type:Boolean,default:false},
    aiPersonaPrompt:{type:String, default:"reply causally..."},
    


},{timestamps:true})

 const User = mongoose.model<IUser>("User",userSchema);
 export default User