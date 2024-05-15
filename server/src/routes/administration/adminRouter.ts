import { Express } from "express"
import { getMe } from "./me/getMe.controller"

export default function (app: Express) {
    app.get("/me", getMe)
}