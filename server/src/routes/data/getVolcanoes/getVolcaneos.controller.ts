import { Request, Response } from "express";
import { getVolcanoesFromDatabase } from "./getVolcanoes.service";

function isValidPopulatedDistance(query: string){
    return ['5km', '10km', '30km', '100km'].includes(query);
}

export async function getVolcanoes(req: Request, res: Response): Promise<void> {
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