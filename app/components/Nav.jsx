import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

const views = ['Home', 'Campuses', 'Students']

export default class Nav extends Component {
  render() {
    return (
      // <div>
      <nav className="navbar navbar-default">
        <NavLink to="/">
          <span className="navbar-brand" >Margaret Hamilton Academy</span>
        </NavLink>
        <div>
          <ul className="nav nav-pills">
            {views.map(view => {
              let path;
              if (view === 'Home') {
                path = '/'
              } else {
                path = `/${view}`
              }
              return (
                <NavLink className="nav nav-pills" to={`${path}`}>
                  <li key={`${view}`} className="navBarList" ><span>{view}</span></li>
                </NavLink>
              )
            })}
          </ul>
          {/*<h4 className="home-title">Margaret Hamilton Interplanetary Academy of JavaScript</h4>*/}
        </div>
      </nav>
    )
  }
}
