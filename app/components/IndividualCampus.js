import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../store.jsx'
import Navbar from './Navbar'
import {getIndividualCampusThunkCreator} from '../reducers/index.jsx'


class listCampusStudents extends Component{
  constructor(){
    super();
  }

  componentDidMount(){
    const getIndividualCampusThunk = getIndividualCampusThunkCreator(this.props.match.params.campusId);
    store.dispatch(getIndividualCampusThunk)
  }

  render(){
    console.log('props: ', this.props)
    return (
      <div>
        <Navbar />
        { this.props.selectedCampusStudents.map(student => <li key={student.id}>{student.name}</li>) }
      </div>
    )
  }
}

//CONTAINER
const mapStateToProps = function(state) {
  return {
    selectedCampusStudents: state.selectedCampusStudents
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCampusStudents:() => {
    selectedCampusStudents: dispatch(getIndividualCampusThunk())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(listCampusStudents)



