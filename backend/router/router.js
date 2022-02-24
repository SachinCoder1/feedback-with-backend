import express from "express";
import { postFeedback } from "../controller/feedback-controller.js";


const Router = express.Router()

Router.post('/feedback', postFeedback)



export default Router 