import axios from 'axios';

//actions

const INITIALIZE = 'INITIALZE_CAMPUSES';
const CREATE = 'CREATE_CAMPUS';
const REMOVE = 'REMOVE_CAMPUS';
const UPDATE = 'UPDATE_CAMPUS';

//action creators

const init = campuses => ({ type: INITIALIZE, campuses})


//reducer

export default function reducer (campuses = [], action) {
    switch (action.type) {

        case INITIALIZE:
            return action.campuses;

        default:
            return campuses;
    }
}

export const fetchCampuses = () => dispatch => {
    axios.get('/api/campuses')
        .then(res => dispatch(init(res.data)));
}
