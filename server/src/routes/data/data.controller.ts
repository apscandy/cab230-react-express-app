import { Request, Response } from "express";
import { getCountriesFromDatabase } from "./data.services";

type populatedDistance = 'none' | '5km' | '10km' | '30km' | '100km';

function checkValidPopulatedDistance(query: string){
    return ['none', '5km', '10km', '30km', '100km'].includes(query);
}

export async function getCountries(req: Request, res: Response) {
    const data = await getCountriesFromDatabase()
    res.status(200).json(data);

}

export async function getVolcanoes(req: Request, res: Response) {
    const country = req.query.country;
    const populatedWithin: string = req.query.populatedWithin as string;
    if (country === null) {
        res.status(400).json({
            error: true,
            message: "Country is a required query parameter."
        })
        return;
    }
    
    if (populatedWithin !== null){
        if(!checkValidPopulatedDistance(populatedWithin)){
            res.status(400).json({
                error: true,
                message: "Invalid value for populatedWithin. Only: 5km,10km,30km,100km are permitted."
            })
            return;
        }
    }
    res.sendStatus(200);
}

export async function getVolcanoByID(req: Request, res: Response) {
    const auth = res.locals.authenticated;
    res.sendStatus(200);
}