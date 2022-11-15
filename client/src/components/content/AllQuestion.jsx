import React from 'react'
import { Link } from 'react-router-dom'
import "./question.css"

function AllQuestion() {
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
        <div className="row"></div>
    </div>
  )
}

export default AllQuestion