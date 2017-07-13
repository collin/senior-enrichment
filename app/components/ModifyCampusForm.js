import React from 'react';
import StudentList from './StudentList';

function ModifyCampusForm(props) {
  const students = [{name: 'willy', campusId: 1, id: 1}, {name: 'brian', campusId: 2, id: 2}];
  const campus = {name: 'Howard', id: 1};

  return (
    <div className="container story-container">
        <ul className="list-inline large-font">
          <li>
            <label >Campus Name: </label>
            <input
              className="form-like large-font"
              defaultValue={campus.name}
            />
          </li>
          <StudentList students={students} />
        </ul>
    </div>
  )
}

export default ModifyCampusForm;
