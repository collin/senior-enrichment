import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import StudentList from './StudentList';
import CampusList from './CampusList';
import Welcome from './Welcome';
import EditStudent from './EditStudent';
import ModifyCampusForm from './ModifyCampusForm';
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
    <div>
      <Route component={Navbar} />
      <main>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/students" component={StudentList} />
        <Route exact path="/campuses" component={CampusList} />
        <Route exact path="/students/:studentId" component={SingleStudent} />
        <Route exact path="/students/:studentId/edit" component={EditStudent} />
        <Route exact path="/campuses/:campusId" component={SingleCampus} />
        <Route exact path="/campuses/:campusId/edit" component={ModifyCampusForm} />
      </main>
    </div>
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
