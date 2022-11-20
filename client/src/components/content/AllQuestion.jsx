import React from 'react'
import { Link } from 'react-router-dom'
import "./question.css"
import {useGetAllQuestionQuery} from "../../services/userAuthApi"
import DisplayAllQuestion from './DisplayAllQuestion'
import { useState } from 'react'
import { useEffect } from 'react'

function AllQuestion() {

  const {data, isSuccess} = useGetAllQuestionQuery()

  const [allquestions, setAllquestions] = useState({
    questions: []
  })
  
  useEffect(() => {
    if(data && isSuccess){
      setAllquestions({
        questions: data.questions
      })
    }
  }, [data, isSuccess])

  const {questions} = allquestions



  return (
    <div className='container'>
        <div className="row">
            <div className="col-6">
                Top Question
            </div>
            <div className="col-lg-6">
              <Link to="postquestion">              
                <button type="button" class="btn btn-primary btn-sm question-btn ">Ask Question</button>
              </Link>
            </div>
        </div>
        <hr></hr>
        <div className="row">
          <div className="col">
            {questions.map((q) => {
                return(<DisplayAllQuestion q={q} key={q._id}/>)
            })}
          </div>
        </div>
    </div>
  )
}

export default AllQuestion