// Authentication service
import api from './api';

export const authService = {
  login: async (email, password) => {
    try {
      const response = await api.login(email, password);
      if (response.success && response.data.token) {
        // Store user data in localStorage
        localStorage.setItem('user', JSON.stringify(response.data));
        localStorage.setItem('token', response.data.token);
        return response;
      }
      return response;
    } catch (error) {
      return {
        success: false,
        error: 'Network error. Please try again.'
      };
    }
  },

  logout: async () => {
    try {
      await api.logout();
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      return { success: true };
    } catch (error) {
      return { success: false };
    }
  },

  getCurrentUser: () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },

  isAuthenticated: () => {
    return !!localStorage.getItem('token');
  },

  isAdmin: () => {
    const user = authService.getCurrentUser();
    return user && user.role === 'admin';
  }
};

export default authService;