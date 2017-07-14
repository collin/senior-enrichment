import React from 'react';
import StudentListEntry from './StudentListEntry';
import { connect } from 'react-redux';

class StudentList extends React.Component {
  // filter according to url
  // have access to students and campuses

  render () {

    return (
    <div>
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

export default connect(mapState, mapDispatch)(StudentList);
