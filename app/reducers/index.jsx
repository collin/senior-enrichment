import { combineReducers } from 'redux'

//ACTION TYPES
const GET_ALL_STUDENTS = 'GET_ALL_STUDENTS';
const ADD_STUDENT = 'ADD_STUDENT';
const DELETE_STUDENT = 'DELETE_STUDENT';

const GET_ALL_CAMPUSES = 'GET_ALL_CAMPUSES';
const ADD_CAMPUS = 'ADD_CAMPUS';

//ACTION CREATORS
export const getStudents = function (students) {
	return {
	type: GET_ALL_STUDENTS,
	students: students
	};
};

export const addStudent = function (student) {
	return {
	type: ADD_STUDENT,
	student: student
	};
};

export const deleteStudent = function (student) {
	return {
	type: DELETE_STUDENT,
	student: student
	};
};

export const getCampuses = function (campuses) {
	return {
	type: GET_ALL_CAMPUSES,
	campuses: campuses
	};
};

export const addCampus = function (campus) {
	return {
	type: ADD_CAMPUS,
	campus: campus
	};
};


//INITIAL STATE
const initialState = {
  students: [],
  campuses: [],
  campus: {},
  student: {},
};


//REDUCER
const rootReducer = function(prevState = initialState, action) {
  const nextState = Object.assign({}, prevState);

  switch(action.type) {
    case GET_ALL_STUDENTS:
      nextState.students = action.students
      break
    case GET_ALL_CAMPUSES:
      nextState.campuses = action.campuses
      break
    case ADD_CAMPUS:
      nextState.campus = action.campus
      nextState.campuses.push(action.campus)
      break
    case ADD_STUDENT:
      nextState.student = action.student
      nextState.students.push(action.student)
      break
    case DELETE_STUDENT:
      nextState.student = action.student
      break
    default: return prevState
  }
  return nextState;
};

export default rootReducer
