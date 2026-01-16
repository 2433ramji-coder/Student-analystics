import React from 'react';
import '../../../../src/styles/Charts.css';

const AttendanceChart = () => {
  const data = [
    { week: 'Week 1', present: 5, absent: 0 },
    { week: 'Week 2', present: 4, absent: 1 },
    { week: 'Week 3', present: 5, absent: 0 },
    { week: 'Week 4', present: 3, absent: 2 },
    { week: 'Week 5', present: 5, absent: 0 },
    { week: 'Week 6', present: 4, absent: 1 },
  ];

  const maxTotal = 5;

  return (
    <div className="simple-chart">
      <div className="chart-header">
        <h4>Attendance by Week</h4>
        <div className="chart-legend">
          <span className="legend-item present">Present</span>
          <span className="legend-item absent">Absent</span>
        </div>
      </div>
      
      <div className="chart-container">
        <div className="chart-grid">
          <div className="grid-line">5</div>
          <div className="grid-line">4</div>
          <div className="grid-line">3</div>
          <div className="grid-line">2</div>
          <div className="grid-line">1</div>
          <div className="grid-line">0</div>
        </div>
        
        <div className="chart-bars attendance-bars">
          {data.map((item, index) => (
            <div key={index} className="chart-column">
              <div className="stacked-bar">
                <div 
                  className="bar-segment present-bar" 
                  style={{ height: `${(item.present / maxTotal) * 100}%` }}
                  title={`Present: ${item.present}`}
                ></div>
                <div 
                  className="bar-segment absent-bar" 
                  style={{ 
                    height: `${(item.absent / maxTotal) * 100}%`,
                    bottom: `${(item.present / maxTotal) * 100}%`
                  }}
                  title={`Absent: ${item.absent}`}
                ></div>
              </div>
              <div className="week-label">{item.week}</div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="chart-x-axis">
        <div className="x-label">Number of Days</div>
      </div>
    </div>
  );
};

export default AttendanceChart;