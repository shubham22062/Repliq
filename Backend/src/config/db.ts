import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
export const connectDB = async ():Promise<void>=>{
    try {
        const mongoURI = process.env.MONGO_URI;

        if(!mongoURI){
            throw new Error("MONGO_URI is not defined");
        
        }
        mongoose.set("autoIndex", true);
        await mongoose.connect(mongoURI);

        console.log("Database connected");
    } catch (error) {
        console.log("Database connection failed:", error);
        process.exit(1);
    }
};