import { Express } from "express";
import { login } from "./postLogin/postLogin.controller";
import { register } from "./postRegister/postRegister.controller";

export default function(app: Express) {
    app.post("/user/login", login)
    app.post("/user/register", register)
}