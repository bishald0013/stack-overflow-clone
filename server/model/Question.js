import mongoose from "mongoose"

const questionSchema = mongoose.Schema({
    questionTitle: {type: String, required: "question title is required"},
    questionBody: {type: String, require:"quiestion body is required"},
    questionTags: {type: [String], require: "Atlest 5 tags is reqwired"},
    noOfAnswers : {type: Number, default: 0},
    upVote: {type: [String], default: [] },
    downVote: {type: [String], default: [] },
    userPosted: {type: String, required: "quest must have an author"},
    userId: {type: String},
    postedOn: { type: Date, default: Date.now },
    answer: [{
        answerBody:  String,
        userAnswered: String,
        userId: String,
        asnweredOn: {type: Date, default: Date.now}
    }]
})

const QuestionModel = mongoose.model("Questions", questionSchema)

export default QuestionModel