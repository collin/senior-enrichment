import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Welcome extends React.Component {
  render () {
    return (
      <div>
        <h1>Welcome!</h1>
        <Link to="/campuses">Campuses</Link>
        <Link to="/students">Students</Link>

      </div>
    )

  }
}

const mapState = null;

const mapDispatch = null;

export default withRouter(connect(mapState, mapDispatch)(Welcome));
