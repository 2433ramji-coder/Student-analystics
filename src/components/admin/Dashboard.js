import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../common/Sidebar';
import UpdateScores from './UpdateScores';
import UpdateAttendance from './UpdateAttendance';
import GenerateReports from './GenerateReports';
import '../../../src/styles/Dashboard.css';

const Dashboard = () => {
  const stats = [
    { title: 'Total Students', value: '245', change: '+12', icon: '👥' },
    { title: 'Average GPA', value: '3.4', change: '+0.1', icon: '📊' },
    { title: 'Attendance Rate', value: '89%', change: '+2%', icon: '✅' },
    { title: 'Pending Updates', value: '8', change: '-3', icon: '📝' },
  ];

  return (
    <div className="dashboard-container">
      <Sidebar />
      
      <Routes>
        <Route path="/dashboard" element={
          <div className="content-area">
            <h1 className="page-title">Admin Dashboard</h1>
            
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
                  <h3>Recent Activities</h3>
                  <ul className="activity-list">
                    <li>
                      <span className="activity-icon">📝</span>
                      <div className="activity-content">
                        <p>Updated scores for Mathematics</p>
                        <span className="activity-time">2 hours ago</span>
                      </div>
                    </li>
                    <li>
                      <span className="activity-icon">✅</span>
                      <div className="activity-content">
                        <p>Marked attendance for Class 10A</p>
                        <span className="activity-time">5 hours ago</span>
                      </div>
                    </li>
                    <li>
                      <span className="activity-icon">📄</span>
                      <div className="activity-content">
                        <p>Generated semester reports</p>
                        <span className="activity-time">Yesterday</span>
                      </div>
                    </li>
                    <li>
                      <span className="activity-icon">👤</span>
                      <div className="activity-content">
                        <p>Added new student record</p>
                        <span className="activity-time">2 days ago</span>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="content-card">
                  <h3>Quick Actions</h3>
                  <div className="action-buttons admin-actions">
                    <button className="action-btn large">
                      <span>📝</span>
                      Update Scores
                    </button>
                    <button className="action-btn large">
                      <span>✅</span>
                      Update Attendance
                    </button>
                    <button className="action-btn large">
                      <span>📄</span>
                      Generate Reports
                    </button>
                    <button className="action-btn large">
                      <span>👥</span>
                      Manage Students
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        } />
        <Route path="/update-scores" element={<UpdateScores />} />
        <Route path="/update-attendance" element={<UpdateAttendance />} />
        <Route path="/generate-reports" element={<GenerateReports />} />
      </Routes>
    </div>
  );
};

export default Dashboard;