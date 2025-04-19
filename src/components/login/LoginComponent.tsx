import emailIcon from "../../assets/images/email.png";
import passwordIcon from "../../assets/images/password.png";

import "./loginComponentStyle.css";
import { LoginType } from "../../interface/interface";
import { credential, submittedRegisterData, Validators } from "../../constant/constant";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";


export const LoginComponent = () => {

  const navigate = useNavigate();

  const initialLoginData: LoginType = {
    email: "",
    password: ""
  };

  const [loginData, setLoginData] = useState<LoginType>(initialLoginData);
  const [validation, setValidation] = useState<LoginType>(initialLoginData);



  // useEffect(() => {
  //   console.log("Updated form:", loginData);
  // }, [loginData]);


  const handleData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    validate(event);
  }


  const validate = (event?: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    let valid = true;


    if (event) {
      if (event.target.name == "email") {
        if (event.target.value.trim() == "") {
          setValidation((prev) => ({ ...prev, email: "Please Enter Email" }))
          valid = false;
        }
        else if (!(Validators.isValidEmail(event.target.value))) {
          setValidation((prev) => ({ ...prev, email: "Enter Valid Email" }))
          valid = false;
        }
        else {
          setValidation((prev) => ({ ...prev, email: "" }))
        }

      }

      if (event.target.name == "password") {

        if (event.target.value.trim() == "") {
          setValidation((prev) => ({ ...prev, password: "Please Enter Password" }))
          valid = false;
        }
        else if (!(Validators.isValidPassword(event.target.value))) {
          setValidation((prev) => ({ ...prev, password: "Password: At least 8 characters ,number & special character." }))
          valid = false;
        }
        else {
          setValidation((prev) => ({ ...prev, password: "" }))
        }
      }

    } else {
      if (loginData.email === "") {
        setValidation((prev) => ({ ...prev, email: "Enter Email" }))
        valid = false;
      }
      if (loginData.password === "") {
        setValidation((prev) => ({ ...prev, password: "Enter Password" }))
        valid = false;
      }
    }
    return valid;
  }


const handleSubmit = () => {
  if (!validate()) return;

  const user = submittedRegisterData.find(
    (user) => user.email === loginData.email
  );

  if (!user) {
    setValidation((prev) => ({
      ...prev,
      email: "Email not found",
    }));
    return;
  }

  if (user.password !== loginData.password) {
    setValidation((prev) => ({
      ...prev,
      password: "Incorrect Password",
    }));
    return;
  }

  // All good — navigate
  navigate("/form");
};


  const handleCancel = () => {
    setLoginData(initialLoginData);
    setValidation(initialLoginData);
  };


  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <div className="login-title">LOGIN</div>
          <div className="login-underline"></div>
        </div>

        <form className="login-form">
          <div className="login-inputs">
            {/* Username */}
            <div className="login-input">
              <img src={emailIcon} alt="User Icon" className="login-icon" />
              <input type="email"
                id="login-email"
                name="email"
                placeholder="Enter Email" required
                value={loginData.email}
                onChange={handleData}
              />
            </div>
            <span className="validation">{validation.email}</span>


            <div className="login-input">
              <img src={passwordIcon} alt="Password Icon" className="login-icon" />
              <input type="password"
                id="login-password"
                name="password"
                placeholder="Enter Password" required
                value={loginData.password}
                onChange={handleData}
              />
            </div>
            <span className="validation">{validation.password}</span>

          </div>

          <div className="login-btn-container">
            <button
              type="button" className="login-btn-cancel" onClick={handleCancel}>Cancel</button>
            <button
              type="button"
              className="login-btn-submit"
              onClick={handleSubmit}>Login</button>
          </div>
        </form>

        <div className="login-register">
          <p>
            Don't have an account?
            <a
              className="login-register-link"
              onClick={() => navigate("/register")}
            >
              Click Here!
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
