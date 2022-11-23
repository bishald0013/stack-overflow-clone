import  jwt  from "jsonwebtoken";
import QuestionModel from "../model/Question.js"

const verifyUser = async (req, res, next) =>{
    try {
        let token

        const {authorization} = req.headers

        if(authorization && authorization.startsWith("Bearer")){
            token = authorization.split(" ")[1]

            const {id} = jwt.verify(token, process.env.JWT_SECRET)

            await QuestionModel.find((err, result) => {
                if(!err){
                    req.ques = result
                    console.log(req.ques)
                    next()
                }else{
                    res.status(400).send(err)
                }
            })

        }else{
            res.status(400).send({status: "fails", message: "not a authorized user"})
        }

    } catch (error) {
        res.status(400).send({status:"fails", message: error})
    }
}

export default verifyUser

