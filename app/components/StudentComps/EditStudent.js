import React from 'react';
import ModifyStudentForm from './ModifyStudentForm';
import { connect } from 'react-redux';
import { putStudent, deleteStudent } from '../../reducers/studentReducer';


function EditStudent({ studentToModify, campuses, removeStudent, sendUpdate}) {

  return (
    <form onSubmit={sendUpdate}>
      <div className="container">
        <h3>Edit the student's information</h3>
        <ModifyStudentForm studentToModify={studentToModify} campuses={campuses} />
        <button className="btn btn-primary" type="submit">Submit Updates</button>
        <button className="btn btn-primary" onClick={removeStudent}>Delete Student</button>
      </div>
    </form>
  )
}

const mapState = (state, ownProps) => {
  const studentId = ownProps.match.params.studentId;
  const studentToModify = state.students.find(student => student.id === +studentId) || {};

  return {
    studentToModify,
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
    },
    removeStudent: (e) => {
      e.preventDefault();
      dispatch(deleteStudent(ownProps.match.params.studentId))
      .then(() => ownProps.history.push('/students'))
    }
  }
};

export default connect(mapState, mapDispatch)(EditStudent);
