import Knex from "knex";
import knexConfig from "../../../configurations/database";
import bcrypt from "bcrypt";
const database = Knex(knexConfig)

export async function registerUser(email: string, password: string) {
    try {
        const hashedPassword = await bcrypt.hash(password, 12)
        return await database("user").insert({email: email, password: hashedPassword})
    } catch (error) {
        console.error(`error ${error} ${email}`, "registerUser")
        return await [];
    }
    
}

export async function checkIfEmailExists(email: string): Promise<boolean>{
    try {
        const search = await database("user").where("email", email).select("email")
        if (search.length === 0 ||search === null)
        {
            return false
        }
        else{
            return true
        }
    } catch (error) {
        console.error(`error ${error} ${email}`, "checkIfEmailExists")
        return true
    }
    
    
}

module.exports= {registerUser: registerUser, checkIfEmailExists: checkIfEmailExists}