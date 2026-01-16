import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../common/Sidebar';
import Scores from './Scores';
import Attendance from './Attendance';
import Reports from './Reports';
import { useAuth } from '../../context/AuthContext';
import '../../../src/styles/Dashboard.css';

const Dashboard = () => {
  const { currentUser } = useAuth();

  const stats = [
    { title: 'Overall GPA', value: '3.75', change: '+0.2', icon: '📈' },
    { title: 'Attendance', value: '92%', change: '+3%', icon: '✅' },
    { title: 'Completed Courses', value: '12', change: '+2', icon: '🎓' },
    { title: 'Pending Assignments', value: '3', change: '-1', icon: '📚' },
  ];

  return (
    <div className="dashboard-container">
      <Sidebar />
      
      <Routes>
        <Route path="/dashboard" element={
          <div className="content-area">
            <h1 className="page-title">Welcome back, {currentUser?.name}!</h1>
            
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-header">
                    <span className="stat-icon">{stat.icon}</span>
                    <span className="stat-change">{stat.change}</span>
                  </div>
                  <h3 className="stat-value">{stat.value}</h3>
                  <p className="stat-title">{stat.title}</p>
                </div>
              ))}
            </div>
            
            <div className="dashboard-content">
              <div className="content-row">
                <div className="content-card">
                  <h3>Recent Scores</h3>
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>Subject</th>
                        <th>Score</th>
                        <th>Grade</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Mathematics</td>
                        <td>95/100</td>
                        <td>A</td>
                        <td>2024-01-15</td>
                      </tr>
                      <tr>
                        <td>Physics</td>
                        <td>88/100</td>
                        <td>B+</td>
                        <td>2024-01-10</td>
                      </tr>
                      <tr>
                        <td>Computer Science</td>
                        <td>92/100</td>
                        <td>A-</td>
                        <td>2024-01-05</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="content-card">
                  <h3>Upcoming Deadlines</h3>
                  <ul className="deadline-list">
                    <li>
                      <span className="deadline-title">Math Assignment</span>
                      <span className="deadline-date">Jan 25, 2024</span>
                    </li>
                    <li>
                      <span className="deadline-title">Physics Lab Report</span>
                      <span className="deadline-date">Jan 28, 2024</span>
                    </li>
                    <li>
                      <span className="deadline-title">CS Project</span>
                      <span className="deadline-date">Feb 5, 2024</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        } />
        <Route path="/scores" element={<Scores />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </div>
  );
};

export default Dashboard;