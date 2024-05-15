import {Request, Response, NextFunction} from "express"
import jwt from "jsonwebtoken";


export async function isAuthenticated(req: Request, res: Response, next: NextFunction): Promise<void> {
    const header = req.headers["authorization"] as string;
    const token = header?.split(' ')[1] as string;
    jwt.verify(token!, process.env.TOKEN_SECRET!, (error)=>{
        if(error){
            res.locals.authenticatedToken = null;
            res.locals.authenticated = false;
            return next()
        }
        res.locals.authenticatedToken = token;
        res.locals.authenticated = true;
        return next()
    })
}