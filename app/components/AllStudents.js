import React from 'react';
import StudentListEntry from './StudentListEntry';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class StudentList extends React.Component {

  render () {

    return (
    <div className="container">
      <h1>Current Students</h1>
      <ul>
        {
          this.props.students.map(student => {
            const campus = this.props.campuses[student.campusId - 1];

            return (
              <li className="list-group-item story-item" key={student.id}>
                <StudentListEntry student={student} campus={campus} />
              </li>
            )
          })
        }
      </ul>
    </div>
    )
  }
}

const mapState = state => {
  return {
    students: state.students,
    campuses: state.campuses,
  }
};

const mapDispatch = null;

export default withRouter(connect(mapState, mapDispatch)(StudentList));
