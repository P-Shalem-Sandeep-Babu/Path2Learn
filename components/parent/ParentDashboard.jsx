import React, { useState } from 'react';
import ParentChat from './ParentChat';
import 'D:/Path2Learn/Frontend/path2learn/src/styles/parent.css';

const ParentDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showChat, setShowChat] = useState(false);
  const [chatTeacher, setChatTeacher] = useState(null);

  // Mock data
  const studentData = {
    name: "Rahul Sharma",
    class: "10th Grade",
    attendance: "92%",
    performance: {
      math: { grade: "A", marks: "85/100", teacher: "Mr. Patel" },
      science: { grade: "B+", marks: "78/100", teacher: "Ms. Desai" },
      english: { grade: "A", marks: "90/100", teacher: "Mrs. Kumar" }
    },
    timetable: [
      { day: "Monday", subjects: ["Math", "Science", "English", "History"] },
      { day: "Tuesday", subjects: ["Geography", "Math", "Computer", "Science"] },
      { day: "Wednesday", subjects: ["English", "Math", "Science", "PT"] },
      { day: "Thursday", subjects: ["History", "Geography", "Math", "English"] },
      { day: "Friday", subjects: ["Science", "Computer", "Math", "Art"] }
    ],
    homework: [
      { subject: "Math", task: "Complete exercises 5.1 to 5.5", due: "Tomorrow" },
      { subject: "Science", task: "Prepare lab report", due: "Friday" }
    ],
    quizResults: [
      { subject: "Math", date: "2023-05-10", score: "8/10" },
      { subject: "Science", date: "2023-05-12", score: "7/10" }
    ],
    notifications: [
      { type: "holiday", message: "School will be closed on May 15 for Eid", date: "2023-05-08" },
      { type: "attendance", message: "Rahul was absent on May 5", date: "2023-05-06" }
    ]
  };

  const startChat = (teacher) => {
    setChatTeacher(teacher);
    setShowChat(true);
  };

  return (
    <div className="parent-dashboard">
      <div className="profile-header">
        <div className="profile-info">
          <h2>Parent Dashboard</h2>
          <h3>Viewing: {studentData.name} ({studentData.class})</h3>
        </div>
        <div className="attendance-badge">
          <i className="fas fa-calendar-check"></i>
          <span>Attendance: {studentData.attendance}</span>
        </div>
      </div>

      <div className="dashboard-nav">
        <button 
          className={`nav-btn ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button 
          className={`nav-btn ${activeTab === 'performance' ? 'active' : ''}`}
          onClick={() => setActiveTab('performance')}
        >
          Performance
        </button>
        <button 
          className={`nav-btn ${activeTab === 'timetable' ? 'active' : ''}`}
          onClick={() => setActiveTab('timetable')}
        >
          Timetable
        </button>
        <button 
          className={`nav-btn ${activeTab === 'homework' ? 'active' : ''}`}
          onClick={() => setActiveTab('homework')}
        >
          Homework
        </button>
        <button 
          className={`nav-btn ${activeTab === 'quizzes' ? 'active' : ''}`}
          onClick={() => setActiveTab('quizzes')}
        >
          Quiz Results
        </button>
        <button 
          className={`nav-btn ${activeTab === 'notifications' ? 'active' : ''}`}
          onClick={() => setActiveTab('notifications')}
        >
          Notifications
        </button>
      </div>

      <div className="dashboard-content">
        {activeTab === 'overview' && (
          <div className="overview-tab">
            <div className="performance-summary">
              <h3>Performance Summary</h3>
              <div className="subjects-grid">
                {Object.entries(studentData.performance).map(([subject, data]) => (
                  <div key={subject} className="subject-card">
                    <h4>{subject.charAt(0).toUpperCase() + subject.slice(1)}</h4>
                    <p className="grade">{data.grade}</p>
                    <p className="marks">{data.marks}</p>
                    <p className="teacher">Teacher: {data.teacher}</p>
                    <button 
                      className="btn btn-outline"
                      onClick={() => startChat(data.teacher)}
                    >
                      <i className="fas fa-comment"></i> Message Teacher
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="quick-stats">
              <div className="stat-card">
                <h4>Attendance</h4>
                <p className="stat-value">{studentData.attendance}</p>
                <p className="stat-label">Current Month</p>
              </div>
              <div className="stat-card">
                <h4>Homework Completed</h4>
                <p className="stat-value">85%</p>
                <p className="stat-label">This Week</p>
              </div>
              <div className="stat-card">
                <h4>Quiz Average</h4>
                <p className="stat-value">75%</p>
                <p className="stat-label">This Month</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'performance' && (
          <div className="performance-tab">
            <h3>Detailed Performance</h3>
            <div className="performance-details">
              {Object.entries(studentData.performance).map(([subject, data]) => (
                <div key={subject} className="subject-performance">
                  <h4>{subject.charAt(0).toUpperCase() + subject.slice(1)}</h4>
                  <div className="progress-container">
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ width: data.marks.split('/')[0] / data.marks.split('/')[1] * 100 + '%' }}
                      ></div>
                    </div>
                    <span>{data.marks} ({data.grade})</span>
                  </div>
                  <div className="teacher-contact">
                    <p>Teacher: {data.teacher}</p>
                    <button 
                      className="btn btn-outline"
                      onClick={() => startChat(data.teacher)}
                    >
                      <i className="fas fa-comment"></i> Contact
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'timetable' && (
          <div className="timetable-tab">
            <h3>Weekly Timetable</h3>
            <div className="timetable-grid">
              {studentData.timetable.map((day, index) => (
                <div key={index} className="day-card">
                  <h4>{day.day}</h4>
                  <ul>
                    {day.subjects.map((subject, subIndex) => (
                      <li key={subIndex}>
                        <i className="fas fa-book"></i> {subject}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'homework' && (
          <div className="homework-tab">
            <h3>Homework Assignments</h3>
            {studentData.homework.length > 0 ? (
              <div className="homework-list">
                {studentData.homework.map((hw, index) => (
                  <div key={index} className="homework-item">
                    <div className="hw-subject">
                      <h4>{hw.subject}</h4>
                      <span className="due-date">Due: {hw.due}</span>
                    </div>
                    <p className="hw-task">{hw.task}</p>
                    <div className="hw-status">
                      <span className={`status-badge ${index % 2 === 0 ? 'completed' : 'pending'}`}>
                        {index % 2 === 0 ? 'Completed' : 'Pending'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-homework">
                <i className="fas fa-check-circle"></i>
                <p>No homework assigned this week!</p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'quizzes' && (
          <div className="quizzes-tab">
            <h3>Quiz Results</h3>
            <div className="quiz-results">
              {studentData.quizResults.map((quiz, index) => (
                <div key={index} className="quiz-card">
                  <div className="quiz-info">
                    <h4>{quiz.subject}</h4>
                    <p>Date: {quiz.date}</p>
                  </div>
                  <div className="quiz-score">
                    <p>{quiz.score}</p>
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ width: `${quiz.score.split('/')[0] / quiz.score.split('/')[1] * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'notifications' && (
          <div className="notifications-tab">
            <h3>Notifications</h3>
            <div className="notification-list">
              {studentData.notifications.map((note, index) => (
                <div key={index} className={`notification-item ${note.type}`}>
                  <div className="note-icon">
                    {note.type === 'holiday' ? (
                      <i className="fas fa-umbrella-beach"></i>
                    ) : (
                      <i className="fas fa-exclamation-circle"></i>
                    )}
                  </div>
                  <div className="note-content">
                    <p>{note.message}</p>
                    <span className="note-date">{note.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {showChat && (
        <ParentChat teacher={chatTeacher} onClose={() => setShowChat(false)} />
      )}
    </div>
  );
};

export default ParentDashboard;