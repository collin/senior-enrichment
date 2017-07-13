import React from 'react';
import { Link } from 'react-router-dom';

function StudentEntryList({student, campus}) {

  return (
        <div>
          <ul className="list-inline">
            <li>
              <Link className="large-font" to={`/students/${student.id}`}>{student.name}</Link>
            </li>
            <li>
              <Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
            </li>
          </ul>
          <button
            className="btn btn-default btn-xs"
            >
            <span className="glyphicon glyphicon-remove" />
          </button>
        </div>
      );

}

export default StudentEntryList;
