import Knex from "knex";
import knexConfig from "../../../configurations/database";
const database = Knex(knexConfig)

interface volcano {
    id: number
    name: string
    country: string
    region: string
    subregion: string
    summit: number
    elevation: number
    latitude: string
    longitude: string
}

interface volcanoProtected extends volcano {
    population_5km: number
    population_10km: number
    population_30km: number
    population_100km: number
}


export async function getVolcanoesByIDFromDatabase(id: number): Promise<volcano[]>{
    try{
        return await database("data")
        .where({ id: id })
        .select("id", "name", "country", "region", "subregion", "summit", "elevation", "latitude", "longitude")
    }catch(e){
        console.debug(`error in function 'getVolcanoesByIDFromDatabase': ${e}`)
        return []
    }

    
}

export async function getProtectedVolcanoesByIDFromDatabase(id: number): Promise<volcanoProtected[]> {
    try{
        return await database("data")
        .where({ id: id })
        .select("id", "name", "country", "region", "subregion", "summit", "elevation", "latitude", "longitude", "population_5km", "population_10km", "population_30km", "population_100km")
    }catch(e){
        console.debug(`error in function 'getProtectedVolcanoesByIDFromDatabase': ${e}`)
        return []
    }
    

}

module.exports = { getVolcanoesByIDFromDatabase: getVolcanoesByIDFromDatabase, getProtectedVolcanoesByIDFromDatabase: getProtectedVolcanoesByIDFromDatabase }