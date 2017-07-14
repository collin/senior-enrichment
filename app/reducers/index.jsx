import { combineReducers } from 'redux'
import axios from 'axios'


function getInitialState() {
  return {
    students: [],
    campuses: [],
    selectedCampusStudents: []
  }
}

//ACTIONS----------------------------------------------------------

const GET_STUDENTS = 'GET_STUDENTS';
const GET_CAMPUSES = 'GET_CAMPUSES';
const GET_CAMPUS = 'GET_CAMPUS';


//ACTION CREATORS----------------------------------------------------------

export function getStudents (students) {
  const action = { type: GET_STUDENTS, students };
  return action;
}

export function getCampuses (campuses) {
  const action = { type: GET_CAMPUSES, campuses };
  return action;
}

export function getIndividualCampusStudents (selectedCampusStudents) {
  const action = { type: GET_CAMPUS, selectedCampusStudents };
  return action;
}




//REDUCERS----------------------------------------------------------

export const rootReducer = function(state = getInitialState(), action) {
  switch(action.type) {
    
    case GET_STUDENTS:
      return Object.assign({}, state, {students: action.students})
    
    case GET_CAMPUSES:
      return Object.assign({}, state, {campuses: action.campuses})

    case GET_CAMPUS:
      return Object.assign({}, state, {selectedCampusStudents: action.selectedCampusStudents})


    default: return state

  }
};

//THUNK CREATORS----------------------------------------------------------
export function getStudentsThunkCreator() {
  return function getStudentsThunk(dispatch) {
    return axios.get('/api/students')
      .then(function(res){
        return res.data
      })
      .then(function(students) {
        const action = getStudents(students)
        dispatch(action)
      })
      .catch(err => console.error('Fetching students unsuccessful', err))
  }
}

export function getCampusesThunkCreator() {
  return function getCampusesThunk(dispatch) {
    return axios.get('/api/campuses')
      .then(function(res){
        return res.data
      })
      .then(function(campuses) {
        const action = getCampuses(campuses)
        dispatch(action)
      })
      .catch(err => console.error('Fetching campuses unsuccessful', err))
  }
}

export function getIndividualCampusThunkCreator(studentsAtCampus) {
  return function getIndividualCampusThunk(dispatch) {
    return axios.get(`/api/campuses/${studentsAtCampus}`)
      .then(function(res){
        return res.data
      })
      .then(function(studentsAtCampus) {
        const action = getIndividualCampusStudents(studentsAtCampus)
        dispatch(action)
      })
      .catch(err => console.error('Fetching students at campus unsuccessful', err))
  }
}

export default rootReducer
