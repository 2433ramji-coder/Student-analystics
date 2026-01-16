import React, { useState } from 'react';
import '../../../src/styles/Dashboard.css';

const GenerateReports = () => {
  const [reportType, setReportType] = useState('academic');
  const [classFilter, setClassFilter] = useState('all');
  const [dateRange, setDateRange] = useState({
    start: '2024-01-01',
    end: new Date().toISOString().split('T')[0]
  });

  const reportTypes = [
    { id: 'academic', name: 'Academic Performance', icon: '📚' },
    { id: 'attendance', name: 'Attendance Summary', icon: '✅' },
    { id: 'financial', name: 'Financial Reports', icon: '💰' },
    { id: 'progress', name: 'Progress Reports', icon: '📈' },
    { id: 'behavioral', name: 'Behavioral Reports', icon: '👥' },
  ];

  const classes = ['all', '10A', '10B', '11A', '11B', '12A', '12B'];

  const handleGenerate = () => {
    alert(`Generating ${reportType} report for ${classFilter} class from ${dateRange.start} to ${dateRange.end}. This would connect to backend in a real application.`);
  };

  const handleDownloadAll = () => {
    alert('Downloading all reports. This would generate and download multiple PDF files.');
  };

  return (
    <div className="content-area">
      <h1 className="page-title">Generate Reports</h1>
      
      <div className="content-row">
        <div className="content-card">
          <h3>Report Configuration</h3>
          
          <div className="form-group">
            <label>Report Type</label>
            <div className="report-type-selector">
              {reportTypes.map(type => (
                <div 
                  key={type.id}
                  className={`report-type-card ${reportType === type.id ? 'selected' : ''}`}
                  onClick={() => setReportType(type.id)}
                >
                  <span className="type-icon">{type.icon}</span>
                  <span className="type-name">{type.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="form-group">
            <label>Class Filter</label>
            <select 
              value={classFilter} 
              onChange={(e) => setClassFilter(e.target.value)}
              className="class-select"
            >
              {classes.map(cls => (
                <option key={cls} value={cls}>
                  {cls === 'all' ? 'All Classes' : `Class ${cls}`}
                </option>
              ))}
            </select>
          </div>
          
          <div className="form-group">
            <label>Date Range</label>
            <div className="date-range">
              <input
                type="date"
                value={dateRange.start}
                onChange={(e) => setDateRange(prev => ({ ...prev, start: e.target.value }))}
              />
              <span>to</span>
              <input
                type="date"
                value={dateRange.end}
                onChange={(e) => setDateRange(prev => ({ ...prev, end: e.target.value }))}
              />
            </div>
          </div>
          
          <div className="form-group">
            <label>Format</label>
            <div className="format-selector">
              <label className="format-option">
                <input type="radio" name="format" defaultChecked />
                <span>PDF</span>
              </label>
              <label className="format-option">
                <input type="radio" name="format" />
                <span>Excel</span>
              </label>
              <label className="format-option">
                <input type="radio" name="format" />
                <span>CSV</span>
              </label>
            </div>
          </div>
          
          <div className="form-group">
            <label>Include Sections</label>
            <div className="sections-selector">
              <label className="section-option">
                <input type="checkbox" defaultChecked />
                <span>Summary</span>
              </label>
              <label className="section-option">
                <input type="checkbox" defaultChecked />
                <span>Charts</span>
              </label>
              <label className="section-option">
                <input type="checkbox" defaultChecked />
                <span>Detailed Data</span>
              </label>
              <label className="section-option">
                <input type="checkbox" />
                <span>Comments</span>
              </label>
            </div>
          </div>
          
          <button onClick={handleGenerate} className="btn btn-primary generate-btn">
            <span>📄</span> Generate Report
          </button>
        </div>
        
        <div className="content-card">
          <h3>Recent Reports</h3>
          <div className="recent-reports">
            <div className="report-item">
              <div className="report-icon">📚</div>
              <div className="report-details">
                <h4>Semester 1 Report</h4>
                <p>Generated on Jan 15, 2024</p>
                <div className="report-meta">
                  <span>Class 10A</span>
                  <span>PDF</span>
                  <span>45 pages</span>
                </div>
              </div>
              <button className="download-btn-small">↓</button>
            </div>
            
            <div className="report-item">
              <div className="report-icon">✅</div>
              <div className="report-details">
                <h4>Attendance Summary</h4>
                <p>Generated on Jan 10, 2024</p>
                <div className="report-meta">
                  <span>All Classes</span>
                  <span>Excel</span>
                  <span>2.4 MB</span>
                </div>
              </div>
              <button className="download-btn-small">↓</button>
            </div>
            
            <div className="report-item">
              <div className="report-icon">📈</div>
              <div className="report-details">
                <h4>Progress Report</h4>
                <p>Generated on Jan 5, 2024</p>
                <div className="report-meta">
                  <span>Class 11B</span>
                  <span>PDF</span>
                  <span>32 pages</span>
                </div>
              </div>
              <button className="download-btn-small">↓</button>
            </div>
          </div>
          
          <div className="bulk-actions">
            <h4>Bulk Operations</h4>
            <div className="bulk-buttons">
              <button onClick={handleDownloadAll} className="btn btn-secondary">
                <span>📦</span> Download All
              </button>
              <button className="btn btn-secondary">
                <span>📧</span> Email All
              </button>
              <button className="btn btn-secondary">
                <span>🗑️</span> Archive Old
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerateReports;