import React, { Component } from 'react';
import { connect } from 'react-redux';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Home} from './components/Home';
import CampusList from './components/campuses/CampusList'
import StudentList from './components/students/StudentList'
import Campus from './components/campuses/Campus'
import Student from './components/students/Student'
import {fetchCampuses} from './redux/campuses';
import {fetchStudents} from './redux/students';
import CampusForm from './components/campuses/CampusForm';
import StudentForm from './components/students/StudentForm'
import Sidebar from './components/Sidebar'

class Routes extends Component {

    componentDidMount () {
        this.props.fetchInitialData();
    }

    render () {
        return (
            //all my route paths
            <Router>
                <div id='main' className='container-fluid'>
                    <div className="col-xs-2">
                        <Sidebar />
                    </div>
                    <div className="col-xs-10">
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route exact path='/campuses/create' component={CampusForm} />
                            <Route exact path='/students/create'
                            component={StudentForm} />
                            <Route exact path='/campuses' component={CampusList} />
                            <Route exact path='/students' component={StudentList} />
                            <Route exact path='/campuses/:id' component={Campus} />
                            <Route exact path='/students/:id' component={Student} />
                            <Route component={Home} />
                        </Switch>
                    </div>
                </div>
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
