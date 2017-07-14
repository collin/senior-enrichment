import React from 'react';
import ModifyStudentForm from './ModifyStudentForm';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { putStudent, deleteStudent } from '../reducers/studentReducer';


function EditStudent(props) {
  const matchId = props.match.params.studentId;

  const studentToModify = props.students.find(student => student.id === +matchId) || {};
  const campus = props.campuses.find(campus => campus.id === studentToModify.campusId) || {};
  const campuses = props.campuses
  return (
    <form onSubmit={(e) => props.sendUpdate(e)}>
      <div>
        <h3>Edit the student's information</h3>
        <ModifyStudentForm studentToModify={studentToModify} campus={campus} campuses={campuses} />
        <button className="btn btn-default" type="submit">Submit Updates</button>
        <button onClick={props.removeStudent}>Delete Student</button>
      </div>
    </form>
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
    sendUpdate: (e) => {
      e.preventDefault();
      const studentId = ownProps.match.params.studentId;
      const studentName = e.target.student.value;
      const campusId = e.target.campus.value;

      dispatch(putStudent({studentName, campusId, studentId}))
      .then(() => {
        ownProps.history.push(`/students/${studentId}`)
      })
      // even calling push directly doesn't work. Not connected to browser somehow
    },
    removeStudent: (e) => {
      e.preventDefault();
      dispatch(deleteStudent(ownProps.match.params.studentId))
      .then(() => ownProps.history.push('/students'))
    }
  }
};

export default connect(mapState, mapDispatch)(EditStudent);
