import React, { Component } from 'react';
import { connect } from 'react-redux';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Home} from './components/Home';
// import CampusList from './components/CampusList'
// import Campus from './components/Campus'
// import Student from './components/Student'
import {fetchCampuses} from './redux/campuses';
import {fetchStudents} from './redux/students'

class Routes extends Component {

    componentDidMount () {
        this.props.fetchInitialData();
    }

    render () {
        return (
            //all my route paths
            <Router>
                <Switch>
                    <Route exact path='/' component={Home} />
                    {/*<Route path='/campuses' component={CampusList} />*/}
                    {/*<Route path='/students' component={StudentList} />
                    <Route path='/campus/:id' component={Campus} />
                    <Route path='/students/:id' component={Student} />*/}
                <Route component={Home} />
                </Switch>
            </Router>
        )
    }
}
const mapPropsToState = null;

const mapDispatchToState = dispatch => ({
    fetchInitialData: () => {
        dispatch(fetchCampuses());
        dispatch(fetchStudents());
    }
})

export default connect(mapPropsToState, mapDispatchToState)(Routes)
