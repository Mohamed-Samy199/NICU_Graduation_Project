import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
export default function Login({ saveUserData }) {
  let navigate = useNavigate();
  const [errorList, setErrorList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  function getUserData(e) {
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
    console.log(myUser);
  }
  const url = "http://localhost:8080/api/users";

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${url}/login`, user, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status == 200) {
        localStorage.setItem("userToken", response.data.token);
        saveUserData();
        navigate("/home");
        console.log(response.data);
      } else {
        console.log(response);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="login pt-4">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login</title>
      </Helmet>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className="image-auth d-flex pt-6 justify-content-center align-items-center">
              <img src={require('../Assets/about-1.png')} alt='nicu' className='w-75' />
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            {errorList.map((err, index) => (
              <div key={index} className="alert alert-danger my-2">
                {err.message}
              </div>
            ))}
            {error.length > 0 ? (
              <div className="alert alert-danger my-2">{error}</div>
            ) : (
              ""
            )}

            <div className="pt-4">
              <form onSubmit={handleLogin} className="pt-6">
                <label htmlFor="username" className="mt-2 fs-5">Username</label>
                <input
                  onChange={getUserData}
                  type="username"
                  className="form-control my-input my-2"
                  name="username"
                  id="username"
                />
                <label htmlFor="password" className="mt-2 fs-5">Password</label>
                <input
                  onChange={getUserData}
                  type="password"
                  className="form-control my-input my-2"
                  name="password"
                  id="password"
                />
                <button className="btn  btn-teal mt-3">
                  {loading === true ? (
                    <i className="fas fa-spinner fa-spin"></i>
                  ) : (
                    "Login"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
