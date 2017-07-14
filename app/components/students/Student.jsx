import React from 'react';
import { connect } from 'react-redux';
import { filteredArray } from '../../utilityFuncs'
import {Link} from 'react-router-dom'

function Student (props) {
    const studentId = props.match.params.id
    let student = filteredArray(props.students, studentId, 'id')
    let campus = filteredArray(props.campuses, student.campusId, 'id')
    return (
        <div>
            <div className='row'>
                <h1>{student.name}</h1>
                <h1>{student.email}</h1>
                <div>
                    <Link to={`/campuses/${campus.id}`}>
                    <h1>{campus.name}</h1>
                    </Link>
                </div>
            </div>
        </div>
    )

}

const mapStateToProps = state => {
    return {
        students: state.students,
        campuses: state.campuses,
    }
}

const mapDispatchToProps = null


export default connect(mapStateToProps, mapDispatchToProps)(Student)
