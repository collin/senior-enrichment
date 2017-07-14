import React from 'react';
import StudentListEntry from './StudentListEntry';
import { connect } from 'react-redux';
import { putCampus, deleteCampus } from '../reducers/campusReducer';

function EditCampus(props) {
  const matchId = props.match.params.campusId;
  const campus = props.campuses.find(campus => campus.id === +matchId) || {};
  const students = props.students.filter(student => student.campusId === campus.id)

  return (
    <div className="container story-container">
      <h2>Edit Campus Info:</h2>
      <form onSubmit={props.updateCampus}>
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
            <button className="btn btn-primary" type="submit">Submit Updates</button>
            <button className="btn btn-primary" onClick={props.removeCampus}>Delete Campus</button>
          </div>
        </ul>
      </form>
    </div>
  )
}

const mapState = state => {
  return {
    students: state.students,
    campuses: state.campuses,
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
