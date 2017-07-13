import React from 'react';
import CampusCard from './CampusCard';

function CampusList(willBeProps) {
  const campuses = [{name: 'Howard', id: 1}, {name: 'Stanford', id: 2}];

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

export default CampusList;
