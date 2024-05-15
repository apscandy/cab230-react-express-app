import { Request, Response } from "express";


export async function getVolcanoByID(req: Request, res: Response): Promise<void> {
    res.status(200).json({"working": true})
    return;
}