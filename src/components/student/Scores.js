import React from 'react';
import PerformanceChart from '../common/Charts/PerformanceChart';
import '../../../src/styles/Dashboard.css';

const Scores = () => {
  const subjects = [
    { name: 'Mathematics', score: 95, grade: 'A', maxScore: 100 },
    { name: 'Physics', score: 88, grade: 'B+', maxScore: 100 },
    { name: 'Computer Science', score: 92, grade: 'A-', maxScore: 100 },
    { name: 'English', score: 85, grade: 'B', maxScore: 100 },
    { name: 'Chemistry', score: 90, grade: 'A-', maxScore: 100 },
    { name: 'History', score: 78, grade: 'C+', maxScore: 100 },
  ];

  return (
    <div className="content-area">
      <h1 className="page-title">Academic Scores</h1>
      
      <div className="content-row">
        <div className="content-card full-width">
          <h3>Performance Overview</h3>
          <div className="chart-container">
            <PerformanceChart />
          </div>
        </div>
      </div>
      
      <div className="content-row">
        <div className="content-card full-width">
          <h3>Subject-wise Scores</h3>
          <table className="data-table">
            <thead>
              <tr>
                <th>Subject</th>
                <th>Score</th>
                <th>Percentage</th>
                <th>Grade</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {subjects.map((subject, index) => (
                <tr key={index}>
                  <td>{subject.name}</td>
                  <td>{subject.score}/{subject.maxScore}</td>
                  <td>
                    <div className="progress-container">
                      <div className="progress-bar">
                        <div 
                          className="progress-fill"
                          style={{ width: `${(subject.score / subject.maxScore) * 100}%` }}
                        ></div>
                      </div>
                      <span className="progress-text">
                        {((subject.score / subject.maxScore) * 100).toFixed(1)}%
                      </span>
                    </div>
                  </td>
                  <td>
                    <span className={`grade-badge grade-${subject.grade}`}>
                      {subject.grade}
                    </span>
                  </td>
                  <td>
                    <span className="status-badge status-complete">
                      Completed
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

export default Scores;