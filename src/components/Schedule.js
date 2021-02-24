
import React from 'react';
import { Table } from 'reactstrap';

const Schedule = (props) => {

    let videosEachWeek = [
        ["Object-Oriented JavaScript", "JavaScript Unit Testing"],
        ["AJAX Basics", "Asynchronous Programming with JavaScript"],
        ["Node.js Basics & NPM Basics", "Express Basics"],
        ["None!", "None!"],
        ["SQL Basics", "Modifying Data with SQL & Creating and Modifying Database Tables"],
        ["Querying Relational Databases", "Using SQL ORMs with Node.js"],
        ["None!", "None!"],
        ["Introduction to Algorithms", "Algorithms: Sorting and Searching"],
        ["Introduction to Data Structures", "Video on Maps, Sets, Tree (TBD)"],
        ["None!", "None!"],
      ]
    
      let calenderStart = new Date();
      calenderStart.setDate(18)
      calenderStart.setMonth(0)

      let rows = videosEachWeek.map((videos, i) => {
        const date = `${calenderStart.getMonth() + 1}/${calenderStart.getDate()}`
        calenderStart.setDate(calenderStart.getDate() + 7);
        return(
          <tr>
              <th scope="row">{date}</th>
              {videos.map(video => <td>{video}</td>)}
          </tr>
        )
      })
    
      return(
        <React.Fragment>
            <h2 className="text-center my-5">Schedule</h2>
            <Table bordered striped responsive className="w-75 mx-auto mb-5">
            <thead>
                <tr>
                  <th>Week</th>
                  <th>M-Tu</th>
                  <th>W-Th</th>
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