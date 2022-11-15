import Navbar from "./components/Navbar"
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import Login from "./auth/Login";
import Signup from "./auth/SignUp"
import Home from "./components/content/Home";
import PostQuestion from "./components/content/PostQuestion/PostQuestion";
import {getToken} from "./services/localStorage"
import User from "./auth/User";

function App() {

 

  return (
    <div className="App">
      <BrowserRouter>
         <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="login" element={<Login/> } /> 
           <Route path="signup" element={<Signup/>} />
           <Route path="postquestion" element={<PostQuestion />} />
           <Route path="user" element={<User/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
