import userIcon from "../../assets/images/user-name.png";
import passwordIcon from "../../assets/images/password.png";
import emailIcon from "../../assets/images/email.png";

import "./registerComponentStyle.css";
import { useNavigate } from "react-router-dom";
import { RegisterType } from "../../interface/interface";
import { useState } from "react";
import { submittedRegisterData, Validators } from "../../constant/constant";

export const RegisterComponent = () => {

    const navigate = useNavigate();

    const initialRegisterData: RegisterType = {
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    }

    const [registerData, setRegisterData] = useState<RegisterType>(initialRegisterData);
    const [validation, setValidation] = useState<RegisterType>(initialRegisterData);


    const handleData = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRegisterData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
        validate(event);
    }

    const validate = (event?: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        let valid = true;


        if (event) {
            if (event.target.name == "username") {
                if (event.target.value.trim() == "") {
                    setValidation((prev) => ({ ...prev, username: "Please Enter User Name" }))
                    valid = false;
                }
                else if (!(Validators.isValidName(event.target.value))) {
                    setValidation((prev) => ({ ...prev, username: "Enter Valid User Name" }))
                    valid = false;
                }
                else {
                    setValidation((prev) => ({ ...prev, username: "" }))
                }

            }

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

            if (event.target.name == "confirmPassword") {

                if (event.target.value.trim() == "") {
                    setValidation((prev) => ({ ...prev, confirmPassword: "Please Enter Confirm Password" }))
                    valid = false;
                }
                else if (!(Validators.isValidPassword(event.target.value))) {
                    setValidation((prev) => ({ ...prev, confirmPassword: "Password: At least 8 characters ,number & special character." }))
                    valid = false;
                }
                else if (event.target.value != registerData.password) {
                    
                    setValidation((prev) => ({ ...prev, confirmPassword: "Confirm password Should match with entererd Password" }))
                    valid = false;
                }
                else {
                    setValidation((prev) => ({ ...prev, confirmPassword: "" }))
                }
            }

        } else {
            if (registerData.username === "") {
                setValidation((prev) => ({ ...prev, username: "Enter User Name" }))
                valid = false;
            }

            if (registerData.email === "") {
                setValidation((prev) => ({ ...prev, email: "Enter Email" }))
                valid = false;
            }
            if (registerData.password === "") {
                setValidation((prev) => ({ ...prev, password: "Enter Password" }))
                valid = false;
            }

            if (registerData.confirmPassword === "") {
                setValidation((prev) => ({ ...prev, confirmPassword: "Enter Confirm Password" }))
                valid = false;
            }

        }
        return valid;
    }


    const handleSubmit = () => {
        if (!validate()) return;
        submittedRegisterData.push(registerData);
        navigate("/");
    }


    const handleCancel = () => {
        setRegisterData(initialRegisterData);
        setValidation(initialRegisterData);
    };


    return (
        <>
            <div className="register-container">
                <div className="register-box">
                    <div className="register-header">
                        <div className="register-title">REGISTER</div>
                        <div className="register-underline"></div>
                    </div>

                    <form className="register-form">
                        <div className="register-inputs">
                            {/* Username */}
                            <div className="register-input">
                                <img src={userIcon} alt="Name" className="register-icon" />
                                <input type="text"
                                    id="register-name"
                                    name="username"
                                    placeholder="Enter Full Name"
                                    value={registerData.username}
                                    onChange={handleData}
                                />
                            </div>
                            <span className="validation">{validation.username}</span>



                            <div className="register-input">
                                <img src={emailIcon} alt="Email" className="register-icon" />
                                <input type="email"
                                    id="register-email"
                                    name="email"
                                    placeholder="Enter Email"
                                    value={registerData.email}
                                    onChange={handleData}
                                />
                            </div>
                            <span className="validation">{validation.email}</span>

                            <div className="register-input">
                                <img src={passwordIcon} alt="Password" className="register-icon" />
                                <input
                                    type="password"
                                    id="register-password"
                                    name="password"
                                    placeholder="Enter Password"
                                    value={registerData.password}
                                    onChange={handleData}
                                />
                            </div>
                            <span className="validation">{validation.password}</span>


                            <div className="register-input">
                                <img src={passwordIcon} alt="Password" className="register-icon" />
                                <input type="password"
                                    id="register-confirm-password"
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    value={registerData.confirmPassword}
                                    onChange={handleData} />
                            </div>
                            <span className="validation">{validation.confirmPassword}</span>


                            <div className="register-btn-container">
                                <button type="button" className="register-btn-cancel"
                                    onClick={handleCancel}>
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    className="register-btn-submit"
                                    onClick={handleSubmit}
                                >Register</button>
                            </div>

                            <div className="register-login">
                                <p>Already have an accont?
                                    <a className="register-link" onClick={() => navigate("/")}> Click Here!</a>
                                </p>

                            </div>
                        </div>
                    </form>

                </div>
            </div>

        </>
    )
}