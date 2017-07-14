import React from 'react';
import ListStudents from './ListStudents';
import { connect } from 'react-redux';

function AllStudents({students, campuses}) {
  return (
  <div className="container">
    <h1>Current Students</h1>
    <ListStudents students={students} campuses={campuses} />
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

export default connect(mapState, mapDispatch)(AllStudents);
