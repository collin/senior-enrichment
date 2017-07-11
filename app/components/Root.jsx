import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Nav from './Nav'

const views = ['Home', 'Campuses', 'Students']

export default class Root extends Component {


  render() {
    return (
      <Router>
        <div className="container">
          <Route path="/" component={Nav} />
        </div>
      </Router>
    )
  }
}
