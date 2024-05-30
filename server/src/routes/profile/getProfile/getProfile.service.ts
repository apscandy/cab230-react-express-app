import Knex from "knex";
import knexConfig from "../../../configurations/database";
const database = Knex(knexConfig)

interface user {
    email: string
    first_name: string
    last_name: string
    address: string
    dob: string
}

export async function getUser(email: string): Promise<user[]> {
    try {
        return await database("user").where({ email: email }).select("email", "first_name", "last_name", "address", "dob")
    } catch (error) {
        console.error(`error ${error} ${email}`, "registerUser")
        return await [];
    }

}