import React from 'react';
import CampusCard from './CampusCard';
import { connect } from 'react-redux';


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
    </div>
  )
}

const mapState = state => {
  return {
    campuses: state.campuses
  }
};

const mapDispatch = null;

export default connect(mapState, mapDispatch)(CampusList);
