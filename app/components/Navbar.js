import React from 'react';
import { Router } from 'react-router';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

function Navbar(props) {
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
          <Link className="navbar-brand" to="/"><img src="/images/logo.png" /></Link>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li>
              <NavLink to="/users" activeClassName="active">users</NavLink>
              Campuses
            </li>
            <li>
              <NavLink to="/stories" activeClassName="active">stories</NavLink>
              Students
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
  }


export default Navbar;
