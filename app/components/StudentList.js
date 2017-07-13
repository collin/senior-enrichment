import React from 'react';
import StudentListEntry from './StudentListEntry';


function StudentList(willBeProps) {
  // filter according to url
  // have access to students and campuses
  const props = {
    students: [{name: 'willy', campusId: 1, id: 1}, {name: 'brian', campusId: 2, id: 2}],
    campuses: [{name: 'Howard', id: 1}, {name: 'Stanford', id: 2}]
  }

  return (
    <div>
      <ul>
        {
          props.students.map(student => {
            const campus = props.campuses[student.campusId - 1];

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

export default StudentList;
