import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const views = ['Home', 'Campuses', 'Students']

export default class Nav extends Component {
  render() {
    return (
      <div>
        <ul className="nav nav-pills">
          {views.map(view => {
            let path;
            if(view === 'Home') {
              path = '/'
            } else {
              path = `/${view}`
            }
            return (
              <Link className="nav nav-pills" to={`${path}`}>
                <li key={`${view}`}><a href="#">{view}</a></li>
              </Link>
            )
          })}
        </ul>
        <h4 className="home-title">Margaret Hamilton Interplanetary Academy of JavaScript</h4>
      </div>
    )
  }
}
