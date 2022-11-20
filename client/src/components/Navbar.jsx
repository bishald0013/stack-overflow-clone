import logo1 from "../assets/logo1.png";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { getToken } from "../services/localStorage";
import {removeToken} from "../services/localStorage"
import {useEffect} from "react"
import { useState } from "react";
import {useLogedUserQuery} from "../services/userAuthApi"

function Navbar() {

  const navigate = useNavigate()
  const token = getToken()

  const { data, isSuccess } = useLogedUserQuery(token)
  const [user, setUser] = useState({
    name: ""
  })

  const latter = user.name.split("")[0]
  
  useEffect(() => {
    if(data && isSuccess){
      setUser({
        name: data.user.name
      })
    }
  }, [data, isSuccess])

  
  const handleClick = () => {
    removeToken('token')
    navigate("login")
  }

  const handleNavigate = () => {
    navigate("/user")
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light shadow-sm sticky-top">
        <div className="container">
          <Link to="/">
            <img className="logoimage" src={logo1} alt="logo" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <Link
                  to=""
                  className="nav-link products active dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Products
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/" className="dropdown-item">
                      <span className="fs-6 fw-bold">Stack Overflow</span>
                      <br></br>{" "}
                      <span className="fs-6 fw-">
                        public question and answer
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
              <div className="searchContainer">
                <form className="d-flex mx-5" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </form>
              </div>
              <div className="loginSigneup">
                { token ? (
                  <>
                  <button type="button" className="btn btn-primary user-btn mx-2" onClick={handleNavigate}>
                  {latter}
                  </button>
                    <button
                      className="btn login-btn outline-opacity-25 me-2"
                      type="submit"
                      onClick={handleClick}
                    >
                      SignOut
                    </button>
                  </>
                    
                ) : (
                  <>
                    <Link to="login">
                      <button
                        className="btn login-btn outline-opacity-25 me-2"
                        type="submit"
                      >
                        Login
                      </button>
                    </Link>
                    <Link to="/signup">
                      <button className="btn signup-btn text-light" type="submit">
                        Signup
                      </button>
                    </Link>
                  </>
                )}
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
