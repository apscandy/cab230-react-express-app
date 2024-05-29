import { Request, Response } from "express";


export async function getVolcanoByID(req: Request, res: Response): Promise<void> {
    const pathId = req.params.id.trim() as unknown as string;
    const pathIdnumber = parseInt(pathId)
    if (isNaN(pathIdnumber)) {
        res.status(404).json({
            "error": true,
            "message": `Volcano with ID: ${pathId} not found.`
        })
        return;
    }
    res.status(200).json({ "working": true, "id": pathId })
    return;
}