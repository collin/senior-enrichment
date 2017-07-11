import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Nav from './Nav'
import Home from './Home'
import Campuses from './Campuses'
import Students from './Students'

export default class Root extends Component {


  render() {
    return (
      <Router>
        <div className="container">
          <Route path="/" component={Nav} />
          <Route exact path="/" component={Home} />
          <Route path="/Campuses" component={Campuses} />
          <Route path="/Students" component={Students} />
        </div>
      </Router>
    )
  }
}
