import React, { Component } from 'react';

export default class Navbar extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <nav>
        <button>Home</button>
        <button>Campuses</button>
        <button>Students</button>
      </nav>
    )
  }
}