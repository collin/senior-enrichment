import React, { Component } from 'react';
import Navbar from './Navbar'

export default class Home extends Component {
  render () {
    return (
      <div className="homeDiv">
        <Navbar />
        <div className="adventureAcademy">
          <h1 className="adventure">adventure</h1><h1 className="academy">academy</h1>
        </div>
        <p className="homeParagraph">
          Welcome to Anne Marie's adventure academy. Explore our 4 wild campuses,
        </p>
        <p className="homeParagraph">
          meet our students, and prepare for the adventure of a lifetime!
        </p>
      </div>
    );
  }
}