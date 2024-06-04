import Knex from "knex";
import knexConfig from "../../../configurations/database";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const database = Knex(knexConfig)

interface user {
    email: string
    password: string
}


export async function getUser(email: string): Promise<user[]> {
    try {
        return await database("user").where({ email: email }).select("email", "password")
    } catch (error) {
        console.error(`error ${error} ${email}`, "registerUser")
        return await [];
    }
}

export async function verifyPassword(plainTextPassword: string, hashedPassword: string): Promise<boolean> {
    try {
        return await bcrypt.compare(plainTextPassword, hashedPassword)
    } catch (error) {
        console.error(`error ${error}`, "verifyPassword")
        return false;
    }
}

export async function generateToken(email: string, expires_in: number) {
    try {
        const payload = {
            email: email,
            iat: Math.floor(Date.now() / 1000),
            exp: Math.floor(Date.now() / 1000) + expires_in
        }
        const token = await jwt.sign(payload, process.env.TOKEN_SECRET ||"Cab230!")
        return token;

    } catch (error) {
        console.error(`error ${error}`, "generateToken")
        return null;
    }
}

module.exports = { getUser: getUser, verifyPassword: verifyPassword, generateToken: generateToken }