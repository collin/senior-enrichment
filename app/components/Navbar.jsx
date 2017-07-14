import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

export default class Navbar extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <ul className="navList">
        <li className="Navigation">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="Navigation">
          <NavLink to="/students">Students</NavLink>
        </li>
        <li className="Navigation">
          <NavLink to="/campuses">Campuses</NavLink>
        </li>
      </ul>
    )
  }
}