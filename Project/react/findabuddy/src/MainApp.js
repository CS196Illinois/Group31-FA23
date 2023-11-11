import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import "bootstrap/dist/css/bootstrap.min.css"

function MainApp() {
    return(
      <BrowserRouter>
        <Routes>
            <Route path = "/" element = {<Home/>}/>
            <Route path = "/about" element = {<AboutUs/>}/>
            <Route path = "/pair" element = {<Home/>}/>
            <Route path = "/matches" element = {<Home/>}/>
            <Route path = "/review" element = {<Home/>}/>
            <Route path = "/login" element = {<LoginPage/>}/>
            <Route path = "/register" element = {<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    )
}

export default MainApp;
  