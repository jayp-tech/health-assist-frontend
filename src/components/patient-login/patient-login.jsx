import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../images/login_user.png';
import { PathConstants } from '../../lib/path-constants';

import './patient-login.css';

function    showPassword() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

export function PatientLoginComponent({
    email,
    setEmail,
    password,
    setPassword,
    onClick
}) {
    return (
        <div className="container">
            <div className="form-box">
                <div className="header-form">
                    <div className='logo-container'>
                    <img src={logo} alt="logo" style={{ width: "110px", height: "110px" }} />
                    </div>
                
                     {/* <h4 className="text-primary">HealthAssist</h4> */}
                    {/* <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{ fontSize: "110px" }}></i>HealthAssist</h4> */}

                </div>
                <div className="body-form">
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        onClick();
                    }}>
                        
                        <div className="input-group mb-3">
                            {/* <div className="input-group-prepend">
                                <span className="input-group-text"><i class="fa fa-user"></i></span>
                            </div> */} 
                            <input type="email" className="form-control" placeholder="Email Address"
                             required={true}
                             autoComplete='true'
                             value={email}
                             onChange={(e) => {
                                 setEmail(e.target.value);
                             }}/>
                        </div>

                        <div className="input-group mb-3">
                    {/* <div className="input-group-prepend">
                        <span className="input-group-text"><i class="fa fa-lock"></i></span>
                    </div> */}
                    <input type="password" id='myInput' className="form-control" placeholder="Password" 
                    style={{ marginBottom: "0px" }}
                    required={true}
                    autoComplete='true'
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}/>
                     </div>
                     <input type="checkbox" onClick={() => showPassword()} /><label className="show-password-text">Show Password</label>
                <button type="submit" className="btn btn-secondary btn-block" style={{ width: "100%" }}>Submit</button>
                
                <div className='message'>
                    <span>No Account?</span>
                    <br />
                    <Link className="btn btn-secondary btn-block" to={PathConstants.PatientSignup}>Sign Up</Link>
                </div>
                </form > 
                </div>
                
            </div>
        </div>
    )
}
