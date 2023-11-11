//C:\react-js\myreactdev\src\pages\RegisterPage.js
import React, { useState } from "react";
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
 
export default function RegisterPage(){
 
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
   
    const navigate = useNavigate();
     
    const registerUser = () => {
        axios.post('http://127.0.0.1:5000/signup', {
            email: email,
            password: password
        })
        .then(function (response) {
             console.log(response);
            navigate("/");
        })
        .catch(function (error) {
            console.log(error, 'error');
            if (error.response.status === 401) {
                alert("Invalid credentials");
            }
        });
    };
     
    let imgs = [
      'https://as2.ftcdn.net/v2/jpg/03/39/70/91/1000_F_339709132_H9HSSTtTmayePcbARkTSB2qoZTubJ6bR.jpg',
    ];
     
  return (
    <div className = "Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Register</h3>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="form3Example3" className="form-control mt-1" placeholder="Enter a valid email address" />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="form3Example4" className="form-control mt-1" placeholder="Enter password" />
            </div>
            <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" onClick={() => registerUser()}>
              Sign Up
            </button>
            </div>
            <p className="forgot-password text-right mt-2">Already Registered? <a href="/login" className="link-danger">Sign in.</a></p>
         </div>
        </form>
    </div>
  );
}