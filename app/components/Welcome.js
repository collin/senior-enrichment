import React from 'react';
import { Link } from 'react-router-dom';


function Welcome () {
    return (
      <div className="container text-center">
        <h1>Welcome to the InterGalactic Javascript Academy!</h1>
        <h3>Click one of the buttons below to learn about more:</h3>
        <Link className="btn btn-default" to="/campuses">Campuses</Link>
        <Link className="btn btn-default" to="/students">Students</Link>

      </div>
    )

}

export default Welcome;

