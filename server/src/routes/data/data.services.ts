import Knex from "knex";
import knexConfig from "../../configurations/database";
const database = Knex(knexConfig)

interface country {
    country: string
}

interface volcanoesInCountry {
    id: number
    name: string
    country: string
    region: string
    subregion: string
}

interface basicVolcanoesData extends volcanoesInCountry {
    last_eruption: string
    summit: number
    elevation: number
    latitude: string
    longitude: string
}

interface privilegedVolcanoesData extends basicVolcanoesData {
    population_5km: number,
    population_10km: number,
    population_30km: number,
    population_100km: number
}

export async function getCountriesFromDatabase(): Promise<country[]> {
    const data = await database("data").distinct("country").orderBy('country', 'asc');
    return data.map((item) => item.country);
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

async function getVolcanoByIDFromDatabase(id: number): Promise<basicVolcanoesData[]> {
    const data = await database("data")
        .where({ id: id })
        .select(
            "id",
            "name",
            "country",
            "region",
            "subregion",
            "last_eruption",
            "summit",
            "elevation",
            "latitude",
            "longitude"
        );
    return data;
}

async function getVolcanoByIDFromDatabaseProtected(id: number): Promise<privilegedVolcanoesData[]> {
    const data = database("data")
        .where({ id: id })
        .select();
    return data;
}

module.exports = {
    getCountriesFromDatabase: getCountriesFromDatabase,
    getVolcanoesFromDatabase: getVolcanoesFromDatabase
}