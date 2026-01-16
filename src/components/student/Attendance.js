import React from 'react';
import AttendanceChart from '../common/Charts/AttendanceChart';
import '../../../src/styles/Dashboard.css';

const Attendance = () => {
  const attendanceData = [
    { subject: 'Mathematics', present: 45, absent: 5, percentage: 90 },
    { subject: 'Physics', present: 48, absent: 2, percentage: 96 },
    { subject: 'Computer Science', present: 50, absent: 0, percentage: 100 },
    { subject: 'English', present: 42, absent: 8, percentage: 84 },
    { subject: 'Chemistry', present: 46, absent: 4, percentage: 92 },
    { subject: 'History', present: 40, absent: 10, percentage: 80 },
  ];

  const overallAttendance = 92.5;

  return (
    <div className="content-area">
      <h1 className="page-title">Attendance Records</h1>
      
      <div className="attendance-summary">
        <div className="summary-card">
          <div className="summary-icon">✅</div>
          <div className="summary-content">
            <h3>Overall Attendance</h3>
            <div className="summary-value">{overallAttendance}%</div>
            <p className="summary-note">Above class average (85%)</p>
          </div>
        </div>
        
        <div className="summary-card">
          <div className="summary-icon">📅</div>
          <div className="summary-content">
            <h3>Total Classes</h3>
            <div className="summary-value">50</div>
            <p className="summary-note">This semester</p>
          </div>
        </div>
      </div>
      
      <div className="content-row">
        <div className="content-card">
          <h3>Attendance Trend</h3>
          <div className="chart-container">
            <AttendanceChart />
          </div>
        </div>
        
        <div className="content-card">
          <h3>Recent Attendance</h3>
          <div className="recent-attendance">
            <div className="attendance-day">
              <span className="day-date">Jan 20, 2024</span>
              <span className="day-status present">Present</span>
            </div>
            <div className="attendance-day">
              <span className="day-date">Jan 19, 2024</span>
              <span className="day-status present">Present</span>
            </div>
            <div className="attendance-day">
              <span className="day-date">Jan 18, 2024</span>
              <span className="day-status absent">Absent</span>
            </div>
            <div className="attendance-day">
              <span className="day-date">Jan 17, 2024</span>
              <span className="day-status present">Present</span>
            </div>
            <div className="attendance-day">
              <span className="day-date">Jan 16, 2024</span>
              <span className="day-status present">Present</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="content-row">
        <div className="content-card full-width">
          <h3>Subject-wise Attendance</h3>
          <table className="data-table">
            <thead>
              <tr>
                <th>Subject</th>
                <th>Present</th>
                <th>Absent</th>
                <th>Attendance %</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {attendanceData.map((item, index) => (
                <tr key={index}>
                  <td>{item.subject}</td>
                  <td>{item.present}</td>
                  <td>{item.absent}</td>
                  <td>
                    <div className="progress-container">
                      <div className="progress-bar">
                        <div 
                          className="progress-fill"
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                      <span className="progress-text">{item.percentage}%</span>
                    </div>
                  </td>
                  <td>
                    <span className={`status-badge ${
                      item.percentage >= 90 ? 'status-excellent' : 
                      item.percentage >= 75 ? 'status-good' : 'status-poor'
                    }`}>
                      {item.percentage >= 90 ? 'Excellent' : 
                       item.percentage >= 75 ? 'Good' : 'Needs Improvement'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Attendance;