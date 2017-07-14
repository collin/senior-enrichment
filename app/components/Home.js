import React, { Component } from 'react';
import Navbar from './Navbar'

export default class Home extends Component {
  render () {
    return (
      <div className="homeDiv">
        <h1>Adventure Academy</h1>
        <Navbar />
        <div className="homeContent">
        </div>
      </div>
    );
  }
}