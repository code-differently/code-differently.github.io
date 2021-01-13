import banner from './imgs/cartoon.jpg';
import aTeam from './imgs/a.gif';
import bTeam from './imgs/bitcoin.png';
import cTeam from './imgs/collab.jpg';
import dTeam from './imgs/dW_d.jpg';
import eTeam from './imgs/everReady.png';
import fTeam from './imgs/FullstackFuture.jpg';

import './App.css';
import React from 'react';
import { Table, Card, CardHeader, CardImg} from 'reactstrap';

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

function Teams(){
  let teams = [
    {
      name: "<a>",
      img: aTeam
    },
    {
      name: "Bitcoin",
      img: bTeam
    },
    {
      name: "Collaboration Coders",
      img: cTeam
    },
    {
      name: "Do While Developers",
      img: dTeam
    },
    {
      name: "EverReady",
      img: eTeam
    },
    {
      name: "Full Stack Future",
      img: fTeam
    },
  ]

  let cards = teams.map(team => {
    return(
      <Card className="text-center">
        <CardHeader><h3>{team.name}</h3></CardHeader>
        <CardImg top src={team.img} className="team-flag" alt="Card image cap" />
      </Card>
    )
  })

  return(
    <React.Fragment>
      <h2>Teams</h2>
      <div className="team-grid">
        {cards}
      </div>
    </React.Fragment>
  )

}

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={banner} alt="logo" className="img-fluid App-header-Img"/>
      </header>
      <div className="m-5">
        <h1 className="text-center mb-5">Return Ready: Part Time</h1>
        <h2 className="text-center">Schedule</h2>
        <Schedule/>
        <Teams/>
      </div>
    </div>
  );
}

export default App;
