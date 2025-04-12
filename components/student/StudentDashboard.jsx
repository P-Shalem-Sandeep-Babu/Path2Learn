import React, { useState } from 'react';
import FocusTimer from './FocusTimer';
import Homework from './Homework';
import StudyPlan from './StudyPlan';
import Quiz from './Quiz';
import AIInterview from './AIInterview';
import AIChatBot from '../AIChatBot';
import 'D:/Path2Learn/Frontend/path2learn/src/styles/student.css';

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showChatbot, setShowChatbot] = useState(false);

  // Mock data
  const studentData = {
    name: "Rahul Sharma",
    class: "10th Grade",
    attendance: "92%",
    performance: {
      math: "85%",
      science: "78%",
      english: "90%"
    },
    todaySubjects: ["Math", "Science", "English"],
    homework: [
      { subject: "Math", task: "Complete exercises 5.1 to 5.5", due: "Tomorrow" },
      { subject: "Science", task: "Prepare lab report", due: "Friday" }
    ]
  };

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  return (
    <div className="student-dashboard">
      <div className="profile-header">
        <div className="profile-info">
          <h2>Welcome, {studentData.name}</h2>
          <p>Class: {studentData.class} | Attendance: {studentData.attendance}</p>
        </div>
        <button className="btn btn-primary" onClick={toggleChatbot}>
          {showChatbot ? 'Hide AI Assistant' : 'Ask AI Assistant'}
        </button>
      </div>

      {showChatbot && <AIChatBot />}

      <div className="dashboard-nav">
        <button 
          className={`nav-btn ${activeTab === 'dashboard' ? 'active' : ''}`}
          onClick={() => setActiveTab('dashboard')}
        >
          Dashboard
        </button>
        <button 
          className={`nav-btn ${activeTab === 'timer' ? 'active' : ''}`}
          onClick={() => setActiveTab('timer')}
        >
          Focus Timer
        </button>
        <button 
          className={`nav-btn ${activeTab === 'homework' ? 'active' : ''}`}
          onClick={() => setActiveTab('homework')}
        >
          Homework
        </button>
        <button 
          className={`nav-btn ${activeTab === 'studyplan' ? 'active' : ''}`}
          onClick={() => setActiveTab('studyplan')}
        >
          Study Plan
        </button>
        <button 
          className={`nav-btn ${activeTab === 'quiz' ? 'active' : ''}`}
          onClick={() => setActiveTab('quiz')}
        >
          Daily Quiz
        </button>
        <button 
          className={`nav-btn ${activeTab === 'interview' ? 'active' : ''}`}
          onClick={() => setActiveTab('interview')}
        >
          AI Interview
        </button>
      </div>

      <div className="dashboard-content">
        {activeTab === 'dashboard' && (
          <div className="dashboard-overview">
            <div className="performance-card">
              <h3>Your Performance</h3>
              <div className="performance-grid">
                <div className="subject-performance">
                  <h4>Math</h4>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: studentData.performance.math }}
                    ></div>
                  </div>
                  <span>{studentData.performance.math}</span>
                </div>
                <div className="subject-performance">
                  <h4>Science</h4>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: studentData.performance.science }}
                    ></div>
                  </div>
                  <span>{studentData.performance.science}</span>
                </div>
                <div className="subject-performance">
                  <h4>English</h4>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: studentData.performance.english }}
                    ></div>
                  </div>
                  <span>{studentData.performance.english}</span>
                </div>
              </div>
            </div>

            <div className="today-subjects">
              <h3>Today's Subjects</h3>
              <ul>
                {studentData.todaySubjects.map((subject, index) => (
                  <li key={index}>
                    <i className="fas fa-book"></i> {subject}
                  </li>
                ))}
              </ul>
            </div>

            <div className="quick-links">
              <h3>Quick Actions</h3>
              <div className="action-buttons">
                <button 
                  className="btn btn-outline"
                  onClick={() => setActiveTab('timer')}
                >
                  <i className="fas fa-clock"></i> Start Focus Timer
                </button>
                <button 
                  className="btn btn-outline"
                  onClick={() => setActiveTab('homework')}
                >
                  <i className="fas fa-tasks"></i> View Homework
                </button>
                <button 
                  className="btn btn-outline"
                  onClick={() => setActiveTab('quiz')}
                >
                  <i className="fas fa-question-circle"></i> Take Daily Quiz
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'timer' && <FocusTimer />}
        {activeTab === 'homework' && <Homework homework={studentData.homework} />}
        {activeTab === 'studyplan' && <StudyPlan />}
        {activeTab === 'quiz' && <Quiz />}
        {activeTab === 'interview' && <AIInterview />}
      </div>
    </div>
  );
};

export default StudentDashboard;