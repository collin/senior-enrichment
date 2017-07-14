import { combineReducers } from 'redux'
import axios from 'axios'


const initialState = {
  students: []
}

//ACTIONS:
const GET_STUDENTS = 'GET_STUDENTS';

//ACTION CREATORS:
const getStudents = students => ({type: GET_STUDENTS}, students)

//REDUCERS
const rootReducer = function(state = initialState, action) {
  switch(action.type) {
    case GET_STUDENTS:
      return action.students;

    default: return state
  }
};

//THUNK CREATORS
export const getStudentsThunk = () => dispatch => {
  axios.get('/api/students')
    .then(res => dispatch(getStudents))
    .catch(err => console.error('Fetching students unsuccessful', err))
}

export default rootReducer
