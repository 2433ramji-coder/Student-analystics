// Admin service
import api from './api';

export const adminService = {
  updateScore: async (studentId, subject, score, examType, maxScore = 100) => {
    try {
      const response = await api.updateStudentScore(studentId, subject, score, examType);
      return response;
    } catch (error) {
      return {
        success: false,
        error: 'Failed to update score'
      };
    }
  },

  updateAttendance: async (date, classId, subject, attendanceData) => {
    try {
      const response = await api.updateAttendance(date, classId, subject, attendanceData);
      return response;
    } catch (error) {
      return {
        success: false,
        error: 'Failed to update attendance'
      };
    }
  },

  generateReport: async (reportType, filters) => {
    try {
      const response = await api.generateReport(reportType, filters);
      return response;
    } catch (error) {
      return {
        success: false,
        error: 'Failed to generate report'
      };
    }
  },

  getStudents: async () => {
    try {
      const response = await api.getStudents();
      return response;
    } catch (error) {
      return {
        success: false,
        error: 'Failed to fetch students'
      };
    }
  }
};

export default adminService;