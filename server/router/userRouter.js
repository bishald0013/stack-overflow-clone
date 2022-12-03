import  express  from "express";
import authController from "../controller/authController.js";
import middlewire from "../middleware/middlewire.js"
import questionController from "../controller/questionController.js"
import questionMiddleire from "../middleware/quMiddlewire.js"
const router = express.Router()

//private route
router.use("/logeduser", middlewire)
router.use("/answer/:id", middlewire)

//user route
router.post("/signup", authController.userSignUp)
router.post("/login", authController.loginUser)
router.get("/logeduser", authController.getUser)
router.get("/alluser", authController.getAllUser)

//ask question route
router.post("/ask/:id", questionController.postQuestion)
router.get("/allquestion", questionController.getAllQuestion)
router.get("/question/:id", questionController.getSingleQuestion)
router.patch("/answer/:id", questionController.answerQuestion)

//display answer
router.get("/allanswers/:id", questionController.displayAnswer)

export default router