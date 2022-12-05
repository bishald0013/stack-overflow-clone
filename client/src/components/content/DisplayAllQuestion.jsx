import React from 'react'
import {Link, useNavigate} from "react-router-dom"

function DisplayAllQuestion({q}) {

  const {_id} = q
  const navigate = useNavigate()

  const handleClick = async() => {
    navigate(`qdetails/${_id}`)
  }


  return (
    <div className='container'>
        <h1 className='fs-4' onClick={handleClick}>{q.questionTitle}</h1>
        <h1 className='fs-5'>{q.userPosted}</h1>
        <h1 className='fs-6'>{q.postedOn}</h1>
        <button type="button" class="btn btn-info">
        <h1 className='fs-6'>{q.questionTags}</h1>
        </button>
        <h1 className='fs-6'>{q.noOfAnswers}</h1>
        <hr></hr>
    </div>
  )
}

export default DisplayAllQuestion