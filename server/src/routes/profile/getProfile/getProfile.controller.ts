import { Request, Response } from "express";
import { getUser } from "./getProfile.service";


export async function getProfile(req: Request, res: Response): Promise<void> {
    const emailPath = req.params.email.trim() as string;
    let user: any;
    try {
        user = await getUser(emailPath)
    } catch (error) {
        res.status(500).json({
            "error": true,
            "message": "there was a critical error, please try again later"
        })
        return;
    }
    if (user.length === 0 || user === null) {
        res.status(404).json({
            "error": true,
            "message": "User not found"
        })
        return;
    }
    if (res.locals.authenticated !== false && res.locals.authenticatedToken !== null && res.locals.authenticatedEmail === emailPath) {
        res.status(200).json({
            "email": user[0].email,
            "firstName": user[0].first_name,
            "lastName": user[0].last_name,
            "address": user[0].address,
            "dob": user[0].dob
        })
        return;
    }
    else{
        res.status(200).json({
            "email": user[0].email,
            "firstName": user[0].first_name,
            "lastName": user[0].last_name
        })
        return;
    }
}