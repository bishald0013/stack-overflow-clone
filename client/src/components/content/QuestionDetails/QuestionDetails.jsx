import React from 'react'
import {useParams} from "react-router-dom"
import {useGetQuestionsQuery} from "../../../services/userAuthApi"
import { useState, useEffect } from 'react'

 const QuestionDetails = () => {

  const params = useParams()
  const {id} = params
  // console.log(params)

  const [question, setQuestion] = useState({
    qdetails: []
  })

  const { data, isSuccess } = useGetQuestionsQuery({id})
  // console.log(data)

  useEffect(() => {
    if(data && isSuccess){
      setQuestion({
        qdetails: data.data
      })
    }
  }, [data, isSuccess])

  const {qdetails} = question
  // console.log(qdetails)

  return (
    <div className='container'>
      <p>{qdetails.questionTitle}</p>
    </div>
  )
}

export default QuestionDetails