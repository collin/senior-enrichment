import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import Home from './Home';
import {Route, Switch} from 'react-router-dom';
import {Router} from 'react-router'
import history from './history'
import { getStudentsThunkCreator, getCampusesThunkCreator } from '../reducers/index.jsx'
import store from '../store.jsx'
import StudentListContainer from './Students'
import CampusListContainer from './Campuses'
import IndividualCampusContainer from './IndividualCampus'
// import { render } from 'react-dom'


class Root extends Component {
  constructor() {
    super()
  }

  componentDidMount(){
    const getStudentsThunk = getStudentsThunkCreator();
    store.dispatch(getStudentsThunk)
    const getCampusesThunk = getCampusesThunkCreator();
    store.dispatch(getCampusesThunk)

  }

  render () {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/students" component={StudentListContainer} />
          <Route path="/campuses/:campusId" component={IndividualCampusContainer} />
          <Route path="/campuses" component={CampusListContainer} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}

//CONTAINER
const mapPropsToState = null;

const mapDispatchToProps = dispatch => ({
  fetchInitialData:() => {
    students: dispatch(getStudentsThunk())
    campuses: dispatch(getCampusesThunk())
  }
});

export default connect(mapPropsToState, mapDispatchToProps)(Root)
    
