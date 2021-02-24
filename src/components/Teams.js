
import React from 'react';
import { Card, CardHeader, CardImg} from 'reactstrap';

import aTeam from '../imgs/a.gif';
import bTeam from '../imgs/bitcoin.png';
import cTeam from '../imgs/collab.jpg';
import dTeam from '../imgs/dW_d.jpg';
import eTeam from '../imgs/everReady.png';
import fTeam from '../imgs/FullstackFuture.jpg';

const Teams = () => { 

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
      <Card>
        <CardHeader><h3>{team.name}</h3></CardHeader>
        <CardImg top src={team.img} className="team-flag" alt="Card image cap" />
      </Card>
    )
  })
  
  return(
    <React.Fragment>
      <h2 className="text-center my-5">Teams</h2>
      <div className="team-grid text-center">
        {cards}
      </div>
    </React.Fragment>
  )
  
}

export default Teams;