import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../store.jsx'
import Navbar from './Navbar'
import {getStudentThunkCreator} from '../reducers/index.jsx'


class getStudent extends Component{
  constructor(){
    super();
  }

  componentDidMount(){
    console.log(this.props)
    this.props.fetchStudent(this.props.match.params.studentId)
  }

  render(){
    console.log('props: ', this.props)
    return (
      <div>
        <Navbar />
        <img className="profilePicture" src={this.props.selectedStudent.image} />
        <h1 className="studentProfile">{this.props.selectedStudent.name}</h1>
        <h2 className="emailAddress">{this.props.selectedStudent.email}</h2>
      </div>
    )
  }
}

//CONTAINER
const mapStateToProps = function(state) {
  return {
    selectedStudent: state.selectedStudent
  }
}

const mapDispatchToProps = dispatch => ({
  fetchStudent:(studentId) => dispatch(getStudentThunkCreator(studentId))
});

export default connect(mapStateToProps, mapDispatchToProps)(getStudent)