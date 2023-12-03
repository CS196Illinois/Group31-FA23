import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PairUp from './Pages/PairUp';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import "bootstrap/dist/css/bootstrap.min.css"
import ProfilePage from './Pages/Profile';
import InfoPage from './Pages/InfoPage';

function MainApp() {
    return(
      <BrowserRouter>
        <Routes>
            <Route path = "/" element = {<Home/>}/>
            <Route path = "/about" element = {<AboutUs/>}/>
            <Route path = "/pair" element = {<PairUp/>}/>
            <Route path = "/profile" element = {<ProfilePage/>}/>
            <Route path = "/login" element = {<LoginPage/>}/>
            <Route path = "/register" element = {<RegisterPage/>} />
            <Route path = "/info" element = {<InfoPage />} />
        </Routes>
      </BrowserRouter>
    )
}

export default MainApp;
  