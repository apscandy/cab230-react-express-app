import { Router } from 'express';
const UserRouter = Router()

UserRouter.post("/login", (req, res) => {
    res.send({ data: "working" })
});


UserRouter.post("/register", (req, res) => {
    res.send({ data: "working" })
});


export default UserRouter; 