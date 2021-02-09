

import React from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

let quizData = [
    {name: "HTML", link: "https://docs.google.com/forms/d/e/1FAIpQLSfUAl70DV8qTLsPfiqUID5x9Ta21wnQgpbGUrw14bKA45jtxQ/viewform?usp=sf_link"},
    {name: "CSS", link: "https://docs.google.com/forms/d/e/1FAIpQLSerYIuekoEgVduyZrNUtb4mQi33jL13aOsve3MWgWda_-zulA/viewform?usp=sf_link"},
    {name: "Bootstrap", link: "https://docs.google.com/forms/d/e/1FAIpQLSfp55M-TDhuAkK1aYByr79L5EEWCdlRwuAAsuRPL-UWQAFHkw/viewform?usp=sf_link"},
    {name: "HTML & CSS", link: "https://docs.google.com/forms/d/e/1FAIpQLSe94AlIx1fM-rdj36II3CBl7C5Z-EWwFsS97xb0iB4e7_rxuQ/viewform?usp=sf_link"},
    {name: "JS Basics", link: "https://docs.google.com/forms/d/e/1FAIpQLSc2taR4bKPslYNlWCjl2hXKX2kOUmDm7Rhiogo9dRfR975gmg/viewform?usp=sf_link"},
    {name: "JS Functions", link: "https://docs.google.com/forms/d/e/1FAIpQLSeRhk1kInoC7zp8LA75weZ1tgM4_-IBtex6y4IIqA22wfvBbA/viewform?usp=sf_link"},
    {name: "Express: Part 1", link: "https://docs.google.com/forms/d/e/1FAIpQLSfb5dGPjKIhDMAopUHE78O8LD3Bhw2zygqNnOycc4eDrKa8hw/viewform?usp=sf_link"},
    {name: "Express: Part 2", link: "https://docs.google.com/forms/d/e/1FAIpQLSc1XSpqb_g6Gus0mbBD8YVNddTG3mzXGwrrkjYdOn5OZws0nQ/viewform?usp=sf_link"}
]

const LinkGroup = (props) => { 

  let listItems = props.items.map(item => {
    return(
      <ListGroupItem className="w-75 m-auto">
        <div className="two-col-grid">
          <div>
            <h3>{item.name}</h3>
          </div>
          <div>
            <Button href={item.link} target="_blank" className="w-50" color="success" size="lg">{props.label}</Button>
          </div>
        </div>
      </ListGroupItem>
    )
  })
  
    return(
      <div className="m-5 text-center">
        <h2 className="my-5">Quizes</h2>
        <ListGroup>
          {listItems}
        </ListGroup>
      </div>
    )
  
}

export default LinkGroup;