import React, { useState } from 'react';
import '../../../src/styles/Dashboard.css';

const UpdateScores = () => {
  const [formData, setFormData] = useState({
    studentId: '',
    subject: '',
    score: '',
    maxScore: '100',
    examType: 'midterm'
  });

  const students = [
    { id: 'STU001', name: 'John Doe' },
    { id: 'STU002', name: 'Jane Smith' },
    { id: 'STU003', name: 'Robert Johnson' },
    { id: 'STU004', name: 'Emily Davis' },
  ];

  const subjects = [
    'Mathematics',
    'Physics',
    'Computer Science',
    'English',
    'Chemistry',
    'History'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Score updated for ${formData.studentId} in ${formData.subject}: ${formData.score}/${formData.maxScore}`);
    // Reset form
    setFormData({
      studentId: '',
      subject: '',
      score: '',
      maxScore: '100',
      examType: 'midterm'
    });
  };

  return (
    <div className="content-area">
      <h1 className="page-title">Update Student Scores</h1>
      
      <div className="content-row">
        <div className="content-card">
          <h3>Update Score Form</h3>
          <form onSubmit={handleSubmit} className="admin-form">
            <div className="form-group">
              <label>Student</label>
              <select
                name="studentId"
                value={formData.studentId}
                onChange={handleChange}
                required
              >
                <option value="">Select Student</option>
                {students.map(student => (
                  <option key={student.id} value={student.id}>
                    {student.name} ({student.id})
                  </option>
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
                <option value="">Select Subject</option>
                {subjects.map(subject => (
                  <option key={subject} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="form-group">
              <label>Exam Type</label>
              <select
                name="examType"
                value={formData.examType}
                onChange={handleChange}
                required
              >
                <option value="midterm">Midterm</option>
                <option value="final">Final</option>
                <option value="quiz">Quiz</option>
                <option value="assignment">Assignment</option>
              </select>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>Score</label>
                <input
                  type="number"
                  name="score"
                  value={formData.score}
                  onChange={handleChange}
                  min="0"
                  max={formData.maxScore}
                  required
                  placeholder="Enter score"
                />
              </div>
              
              <div className="form-group">
                <label>Max Score</label>
                <input
                  type="number"
                  name="maxScore"
                  value={formData.maxScore}
                  onChange={handleChange}
                  min="1"
                  required
                />
              </div>
            </div>
            
            <button type="submit" className="btn btn-primary">
              Update Score
            </button>
          </form>
        </div>
        
        <div className="content-card">
          <h3>Recent Updates</h3>
          <div className="updates-list">
            <div className="update-item">
              <div className="update-header">
                <span className="update-student">John Doe (STU001)</span>
                <span className="update-time">Today, 10:30 AM</span>
              </div>
              <p className="update-details">
                Mathematics: 95/100 (Midterm)
              </p>
            </div>
            <div className="update-item">
              <div className="update-header">
                <span className="update-student">Jane Smith (STU002)</span>
                <span className="update-time">Yesterday, 3:45 PM</span>
              </div>
              <p className="update-details">
                Physics: 88/100 (Assignment)
              </p>
            </div>
            <div className="update-item">
              <div className="update-header">
                <span className="update-student">Robert Johnson (STU003)</span>
                <span className="update-time">Jan 18, 2024</span>
              </div>
              <p className="update-details">
                Computer Science: 92/100 (Quiz)
              </p>
            </div>
          </div>
          
          <div className="bulk-update">
            <h4>Bulk Update</h4>
            <p>Update multiple scores at once</p>
            <button className="btn btn-secondary">
              <span>📁</span> Upload CSV File
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateScores;