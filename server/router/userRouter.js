import  express  from "express";
import authController from "../controller/authController.js";
import middlewire from "../middleware/middlewire.js"
import questionController from "../controller/questionController.js"
const router = express.Router()

//private route
router.use("/logeduser", middlewire)

//user route
router.post("/signup", authController.userSignUp )
router.post("/login", authController.loginUser )
router.get("/logeduser", authController.getUser)
router.get("/alluser", authController.getAllUser)

//ask question route
router.post("/ask/:id", questionController.postQuestion)
router.get("/allquestion", questionController.getQuestion)

export default router