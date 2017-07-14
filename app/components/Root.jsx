import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import AllStudents from './AllStudents';
import AllCampuses from './AllCampuses';
import Welcome from './Welcome';
import EditStudent from './EditStudent';
import EditCampus from './EditCampus';
import SingleStudent from './SingleStudent';
import SingleCampus from './SingleCampus';
import { fetchCampuses } from '../reducers/campusReducer';
import { fetchStudents } from '../reducers/studentReducer';


class Root extends Component {

  componentDidMount() {
    this.props.fetchInitialData();
  }

  render () {
    return (
    <Router>
    <div>
      <Route component={Navbar} />
      <main>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/students" component={AllStudents} />
        <Route exact path="/campuses" component={AllCampuses} />
        <Route exact path="/students/:studentId" component={SingleStudent} />
        <Route exact path="/students/:studentId/edit" component={EditStudent} />
        <Route exact path="/campuses/:campusId" component={SingleCampus} />
        <Route exact path="/campuses/:campusId/edit" component={EditCampus} />
      </main>
    </div>
    </Router>
    )
  }
}

const mapProps = null;

const mapDispatch = dispatch => {
  return {
    fetchInitialData: () => {
      dispatch(fetchCampuses())
      dispatch(fetchStudents())
    }
  }
}

export default connect(mapProps, mapDispatch)(Root);
