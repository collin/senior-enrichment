import React from 'react';
import { Link, NavLink } from 'react-router-dom';


function Navbar () {
  return (
    <nav className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target=".navbar-collapse">
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <Link className="navbar-brand" to="/">
          <img
            src="http://orig01.deviantart.net/a9f7/f/2013/152/7/c/planet_dubstepdiscovery_logo_by_hoellenzwang-d67dtgs.png"
            width="50"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          </Link>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li>
              <NavLink to="/campuses" activeClassName="active">Campuses</NavLink>
            </li>
            <li>
              <NavLink to="/students" activeClassName="active">Students</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
