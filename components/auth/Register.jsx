import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import StudentRegister from './StudentRegister';
import ParentRegister from './ParentRegister';
import TeacherRegister from './TeacherRegister';
import '../../styles/auth.css';

const Register = () => {
  const [role, setRole] = useState('student');
  const navigate = useNavigate();

  const handleRoleChange = (selectedRole) => {
    setRole(selectedRole);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Create an Account</h2>
        <p>Join Path2Learn as</p>
        
        <div className="role-selector">
          <button 
            className={`role-btn ${role === 'student' ? 'active' : ''}`}
            onClick={() => handleRoleChange('student')}
          >
            Student
          </button>
          <button 
            className={`role-btn ${role === 'parent' ? 'active' : ''}`}
            onClick={() => handleRoleChange('parent')}
          >
            Parent
          </button>
          <button 
            className={`role-btn ${role === 'teacher' ? 'active' : ''}`}
            onClick={() => handleRoleChange('teacher')}
          >
            Teacher
          </button>
        </div>
        
        {role === 'student' && <StudentRegister navigate={navigate} />}
        {role === 'parent' && <ParentRegister navigate={navigate} />}
        {role === 'teacher' && <TeacherRegister navigate={navigate} />}
        
        <div className="auth-footer">
          <p>Already have an account? <Link to="/login">Login here</Link></p>
          <p><Link to="/">Back to Home</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Register;