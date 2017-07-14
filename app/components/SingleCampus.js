import React from 'react';
import StudentList from './StudentList';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


function SingleCampus(props) {
  const matchCampusId =

  const campus = props.campuses.find()
  const students = [{name: 'willy', campusId: 1, id: 1}, {name: 'brian', campusId: 2, id: 2}];

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

const mapState = state => {
  return {
    students: state.students,
    campuses: state.campuses,
  }
};

const mapDispatch = null;

export default connect(mapState, mapDispatch)(SingleCampus);
