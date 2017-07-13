import React from 'react';
import { Link } from 'react-router-dom';

function CampusCard(props) {
  const campus = props.campus;

  return (
    <div key={campus.id} className="col-xs-4">
      <Link className="thumbnail" to={`/campuses/${campus.id}`} >
        <img src={campus.imageUrl} />
        <div className="caption">
          <h5>
            <span>{campus.name}</span>
          </h5>
          {/*<small>{album.songs.length}</small>*/}
        </div>
      </Link>
    </div>
  )
}

export default CampusCard;
