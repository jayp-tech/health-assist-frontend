import React from 'react';
import { Link } from 'react-router-dom';
import { PathConstants } from '../../lib/path-constants';
import '../patient-login/patient-login.css';

function showPassword() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

export default function CounselorLoginComponent({
    email,
    setEmail,
    password,
    setPassword,
    onClick
}) {

    return (
        <div className='login-form'>
            <h2 className='h2'>Health Assist</h2>
            <form onSubmit={(e) => {
                e.preventDefault();
                onClick();
            }}>
                <label>Couselor Email</label>
                <input type="email" placeholder='Enter your email address'
                    required={true}
                    autoComplete='true'
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }} />

                <label>Password</label>
                <input type="password" id='myInput' placeholder="Enter your password"
                    required={true}
                    autoComplete='true'
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }} />
                <input type="checkbox" onClick={() => showPassword()} /><label className="show-passowrd-text">Show Password</label>
                <br />
                <br />

                <input type="submit" className='user-login-button' value='Login'></input>
            </form>
            <div className='signup-box'>
                <span>No Account?</span>
                <br />
                <Link relative="path" to={PathConstants.CounselorSignup} className='signup-link'>Sign Up</Link>
            </div>
        </div>
    )
}


