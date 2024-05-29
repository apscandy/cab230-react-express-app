import {Request, Response} from "express";
import { checkIfEmailExists, registerUser } from "./postRegister.service";

export async function register(req: Request, res: Response): Promise<void>{
    const {body} = req;
    if (!body.email || !body.password){
        res.status(400).json({
            "error": true,
            "message":  "Request body incomplete, both email and password are required"
        })
        return;
    }
    if (await checkIfEmailExists(body.email)){
        res.status(409).json({
            "error": true,
            "message":  "User already exists"
        })
        return;
    }
    try {
        await registerUser(body.email, body.password)
        res.status(201).json({
            "message": "User created"
        })
        return;
    } catch (error) {
        res.status(500)
        return;
    }
}