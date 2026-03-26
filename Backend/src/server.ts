import express from 'express';
import { connectDB } from './config/db.js';
import authRoutes from "./routes/auth.routes.js"

const PORT = process.env.PORT||5000;

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes)
connectDB();

app.get('/', (req, res)=>{
    res.send("ai chat bckend is running");
})

app.listen(PORT,()=>{
    console.log(`server is running on the ${PORT}`);
})

