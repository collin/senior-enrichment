import React from 'react';
import { Link } from 'react-router-dom';

function CampusCard({campus}) {

  return (
    <div key={campus.id} className="card text-center" style={{width: '100%'}}>
      <img style={{width: '100%'}} className="card-img-top" src={campus.imageUrl} alt="Card image cap" />
      <div className="card-block">
        <h4 className="card-title">{campus.name}</h4>
        <Link className="btn btn-primary" to={`/campuses/${campus.id}`} >
        Visit Campus
        </Link>
      </div>
    </div>
  )
}

export default CampusCard;
