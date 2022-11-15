import React from "react";
import { useLogedUserQuery } from "../services/userAuthApi";
import { getToken } from "../services/localStorage";
import { useState } from "react";
import { useEffect } from "react";
import Leftbar from "../components/content/Leftbar";
import "./user.css"

function User() {
  const token = getToken();
  const { data, isSuccess } = useLogedUserQuery(token);

  const [user, setUser] = useState({
    name: "",
    tags: [],
    joined: "",
  });

  useEffect(() => {
    if (data && isSuccess) {
      setUser({
        name: data.user.name,
        tags: data.user.tags,
        joined: data.user.joinedOn,
      });
    }
  }, [data, isSuccess]);

  const letter = user.name.split("")[0]

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-3">
          <Leftbar />
        </div>
        <div className="col-lg-9">
          <button type="button" class="btn btn-primary position-relative w-25 h-75">
            <h1 className="fs-1 icon-font">{letter}</h1>
          </button>
        </div>
      </div>
    </div>
  );
}

export default User;
