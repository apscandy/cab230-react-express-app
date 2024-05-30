import { Express } from "express";
import { isAuthenticated } from "../../middleware/protected.controller"
import { getProfile } from "./getProfile/getProfile.controller";
import { putProfile } from "./putProfile/putProfile.controller";

export default function (app: Express) {
    app.get("/user/:email/profile", isAuthenticated, getProfile)
    app.put("/user/:email/profile", isAuthenticated, putProfile)
}