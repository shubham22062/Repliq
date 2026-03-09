import mongoose,{Schema,Document,Types} from 'mongoose';


export interface IChat extends Document{
    type : 'personal' | "group";
    name :String; //group name
    participants:Types.ObjectId[];
    admins:Types.ObjectId[];
    lastMessage:Types.ObjectId;
    aiActiveUser?:Types.ObjectId[];
    createdAt:Date;
    updatedAt:Date;

}

const chatSchema = new mongoose.Schema({
    type:{
        type:String,
        enum:["personal" , "group"],
        required:true,
    },
    name:{
        type:String,
        trim:true,
    },
    participant:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    admins:[{
        type:Schema.Types.ObjectId,
        ref:"User",
    }],

    lastMessage:{
        types:Schema.Types.ObjectId,
        ref:"Message",
    },
    aiActiveUsers:[{
        types:Schema.Types.ObjectId,
        ref:"User",
    }],


},{timestamps:true})