import userIcon from "../../assets/images/user-name.png";
import passwordIcon from "../../assets/images/password.png";

import "./registerComponentStyle.css";

export const RegisterComponent = () => {
    return(
        <>
        <div className="register-container">
            <div className="register-box">
                <div className="register-header">
                    <div className="register-title">REGISTER</div>
                    <div className="register-underline"></div>
                </div>

                <form className="register-form">
                    <div className="register-inputs">
                        <div className="register-input">
                            <img src={userIcon}  alt="Name"  className="register-icon"/>
                            <input type="text"  id="register-name" placeholder="Enter Full Name"/>
                        </div>


                        <div className="register-input">
                            <img src={userIcon}  alt="Email" className="register-icon" />
                            <input type="email" id="register-email" placeholder="Enter Email" />
                        </div>

                        <div className="register-input">
                            <img src={passwordIcon} alt="Password" className="register-icon" />
                            <input id="register-password" type="password" placeholder="Enter Password"/>
                        </div>

                        <div className="register-input">
                            <img src={passwordIcon} alt="Password" className="register-icon"/>
                            <input id="register-confirm-password" type="password" placeholder="Confirm Password" />
                            
                        </div>

                        <div className="register-btn-container">
                            <button type="button" className="register-btn-cancel">Cancel</button>
                            <button type="submit" className="register-btn-submit" >Register</button>
                        </div>

                        <div className="register-login">
                            <p>Already have an accont? 
                                <a href="" className="register-link"> Click Here</a>
                            </p>

                        </div>

                    </div>
                </form>


            </div>

        </div>

        </>
    )
}