import mongoose ,{Schema ,Document ,Types}from "mongoose";

export interface IMessage extends Document{
    chatId:Types.ObjectId;
    senderId:Types.ObjectId;
    content:string;
    isAI?:boolean;
    createdAt:Date;
}

const messageSchema = new mongoose.Schema({
    chatId:{type:mongoose.Types.ObjectId, ref:"Chat"},
    senderId:{type:mongoose.Types.ObjectId, ref:"User"},
    content:String,
    isAI:{type:Boolean, default:false},
},{timestamps:true})

messageSchema.index({chatId:1, createdAt:-1});

export default mongoose.model("Message", messageSchema)