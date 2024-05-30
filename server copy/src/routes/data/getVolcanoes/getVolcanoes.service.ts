import Knex from "knex";
import knexConfig from "../../../configurations/database";
const database = Knex(knexConfig)

interface volcanoesInCountry {
    id: number
    name: string
    country: string
    region: string
    subregion: string
}

export async function getVolcanoesFromDatabase(country: string, distance: number | null): Promise<volcanoesInCountry[]> {
    if (distance !== null) {
        return await database("data")
            .where({ country: country }).andWhere(`population_${distance}km`, '>=', '1')
            .select("id", "name", "country", "region", "subregion");
    }
    return await database("data")
        .where({ country: country })
        .select("id", "name", "country", "region", "subregion");
}

module.exports= {getVolcanoesFromDatabase: getVolcanoesFromDatabase}