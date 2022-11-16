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

    static getQuestion = async (req, res) => {
        try {
           await QuestionModel.find((error, result) => {
            if(!error){
                res.status(200).send({status: "success", allQuestions: result})
            }else{
                res.status(400).send({status: "fails", message: "something went wrong"})
            }
           })
        } catch (error) {
            res.status(400).send({status: "fails", message: "something went wrong"})
        }
    }
}

export default askQuestion