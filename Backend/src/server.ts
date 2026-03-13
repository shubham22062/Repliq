import express from 'express';
import { connectDB } from './config/db.js';

const app = express();

const PORT = process.env.PORT||5000;

connectDB();

app.get('/', (req, res)=>{
    res.send("ai chat bckend is running");
})

app.listen(PORT,()=>{
    console.log(`server is running on the ${PORT}`);
})

