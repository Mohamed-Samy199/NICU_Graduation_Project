import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Joi from "joi";
import "./Register.modules.scss"
import { Helmet } from "react-helmet";

export default function Register() {
  let navigate = useNavigate();
  const [errorList, setErrorList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [user, setUser] = useState({
    name: "",
    // last_name: '',
    email: "",
    password: "",
    rePassword: "",
    // age:0,
  });
  function getUserData(e) {
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
    console.log(myUser);
  }
  async function sentRegisterDataToApi() {
    let { data } = await axios.post(
      `https://route-ecommerce.onrender.com/api/v1/auth/signup`,
      user
    );
    if (data.message === "success") {
      setLoading(false);
      navigate("/login");
    } else {
      setLoading(false);
      setError(data.message);
    }
  }
  const url = "http://localhost:8080/api/users";

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const response = await axios.post(
        `${url}/register`,
        {
          username: user.name,
          email: user.email,
          password: user.password,
          confirmPassword: user.rePassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        console.log(response.data);
        navigate("/login");
      } else {
        console.log("error");
      }
    } catch (e) {
      console.error(e);
    }
  };

  function submitRegisterForm(e) {
    e.preventDefault();
    setLoading(true);
    let validation = validateRegisterForm();
    if (validation.error) {
      setLoading(false);
      setErrorList(validation.error.details);
    } else {
      sentRegisterDataToApi();
    }
  }

  function validateRegisterForm() {
    let scheme = Joi.object({
      name: Joi.string()
        .pattern(/^[A-Z]/)
        .min(2)
        .max(20)
        .required(),
      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
        .required(),
      password: Joi.string().pattern(/^[A-Z][a-z]{0,9}/),
      rePassword: Joi.string().pattern(/^[A-Z][a-z]{0,9}/),
    });
    return scheme.validate(user, { abortEarly: false });
  }
  return (
    <div className="register pt-4">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Register</title>
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
          <form onSubmit={handleRegister} className="pt-6">
            <label htmlFor="first_name" className="mt-2 fs-5">First Name</label>
            <input
              onChange={getUserData}
              type="text"
              className="form-control my-input my-2"
              name="name"
              id="first_name"
            />
            <label htmlFor="email" className="mt-2 fs-5">Email</label>
            <input
              onChange={getUserData}
              type="email"
              className="form-control my-input my-2"
              name="email"
              id="email"
            />
            <label htmlFor="password" className="mt-2 fs-5">Password</label>
            <input
              onChange={getUserData}
              type="password"
              className="form-control my-input my-2"
              name="password"
              id="password"
            />
            <label htmlFor="rePassword" className="mt-2 fs-5">Repassword</label>
            <input
              onChange={getUserData}
              type="password"
              className="form-control my-input my-2"
              name="rePassword"
              id="rePassword"
            />
            <button className="btn btn-teal mt-3">
              {loading === true ? (
                <i className="fas fa-spinner fa-spin"></i>
              ) : (
                "Register"
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
