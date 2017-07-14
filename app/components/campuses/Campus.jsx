import React from 'react';
import { connect } from 'react-redux';
import { filteredArray } from '../../utilityFuncs'
import {Link} from 'react-router-dom';
import {removeCampus} from '../../redux/campuses'

function Campus (props) {
    const campusId = props.match.params.id
    let campus = filteredArray(props.campuses, campusId, 'id')
    return (
        <div>
            <div className='row text-center'>
                <h1>{campus.name}</h1>
                <button className='btn-danger' onClick={props.onDelete}>Delete</button>
            </div>
                <h2 className='text-center'>STUDENTS</h2>
                <div className='row text-center'>
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

const mapStateToProps = (state, ownProps) => {
    return {
        students: state.students,
        campuses: state.campuses,
        history: ownProps.history,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const campusId = ownProps.match.params.id
    return {
        onDelete: function (event) {
            event.preventDefault();
            dispatch(removeCampus(campusId, ownProps.history))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Campus)
