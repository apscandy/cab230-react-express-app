import { Request, Response } from "express";
import { getCountriesFromDatabase, getVolcanoesFromDatabase } from "./data.services";

function isValidPopulatedDistance(query: string){
    return ['5km', '10km', '30km', '100km'].includes(query);
}

export async function getCountries(req: Request, res: Response) {
    const data = await getCountriesFromDatabase()
    res.status(200).json(data);
    return;
}

export async function getVolcanoes(req: Request, res: Response) {
    const country = req.query.country as string;
    const populatedWithin: string = req.query.populatedWithin as string;
    if (!country  && !populatedWithin) {
        res.status(400).json({
            error: true,
            message: "Invalid query parameters. Only country and populatedWithin are permitted."
        })
        return;
    }
    if (!country) {
        res.status(400).json({
            error: true,
            message: "Country is a required query parameter."
        })
        return;
    }
    
    if (populatedWithin){
        if(!isValidPopulatedDistance(populatedWithin)){
            res.status(400).json({
                error: true,
                message: "Invalid value for populatedWithin. Only: 5km,10km,30km,100km are permitted."
            })
            return;
        }
        const dist: number = parseInt(populatedWithin.split('km')[0])
        const data = await getVolcanoesFromDatabase(country, dist);
        res.status(200).json(data)
        return;
    }
    const data = await getVolcanoesFromDatabase(country, null);
    res.status(200).json(data)
    return;
}

export async function getVolcanoByID(req: Request, res: Response) {
    const auth = res.locals.authenticated;
    res.sendStatus(200);
    return;
}