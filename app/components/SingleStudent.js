import React from 'react';
import ModifyStudentForm from './ModifyStudentForm';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


function SingleStudent(props) {
  const matchId = props.match.params.studentId

  const student = props.students.find(student => +student.id === +matchId) || {}
  const campus = props.campuses.find(campus => campus.id === student.campusId) || {}
  return (
    <div>
      <h3>View the student's information</h3>
      <div className="container story-container">
        <ul className="list-inline large-font">
          <li>Name: {student.name}</li>
          <li>
            Campus: <Link to={`/campuses/${campus.id}`} >{campus.name}</Link>
          </li>
          <li><Link to={`/students/${student.id}/edit`} >Edit Student Info</Link></li>
        </ul>
      </div>
    </div>
  )
}

const mapState = state => {
  return {
    students: state.students,
    campuses: state.campuses,
  }
};

const mapDispatch = null;

export default connect(mapState, mapDispatch)(SingleStudent);
