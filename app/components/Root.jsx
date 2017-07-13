import React, { Component } from 'react';
import { Router, browserHistory } from 'react-router';
import { Route } from 'react-router-dom';
import Navbar from './Navbar';


function Root () {
  return (
    <Router history={ browserHistory }>
      <Route path="/" component={Navbar} />
    </Router>
  )
}

export default Root;
