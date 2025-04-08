import userIcon from "../../assets/images/user-name.png";
import passwordIcon from "../../assets/images/password.png";

import "./loginComponentStyle.css";


export const LoginComponent = () => {

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <div className="login-title">LOGIN</div>
          <div className="login-underline"></div>
        </div>

        <form className="login-form">
          <div className="login-inputs">
            <div className="login-input">
              <img src={userIcon} alt="User Icon" className="login-icon" />
              <input id="login-email"
                type="email"
                placeholder="Enter Email" required
              />
            </div>

            <div className="login-input">
              <img src={passwordIcon} alt="Password Icon" className="login-icon" />
              <input id="login-password"
                type="password"
                placeholder="Enter Password" required
              />


            </div>
          </div>

          <div className="login-btn-container">
            <button 
            type="button" className="login-btn-cancel">Cancel</button>
            <button  
            type="button"
              className="login-btn-submit">Login</button>
          </div>
        </form>

        <div className="login-register">
          <p>
            Don't have an account?{" "}
            <a href="../Register Page/carwashRegister.html" className="login-register-link">
              Click Here!
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
