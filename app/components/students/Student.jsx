import React from 'react';
import { connect } from 'react-redux';
import { filteredArray } from '../../utilityFuncs'

function Student (props) {
    const studentId = props.match.params.id
    let student = filteredArray(props.students, studentId, 'id')
    return (
        <div>
            <div className='row'>
                <h1>{student.name}</h1>
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
