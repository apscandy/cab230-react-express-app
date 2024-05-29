import { Express } from "express"
import { getCountries } from "./getCountries/getCountries.controller"
import { getVolcanoes } from "./getVolcanoes/getVolcaneos.controller"
import { getVolcanoByID } from "./getVolcaneosByID/getVolcaneosByID.controller"
import { isAuthenticated } from "../../middleware/protected.controller"

export default function (app: Express) {
    app.get("/countries", getCountries)
    app.get("/volcanoes", getVolcanoes)
    app.get("/volcano/:id", isAuthenticated, getVolcanoByID)
}