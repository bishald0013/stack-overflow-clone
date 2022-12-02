import QuestionModel from "../model/Question.js";
import UserModel from "../model/auth.js";
import mongoose from "mongoose";


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
            const {answerBody, noOfAnswers} = req.body
            const { name, _id } = req.user
           
            if(!mongoose.Types.ObjectId.isValid(id)){
                return res.status(400).send({status: "fails", message: "not a vaild id"})
            }

            answerCount(id, noOfAnswers)

            await QuestionModel.findByIdAndUpdate( id, {
               $addToSet : { 'answer': [{
                    answerBody,
                    userAnswered: name,
                    userId: _id
               }] }
            })

            const answerOfQuestion = await QuestionModel.findById( {_id: id} )
            res.status(200).send({status: "success", message: answerOfQuestion})
            // res.status(200).send({status: "success", message: "success"})
        
        } catch (error) {
            res.status(500).send({status:"fails", message: "something went wrong"})
            console.log(error)
        }
    }

    // static displayAnswer = async(req, res) =>{
    //     try {

    //         const { id } = req.params

    //         const answerOfQuestion = await QuestionModel.findById( {_id: id} )
    //         res.status(200).send({status: "success", message: answerOfQuestion})
    //     } catch (error) {
    //          res.status(200).send({status: "fails", message: error})
    //     }
    // }    
}

const answerCount = async (id, noOfAnswers) => {
    try {
        await QuestionModel.findByIdAndUpdate( id, {$set: { noOfAnswers: noOfAnswers }})
    } catch (error) {
        console.log(error)
    }
}

export default askQuestion