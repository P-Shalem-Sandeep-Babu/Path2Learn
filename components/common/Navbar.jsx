import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/main.css';

const Navbar = ({ role }) => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    // Handle logout logic
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <h2>Path2Learn</h2>
        </Link>
      </div>
      
      <div className="navbar-links">
        {role === 'student' && (
          <>
            <Link to="/student">Dashboard</Link>
            <Link to="/">Help</Link>
          </>
        )}
        {role === 'parent' && (
          <>
            <Link to="/parent">Dashboard</Link>
            <Link to="/">Messages</Link>
          </>
        )}
        {role === 'teacher' && (
          <>
            <Link to="/teacher">Dashboard</Link>
            <Link to="/">Students</Link>
            <Link to="/">Assignments</Link>
          </>
        )}
      </div>
      
      <div className="navbar-user">
        <div className="user-profile">
          <i className="fas fa-user-circle"></i>
          <span>{role === 'student' ? 'Student' : role === 'parent' ? 'Parent' : 'Teacher'}</span>
        </div>
        <button className="btn btn-outline" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;