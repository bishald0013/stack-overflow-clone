import express from "express"
import askQuestion from "../controller/questionController.js"


const router = express.Router()

router.post("/ask/:id", askQuestion.postQuestion)

export default router
