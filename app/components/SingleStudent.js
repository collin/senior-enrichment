import React from 'react';
import ModifyStudentForm from './ModifyStudentForm';
import { Link } from 'react-router-dom';

function SingleStudent(props) {
  const student = { name: 'willy', campusId: 1, id: 1 };
  const campus = { name: 'Howard', id: 1 };
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

export default SingleStudent;
