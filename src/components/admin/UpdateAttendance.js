import React, { useState } from 'react';
import '../../../src/styles/Dashboard.css';

const UpdateAttendance = () => {
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    class: '10A',
    subject: 'Mathematics',
    attendanceType: 'present'
  });

  const [selectedStudents, setSelectedStudents] = useState([]);

  const students = [
    { id: 'STU001', name: 'John Doe', present: true },
    { id: 'STU002', name: 'Jane Smith', present: true },
    { id: 'STU003', name: 'Robert Johnson', present: false },
    { id: 'STU004', name: 'Emily Davis', present: true },
    { id: 'STU005', name: 'Michael Brown', present: true },
  ];

  const classes = ['10A', '10B', '11A', '11B', '12A', '12B'];
  const subjects = ['Mathematics', 'Physics', 'Computer Science', 'English', 'Chemistry', 'History'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const toggleStudentAttendance = (studentId) => {
    setSelectedStudents(prev => {
      if (prev.includes(studentId)) {
        return prev.filter(id => id !== studentId);
      } else {
        return [...prev, studentId];
      }
    });
  };

  const markAll = (status) => {
    if (status === 'present') {
      setSelectedStudents(students.map(student => student.id));
    } else {
      setSelectedStudents([]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const presentCount = selectedStudents.length;
    const absentCount = students.length - presentCount;
    alert(`Attendance updated for ${formData.date}. Present: ${presentCount}, Absent: ${absentCount}`);
    // Reset
    setSelectedStudents([]);
    setFormData({
      date: new Date().toISOString().split('T')[0],
      class: '10A',
      subject: 'Mathematics',
      attendanceType: 'present'
    });
  };

  return (
    <div className="content-area">
      <h1 className="page-title">Update Attendance</h1>
      
      <div className="content-row">
        <div className="content-card full-width">
          <h3>Mark Attendance</h3>
          <form onSubmit={handleSubmit} className="attendance-form">
            <div className="form-row">
              <div className="form-group">
                <label>Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Class</label>
                <select
                  name="class"
                  value={formData.class}
                  onChange={handleChange}
                  required
                >
                  {classes.map(cls => (
                    <option key={cls} value={cls}>{cls}</option>
                  ))}
                </select>
              </div>
              
              <div className="form-group">
                <label>Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  {subjects.map(subject => (
                    <option key={subject} value={subject}>{subject}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="attendance-controls">
              <button type="button" className="btn btn-secondary" onClick={() => markAll('present')}>
                Mark All Present
              </button>
              <button type="button" className="btn btn-secondary" onClick={() => markAll('absent')}>
                Mark All Absent
              </button>
            </div>
            
            <div className="students-list">
              <h4>Students</h4>
              <div className="student-cards">
                {students.map(student => (
                  <div 
                    key={student.id}
                    className={`student-card ${selectedStudents.includes(student.id) ? 'present' : 'absent'}`}
                    onClick={() => toggleStudentAttendance(student.id)}
                  >
                    <div className="student-info">
                      <span className="student-name">{student.name}</span>
                      <span className="student-id">{student.id}</span>
                    </div>
                    <div className="attendance-status">
                      {selectedStudents.includes(student.id) ? '✅ Present' : '❌ Absent'}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="attendance-summary-card">
              <div className="summary-item">
                <span>Total Students:</span>
                <span>{students.length}</span>
              </div>
              <div className="summary-item">
                <span>Present:</span>
                <span className="present-count">{selectedStudents.length}</span>
              </div>
              <div className="summary-item">
                <span>Absent:</span>
                <span className="absent-count">{students.length - selectedStudents.length}</span>
              </div>
              <div className="summary-item">
                <span>Attendance Rate:</span>
                <span>{((selectedStudents.length / students.length) * 100).toFixed(1)}%</span>
              </div>
            </div>
            
            <button type="submit" className="btn btn-primary">
              Save Attendance
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateAttendance;