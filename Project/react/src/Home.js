import './Default.css';
import Navbar from './Navbar';
import GeneralInfo from './FooterInfo';

//import required to use dynamic features (i.e. buttons) to remember and update state between rendering of webpage
import { useState } from 'react';

//logo--can be modified
const logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Illinois_Fighting_Illini_logo.svg/1200px-Illinois_Fighting_Illini_logo.svg.png"
const aboutUs = "https://www.google.com/"
const pairUp = "https://www.google.com/"
const matches = "https://www.google.com/"
const reviewFeedback = "https://www.google.com/"
const logIn = "https://www.google.com/"

//main function to run main/home webpage
function Home() {
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

//button is currently unused--need to add useState functions to have a useable button
function Button() {
  return(
    <div>
      <button>Click Me!</button>
    </div>
  )
}

export default Home;
