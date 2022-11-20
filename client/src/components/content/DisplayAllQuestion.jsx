import React from 'react'
import {Link, useNavigate} from "react-router-dom"

function DisplayAllQuestion({q}) {

  // const navigate = useNavigate()
  // const handleClick = () => {
  //   navigate("/qdetails")
  // }

  return (
    <div>
      <Link to="/qdetails" class="nav-item" >
        <h1 className='fs-4'>{q.questionTitle}</h1>
      </Link>
        <h1 className='fs-5'>{q.userPosted}</h1>
        <h1 className='fs-6'>{q.postedOn}</h1>
        <h1 className='fs-6'>{q.questionTags}</h1>
        <h1 className='fs-6'>{q.noOfAnswers}</h1>
        <hr></hr>
    </div>
  )
}

export default DisplayAllQuestion