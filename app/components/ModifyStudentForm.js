import React from 'react';

function ModifyStudentForm(props) {
  const student = props.studentToModify;
  const campus = props.campus;
  const campuses = props.campuses;

  if (!student.name || !campus.name) return null;

  return (
    <div className="container story-container">
        <ul className="list-inline large-font">
          <li>
            <label >Name: </label>
            <input
              name="student"
              className="form-like large-font"
              defaultValue={student.name}
            />
            <label >Campus: </label>
            <select name="campus">
              {
                campuses.map(campus => {
                  return (
                    <option key={campus.id} value={campus.id} >{campus.name}</option>
                  )
                })
              }
            </select>
          </li>
        </ul>
    </div>
  )
}

export default ModifyStudentForm;
