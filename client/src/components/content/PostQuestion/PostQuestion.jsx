import React from "react";
import { useAskQuestionMutation } from "../../../services/userAuthApi";
import {useLogedUserQuery} from "../../../services/userAuthApi"
import {getToken} from "../../../services/localStorage"
import { useEffect } from "react";
import "./postquestion.css";

function PostQuestion() {

  let id;

  const token = getToken()
  const {data, isSuccess} = useLogedUserQuery(token)

  useEffect(() =>{
    if(data && isSuccess){
      id = data.user._id
    }
  }, [data, isSuccess])

  // const id = data.user._id
 
  const [ askQuestion ] = useAskQuestionMutation()

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
        <button type="submit" class="btn btn-primary btn-sm">Submit question</button>
      </form>
        </div>
      </div>
    </div>
  );
}

export default PostQuestion;
