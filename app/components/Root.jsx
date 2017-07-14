import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import Students from './Students';
import Home from './Home';
import {Route, Switch} from 'react-router-dom';
import {Router} from 'react-router'
import { getStudentsThunk } from '../reducers/index.jsx'
import history from './history'
// import { render } from 'react-dom'


class Root extends Component {
  constructor() {
    super()
  }

  componentDidMount(){
    console.log(this.props)
    this.props.fetchInitialData()
  }

  render () {
    return (
      <Router history={history}>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/students" component={Students} />
        </div>
      </Router>
    );
  }
}

//CONTAINER
const mapPropsToState = null;

const mapDispatch = dispatch => ({
  fetchInitialData:() => {
    dispatch(getStudentsThunk())
  }
});

export default connect(mapPropsToState, mapDispatch)(Root)
    
