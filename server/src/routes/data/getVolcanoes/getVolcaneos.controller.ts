import { Request, Response } from "express";
import { getVolcanoesFromDatabase } from "./getVolcanoes.service";

function isValidPopulatedDistance(query: string){
    return ['5km', '10km', '30km', '100km'].includes(query);
}

export async function getVolcanoes(req: Request, res: Response): Promise<void> {
    const allowedParams = ['country', 'populatedWithin'];
    const receivedParams = Object.keys(req.query);
    const invalidParams = receivedParams.filter(param => !allowedParams.includes(param));
    
    const {country, populatedWithin} = req.query;
    
    if (!country  && !populatedWithin || invalidParams.length > 0) {
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
        if(!req.query.hasOwnProperty('populatedWithin')){
            res.status(400).json({
                error: true,
                message: "Invalid query parameters. Only country and populatedWithin are permitted."
            })
            console.log(`bad param ${req.query}`)
            return;
        }
        if(!isValidPopulatedDistance(populatedWithin as string)){
            res.status(400).json({
                error: true,
                message: "Invalid value for populatedWithin. Only: 5km,10km,30km,100km are permitted."
            })
            return;
        }
        // @ts-ignore
        const dist: number = parseInt(populatedWithin.split('km')[0])
        const data = await getVolcanoesFromDatabase(country as string, dist);
        res.status(200).json(data)
        return;
    }
    const data = await getVolcanoesFromDatabase(country as string, null);
    res.status(200).json(data)
    return;
}