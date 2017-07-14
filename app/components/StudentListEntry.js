import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteStudent } from '../reducers/studentReducer';

function StudentEntryList(props) {
  const student = props.student;
  const campus = props.campus;

  return (
        <div >
          <ul className="list-inline">
            <li>Name:</li>
            <li>
              <Link className="large-font" to={`/students/${student.id}`}>{student.name}</Link>
            </li>
            <li>Campus:</li>
            <li>
              <Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
            </li>
            <li>
              <button
                className="btn btn-default btn-xs"
                onClick={(e) => props.removeStudent(e, student.id)}
                >
                <span className="glyphicon glyphicon-remove" />
              </button>
            </li>
          </ul>
        </div>
      );
}

const mapState = (state, ownProps) => {
  return {
    student: ownProps.student,
    campus: ownProps.campus,
  }
};

const mapDispatch = dispatch => {
  return {
    removeStudent: (e, studentId) => {
      e.preventDefault()
      dispatch(deleteStudent(studentId));
    }
  }
}

export default connect(mapState, mapDispatch)(StudentEntryList);
