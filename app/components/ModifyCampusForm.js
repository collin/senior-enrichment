import React from 'react';
import StudentListEntry from './StudentListEntry';
import { connect } from 'react-redux';

function ModifyCampusForm(props) {
  const matchId = props.match.params.campusId;

  const campus = props.campuses.find(campus => campus.id === +matchId) || {};
  const students = props.students.filter(student => student.campusId === campus.id)

  if (!campus.name) return null;

  return (
    <div className="container story-container">
        <ul className="list-inline large-font">
          <li>
            <form>
              <label >Campus Name: </label>
              <input
                name="campus"
                className="form-like large-font"
                defaultValue={campus.name}
              />
              <button className="btn btn-default" type="submit">Submit Updates</button>
              <button onClick={props.removeStudent}>Delete Campus</button>
            </form>
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
          </div>
        </ul>
    </div>
  )
}

const mapState = state => {
  return {
    students: state.students,
    campuses: state.campuses,
  }
}

export default connect(mapState)(ModifyCampusForm);
