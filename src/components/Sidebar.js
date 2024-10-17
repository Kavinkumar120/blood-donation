import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Dashboard</h2>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/appointments">Appointments</Link>
          </li>
          <li>
            <Link to="/notifications">Notifications</Link>
          </li>
          <li>
            <Link to="/donors">Donors</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
