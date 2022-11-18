import React from 'react'
import { Link } from 'react-router-dom'
import "./question.css"
import {useGetAllQuestionQuery} from "../../services/userAuthApi"
import { useState } from 'react'
import { useEffect } from 'react'
import DisplayAllQuestion from './DisplayAllQuestion'

function AllQuestion() {

  const {data, isSuccess} = useGetAllQuestionQuery()
  
  const {questions} = data
  
  console.log(questions)



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
           wadAWDAW
          </div>
        </div>
    </div>
  )
}

export default AllQuestion