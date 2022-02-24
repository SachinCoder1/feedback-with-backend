import express from 'express'
import connectToMongo from './db/db.js'
import cors from 'cors'
import bodyParser from "body-parser";
import Router from "./router/router.js";

connectToMongo()

const app = express();

const port = process.env.PORT || 8000;


app.use(cors())
app.use(bodyParser.json())
app.use('/', Router)



app.listen(port, () => {
    console.log("app is listening at port ", port)
})