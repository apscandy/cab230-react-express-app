import { Express } from "express"
import { login, register } from "./routes/authentication/auth.controller"
import { getProfile, putProfile } from "./routes/profile/profile.controller"
import { isAuthenticated } from "./middleware/protected"
import dataRouters from "./routes/data/dataRouters"
import adminRouter from "./routes/administration/adminRouter"
import swaggerRouter from "./routes/swagger/swaggerRouter"

export default function (app: Express) {
    dataRouters(app);
    adminRouter(app);
    swaggerRouter(app);
    app.post("/user/login", login);
    app.post("/user/register", register);
    app.get("/user/:email/profile", isAuthenticated, getProfile);
    app.put("/user/:email/profile", isAuthenticated, putProfile);
}