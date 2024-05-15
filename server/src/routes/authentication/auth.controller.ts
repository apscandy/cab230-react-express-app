import {Request, Response} from "express";

export async function login(req: Request, res: Response): Promise<void>{
    res.sendStatus(200);

}

export async function register(req: Request, res: Response): Promise<void>{
    res.sendStatus(200);
}
