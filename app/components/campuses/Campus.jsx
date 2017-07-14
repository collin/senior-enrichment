import React from 'react';
import { connect } from 'react-redux';
import { filteredArray } from '../../utilityFuncs'
import {Link} from 'react-router-dom';

function Campus (props) {
    const campusId = props.match.params.id
    let campus = filteredArray(props.campuses, campusId, 'id')
    return (
        <div>
            <div className='row'>
                <h1>{campus.name}</h1>
            </div>
                <h2>STUDENTS</h2>
                <div className='row'>
                    {
                        filteredArray(props.students, campusId, 'campusId').map(student => (
                            <div className='col-xs-4' key={student.id}>
                                <Link to={`/students/${student.id}`}>
                                <h3>{student.name}</h3>
                                </Link>
                            </div>
                        ))
                    }
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


export default connect(mapStateToProps, mapDispatchToProps)(Campus)
