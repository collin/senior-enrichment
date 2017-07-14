import axios from 'axios';

//actions

const INITIALIZE = 'INITIALZE_CAMPUSES';
const CREATE = 'CREATE_CAMPUS';
const REMOVE = 'REMOVE_CAMPUS';
const UPDATE = 'UPDATE_CAMPUS';

//action creators

const init = campuses => ({ type: INITIALIZE, campuses})
const update = campus => ({ type: UPDATE, campus })


//reducer

export default function reducer (campuses = [], action) {
    switch (action.type) {

        case INITIALIZE:
            return action.campuses;

        case UPDATE:
            return campuses.map(campus => (
                action.campus.id === campus.id ? action.campus : campus
            ))

        default:
            return campuses;
    }
}

export const fetchCampuses = () => dispatch => {
    axios.get('/api/campuses')
        .then(res => dispatch(init(res.data)));
}

export const fetchCampus = (id) => dispatch => {
    axios.get(`/api/campuses/${id}`)
        .then(res => dispatch(update(res.data)))
        .catch(err => console.error('fetching campus unsuccessful', err))
}
