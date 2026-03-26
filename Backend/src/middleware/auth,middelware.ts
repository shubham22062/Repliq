import type { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utlis/jwt.js";

export interface AuthRequest extends Request{
    userId?:string;
}


export const protect = (
    req:AuthRequest,
    res:Response,
    next:NextFunction
) =>{
    try {
        const authHeader = req.headers.authorization;
        if(!authHeader || !authHeader.startsWith("Bearer ")){
            return res.status(401).json({message:"Not authorized"});
        }

        const token = authHeader.split(" ")[1];

        if(!token){
            return res.status(401).json({message:"token missing"})
        }

        const decode = verifyToken(token);

        
        req.userId = decode.userId;

        next();

    } catch (error) {
        res.status(401).json({message:"inavlid token"})
    }
}