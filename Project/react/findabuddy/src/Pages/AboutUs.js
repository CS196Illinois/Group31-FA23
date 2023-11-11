import '../Default.css';
import Navbar from "../Navbar.js"
import FooterInfo from "../FooterInfo.js"

//logo--can be modified
const logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Illinois_Fighting_Illini_logo.svg/1200px-Illinois_Fighting_Illini_logo.svg.png"

//main function to run About Us/General Info Page
function AboutUs() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <div className="App-main">
        <Title />
        <MainBody />
      </div>
      <footer>
        <FooterInfo />
      </footer>
    </div>
  );
} 

//title layout
function Title() {
  return(
    <div>
      <h1 className="App-main-title">About Us</h1>
    </div>
  )
}

//links to each tech stack
const scikitLink = "https://scikit-learn.org/stable/"
const reactLink = "https://react.dev/"
const vsCodeLink = "https://code.visualstudio.com/"
const flaskLink = "https://flask.palletsprojects.com/en/3.0.x/"
const numpyLink = "https://numpy.org/"
const pandasLink = "https://pandas.pydata.org/"

//logos for tech stack with associated licenses
//BSD-3
const scikitLogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/1200px-Scikit_learn_logo_small.svg.png"
//MIT
const reactLogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
//trademarked
const vsCodeLogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/640px-Visual_Studio_Code_1.35_icon.svg.png"
//free to reproduce
const flaskLogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Flask_logo.svg/690px-Flask_logo.svg.png?20120519143422"
//CCA-4.0
const numpyLogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Numpy-svgrepo-com.svg/640px-Numpy-svgrepo-com.svg.png"
//BSD
const pandasLogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Pandas_mark.svg/640px-Pandas_mark.svg.png"


//main body layout
function MainBody() {
  return(
    <div>
      <p className="Page-main-body">Hello, welcome to the website for <b>Find-A-Buddy</b>, the project developed by the University of Illinois'
      <a className= "Page-link" href = "https://cs196.cs.illinois.edu/">CS 124 Honors</a> Group 31 in Fall of 2023.</p>

      <p className="Page-main-body"><b>Group Members:</b> Tejas Shetty, Advait Tahilyani, Joshua Romauld, Tanvi Kulkarni <b>PM:</b> Bill Zhang</p>
      
      <p className="Page-main-body">Tech Stacks/Libraries Utilized: <b>
        <a className= "Page-link" href = {vsCodeLink}>Visual Studio Code, </a>
        <a className= "Page-link" href = {reactLink}>React, </a> 
        <a className= "Page-link" href = {scikitLink}>Scikit-learn, </a>
        <a className= "Page-link" href = {flaskLink}>Flask, </a>
        <a className= "Page-link" href = {numpyLink}>Numpy, </a> 
        and <a href = {pandasLink}>Pandas</a>.</b></p>

      <p className="Page-main-body">Utilizing Scikit-learn's K-Means Clustering Model (clustering via the minimization of inertia over a set of predetermined clusters),
      the Find-A-Buddy application clusters groups of individuals seeking to do the same activity, with similar activity/experience levels and times together, helping
      them to connect, interact, and form meaningful connections.</p>

      <div>
        <img className="Page-picture" src = {scikitLogo}/>
        <img className="Page-picture" src = {reactLogo}/>
        <img className="Page-picture" src = {vsCodeLogo}/>
        <img className="Page-picture" src = {logo}/>
        <img className="Page-picture" src = {numpyLogo}/>
        <img className="Page-picture" src = {pandasLogo}/>
        <img className="Page-picture" src = {flaskLogo}/>
      </div>

    </div>
  )
}

export default AboutUs;