import axios from 'axios';

// ACTIONS

const GET_STUDENTS = 'GET_STUDENTS';

// ACTION CREATORS

export const getStudents = (students) => {
  return {
    type: GET_STUDENTS,
    students: students,
  }
}

// REDUCERS

const studentReducer = function(students = [], action) {

  switch (action.type) {

    case GET_STUDENTS:
      return action.students

    default: return students
  }

};

// THUNKS

export const fetchStudents = () => dispatch => {
    axios.get('/api/students')
    .then(res => res.data)
    .then(students => {
      dispatch(getStudents(students))
    })

}

export default studentReducer;
