import { Request, Response } from "express";
import { getVolcanoesByIDFromDatabase } from "./getVolcaneosByID.service";


export async function getVolcanoByID(req: Request, res: Response): Promise<void> {
    const pathId = req.params.id.trim() as unknown as string;
    const pathIdNumber = parseInt(pathId)
    if (isNaN(pathIdNumber)) {
        res.status(404).json({
            "error": true,
            "message": `Volcano with ID: ${pathId} not found.`
        })
        return;
    }
    const volcano = await getVolcanoesByIDFromDatabase(pathIdNumber)
    if (volcano.length === 0 || volcano === null) {
        res.status(404).json({
            "error": true,
            "message": `Volcano with ID: ${pathId} not found.`
        })
        return;
    }
    if (res.locals.authenticated !== false && res.locals.authenticatedToken !== null) {
        res.status(200).json({
            "id": volcano[0].id,
            "name": volcano[0].name,
            "country": volcano[0].country,
            "region": volcano[0].region,
            "subregion": volcano[0].subregion,
            "last_eruption": volcano[0].last_eruption,
            "summit":  volcano[0].summit,
            "elevation": volcano[0].elevation,
            "latitude": volcano[0].latitude,
            "longitude": volcano[0].longitude,
            "population_5km": volcano[0].population_5km,
            "population_10km": volcano[0].population_10km,
            "population_30km": volcano[0].population_30km,
            "population_100km": volcano[0].population_100km,
        })
        
        return;
    }
    if (res.locals.authenticated === false) {
        res.status(200).json({
            "id": volcano[0].id,
            "name": volcano[0].name,
            "country": volcano[0].country,
            "region": volcano[0].region,
            "subregion": volcano[0].subregion,
            "last_eruption": volcano[0].last_eruption,
            "summit":  volcano[0].summit,
            "elevation": volcano[0].elevation,
            "latitude": volcano[0].latitude,
            "longitude": volcano[0].longitude,
        })
        return;

    }
    return;
}