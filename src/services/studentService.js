// Student service
import api from './api';

export const studentService = {
  getScores: async (studentId) => {
    try {
      const response = await api.getStudentScores(studentId);
      return response;
    } catch (error) {
      return {
        success: false,
        error: 'Failed to fetch scores'
      };
    }
  },

  getAttendance: async (studentId) => {
    try {
      const response = await api.getStudentAttendance(studentId);
      return response;
    } catch (error) {
      return {
        success: false,
        error: 'Failed to fetch attendance'
      };
    }
  },

  getReports: async (studentId) => {
    try {
      const response = await api.getStudentReports(studentId);
      return response;
    } catch (error) {
      return {
        success: false,
        error: 'Failed to fetch reports'
      };
    }
  },

  downloadReport: async (reportId) => {
    // Mock download function
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: 'Report downloaded successfully'
        });
      }, 500);
    });
  }
};

export default studentService;