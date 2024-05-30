import { Request, Response } from "express";
import { getCountriesFromDatabase } from "./getCountries.service";

export async function getCountries(req: Request, res: Response): Promise<void> {
    const data = await getCountriesFromDatabase()
    res.status(200).json(data);
    return;
}

