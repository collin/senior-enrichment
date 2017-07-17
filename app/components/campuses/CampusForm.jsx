import React from 'react';
import { connect } from 'react-redux';
import { addCampus } from '../../redux/campuses'

function CampusForm(props) {


    return (
        <div>
            <div className="create-container">
                <div className="col-2 col-form-label">
                    <label>CampusName</label>
                <form onSubmit={props.onCampusCreate}>
                <div className="col-10">
                <input
                name="name"
                type="name"
                className='form-control'
                required />
                </div>
                <button type="submit" className="btn btn-block btn-primary">submit</button>
                </form>
            </div>
        </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    history: ownProps.history });

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onCampusCreate: function (event) {
            event.preventDefault();
            const name = event.target.name.value
            dispatch(addCampus({name}, ownProps.history))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CampusForm)
