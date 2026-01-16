import React from 'react';
import '../../../src/styles/Dashboard.css';

const Reports = () => {
  const reports = [
    { id: 1, title: 'Semester 1 Report Card', date: 'Dec 15, 2023', type: 'Academic' },
    { id: 2, title: 'Attendance Summary', date: 'Jan 10, 2024', type: 'Attendance' },
    { id: 3, title: 'Progress Report', date: 'Jan 5, 2024', type: 'Progress' },
    { id: 4, title: 'Fee Receipt', date: 'Dec 20, 2023', type: 'Financial' },
  ];

  const handleDownload = (reportId) => {
    alert(`Downloading report ${reportId}. In a real application, this would download the PDF.`);
  };

  const handleGenerateReport = () => {
    alert('Generating new report... This would connect to backend in a real application.');
  };

  return (
    <div className="content-area">
      <h1 className="page-title">Reports</h1>
      
      <div className="reports-header">
        <div className="header-content">
          <h2>Academic Reports</h2>
          <p>View and download your academic reports and documents</p>
        </div>
        <button className="btn btn-primary" onClick={handleGenerateReport}>
          <span>📄</span> Generate New Report
        </button>
      </div>
      
      <div className="content-row">
        <div className="content-card full-width">
          <h3>Available Reports</h3>
          <div className="reports-grid">
            {reports.map((report) => (
              <div key={report.id} className="report-card">
                <div className="report-icon">
                  {report.type === 'Academic' ? '📚' : 
                   report.type === 'Attendance' ? '✅' :
                   report.type === 'Progress' ? '📈' : '💰'}
                </div>
                <div className="report-content">
                  <h4>{report.title}</h4>
                  <div className="report-meta">
                    <span className="report-type">{report.type}</span>
                    <span className="report-date">{report.date}</span>
                  </div>
                </div>
                <button 
                  onClick={() => handleDownload(report.id)}
                  className="download-btn"
                >
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="content-row">
        <div className="content-card">
          <h3>Report Summary</h3>
          <div className="summary-stats">
            <div className="stat-item">
              <span className="stat-label">Total Reports</span>
              <span className="stat-value">12</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">This Semester</span>
              <span className="stat-value">4</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Last Updated</span>
              <span className="stat-value">Jan 15, 2024</span>
            </div>
          </div>
        </div>
        
        <div className="content-card">
          <h3>Quick Actions</h3>
          <div className="action-buttons">
            <button className="action-btn">
              <span>📧</span> Email Report
            </button>
            <button className="action-btn">
              <span>🖨️</span> Print Report
            </button>
            <button className="action-btn">
              <span>📁</span> Archive All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;