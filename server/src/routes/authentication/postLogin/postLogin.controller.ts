import {Request, Response} from "express";
import { getUser, verifyPassword, generateToken } from "./postLogin.service";

export async function login(req: Request, res: Response): Promise<void>{
    const {body} = req;
    if (!body.email || !body.password){
        res.status(400).json({
            "error": true,
            "message":  "Request body incomplete, both email and password are required"
        })
        return;
    }
    const user = await getUser(body.email)
    if (user.length === 0 || user === null){
        res.status(401).json({
            "error": true,
            "message":  "Incorrect email or password"
        })
        return;
    }
    const correctPassword: boolean = await verifyPassword(body.password, user[0].password)
    if(!correctPassword){
        res.status(401).json({
            "error": true,
            "message":  "Incorrect email or password"
        })
        return;
    }
    const expires_in: number = 86400;
    const token = await generateToken(user[0].email, expires_in)
    res.status(200).json({
        "token": token,
        "token_type": "Bearer",
        "expires_in": expires_in
    })
    return;
}
