import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/auth.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'student'
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle login logic
    // For now, we'll just navigate to the appropriate dashboard
    if (formData.role === 'student') {
      navigate('/student');
    } else if (formData.role === 'parent') {
      navigate('/parent');
    } else if (formData.role === 'teacher') {
      navigate('/teacher');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Welcome to Path2Learn</h2>
        <p>Login to continue</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="role">I am a</label>
            <select 
              name="role" 
              id="role" 
              className="form-control"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="student">Student</option>
              <option value="parent">Parent</option>
              <option value="teacher">Teacher</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="form-control"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          
          <button type="submit" className="btn btn-primary btn-block">Login</button>
        </form>
        
        <div className="auth-footer">
          <p>Don't have an account? <Link to="/register">Register here</Link></p>
          <p><Link to="/">Back to Home</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;