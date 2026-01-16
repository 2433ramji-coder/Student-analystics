import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import '../../../src/styles/Sidebar.css';

const Sidebar = () => {
  const { currentUser } = useAuth();

  const studentLinks = [
    { path: '/student/dashboard', label: 'Overview', icon: '📊' },
    { path: '/student/scores', label: 'Scores', icon: '📝' },
    { path: '/student/attendance', label: 'Attendance', icon: '✅' },
    { path: '/student/reports', label: 'Reports', icon: '📄' },
  ];

  const adminLinks = [
    { path: '/admin/dashboard', label: 'Overview', icon: '📊' },
    { path: '/admin/update-scores', label: 'Update Scores', icon: '📝' },
    { path: '/admin/update-attendance', label: 'Update Attendance', icon: '✅' },
    { path: '/admin/generate-reports', label: 'Generate Reports', icon: '📄' },
  ];

  const links = currentUser?.role === 'admin' ? adminLinks : studentLinks;

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h3>{currentUser?.role === 'admin' ? 'Admin Panel' : 'Student Panel'}</h3>
      </div>
      
      <nav className="sidebar-nav">
        <ul>
          {links.map((link) => (
            <li key={link.path}>
              <NavLink 
                to={link.path} 
                className={({ isActive }) => 
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                <span className="nav-icon">{link.icon}</span>
                <span className="nav-label">{link.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="sidebar-footer">
        <div className="user-card">
          <div className="user-avatar-small">
            {currentUser?.avatar}
          </div>
          <div>
            <p className="user-name-small">{currentUser?.name}</p>
            <p className="user-id">
              {currentUser?.role === 'student' ? currentUser.studentId : 'Administrator'}
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;