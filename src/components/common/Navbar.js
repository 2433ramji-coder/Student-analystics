import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import '../../../src/styles/Navbar.css';

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!currentUser) {
    return null;
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/" className="navbar-brand">
            <span className="brand-icon">📊</span>
            <span className="brand-text">Student Dashboard</span>
          </Link>
        </div>
        
        <div className="navbar-right">
          <div className="user-info">
            <div className="user-avatar">
              {currentUser.avatar}
            </div>
            <div className="user-details">
              <span className="user-name">{currentUser.name}</span>
              <span className="user-role">{currentUser.role === 'admin' ? 'Administrator' : 'Student'}</span>
            </div>
          </div>
          
          <div className="navbar-menu">
            <Link 
              to={currentUser.role === 'admin' ? '/admin/dashboard' : '/student/dashboard'} 
              className="nav-link"
            >
              Dashboard
            </Link>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;