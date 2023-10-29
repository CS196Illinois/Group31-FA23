import './App.css';

//import required to use dynamic features (i.e. buttons) to remember and update state between rendering of webpage
import { useState } from 'react';

//logo--can be modified
const logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Illinois_Fighting_Illini_logo.svg/1200px-Illinois_Fighting_Illini_logo.svg.png"

//webpage links--currently uses placeholders
const aboutUs = "https://www.google.com/"
const pairUp = "https://www.google.com/"
const matches = "https://www.google.com/"
const reviewFeedback = "https://www.google.com/"
const logIn = "https://www.google.com/"

//main function to run main/home webpage
function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <div className="App-main">
        <Title />
        <Logo />
        <MainBody />
      </div>
      <footer>
        <GeneralInfo />
      </footer>
    </div>
  );
} 

//navbar layout with various links to other webpages (can be modified by variables listed above)
function Navbar() {
  return(
    <div className="App-navbar">
      <a className="App-navbar-link" href = {aboutUs}>About Us</a>
      <a className="App-navbar-link" href = {pairUp}>Pair Up</a>
      <a className="App-navbar-link" href = {matches}>Matches</a>
      <a className="App-navbar-link" href = {reviewFeedback}>Reviews / Feedback</a>
      <a className="App-navbar-link" href = {logIn}>Log In / Sign Up</a>
    </div>
  )
}

//title layout
function Title() {
  return(
    <div>
      <h1 className="App-main-title">Find-A-Buddy!</h1>
    </div>
  )
}

//logo layout
function Logo() {
  return(
    <div>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  )
}

//main body layout
function MainBody() {
  return(
    <div>
      <p className="App-main-body">Hello, welcome to the website for Find-A-Buddy!</p>
      <p className="App-main-body">Created by Group 31, CS124H, Fall 2023.</p>
    </div>
  )
}

//general info/footer layout
function GeneralInfo() {
  return(
    <div className="App-footer">
      <p className="App-footer-text">Made by Group 31, CS124H, Fall 2023</p>
    </div>
  )
}

//button is currently unused--need to add useState functions to have a useable button
function Button() {
  return(
    <div>
      <button>Click Me!</button>
    </div>
  )
}

export default App;
