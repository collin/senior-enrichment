import React from 'react';
import { connect } from 'react-redux';
import { postCampus } from '../../reducers/campusReducer';

function AddCampusForm ({ addCampus }) {

  return (
    <form onSubmit={addCampus}>
      <div className="container story-container">
        <h3>Add a campus:</h3>
        <ul className="list-inline large-font">
          <li>
            <label >Name: </label>
            <input
              name="campus"
              className="form-like large-font form-control"
            />
            <label >Image Url: </label>
            <input
              name="imageUrl"
              className="form-like large-font form-control"
            />
            <button className="btn btn-primary" type="submit">Add</button>
          </li>
        </ul>
      </div>
    </form>
  )
}

const mapState = null;

const mapDispatch = dispatch => {
  return {
    addCampus: (e) => {
      e.preventDefault();
      const name = e.target.campus.value;
      const imageUrl = e.target.imageUrl.value;

      e.target.campus.value = "";
      e.target.imageUrl.value = "";

      dispatch(postCampus(name, imageUrl))
    }
  }
};

export default connect(mapState, mapDispatch)(AddCampusForm);
