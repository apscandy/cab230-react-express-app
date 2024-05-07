import { Router } from 'express';
const DataRouter = Router()

DataRouter.get("/countries", (req, res) => {
    res.send({ data: "working"})
});

DataRouter.get("/volcanoes", (req, res) => {
    res.send({ data: "working"}).json()
});


DataRouter.get("/volcano/:Id", (req, res) => {
    res.send({ data: "working", id: req.params.Id }).json()
});


export default DataRouter;