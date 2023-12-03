//C:\react-js\myreactdev\src\pages\RegisterPage.js
// import React, { useState } from "react";
// import axios from 'axios';
// import {useNavigate} from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css"
 
// export default function InfoPage(){
 
//     const [name,setName] = useState('');
//     const [activity,setActivity] = useState('');
//     const [skillLevel, setSkillLevel] = useState('');
   
//     const navigate = useNavigate();
     
//     let imgs = [
//       'https://as2.ftcdn.net/v2/jpg/03/39/70/91/1000_F_339709132_H9HSSTtTmayePcbARkTSB2qoZTubJ6bR.jpg',
//     ];
     
//   return (
//     <div className = "Auth-form-container">
//         <form className="Auth-form">
//           <div className="Auth-form-content">
//             <h3 className="Auth-form-title">Info</h3>
//             <div className="form-group mt-3">
//               <label>Name</label>
//               <input type="text" value={name} onChange={(e) => setName(e.target.value)} id="form3Example5" className="form-control mt-1" placeholder="Enter your name" />
//             </div>
//             <div className="form-group mt-3">
//               <label>Activity</label>
//               <input type="text" value={activity} onChange={(e) => setActivity(e.target.value)} id="form3Example6" className="form-control mt-1" placeholder="Enter an activity of your choice" />
//             </div>
//             <div className="form-group mt-3">
//               <label>Skill Level</label>
//               <input type="range" min ="1" max="5" step="1" value={skillLevel} onChange={(e) => setSkillLevel(e.target.value)} id="form3Example7"/>
//             </div>
//             <div className="form-group mt-3">
//               <label>Location</label>
//               <select>
//                 <option selected>Select a location!</option>
//                 <option value>ISR</option>
//                 <option value>PAR/FAR</option>
//                 <option value>LAR</option>
//                 <option value>IKE</option>
//                 <option value>Other</option>
//               </select>
//             </div>
//          </div>
//         </form>
//     </div>
//   );
// }