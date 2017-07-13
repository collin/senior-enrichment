import React from 'react';

function ModifyStudentForm(props) {
  const student = props.studentToModify;
  const campus = props.campus;

  return (
    <div className="container story-container">
        <ul className="list-inline large-font">
          <li>
            <label >Name: </label>
            <input
              className="form-like large-font"
              defaultValue={student.name}
            />
            <label >Campus: </label>
            <input
              className="form-like large-font"
              defaultValue={campus.name}
            />
          </li>
        </ul>
    </div>
  )
}

export default ModifyStudentForm;
