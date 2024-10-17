import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div className="mainpage">
      <h1>Welcome to the Blood Donation Application</h1>
      <div className="mainpage-buttons">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/register">
          <button>Register</button>
        </Link>
        
      </div>
    </div>
  );
};

export default MainPage;
