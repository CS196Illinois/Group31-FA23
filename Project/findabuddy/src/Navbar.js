import './Default.css';
import {Link} from 'react-router-dom'

function Navbar() {
    return(
      <div className="App-navbar">
        <Link className="Default-link" to = "/">Home</Link>
        <Link className="Default-link" to = "/about">About Us</Link>
        <Link className="Default-link" to = "/pair">Pair Up</Link>
        <Link className="Default-link" to = "/matches">Matches</Link>
        <Link className="Default-link" to = "/review">Reviews / Feedback</Link>
        <Link className="Default-link" to = "/login">Log In / Sign Up</Link>
      </div>
    )
}

export default Navbar;
  