import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


function SingleStudent({ student, campus }) {

  return (
    <div className="container">
      <h3>View the student's information</h3>
      <div className="container story-container">
        <ul className="list-inline large-font">
          <li>Name: {student.name}</li>
          <li>
            Campus: <Link to={`/campuses/${campus.id}`} >{campus.name}</Link>
          </li>
        </ul>
        <Link className="btn btn-primary" to={`/students/${student.id}/edit`} >Edit Student Info</Link>
      </div>
    </div>
  )
}

const mapState = (state, ownProps) => {
  const matchId = ownProps.match.params.studentId
  const student = state.students.find(student => +student.id === +matchId) || {}
  const campus = state.campuses.find(campus => campus.id === student.campusId) || {}

  return {
    student,
    campus
  }
};

const mapDispatch = null;

export default connect(mapState, mapDispatch)(SingleStudent);
