import React from 'react'
import { useUserSigneUpMutation } from '../services/userAuthApi'
import { useNavigate } from "react-router-dom"
import {storeToken} from "../services/localStorage"


function SignUp() {

  const [userSigneUp] = useUserSigneUpMutation()
  const navigate = useNavigate()
  

  const handleSubmit = async (e) => {
    e.preventDefault()

    const user = new FormData(e.currentTarget)

    const newUser = {
      name: user.get('name'),
      email: user.get('email'),
      password: user.get('password'),
      confirm_password: user.get('confirm_password')
    }

    const {name, email, password, confirm_password} = newUser
    
    if(name && email && password && confirm_password){
      if(password === confirm_password){
       const response = await userSigneUp(newUser)
       console.log(response)
       
        if(response.data.status === "success"){
          storeToken(response.data.token)
          console.log(response)
          navigate("/")
        }
        if(response.data.status === "fails"){
          console.log(response)
        }
        

      }else{
        console.log("password and confirm password desnot match")
      }
    }else{
      console.log("all fields are required")
    }

  }


  return (
    <div className='container'>
      <form className="login-form mx-auto" style={{margin: "5rem"}} onSubmit={handleSubmit}>
        <div class="mb-3" > 
          <label for="exampleInputEmail1" class="form-label mt-5">
            Display Name
          </label>
          <input
            type="text"
            name="name"
            class="form-control"
            id="name"
          />
        </div>
        <div class="mb-3">  
        <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            class="form-control"
            id="email"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            class="form-control"
            id="password"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirm_password"
            class="form-control"
            id="confirm_password"
          />
        </div>
        <button type="submit" class="btn btn-primary login-submit-btn mb-5">
          Submit
        </button>
      </form>
    </div>
  )
}

export default SignUp