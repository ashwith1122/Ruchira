import React, { useState } from 'react'
import ruchira15 from "../assets/ruchira15.png";
import "./Login.css";
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [email, setemail] = useState("");
    const [emailerror, setemailerror] = useState("");
    const [password, setpassword] = useState("");
    const [passworderror, setpassworderror] = useState("");
    function handle(event) {
        event.preventDefault();
        var isValid = true;
        if (email.trim() === "" || !email.includes('@')) {
            setemailerror("Email should not Be EMpty and it should contains '@'");
            isValid = false;

        }
        else {
            setemailerror("")
        }
        if (password.trim() === "" || password.length < 8) {
            setpassworderror("Password should not be empty anymore")
            isValid = false;
            setpassword("")
        }
        else {
            setpassworderror("")
        }
        if (isValid) {
            navigate("/")
        }

    }
    return (
        <div>
            <div className="container">
                <img src={ruchira15} style={{ height: '510px', width: '850px', paddingTop: '20px', display: 'block', margin: '0 auto' }} />
                <div id="myform">
                    <h2 style={{ color: 'rgb(244,111,24)', paddingBottom: '10px' }}>Welcome to Ruchira! 🧡</h2>
                    <form onSubmit={handle}>
                        <input className="form-control" type="email" value={email} placeholder="Enter your Email here" onChange={(event) => setemail(event.target.value)} />
                        <small className='text-danger'>{emailerror}</small><br />
                        <input className="form-control" type="password" value={password} placeholder="Enter your password here" onChange={(event) => setpassword(event.target.value)} />
                        <small className='text-danger'>{passworderror}</small><br />
                        <input type="submit" value="Login to Ruchira🍽️" className='btn btn-warning' style={{ width: '350px', backgroundColor: 'rgb(244,111,24)', color: 'black' }} />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
