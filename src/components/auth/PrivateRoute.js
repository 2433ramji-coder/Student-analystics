import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const PrivateRoute = ({ children, requireAdmin = false }) => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  if (requireAdmin && currentUser.role !== 'admin') {
    return <Navigate to="/student/dashboard" />;
  }

  return children;
};

export default PrivateRoute;