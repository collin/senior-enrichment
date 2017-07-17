import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Campuses from './Campus/Campuses';
import AddCampus from './Campus/AddCampus';
import AddStudent from './Student/AddStudent';
import Students from './Student/Students';
import SingleStudent from './Student/SingleStudent'

export default function Root(props) {
  //  BELOW ARE ALL THE ROUTES, UPON HITTING A ROUTE THE LISTED COMPONENT WILL RENDER
    return (
      <Router>
        <div className="container">
          <Route path="/" component={Nav} />
          <Route exact path="/" component={Home} />
          <Route exact path="/Campuses" component={Campuses} />
          <Route exact path="/Campuses/AddCampus" component={AddCampus} />
          <Route exact path="/Students/AddStudent" component={AddStudent} />
          <Route exact path="/Students/:StudentName" component={SingleStudent} />
          <Route exact path="/Students/" component={Students} />
        </div>
      </Router>
    )
  }
