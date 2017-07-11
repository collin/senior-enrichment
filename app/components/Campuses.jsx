import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const campuses = ['Luna', 'Mars', 'Terra', 'Titan']

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
                <li><img className="campus-img" src={`${campus}.jpeg`} alt={`${campus}`}/></li>
              </Link>
            )
          })}
        </ul>
      </div>
    )
  }
}
