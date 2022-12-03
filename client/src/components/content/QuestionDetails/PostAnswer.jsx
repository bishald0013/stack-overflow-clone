import React from 'react'
import { usePostAnswerMutation } from "../../../services/userAuthApi"
import { useParams } from "react-router-dom"
import {getToken} from "../../../services/localStorage"
import { useState, useEffect } from 'react'
import DisplayAnswer from './DisplayAnswer'
import {useDisplayAnswerQuery} from "../../../services/userAuthApi"

 

function PostAnswer() {

    const [answer, setAnswers] = useState({
        allAnswers: []
    })
    const [postAnswer] = usePostAnswerMutation()
    
    const token = getToken()
    // console.log(token)
    
    const params = useParams()
    const {id} = params
    // console.log(id)


    //get answer
    const {data, isSuccess} = useDisplayAnswerQuery({id})
    
    useEffect(() => {
        if(data && isSuccess){
            setAnswers({
                allAnswers: data.message.answer
            })
        }
    }, [data, isSuccess])

    const {allAnswers} = answer
    console.log(allAnswers)
    

    const handleSubmit = async (e) => {
        e.preventDefault()

        const data = new FormData(e.currentTarget)
        const answer = {
            answerBody: data.get('answer')
        }

        const res = await postAnswer({id, answer, token})
        // console.log(res)

        const {answerBody} = answer
        // console.log(answerBody) 

    }

  return (
    <div>
        <div className="displayAnswer">
            <DisplayAnswer />
        </div>
        <div className='answer-div'>
            <form onSubmit={handleSubmit}>
                <div class="form-floating">
                    <textarea class="form-control" placeholder="Leave a comment here" id="answer" name='answer'></textarea>
                    <label for="floatingTextarea2">Type your answer</label>
                </div>
                <button type="submit" class="btn btn-primary mt-5">Primary</button>
            </form>
        </div>
    </div>
  )
}

export default PostAnswer