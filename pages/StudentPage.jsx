import React, {useState} from 'react';
import Navbar from '../components/common/Navbar';
import StudentDashboard from '../components/student/StudentDashboard';
import '../styles/student.css';

const StudentPage = () => {
  return (
    <div className="student-page">
      <Navbar role="student" />
      <div className="container">
        <StudentDashboard />
      </div>
    </div>
  );
};

export default StudentPage;