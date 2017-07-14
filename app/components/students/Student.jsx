import React from 'react';
import { connect } from 'react-redux';
import { filteredArray } from '../../utilityFuncs'
import { Link } from 'react-router-dom'
import { removeStudent } from '../../redux/students'
import StudentUpdateForm from './StudentUpdateForm'

function Student(props) {
    const studentId = props.match.params.id
    let student = filteredArray(props.students, studentId, 'id')
    let campus = filteredArray(props.campuses, student.campusId, 'id')
    return (
        <div>
            {
                false ? (<StudentUpdateForm />) :
                    (
                        <div>
                            <div className='row text-center'>
                                <h1 className='text-center'>{student.name}</h1>
                                <button type='button' className='btn-danger' onClick={props.onDelete}>Delete</button>
                                <button type='button' className='btn-info'
                                    onClick={props.onUpdate}>Update</button>
                            </div>
                            <h1 className='text-center'>{student.email}</h1>
                            <div>
                                <Link to={`/campuses/${campus.id}`}>
                                    <h1 className='text-center'>{campus.name}</h1>
                                </Link>
                            </div>
                        </div>
                    )
            }
        </div>
    )

}

const mapStateToProps = (state, ownProps) => {
    return {
        students: state.students,
        campuses: state.campuses,
        history: ownProps.history,
        shouldRender: false
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const studentId = ownProps.match.params.id
    return {
        onDelete: function (event) {
            event.preventDefault();
            dispatch(removeStudent(studentId, ownProps.history))
        },
        onUpdate: function (event) {
            ownProps.shouldRender = true
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Student)
