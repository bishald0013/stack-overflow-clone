import React from 'react'
import {useParams} from "react-router-dom"
import {useGetQuestionsQuery} from "../../../services/userAuthApi"
import { useState, useEffect } from 'react'
import Leftbar from '../Leftbar'
import Rightbar from '../Rightbar'
import PostAnswer from './PostAnswer'

const QuestionDetails = () => {

  const params = useParams()
  const {id} = params

  const [question, setQuestion] = useState({
    qdetails: []
  })
  
  const { data, isSuccess } = useGetQuestionsQuery({id})

  useEffect(() => {
    if(data && isSuccess){
      setQuestion({
        qdetails: data.data
      })
    }
  }, [data, isSuccess])

  const {qdetails} = question

  return (
    <div className='container'>
      <div className="container left-container my-5">
        <div className="row">
          <div className="col-lg-3">
            <Leftbar/>
          </div>
          <div className="col-lg-6">
            <div className="heading">
              <p className='fs-3'>{qdetails.questionTitle}</p>
            <hr></hr>
            </div>
            <div className="body my-5">
            <p>{qdetails.questionBody}</p>
            <button type="button" class="btn btn-info">{qdetails.questionTags}</button>
            <hr></hr>
            </div>
            
            <div className="answerBody mt-5">
              <PostAnswer/>
            </div>
          </div>
          {/* <div className="col-lg-3">
            <Rightbar/>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default QuestionDetails