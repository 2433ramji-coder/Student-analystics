// Mock API service for the dashboard
// In a real application, this would make actual API calls

const mockDelay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const api = {
  // Auth endpoints
  login: async (email, password) => {
    await mockDelay(500);
    
    // Mock responses
    if (email === 'admin@example.com' && password === 'admin123') {
      return {
        success: true,
        data: {
          id: '1',
          email: 'admin@example.com',
          name: 'Admin User',
          role: 'admin',
          token: 'mock-admin-token'
        }
      };
    }
    
    if (email === 'student@example.com' && password === 'student123') {
      return {
        success: true,
        data: {
          id: '2',
          email: 'student@example.com',
          name: 'John Doe',
          role: 'student',
          studentId: 'STU001',
          token: 'mock-student-token'
        }
      };
    }
    
    return {
      success: false,
      error: 'Invalid credentials'
    };
  },

  logout: async () => {
    await mockDelay(200);
    return { success: true };
  },

  // Student endpoints
  getStudentScores: async (studentId) => {
    await mockDelay(300);
    return {
      success: true,
      data: [
        { subject: 'Mathematics', score: 95, grade: 'A', date: '2024-01-15' },
        { subject: 'Physics', score: 88, grade: 'B+', date: '2024-01-10' },
        { subject: 'Computer Science', score: 92, grade: 'A-', date: '2024-01-05' },
        { subject: 'English', score: 85, grade: 'B', date: '2023-12-20' },
        { subject: 'Chemistry', score: 90, grade: 'A-', date: '2023-12-15' },
      ]
    };
  },

  getStudentAttendance: async (studentId) => {
    await mockDelay(300);
    return {
      success: true,
      data: {
        overall: 92.5,
        subjects: [
          { subject: 'Mathematics', present: 45, absent: 5, percentage: 90 },
          { subject: 'Physics', present: 48, absent: 2, percentage: 96 },
          { subject: 'Computer Science', present: 50, absent: 0, percentage: 100 },
          { subject: 'English', present: 42, absent: 8, percentage: 84 },
        ]
      }
    };
  },

  getStudentReports: async (studentId) => {
    await mockDelay(300);
    return {
      success: true,
      data: [
        { id: 1, title: 'Semester 1 Report Card', date: '2023-12-15', type: 'Academic' },
        { id: 2, title: 'Attendance Summary', date: '2024-01-10', type: 'Attendance' },
        { id: 3, title: 'Progress Report', date: '2024-01-05', type: 'Progress' },
      ]
    };
  },

  // Admin endpoints
  updateStudentScore: async (studentId, subject, score, examType) => {
    await mockDelay(400);
    return {
      success: true,
      data: {
        studentId,
        subject,
        score,
        examType,
        updatedAt: new Date().toISOString()
      }
    };
  },

  updateAttendance: async (date, classId, subject, attendanceData) => {
    await mockDelay(400);
    return {
      success: true,
      data: {
        date,
        classId,
        subject,
        attendanceData,
        updatedAt: new Date().toISOString()
      }
    };
  },

  generateReport: async (reportType, filters) => {
    await mockDelay(800);
    return {
      success: true,
      data: {
        reportId: `REP_${Date.now()}`,
        type: reportType,
        filters,
        generatedAt: new Date().toISOString(),
        downloadUrl: '#'
      }
    };
  },

  getStudents: async () => {
    await mockDelay(300);
    return {
      success: true,
      data: [
        { id: 'STU001', name: 'John Doe', class: '10A', email: 'john@example.com' },
        { id: 'STU002', name: 'Jane Smith', class: '10A', email: 'jane@example.com' },
        { id: 'STU003', name: 'Robert Johnson', class: '10B', email: 'robert@example.com' },
        { id: 'STU004', name: 'Emily Davis', class: '10B', email: 'emily@example.com' },
      ]
    };
  }
};

export default api;