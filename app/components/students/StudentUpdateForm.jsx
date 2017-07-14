import React from 'react';
import { connect } from 'react-redux';

function StudentUpdateForm(props) {

  return (
    <div>
      <div className="create-container">
        <div className="col-2 col-form-label">
          <label>StudentName</label>
          <form onSubmit={props.onCampusCreate}>
            <div className="col-10">
              <input
                name="name"
                type="name"
                className='form-control'
                required />
              <div className="col-2 col-form-label">
                <label>StudentEmail</label>
                <div className="col-10">
                  <input
                    name="email"
                    type="email"
                    className='form-control'
                    required />
                </div>
                <div className="col-2 col-form-label">
                  <label>StudentCampus</label>
                    <li>
                      <select name="campus_id" defaultValue="" required>
                      <option value="">(select a campus)</option>
                       {
                        props.campuses.map(campus => (
                          <option key={campus.id} value={campus.id}>{campus.name}</option>
                        ))
                        }
                      </select>
                    </li>
                    {/*<input
                      name="campus"
                      type="campus"
                      />*/}
                  <button type="submit" className="btn btn-block btn-primary">submit</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}


const mapStateToProps = (state, ownProps) => ({
    history: ownProps.history,
    campuses: state.campuses
   });

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onCampusCreate: function (event) {
            event.preventDefault();
            const name = event.target.name.value
            const email = event.target.email.value
            const campus = event.target.campusId.value
            console.log(event.target)

            dispatch(addStudent({name, email}, selectedcampus, ownProps.history))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentUpdateForm)
