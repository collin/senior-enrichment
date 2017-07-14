import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

function CampusList ({campuses}) {
    return (
        <div>
            <h2>CAMPUSES</h2>
            <Link to='/campuses/create'>
            <button type="button" className="btn btn-outline-secondary btn-lg">ADD CAMPUS</button>
            </Link>
            <div className='row'>
                {
                    campuses.map(campus => (
                        <div className='col-xs-4' key={campus.id}>
                            <Link to={`/campuses/${campus.id}`}>
                            <h3>{campus.name}</h3>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

const mapStatetoProps = state => {
    return {
        campuses: state.campuses
    }
}

const mapDispatchToProps = null

export default connect(mapStatetoProps, mapDispatchToProps)(CampusList)
