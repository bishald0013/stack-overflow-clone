import UserModel from "../model/auth.js"
import  jwt  from "jsonwebtoken";
import bcrypt from "bcryptjs";

class authController {
    static userSignUp = async (req, res) => {
        try {
            
            const { name, email, password, confirm_password, about } = req.body
            const user = await UserModel.findOne({email: email})

            if(!user){
                if(name && email && password && confirm_password){
                    if( password === confirm_password ){
                        const salt = await bcrypt.genSalt(10)
                        const hashedPassword = await bcrypt.hash(password, salt)

                        const newUser = await UserModel({
                            name: name,
                            email: email,
                            password: hashedPassword,
                            about: about
                        })
                        await newUser.save()
                        const userId = await UserModel.findOne({email: email}) 
                        const token = jwt.sign({userId: userId._id}, process.env.JWT_SECRET, {expiresIn: "1hr"})
                      
                        res.status(200).send({status: "success", message: "Successfully created user", type: "success", token: token,})
                    }else{
                        res.status(400).send({status: "fails", message: "password and confirm_password doesnot match", type: "error"})    
                    }
                }else{
                    res.status(400).send({status: "fails", message: "all fields are required", type: "error"})
                }
            }else{
                res.status(400).send({status: "fails", message: "user already exists", type: "error"})
            }

        } catch (error) {
            
        }
    }
    static loginUser = async (req, res) => {
        try {
            const {email, password} = req.body
            const userEmail = await UserModel.findOne({email: email})

            if(userEmail){
                const comparePassword = await bcrypt.compare(password, userEmail.password)
                if((email === userEmail.email) && comparePassword){

                    const token = jwt.sign({userId: userEmail._id}, process.env.JWT_SECRET, { expiresIn:"1d" })
                    res.status(200).send({status: "success", message: "successfully login", type: "success", token: token})

                }else{
                    res.status(400).send({status: "fails", message: "email or password doesnot match", type: "error"})    
                }
            }else{
                res.status(400).send({status: "fails", message: "user not found", type: "error"})
            }

        } catch (error) {
            res.status(400).send({status: "fails", message: "something went wrong!", type: "error"})
        }
    }

    static getUser = async (req, res) =>{
        try {
            res.status(200).send({user: req.user})
        } catch (error) {
            res.status(400).send(error)
        }
    }

    static getAllUser = async (req, res) =>{
        try {
             await UserModel.find((err, result) => {
                if(!err){
                    res.status(200).send({status: "success", users: result})
                }else{
                    console.log(err)
                }
            })
        } catch (error) {
            res.status(400).status({status:"fails", message: "something went wrong"})
        }
    }
}

export default authController