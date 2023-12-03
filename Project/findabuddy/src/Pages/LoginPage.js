//C:\react-js\myreactdev\src\pages\LoginPage.js
import React, { useState } from "react";
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
 
export default function LoginPage(){
 
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
   
    const navigate = useNavigate();
     
    const logInUser = () => {
        if(email.length === 0){
          alert("Email has left Blank!");
        }
        else if(password.length === 0){
          alert("password has left Blank!");
        }
        else{
            axios.post('http://127.0.0.1:5000/login', {
                email: email,
                password: password
            })
            .then(function (response) {
                console.log(response);
                //console.log(response.data);
            })
            .catch(function (error) {
                console.log(error, 'error');
                if (error.response.status === 401) {
                    alert("Invalid credentials");
                }
            });
        }
        navigate("/");
    }

     
  return (
    <div className = "Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="form3Example3" className="form-control mt-1" placeholder="Enter a valid email address" />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="form3Example4" className="form-control mt-1" placeholder="Enter password" />
            </div>
            <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" onClick={logInUser}>
              Login
            </button>
            </div>
            <p className="forgot-password text-right mt-2">Don't have an account? <a href="/register" className="link-danger">Register</a></p>
         </div>
        </form>
    </div>
  );
}