import {Request, Response, NextFunction} from "express"
import jwt from "jsonwebtoken";

type jwtPayloadData = {
    email: string
    iat: number
    exp: number
}

export async function isAuthenticated(req: Request, res: Response, next: NextFunction): Promise<void> {
    const header = req.headers["authorization"] as string;
    if(header === undefined){
        res.locals.authenticatedEmail = null;
        res.locals.authenticatedToken = null;
        res.locals.authenticated = false;
        return next()
    }
    const bearer = header?.split(' ')[0] as string
    const token = header?.split(' ')[1] as string;
    if(bearer !== "Bearer"){
        res.status(401).json({
            "error": true,
            "message": "Authorization header is malformed"
        })
        return;
    }
    try {
        const payload = await jwt.verify(token!, process.env.TOKEN_SECRET || "Cab230!"!) as jwtPayloadData
        // @ts-ignore
        if(payload.exp <  Math.floor(Date.now() / 1000)){
            res.status(401).json({
                "error": true,
                "message": "JWT token has expired"
            })
            return;
        }
        else{
            // @ts-ignore
            res.locals.authenticatedEmail = payload.email;
            res.locals.authenticatedToken = token;
            res.locals.authenticated = true;
            return next()
        }
    } catch (JsonWebTokenError) {
        res.status(401).json({
            "error": true,
            "message": "Invalid JWT token"
        })
        return;
    }
}