import React from 'react';
import ModifyStudentForm from './ModifyStudentForm';
import { Link } from 'react-router-dom';

function EditStudent(props) {
  const studentToModify = {name: 'willy', campusId: 1, id: 1};
  const campus = {name: 'Howard', id: 1};
  return (
    <div>
      <h3>Edit the student's information</h3>
      <ModifyStudentForm studentToModify={studentToModify} campus={campus} />
      <button>Submit Updates</button>
      <button>Delete Student</button>
    </div>
  )
}

export default EditStudent;
