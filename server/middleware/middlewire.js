import jwt from "jsonwebtoken"
import UserModel from "../model/auth.js"

const verifyToken = async (req, res, next) =>{
    try {
     let token 

     const {authorization} = req.headers

     if(authorization && authorization.startsWith("Bearer")){
        token = authorization.split(" ")[1]

        const {userId} = jwt.verify(token, process.env.JWT_SECRET)

        req.user = await UserModel.findById(userId).select('-password')

        next()
     }else{
        res.status(400).send({status:"fails", message:"not authorized"})
     }

    } catch (error) {
        res.status(400).send(error)
    }
}

export default verifyToken
