import Knex from "knex";
import knexConfig from "../../../configurations/database";
const database = Knex(knexConfig)


interface volcano{
    id: number
    name: string
    country: string
    region: string
    subregion: string
    last_eruption: string
    summit: number
    elevation: number
    latitude: string
    longitude: string
    population_5km: number
    population_10km: number
    population_30km: number
    population_100km: number
}

export async function getVolcanoesByIDFromDatabase(id: number): Promise<volcano[]>{
    try{
        return await database("data")
        .where({ id: id })
        .select("id", "name", "country", "region", "subregion","last_eruption", "summit", "elevation", "latitude", "longitude", "population_5km", "population_10km", "population_30km", "population_100km")
    }catch(e){
        console.debug(`error in function 'getVolcanoesByIDFromDatabase': ${e}`)
        return []
    }    
}

module.exports = { getVolcanoesByIDFromDatabase: getVolcanoesByIDFromDatabase}