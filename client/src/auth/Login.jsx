import React from "react";
import "./login.css"
import logo2 from "../assets/logo2.png"
import { useNavigate} from "react-router-dom"
import {useUserLoginMutation} from "../services/userAuthApi"
import {storeToken} from "../services/localStorage"



function Login() {

    const [userLogin] = useUserLoginMutation()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const user = new FormData(e.currentTarget)

        const newLogin = {
            email: user.get("email"),
            password: user.get("password")
        }

        if(newLogin.email && newLogin.password){
          const response = await userLogin(newLogin)

          if(response.data.status === "success"){
           storeToken(response.data.token)
            navigate("/")
            
          }
          if(response.data.status === "fails"){
            console.log(response.data.message)
          }
        }

    }

  return (
    <>
    <div className="container logo">
        <img className="w-75" src={logo2} alt="" />
    </div>

    <div className="container rounded main-container bg-white shadow-sm">
    <form className="login-form mx-auto" onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label mt-5">
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
        <button type="submit" class="btn btn-primary login-submit-btn mb-5">
          Submit
        </button>
      </form>
    </div>
    </>
  );
}

export default Login;
