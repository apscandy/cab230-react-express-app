import Knex from "knex";
import knexConfig from "../../../configurations/database";
const database = Knex(knexConfig)

interface country {
    country: string
}
export async function getCountriesFromDatabase(): Promise<country[]> {
    const data = await database("data").distinct("country").orderBy('country', 'asc');
    return data.map((item) => item.country);
}

module.exports = { getCountriesFromDatabase: getCountriesFromDatabase }