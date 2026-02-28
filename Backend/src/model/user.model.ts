import mongoose, { Schema } from 'mongoose';



const userSchema = new mongoose.Schema({
    name:String,
    password:String,
    email:String,
    aiModeEnabled:{type:Boolean,default:false},
    aiPersonaPropmpt:{type:String, defaulr:"reply causally..."},
    


},{timestamps:true})

export default mongoose.model("User",userSchema);