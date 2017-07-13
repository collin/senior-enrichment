import React, { Component } from 'react';

export default Students => (
  <div className="students">
    <ol>
      <li>1. see a list of all students</li>
      <li>2. Link each student to a single student view</li>
    </ol>
  </div>
)


/**
 
export default class Campuses extends Component {
  render() {
    return (
      <div>
        <ul className="img-container">
          {campuses.map(campus => {
            let path = `/Campuses/${campus}`
            return (
              <Link className="" to={`${path}`}>
                <a href={`/Campuses/${campus}`}>{campus}</a>
                <li><img className="campus-img" src={`/images/${campus}.jpeg`} alt={`${campus}`}/></li>
              </Link>
            )
          })}
        </ul>
      </div>
    )
  }
}

 */
