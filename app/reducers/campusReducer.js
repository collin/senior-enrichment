import axios from 'axios';

// ACTIONS

const GET_CAMPUSES = 'GET_CAMPUSES';

// ACTION CREATORS

export const getCampuses = (campuses) => {
  return {
    type: GET_CAMPUSES,
    campuses: campuses
  }
}

// REDUCER

const campusReducer = function(campuses = [], action) {

  switch (action.type) {

    case GET_CAMPUSES:
       return action.campuses;

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

export default campusReducer;
