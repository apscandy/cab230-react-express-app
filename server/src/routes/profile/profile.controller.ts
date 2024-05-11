import {Request, Response} from "express";

export async function getProfile(req: Request, res: Response){
    const auth = res.locals.authenticated;
    res.sendStatus(200);

}

export async function putProfile(req: Request, res: Response){
    const auth = res.locals.authenticated;
    res.sendStatus(200);
}
