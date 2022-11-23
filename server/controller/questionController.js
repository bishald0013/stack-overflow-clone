import QuestionModel from "../model/Question.js";
import UserModel from "../model/auth.js";


class askQuestion {
    static postQuestion = async (req,res) =>{
        try {
            const {questionTitle, questionBody, questionTags} = req.body
            const {id} = req.params

            if(questionTitle && questionBody && questionTags){
                const user = await UserModel.findById({_id: id})
                const newQuestion = await QuestionModel({
                    questionTitle: questionTitle,
                    questionBody: questionBody,
                    questionTags: questionTags,
                    userPosted: user.name,
                    userId: user._id
                })
                await newQuestion.save()
                res.status(200).send({status: "success", message: "Question Saved Successfully", type: "success", question: newQuestion})
            }else{
                res.status(400).send({status: "fails", message: "all fields are required", type: "error"})
            }

        } catch (error) {
            res.status(400).send({status: "fails", message: "something went wrong", type: "error"})
        }
    }
    
    static getAllQuestion = async (req, res) => {
        try {
            await QuestionModel.find((error, result) => {
                res.status(200).send({status: "success", questions: result})
            })
        } catch (error) {
            // res.status(400).send({status: "fail", message: "something went wrong"})
        }
    }

    static getSingleQuestion = async (req, res) => {
        try {
            const { id } = req.params            
            const question = await QuestionModel.findById({_id: id})
            res.status(200).send({status: "success", data: question})
   
        } catch (error) {
            res.status(400).send({status:"fails", message:"something went wrong"})
        }
    }

    static answerQuestion = async (req, res) => {
        try {
            const {id} = req.params
            const {answerBody} = req.body
            await QuestionModel.updateOne({_id: id}, {$addToSet: {"answer": [{answerBody: answerBody}]}})

            res.status(200).send({status:"success", message: "Successfully updated"})

        } catch (error) {
            res.status(400).send({status:"fails", messag: "something went wrong"})
        }
    } 
}

export default askQuestion