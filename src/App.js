import logo from './cartoon.jpg';
import './App.css';
import React from 'react';
import { Table } from 'react-bootstrap';

function Schedule(){

  let videosEachWeek = [
    ["Object-Oriented JavaScript", "JavaScript Unit Testing"],
    ["AJAX Basics"],
    ["Asynchronous Programming with JavaScript"],
    ["Node.js Basics", "NPM Basics"],
    ["Express Basics"],
    ["SQL Basics", "Querying Relational Databases"],
    ["Modifying Data with SQL", "Creating and Modifying Database Tables"],
    ["Using SQL ORMs with Node.js"],
    ["Introduction to Algorithms", "Algorithms: Sorting and Searching"],
    ["Introduction to Data Structures", "Video on Maps, Sets, Tree (TBD)"],
    [],
    []
  ]

  let rows = videosEachWeek.map((videos, i) => {
    return(
      <tr>
          <th scope="row">{i+7}</th>
          <td><ul>{videos.map(video => <li>{video}</li>)}</ul></td>
      </tr>
    )
  })

  return(
    <Table bordered striped responsive className="w-75 m-auto">
      <thead>
        <tr>
          <th>Week</th>
          <th>Videos</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </Table>
  )


}

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" className="img-fluid App-header-Img"/>
      </header>
      <div className="m-5">
        <h1 className="text-center mb-5">Return Ready: Part Time</h1>
        <h2 className="text-center">Schedule</h2>
        <Schedule/>
      </div>
    </div>
  );
}

export default App;
