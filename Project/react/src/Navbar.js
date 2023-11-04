import './Default.css';

const aboutUs = "https://www.google.com/"
const pairUp = "https://www.google.com/"
const matches = "https://www.google.com/"
const reviewFeedback = "https://www.google.com/"
const logIn = "https://www.google.com/"

function Navbar() {
    return(
      <div className="App-navbar">
        <a className="Default-link" href = {aboutUs}>About Us</a>
        <a className="Default-link" href = {pairUp}>Pair Up</a>
        <a className="Default-link" href = {matches}>Matches</a>
        <a className="Default-link" href = {reviewFeedback}>Reviews / Feedback</a>
        <a className="Default-link" href = {logIn}>Log In / Sign Up</a>
      </div>
    )
}

export default Navbar;
  