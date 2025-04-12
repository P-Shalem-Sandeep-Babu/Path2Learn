import React, {useState} from 'react';
import Navbar from '../components/common/Navbar';
import TeacherDashboard from '../components/teacher/TeacherDashboard';
import '../styles/teacher.css';

const TeacherPage = () => {
  return (
    <div className="teacher-page">
      <Navbar role="teacher" />
      <div className="container">
        <TeacherDashboard />
      </div>
    </div>
  );
};

export default TeacherPage;