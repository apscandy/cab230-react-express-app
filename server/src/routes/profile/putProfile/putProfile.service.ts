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

export async function updateUser(email: string, firstName: string, lastName: string, address: string, dob: string): Promise<user[]> {
    try {
        return await database("user").where({email: email}).update({
            first_name: firstName,
            last_name: lastName,
            address: address,
            dob: dob
        })
    } catch (error) {
        console.error(`error ${error} ${email}`, "registerUser")
        return await [];
    }

}