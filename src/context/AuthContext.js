import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check localStorage for existing session
    const user = localStorage.getItem('user');
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // Mock authentication - In real app, this would be an API call
    let user = null;
    
    // Check for admin login
    if (email === 'admin@example.com' && password === 'admin123') {
      user = {
        id: '1',
        email: 'admin@example.com',
        name: 'Admin User',
        role: 'admin',
        avatar: 'A'
      };
    }
    // Check for student login
    else if (email === 'student@example.com' && password === 'student123') {
      user = {
        id: '2',
        email: 'student@example.com',
        name: 'John Doe',
        role: 'student',
        studentId: 'STU001',
        avatar: 'J'
      };
    }
    else if (email === 'jane@example.com' && password === 'student123') {
      user = {
        id: '3',
        email: 'jane@example.com',
        name: 'Jane Smith',
        role: 'student',
        studentId: 'STU002',
        avatar: 'J'
      };
    }

    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      setCurrentUser(user);
      return { success: true, user };
    }
    
    return { success: false, error: 'Invalid credentials' };
  };

  const logout = () => {
    localStorage.removeItem('user');
    setCurrentUser(null);
  };

  const value = {
    currentUser,
    login,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContext;