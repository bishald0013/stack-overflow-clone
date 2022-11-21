import React from 'react'

function PostAnswer() {

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)

        const answer = {
            ans: data.get('answer')
        }

        console.log(answer)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div class="form-floating">
                <textarea class="form-control" placeholder="Leave a comment here" id="answer" name='answer'></textarea>
                <label for="floatingTextarea2">Type your answer</label>
            </div>
            <button type="button" class="btn btn-primary">Primary</button>
        </form>
    </div>
  )
}

export default PostAnswer