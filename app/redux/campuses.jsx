import axios from 'axios';

//actions

const INITIALIZE = 'INITIALZE_CAMPUSES';
const CREATE = 'CREATE_CAMPUS';
const REMOVE = 'REMOVE_CAMPUS';
const UPDATE = 'UPDATE_CAMPUS';

//action creators

const init = campuses => ({ type: INITIALIZE, campuses})
const update = campus => ({ type: UPDATE, campus })
const create = campus => ({ type: CREATE, campus})
const remove = id => ({ type: REMOVE, id })

//reducer

export default function reducer (campuses = [], action) {
    switch (action.type) {

        case INITIALIZE:
            return action.campuses;

        case UPDATE:
        // campusesObj = {};
        //     action.campuses.forEach(campus => {
        //         campusesObj[campus.id]= campus
        //     })

            return campuses.map(campus => (
                action.campus.id === campus.id ? action.campus : campus
            ))

        case CREATE:
            return [action.campus, ...campuses]

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

export const removeCampus = (id, history) => dispatch => {
    //console.log(id, history)
    dispatch(remove(id));
    axios.delete(`/api/campuses/${id}`)
        .then( () => {
            dispatch(fetchCampuses())
            history.push(`./`)
        })
        .catch(err => console.error(`Removing campus unsuccessful`, err))

}

export const addCampus = (campus, history) => dispatch => {
    axios.post(`/api/campuses`, campus)
        .then( res => res.data)
        .then(createdCampus => {
            dispatch(create(createdCampus))
            dispatch(fetchCampuses())
            history.push(`./${createdCampus.id}`)
        })
}
