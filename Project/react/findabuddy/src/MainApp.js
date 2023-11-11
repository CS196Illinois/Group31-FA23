import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';

function MainApp() {
    return(
      <BrowserRouter>
        <Routes>
            <Route path = "/" element = {<Home/>}/>
            <Route path = "/about" element = {<AboutUs/>}/>
            <Route path = "/pair" element = {<Home/>}/>
            <Route path = "/matches" element = {<Home/>}/>
            <Route path = "/review" element = {<Home/>}/>
            <Route path = "/login" element = {<Home/>}/>
        </Routes>
      </BrowserRouter>
    )
}

export default MainApp;
  