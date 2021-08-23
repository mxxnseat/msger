import {Request, Response, NextFunction} from "express";
import jwt from "jsonwebtoken";

import User from "../models/user";



export async function loginMiddleware(req: Request, res: Response, next: NextFunction){
    const token = req.header('Authorization')?.replace("Bearer ", '');
    try{

        const jwtData = await jwt.verify(token as string, process.env.PRIVATE_KEY as string, );
    }catch(e){
        res.status(401);
    }
}