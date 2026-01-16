import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import '../../../src/styles/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    const result = login(email, password);
    
    if (result.success) {
      if (result.user.role === 'admin') {
        navigate('/admin/dashboard');
      } else {
        navigate('/student/dashboard');
      }
    } else {
      setError(result.error || 'Login failed');
    }
  };

  const handleDemoLogin = (role) => {
    if (role === 'admin') {
      setEmail('admin@example.com');
      setPassword('admin123');
    } else {
      setEmail('student@example.com');
      setPassword('student123');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>Student Dashboard</h1>
          <p>Sign in to access your account</p>
        </div>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          
          <button type="submit" className="login-btn">Sign In</button>
        </form>
        
        <div className="demo-login">
          <p>Demo Accounts:</p>
          <div className="demo-buttons">
            <button 
              onClick={() => handleDemoLogin('admin')}
              className="demo-btn admin-demo"
            >
              Admin Login
            </button>
            <button 
              onClick={() => handleDemoLogin('student')}
              className="demo-btn student-demo"
            >
              Student Login
            </button>
          </div>
          <p className="demo-note">
            Use admin@example.com / admin123 for admin<br />
            Use student@example.com / student123 for student
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;