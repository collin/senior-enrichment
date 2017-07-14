import axios from 'axios';

//actions

const INITIALIZE = 'INITIALZE_STUDENTS';
const CREATE = 'CREATE_STUDENTS';
const REMOVE = 'REMOVE_STUDENTS';
const UPDATE = 'UPDATE_STUDENTS';

//action creators

const init = students => ({ type: INITIALIZE, students})


//reducer

export default function reducer (students = [], action) {
    switch (action.type) {

        case INITIALIZE:
            return action.students;

        default:
            return students;
    }
}

export const fetchStudents = () => dispatch => {
    axios.get('/api/students')
        .then(res => dispatch(init(res.data)));
}
