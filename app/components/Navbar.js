import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';


class Navbar extends React.Component {
  render () {
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
}

const mapState = null;

const mapDispatch = null;

export default connect(mapState, mapDispatch)(Navbar);
