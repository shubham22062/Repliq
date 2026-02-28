import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    chatId:{type:mongoose.Types.ObjectId, ref:"Chat"},
    senderId:{type:mongoose.Types.ObjectId, ref:"User"},
    content:String,
    isAI:{type:Boolean, default:false},
},{timestamps:true})

messageSchema.index({chatId:1, createdAt:-1});

export default mongoose.model("Message", messageSchema)