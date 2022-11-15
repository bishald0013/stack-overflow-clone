import React from "react";
import { useAskQuestionMutation } from "../../../services/userAuthApi";
import "./postquestion.css";
import {useParams} from "react-router-dom"

function PostQuestion() {


  const [ askQuestion ] = useAskQuestionMutation()
  const {id} = useParams()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = new FormData(e.currentTarget);

    const question = {
      questionTitle: user.get("questionTitle"),
      questionBody: user.get("questionBody"),
      questionTags: user.get("questionTags")
    };
    
    if(question.questionTitle && question.questionBody && question.questionTags){
      const res = await askQuestion({question, id})
      console.log(res)
    }else{
      console.log("all fields are required")
    }

  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-lg-6">
        <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
          Title
          </label>
          <input
            type="text"
            class="form-control"
            name="questionTitle"
            id="questionTitle"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Question Body
          </label>
          <textarea
            class="form-control"
            name="questionBody"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Tags
          </label>
          <input
            type="text"
            class="form-control"
            name="questionTags"
            id="questionTags"
          />
        </div>
        <button type="submit" class="btn btn-primary btn-sm">Small button</button>
      </form>
        </div>
      </div>
    </div>
  );
}

export default PostQuestion;