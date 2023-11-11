//C:\react-js\myreactdev\src\App.js
import React, { } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
  
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
  
import LandingPage from "./pages/LandingPage";
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
 
function App() {
  return (

   <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
   
export default App;