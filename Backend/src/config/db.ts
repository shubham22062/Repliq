import mongoose from "mongoose";

export const connectDB = async (): Promise<void>=>{
    try {
        const mongoURI = process.env.MONGO_URI as string;

       mongoose.set("autoIndex", true);
       await mongoose.connect(mongoURI);

        console.log("DataBase Connected");
    } catch (error) {
        console.error("connection failed",error);
        process.exit(1);
    }
}