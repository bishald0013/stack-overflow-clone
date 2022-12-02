import React from 'react'
import { usePostAnswerMutation } from "../../../services/userAuthApi"
import { useParams } from "react-router-dom"
import {getToken} from "../../../services/localStorage"
import { useState } from 'react'
 

function PostAnswer() {

 
    const [postAnswer] = usePostAnswerMutation()
    const token = getToken()
    // console.log(token)
    
    const params = useParams()
    const {id} = params
    console.log(id)


    const handleSubmit = async (e) => {
        e.preventDefault()

        const data = new FormData(e.currentTarget)
        const answer = {
            answerBody: data.get('answer')
        }

        const res = await postAnswer({id, answer, token})
        console.log(res)

        const {answerBody} = answer
        console.log(answerBody) 

    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div class="form-floating">
                <textarea class="form-control" placeholder="Leave a comment here" id="answer" name='answer'></textarea>
                <label for="floatingTextarea2">Type your answer</label>
            </div>
            <button type="submit" class="btn btn-primary mt-5">Primary</button>
        </form>
    </div>
  )
}

export default PostAnswer