import React from 'react';
import StudentListEntry from './StudentListEntry';

function ListStudents({ students, campuses }) {
  return (
    <ul>
      {
        students.map(student => {
          const campus = campuses.find(campus => campus.id === student.campusId) || {};
          return (
            <li className="list-group-item story-item" key={student.id}>
              <StudentListEntry student={student} campus={campus} />
            </li>
          )
        })
      }
    </ul>
  )
}

export default ListStudents;
