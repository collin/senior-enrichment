import React from 'react';
import StudentListEntry from './StudentListEntry';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { postStudent } from '../reducers/studentReducer';


function SingleCampus(props) {
  const matchCampusId = props.match.params.campusId
  const campus = props.campuses.find(campus => +campus.id === +matchCampusId) || {};
  const students = props.students.filter(student => student.campusId === campus.id);

  return (
    <div className="container">
      <h1 className="text-center">{campus.name}</h1>
        <ul className="list-inline large-font">
          <div>
            <h5>Current Students:</h5>
            <ul>
              {
                students.map(student => {
                  return (
                    <li className="list-group-item" key={student.id}>
                      <StudentListEntry student={student} campus={campus} />
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </ul>
          <h5><Link className="btn btn-primary" to={`/campuses/${campus.id}/edit`} >Edit Campus</Link></h5>
        <form onSubmit={(e) => props.addNewStudent(e, campus)}>
          <div className="container">
            <h3>Add a student:</h3>
            <ul className="list-inline large-font">
              <li>
                <label >Name: </label>
                <input
                  className="form-like large-font form-control"
                  name="student"
                />
              </li>
            </ul>
            <button className="btn btn-primary" type="submit">Add</button>
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
    addNewStudent: (e, campus) => {
      e.preventDefault();
      const campusId = campus.id;
      const campusName = campus.name;
      const studentName = e.target.student.value;
      e.target.student.value = "";
      dispatch(postStudent({studentName, campusId, campusName}))
    }
  }
};

export default connect(mapState, mapDispatch)(SingleCampus);
