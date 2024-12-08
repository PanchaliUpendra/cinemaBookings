import React from "react";
import './Login.css';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

function Login() {
    return (
        <>
            <div className="login-maincon">
                <div className="green-shade top-right"></div>
                <div className="green-shade bottom-left"></div>

                <div className="login-container">
                    <form className="login-form">
                        <h2>Login to your account</h2>
                        <div className="login-form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Enter your email" />
                        </div>
                        <div className="login-form-group">
                            <label htmlFor="password">Password</label>
                            <div className="login-password-container">
                                <input type="password" id="password" placeholder="Enter your password" />
                                <button type="button" className="login-password">
                                    <RemoveRedEyeOutlinedIcon />
                                </button>
                            </div>
                        </div>
                        <button type="submit" className="login-btn">Login now</button>
                        <p className="login-register-link">
                            Don’t Have An Account? <span>Register Here</span>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;