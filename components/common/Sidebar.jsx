import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../../styles/main.css';

const Sidebar = ({ role }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>Menu</h3>
      </div>
      
      <div className="sidebar-menu">
        {role === 'student' && (
          <>
            <Link to="/student" className="sidebar-item">
              <i className="fas fa-home"></i> Dashboard
            </Link>
            <Link to="/student/timer" className="sidebar-item">
              <i className="fas fa-clock"></i> Focus Timer
            </Link>
            <Link to="/student/homework" className="sidebar-item">
              <i className="fas fa-tasks"></i> Homework
            </Link>
            <Link to="/student/study-plan" className="sidebar-item">
              <i className="fas fa-book"></i> Study Plan
            </Link>
            <Link to="/student/quiz" className="sidebar-item">
              <i className="fas fa-question-circle"></i> Daily Quiz
            </Link>
            <Link to="/student/interview" className="sidebar-item">
              <i className="fas fa-comments"></i> AI Interview
            </Link>
          </>
        )}
        
        {role === 'parent' && (
          <>
            <Link to="/parent" className="sidebar-item">
              <i className="fas fa-home"></i> Dashboard
            </Link>
            <Link to="/parent/performance" className="sidebar-item">
              <i className="fas fa-chart-line"></i> Performance
            </Link>
            <Link to="/parent/attendance" className="sidebar-item">
              <i className="fas fa-calendar-check"></i> Attendance
            </Link>
            <Link to="/parent/homework" className="sidebar-item">
              <i className="fas fa-tasks"></i> Homework
            </Link>
            <Link to="/parent/timetable" className="sidebar-item">
              <i className="fas fa-calendar-alt"></i> Timetable
            </Link>
            <Link to="/parent/messages" className="sidebar-item">
              <i className="fas fa-envelope"></i> Messages
            </Link>
          </>
        )}
        
        {role === 'teacher' && (
          <>
            <Link to="/teacher" className="sidebar-item">
              <i className="fas fa-home"></i> Dashboard
            </Link>
            <Link to="/teacher/students" className="sidebar-item">
              <i className="fas fa-users"></i> Students
            </Link>
            <Link to="/teacher/attendance" className="sidebar-item">
              <i className="fas fa-calendar-check"></i> Attendance
            </Link>
            <Link to="/teacher/homework" className="sidebar-item">
              <i className="fas fa-tasks"></i> Homework
            </Link>
            <Link to="/teacher/quizzes" className="sidebar-item">
              <i className="fas fa-question-circle"></i> Quizzes
            </Link>
            <Link to="/teacher/reports" className="sidebar-item">
              <i className="fas fa-chart-pie"></i> Reports
            </Link>
          </>
        )}
      </div>
      
      <div className="sidebar-footer">
        <Link to="/settings" className="sidebar-item">
          <i className="fas fa-cog"></i> Settings
        </Link>
        <Link to="/help" className="sidebar-item">
          <i className="fas fa-question-circle"></i> Help
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;