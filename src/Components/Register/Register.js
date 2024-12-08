import React from "react";
import './Register.css';
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import logo from  "../../Assets/cinemalogo.png";

function Register() {
    return (
        <>
            <div className="signup-container">
                {/* Left section */}
                <div className="signup-left-section">
                    <div className="green-shade bottom-left"></div>
                    <div className="signup-logo">
                        <img src={logo} alt="logo"/>
                    </div>
                    <div className="signup-welcome-text">
                        <h1> <i>Welcome. <br/> Begin your cinematic <br/>adventure now with <br/>our ticketing<br/> platform! </i></h1>
                    </div>
                </div>

                {/* Right section */}
                <div className="signup-right-section">
                    <div className="signup-form-container">
                        <h2>Create an account</h2>
                        <form>
                            <div className="signup-form-group">
                                <label>Email</label>
                                <input type="email" placeholder="Enter your email" />
                            </div>
                            <div className="signup-form-group">
                                <label>Password</label>
                                <div className="signup-password-container">
                                    <input type="password" placeholder="Enter your password" />
                                    <RemoveRedEyeOutlinedIcon className="signup-eye-icon" />
                                </div>
                            </div>
                            <div className="signup-form-group">
                                <div className="signup-password-container">
                                    <input type="password" placeholder="Confirm your password" />
                                    <RemoveRedEyeOutlinedIcon className="signup-eye-icon" />
                                </div>
                            </div>
                            <button className="signup-submit-btn">Create account</button>
                        </form>
                        <p className="signup-login-link">
                            Already Have An Account? <span>Log In</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Register;