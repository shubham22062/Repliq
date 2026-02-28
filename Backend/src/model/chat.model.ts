import mongoose,{Schema,Document,Types} from 'mongoose';


export interface IChat extends Document{
    type : 'personal' | "group";
    name :String; //group name
    participants:Types.ObjectId[];
    admins:Types.ObjectId[];
    lastMessage:

}

const chatSchema = new mongoose.Schema({
    chatId:String,

},{timestamps:true})