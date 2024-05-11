import { Express, Request, Response } from "express"
import { getCountries, getVolcanoes, getVolcanoByID } from "./routes/data/data.controller"
import { login, register } from "./routes/authentication/auth.controller"
import { getProfile, putProfile } from "./routes/profile/profile.controller"
import { getMe } from "./routes/administration/admin.controller"
import { isAuthenticated } from "./middleware/protected"

export default function (app: Express) {
    app.get("/countries", getCountries)
    app.get("/volcanoes", getVolcanoes)
    app.get("/volcano/:id", isAuthenticated, getVolcanoByID)
    app.post("/user/login", login)
    app.post("/user/register", register)
    app.get("/user/:email/profile", isAuthenticated, getProfile)
    app.put("/user/:email/profile", isAuthenticated, putProfile)
    app.get("/me", getMe)
}