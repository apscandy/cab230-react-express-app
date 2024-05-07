import { connectionPool } from "./database.js";

export async function getCountries() {
    try {
        const [row, _] = await connectionPool.query("SELECT DISTINCT(country) as region FROM data ORDER BY region ASC;")
        return row.map(item => item.region)
    } catch (error) {
        console.debug("error getting countries from data base")
    }
}

export async function getVolcanoes(country) {
    try {
        const [row, _] = await connectionPool.query("SELECT id, name, country, region, subregion FROM data WHERE country = (?)", [country])
        return row
    } catch (error) {
        console.debug("error getting volcanoes from data base")
    }
}

export async function getVolcanoByID(id) {
    try {
        const [row, _] = await connectionPool.query("SELECT id, name, country, region, subregion, last_eruption, summit, elevation, latitude, longitude FROM data WHERE id = (?)", [id])
        return row[0]
    } catch (error) {
        console.debug("error getting volcanoes from data base")
    }
}

export async function getVolcanoByIDAuthenticated(id) {
    try {
        const [row, _] = await connectionPool.query("SELECT * FROM data WHERE id = (?)", [id])
        return row[0]
    } catch (error) {
        console.debug("error getting volcanoes from data base")
    }
}
