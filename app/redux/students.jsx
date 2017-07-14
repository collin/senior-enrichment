import axios from 'axios';

//actions

const INITIALIZE = 'INITIALZE_STUDENTS';
const CREATE = 'CREATE_STUDENTS';
const REMOVE = 'REMOVE_STUDENTS';
const UPDATE = 'UPDATE_STUDENTS';

//action creators

const init = students => ({ type: INITIALIZE, students})
const update = student => ({ type: UPDATE, student })
const create = student => ({ type: CREATE, student })
const remove = id => ({ type: REMOVE, id })

//reducer

export default function reducer (students = [], action) {
    switch (action.type) {

        case INITIALIZE:
            return action.students;

        case UPDATE:
            return students.map(student => (
                action.student.id === student.id ? action.student : student
            ))

        case CREATE:
            return [action.student, ...students]

        default:
            return students;
    }
}

export const fetchStudents = () => dispatch => {
    axios.get('/api/students')
        .then(res => dispatch(init(res.data)));
}

export const fetchStudent = (id) => dispatch => {
    axios.get(`/api/students/${id}`)
        .then(res => dispatch(update(res.data)))
        .catch(err => console.error('fetching student unsuccessful', err))
}

export const removeStudent = (id, history) => dispatch => {
    dispatch(remove(id));
    axios.delete(`/api/students/${id}`)
        .then( () => {
            dispatch(fetchStudents())
            history.push('./')
        })
        .catch(err => console.error(`Removing student unsuccessful`, err))
}

export const addStudent = (student, campusid, history) => dispatch => {
    axios.post(`/api/students`, student)
        .then( res => res.data)
        .then(createdStudent => {
        dispatch(create(createdStudent))
        dispatch(fetchStudent())
        history.push(`./${createdStudent.id}`)
        })
}

