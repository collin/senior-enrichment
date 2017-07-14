import axios from 'axios';
import { removeStudentsFromCampus } from './studentReducer';

// ACTIONS

const GET_CAMPUSES = 'GET_CAMPUSES';
const ADD_CAMPUS = 'ADD_CAMPUS';
const UPDATE_CAMPUS = 'UPDATE_CAMPUS';
const REMOVE_CAMPUS = 'DELETE_CAMPUS';

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

export const updateCampus = campus => {
  return {
    type: UPDATE_CAMPUS,
    campus: campus,
  }
}

export const removeCampus = campusId => {
  return {
    type: REMOVE_CAMPUS,
    campusId
  }
}

// REDUCER

const campusReducer = function(campuses = [], action) {
  const newCampuses = campuses.slice();

  switch (action.type) {

    case GET_CAMPUSES:
       return action.campuses;

    case ADD_CAMPUS:
      return [...campuses, action.campus];

    case UPDATE_CAMPUS:
      const indexToModify = newCampuses.findIndex(campus => {
        return campus.id === action.campus.id
      })
      newCampuses[indexToModify] = action.campus
      return newCampuses;

    case REMOVE_CAMPUS:
      const indexToDelete = newCampuses.findIndex(campus => {
        return campus.id === action.campusId
      })
      return newCampuses.slice(0, indexToDelete).concat(newCampuses.slice(indexToDelete + 1))


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
    .catch(console.error);

}

export const postCampus = (name, imageUrl) => dispatch => {
  return axios.post('/api/campuses', {name, imageUrl})
  .then(res => res.data)
  .then(newCampus => {
    dispatch(addCampus(newCampus))
  })
  .catch(console.error);
}

export const putCampus = (campusName, campusId) => dispatch => {
    return axios.put(`/api/campuses/${campusId}`, {name: campusName})
    .then(res => res.data)
    .then(campus => {
      dispatch(updateCampus(campus))
    })
    .catch(console.error);
}

export const deleteCampus = (campusId) => dispatch => {
    return axios.delete(`/api/campuses/${campusId}`)
    .then(res => res.data)
    .then(campusId => {
      dispatch(removeCampus(campusId))
      dispatch(removeStudentsFromCampus(campusId))
    })
    .catch(console.error);

}



export default campusReducer;
