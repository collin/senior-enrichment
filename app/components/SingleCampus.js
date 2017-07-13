import React from 'react';
import StudentList from './StudentList';
import { Link } from 'react-router-dom';

function SingleCampus(props) {
  const students = [{name: 'willy', campusId: 1, id: 1}, {name: 'brian', campusId: 2, id: 2}];
  const campus = {name: 'Howard', id: 1};

  return (
    <div className="container story-container">
        <ul className="list-inline large-font">
          <li>{campus.name}</li>
          <li><Link to={`/campuses/${campus.id}/edit`} >Edit Campus</Link></li>
          <StudentList students={students} />
        </ul>
    </div>
  )
}

export default SingleCampus;
