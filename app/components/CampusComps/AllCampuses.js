import React from 'react';
import CampusCard from './CampusCard';
import { connect } from 'react-redux';
import AddCampusForm from './AddCampusForm';


function AllCampuses({campuses}) {

  return (
    <div className="col-xs-10">
        <h3>Campuses</h3>
      <div className="container">
        <div className="row">
          {campuses.map(campus => {
            return (
              <div key={campus.id} className="col-lg-4 col-md-4 col-sm-4 col-xs-6">
                <CampusCard campus={campus} />
              </div>
            )
          })}
        </div>
      </div>
      <AddCampusForm />
    </div>
  )
}

const mapState = state => {
  return {
    campuses: state.campuses
  }
};

const mapDispatch = null;

export default connect(mapState, mapDispatch)(AllCampuses);
