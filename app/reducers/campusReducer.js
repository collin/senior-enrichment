import axios from 'axios';

// ACTIONS

const GET_CAMPUSES = 'GET_CAMPUSES';
const ADD_CAMPUS = 'ADD_CAMPUS';
const UPDATE_CAMPUS = 'UPDATE_CAMPUS';

// ACTION CREATORS

export const getCampuses = (campuses) => {
  return {
    type: GET_CAMPUSES,
    campuses: campuses
  }
}

export const addCampus = campus => {
  return {
    type: ADD_CAMPUS,
    campus: campus,
  }
}

// REDUCER

const campusReducer = function(campuses = [], action) {

  switch (action.type) {

    case GET_CAMPUSES:
       return action.campuses;

    case ADD_CAMPUS:
      return [...campuses, action.campus];

    default: return campuses
  }
};

// THUNKS

export const fetchCampuses = () => dispatch => {
    axios.get('/api/campuses')
    .then(res => res.data)
    .then(campuses => {
      dispatch(getCampuses(campuses))
    })

}

export const postCampus = (name) => dispatch => {
  axios.post('/api/campuses', {name})
  .then(res => res.data)
  .then(newCampus => {
    dispatch(addCampus(newCampus))
  })
}

export default campusReducer;
