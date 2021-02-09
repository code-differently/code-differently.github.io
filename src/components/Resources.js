
import React from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

let slidesLink = {name: "Slides", link: "https://drive.google.com/drive/folders/1cWZWlJ1xLyYT4p1ya3EsNp-jErYAaehk?usp=sharing"};
let recordingsLink = {name: "Recordings", link: "https://drive.google.com/drive/folders/1uzcmVwEjR_-Rxt-Pr2FDOwtCyhso5cud?usp=sharing"};

let quizzes = [
  {name: "HTML", link: "https://docs.google.com/forms/d/e/1FAIpQLSfUAl70DV8qTLsPfiqUID5x9Ta21wnQgpbGUrw14bKA45jtxQ/viewform?usp=sf_link"},
  {name: "CSS", link: "https://docs.google.com/forms/d/e/1FAIpQLSerYIuekoEgVduyZrNUtb4mQi33jL13aOsve3MWgWda_-zulA/viewform?usp=sf_link"},
  {name: "HTML & CSS", link: "https://docs.google.com/forms/d/e/1FAIpQLSe94AlIx1fM-rdj36II3CBl7C5Z-EWwFsS97xb0iB4e7_rxuQ/viewform?usp=sf_link"},
  {name: "JS Basics", link: "https://docs.google.com/forms/d/e/1FAIpQLSc2taR4bKPslYNlWCjl2hXKX2kOUmDm7Rhiogo9dRfR975gmg/viewform?usp=sf_link"},
  {name: "JS Functions", link: "https://docs.google.com/forms/d/e/1FAIpQLSeRhk1kInoC7zp8LA75weZ1tgM4_-IBtex6y4IIqA22wfvBbA/viewform?usp=sf_link"},

]

const Link = (props) => {
  return(
    <ListGroupItem className="w-75 m-auto">
      <div className="two-col-grid">
        <div>
          <h3>{props.name}</h3>
        </div>
        <div>
          <Button href={props.link} target="_blank" className="w-50" color="success" size="lg">{props.label}</Button>
        </div>
      </div>
    </ListGroupItem>
  )
}

const LinkGroup = (props) => { 
  return(
      <ListGroup>
        {props.items.map(item => <Link {...item} {...props}/>)}
      </ListGroup>
  )
}

const Resources = (props) => { 
  return(
    <div className="m-5 text-center">
      <ListGroup>
        <Link {...slidesLink} label="Go"/>
      </ListGroup>
      <ListGroup className="mt-5">
        <Link {...recordingsLink} label="Go" />
      </ListGroup>
      <h2 className="my-5">Quizzes</h2> 
      <LinkGroup items={quizzes} label="Take Quiz"/>
    </div> 
  )

}

export default Resources;