import mongoose, { Schema, Document, Types } from "mongoose";

export interface IChat extends Document {
  type: "personal" | "group";
  name?: string;
  participants: Types.ObjectId[];
  admins?: Types.ObjectId[];
  lastMessage?: Types.ObjectId;
  aiActiveUsers?: Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

const chatSchema = new Schema<IChat>(
  {
    type: {
      type: String,
      enum: ["personal", "group"],
      required: true,
    },

    name: {
      type: String,
      trim: true,
    },

    participants: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    ],

    admins: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    lastMessage: {
      type: Schema.Types.ObjectId,
      ref: "Message",
    },

    aiActiveUsers: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

chatSchema.index({participants:1});
chatSchema.index({lastMessage:1});

const Chat = mongoose.model<IChat>("Chat",chatSchema);

export default Chat;
