import React from 'react';
import StudentListEntry from './StudentListEntry';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ModifyStudentForm from './ModifyStudentForm';
import { postStudent } from '../reducers/studentReducer';


function SingleCampus(props) {
  const matchCampusId = props.match.params.campusId

  const campus = props.campuses.find(campus => +campus.id === +matchCampusId) || {};
  const students = props.students.filter(student => student.campusId === campus.id);

  return (
    <div className="container story-container">
        <ul className="list-inline large-font">
          <li>{campus.name}</li>
          <li><Link to={`/campuses/${campus.id}/edit`} >Edit Campus</Link></li>
          <div>
            <ul>
              {
                students.map(student => {
                  return (
                    <li className="list-group-item story-item" key={student.id}>
                      <StudentListEntry student={student} campus={campus} />
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </ul>
        <form onSubmit={props.addNewStudent}>
          <div className="container story-container">
            <h3>Add a student:</h3>
            <ul className="list-inline large-font">
              <li>
                <label >Name: </label>
                <input
                  name="student"
                  className="form-like large-font"
                />
                <button type="submit">Add</button>
              </li>
            </ul>
          </div>
        </form>
    </div>
  )
}

const mapState = state => {
  return {
    students: state.students,
    campuses: state.campuses,
  }
};

const mapDispatch = (dispatch, ownProps) => {
  return {
    addNewStudent: (e) => {
      e.preventDefault();
      const campusId = ownProps.match.params.campusId;
      const studentName = e.target.student.value;

      dispatch(postStudent({studentName, campusId}))
    }
  }
};

export default connect(mapState, mapDispatch)(SingleCampus);
