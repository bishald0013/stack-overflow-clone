import React from "react";
import { Link } from "react-router-dom";
import globe from "../../assets/global.png"
import "./leftbar.css"

function Leftbar() {
  return (
    <div className="fw-light">
      <Link to="/" className="nav-link active">
        Home
      </Link>
      <div className="public-container my-3">
        <p className="fs-6">Public</p>
        <img src={globe} className="globe" alt="globe"></img>
        <div className="drop-down-container mx-4 my-2">
          <Link to="/" className="nav-link active my-2">
            Questions
          </Link>
          <Link to="/" className="nav-link active my-2">
            Tags
          </Link>
          <Link to="/user" className="nav-link active my-2">
            Users
          </Link>
          <Link to="/" className="nav-link active my-2">
            Companies
          </Link>
        </div>
        <p className="fs-6 mt-4">COLLECTIVES</p>
        <p className="fs-6 mx-3">Explore Collectives</p>
      </div>
      
    </div>
  );
}

export default Leftbar;
