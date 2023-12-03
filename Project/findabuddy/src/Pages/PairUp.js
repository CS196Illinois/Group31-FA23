import React, { useState } from 'react';
import './App.css';
import '../Default.css';
import Navbar from '../Navbar.js';
import FooterInfo from '../FooterInfo.js'

function PairUp() {
  const [selectedRow, setSelectedRow] = useState(null);

  // Sample data for the table
  const tableData = [
    { id: 1, name: 'John Doe', skill_level: 1, activity: 'Hiking', availability: "M: 8 am - 10 am, T: 1 pm - 3 pm, W: 5 pm - 7 pm, TH: 9 pm - 11 pm, F: 11 am - 1 pm", location: 1},
    { id: 2, name: 'Jane Doe', skill_level: 2, activity: 'Writing', availability: "M: 8 am - 10 am, T: 1 pm - 3 pm, W: 5 pm - 7 pm, TH: 9 pm - 11 pm, F: 11 am - 1 pm", location: 1},
    { id: 3, name: 'Bob Smith', skill_level: 3, activity: 'Biking', availability: "M: 8 am - 10 am, T: 1 pm - 3 pm, W: 5 pm - 7 pm, TH: 9 pm - 11 pm, F: 11 am - 1 pm", location: 1},
    // Add more data as needed
  ];

  const handleRowClick = (id) => {
    setSelectedRow(id);
  };

  return (
    <div className="App">
      <Navbar/>
      <div className="App-main">
        <div className="table-container">
        <header className="App-header">
          <h1 className="App-main-title">Pick your Buddy</h1>
        </header>
          <table className="Page-main-body">
            <thead>
              <tr>
                <th className="table-background">ID</th>
                <th className="table-background">Name</th>
                <th className="table-background">Skill Level</th>
                <th className="table-background">Availability</th>
                <th className="table-background">Location</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row) => (
                <tr
                  key={row.id}
                  className={`Page-link ${row.id === selectedRow ? 'selected' : ''}`}
                  onClick={() => handleRowClick(row.id)}
                >
                  <td>{row.id}</td>
                  <td>{row.name}</td>
                  <td>{row.skill_level}</td>
                  <td>{row.availability}</td>
                  <td>{row.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            {selectedRow && (
              <p className="Page-main-body">Selected Row ID: {selectedRow}</p>
            )}
          </div>
        </div>
      </div>
      <FooterInfo/>
    </div>
  );
}


export default PairUp;
