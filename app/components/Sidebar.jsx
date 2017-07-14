import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {

  return (
    <sidebar>
      <section>
        <h4 className="menu-item">
          <Link to="/campuses">CAMPUSES</Link>
        </h4>
      </section>
      <section>
        <h4 className="menu-item">
          <Link to="/students">STUDENTS</Link>
        </h4>
      </section>
      <hr />
    </sidebar>
  );
};

export default Sidebar;
