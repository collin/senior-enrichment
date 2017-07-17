import React from 'react';
import ListStudents from '../StudentComps/ListStudents';
import { connect } from 'react-redux';
import { putCampus, deleteCampus } from '../../reducers/campusReducer';

function EditCampus({ campus, campuses, filteredStudents, removeCampus, updateCampus}) {

  return (
    <div className="container story-container">
      <h2>Edit Campus Info:</h2>
      <form onSubmit={updateCampus}>
        <ul className="list-inline large-font">
          <li>
              <label >Campus Name: </label>
              <input
                name="campus"
                className="form-like large-font"
                defaultValue={campus.name}
              />
          </li>
          <div>
            <ListStudents students={filteredStudents} campuses={campuses} />
            <button className="btn btn-primary" type="submit">Submit Updates</button>
            <button className="btn btn-primary" onClick={removeCampus}>Delete Campus</button>
          </div>
        </ul>
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
}

const mapDispatch = (dispatch, ownProps) => {
  return {
    updateCampus: (e) => {
      e.preventDefault()
      const newCampusName = e.target.campus.value;
      const campusId = ownProps.match.params.campusId;

      dispatch(putCampus(newCampusName, campusId))
      .then(() => {
        ownProps.history.push(`/campuses/${campusId}`)
      })
      .catch(console.error);
    },
    removeCampus: (e) => {
      e.preventDefault();
      const campusId = ownProps.match.params.campusId;
      dispatch(deleteCampus(campusId))
      .then(() => {
        ownProps.history.push(`/campuses`)
      })
      .catch(console.error)
    }
  }
}

export default connect(mapState, mapDispatch)(EditCampus);
