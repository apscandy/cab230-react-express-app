import { Express } from "express"
import dataRouters from "./routes/data/dataRouters"
import adminRouter from "./routes/administration/adminRouter"
import authRouter from "./routes/authentication/authRouter"
import swagger from "./routes/swagger/swagger.controller"
import profileRouter from "./routes/profile/profileRouter"

export default function (app: Express) {
    swagger(app)
    dataRouters(app)
    adminRouter(app)
    authRouter(app)
    profileRouter(app)
}