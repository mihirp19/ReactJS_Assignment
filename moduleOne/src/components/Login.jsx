import React, { useState } from 'react'
import './Login.css'
import email from '../assets/email.png'
import password from '../assets/password.png'
import username from '../assets/username.png'

function Login() {
    const [action, setAction] = useState("Login")
    
    return (
        <div>
            <div className="container">
                <div className="header">
                    <div className="txt">{action}</div>
                    <hr />
                    <div className="input-fields">
                        {action === "Sign Up" && (
                            <div className="input">
                                <img src={username} alt="username" />
                                <input type="text" placeholder="Username" />
                            </div>
                        )}
                        <div className="input">
                            <img src={email} alt="email" />
                            <input type="email" placeholder="Email" />
                        </div>
                        <div className="input">
                            <img src={password} alt="password" />
                            <input type="password" placeholder="Password" />
                        </div>
                        {action === "Sign Up" && (
                            <div className="input">
                                <img src={password} alt="confirm password" />
                                <input type="password" placeholder="Confirm Password" />
                            </div>
                        )}
                        {action === "Login" && (
                            <div className="forgot">
                                Forgot Password?<span>Click Here!</span>
                            </div>
                        )}
                        <div className="buttons">
                            <div className="btn" onClick={() => setAction("Login")}>Login</div>
                            <div className="btn" onClick={() => setAction("Sign Up")}>Sign Up</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
