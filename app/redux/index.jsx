import { combineReducers } from 'redux'
import campusReducer from './campuses'
import studentReducer from './students'

const initialState = {}

const rootReducer = function(state = initialState, action) {
  switch(action.type) {
    default: return state
  }
};

export default combineReducers({
  campuses: campusReducer,
  students: studentReducer
})
