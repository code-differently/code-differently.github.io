
import React from 'react';
import { Table } from 'reactstrap';

const Schedule = (props) => {

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
        <React.Fragment>
            <h2 className="text-center my-5">Schedule</h2>
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
        </React.Fragment>
      )
}

export default Schedule;