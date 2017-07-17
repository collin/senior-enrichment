import React from 'react';
import ListStudents from '../StudentComps/ListStudents';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { postStudent } from '../../reducers/studentReducer';


function SingleCampus({filteredStudents, campuses, campus, addNewStudent}) {

  return (
    <div className="container">
      <h1 className="text-center">{campus.name}</h1>
        <ul className="list-inline large-font">
          <div>
            <h5>Current Students:</h5>
            <ListStudents students={filteredStudents} campuses={campuses}/>
          </div>
        </ul>
          <h5><Link className="btn btn-primary" to={`/campuses/${campus.id}/edit`} >Edit Campus</Link></h5>
        <form onSubmit={(e) => addNewStudent(e, campus)}>
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

const mapState = (state, ownProps) => {
  const campusId = ownProps.match.params.campusId;

  const filteredStudents = state.students.filter(student => student.campusId === +campusId) || {};
  const campus = state.campuses.find(campus => campus.id === +campusId) || {};
  return {
    filteredStudents,
    campuses: state.campuses,
    campus
  }
};

const mapDispatch = (dispatch) => {
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
