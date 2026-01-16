import React from 'react';
import '../../../../src/styles/Charts.css';

const PerformanceChart = () => {
  const data = [
    { month: 'Sep', math: 85, physics: 82, cs: 88 },
    { month: 'Oct', math: 88, physics: 85, cs: 90 },
    { month: 'Nov', math: 90, physics: 84, cs: 89 },
    { month: 'Dec', math: 92, physics: 88, cs: 92 },
    { month: 'Jan', math: 95, physics: 88, cs: 92 },
    { month: 'Feb', math: 94, physics: 90, cs: 94 },
  ];

  const maxScore = 100;
  const minScore = 70;

  return (
    <div className="simple-chart">
      <div className="chart-header">
        <h4>Performance Trend</h4>
        <div className="chart-legend">
          <span className="legend-item math">Mathematics</span>
          <span className="legend-item physics">Physics</span>
          <span className="legend-item cs">Computer Science</span>
        </div>
      </div>
      
      <div className="chart-container">
        <div className="chart-grid">
          <div className="grid-line">100</div>
          <div className="grid-line">90</div>
          <div className="grid-line">80</div>
          <div className="grid-line">70</div>
        </div>
        
        <div className="chart-bars">
          {data.map((item, index) => (
            <div key={index} className="chart-column">
              <div className="month-label">{item.month}</div>
              <div className="data-points">
                <div 
                  className="data-point math-point" 
                  style={{ height: `${((item.math - minScore) / (maxScore - minScore)) * 100}%` }}
                  title={`Math: ${item.math}`}
                ></div>
                <div 
                  className="data-point physics-point" 
                  style={{ height: `${((item.physics - minScore) / (maxScore - minScore)) * 100}%` }}
                  title={`Physics: ${item.physics}`}
                ></div>
                <div 
                  className="data-point cs-point" 
                  style={{ height: `${((item.cs - minScore) / (maxScore - minScore)) * 100}%` }}
                  title={`CS: ${item.cs}`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="chart-x-axis">
        {data.map((item, index) => (
          <div key={index} className="x-label">{item.month}</div>
        ))}
      </div>
    </div>
  );
};

export default PerformanceChart;