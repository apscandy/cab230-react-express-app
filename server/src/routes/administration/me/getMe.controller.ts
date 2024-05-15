import { Request, Response } from "express";

export async function getMe(req: Request, res: Response):Promise<void> {
    res.status(200).json({
        name: process.env.STUDENT_NAME,
        student_number: process.env.STUDENT_NUMBER
    });
}