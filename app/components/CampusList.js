import React from 'react';
import CampusCard from './CampusCard';
import { connect } from 'react-redux';
import { postCampus } from '../reducers/campusReducer';


function CampusList(props) {
  const campuses = props.campuses;

  return (
    <div className="col-xs-10">
      <h3>Campuses</h3>
      <div className="row">
        {campuses.map(campus => {
          return (
            <div key={campus.id} className="col-xs-4">
              <CampusCard campus={campus} />
            </div>
          )
        })}
      </div>
      <form onSubmit={props.addCampus}>
          <div className="container story-container">
            <h3>Add a campus:</h3>
            <ul className="list-inline large-font">
              <li>
                <label >Name: </label>
                <input
                  name="campus"
                  className="form-like large-font"
                />
                <button type="submit">Add</button>
              </li>
            </ul>
          </div>
        </form>
    </div>
  )
}

const mapState = state => {
  return {
    campuses: state.campuses
  }
};

const mapDispatch = dispatch => {
  return {
    addCampus: (e) => {
      e.preventDefault()
      dispatch(postCampus(e.target.campus.value))
    }
  }
};

export default connect(mapState, mapDispatch)(CampusList);
