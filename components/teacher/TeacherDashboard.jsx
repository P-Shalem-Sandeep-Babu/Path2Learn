import React, {useState} from 'react';
import Attendance from './Attendance';
import Performance from './Performance';
import HomeworkUpload from './HomeworkUpload';
import QuizUpload from './QuizUpload';
import AIChatBot from '../AIChatBot';
import 'D:/Path2Learn/Frontend/path2learn/src/styles/teacher.css';

const TeacherDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [showAIChat, setShowAIChat] = useState(false)

  // Mock data
  const classData = {
    className: "10th Grade - Section A",
    students: [
      { id: 1, name: "Rahul Sharma", attendance: "92%", performance: "85%" },
      { id: 2, name: "Priya Patel", attendance: "95%", performance: "92%" },
      { id: 3, name: "Amit Kumar", attendance: "88%", performance: "78%" },
      { id: 4, name: "Neha Gupta", attendance: "90%", performance: "82%" },
      { id: 5, name: "Rohan Singh", attendance: "85%", performance: "75%" },
      { id: 6, name: "Anjali Mehta", attendance: "94%", performance: "88%" }
    ],
    subjects: ["Math", "Science", "English"],
    recentHomework: [
      { id: 1, subject: "Math", assigned: "2023-05-10", due: "2023-05-15", submissions: "18/20" },
      { id: 2, subject: "Science", assigned: "2023-05-12", due: "2023-05-17", submissions: "15/20" }
    ],
    recentQuizzes: [
      { id: 1, subject: "Math", date: "2023-05-08", avgScore: "75%" },
      { id: 2, subject: "Science", date: "2023-05-10", avgScore: "82%" }
    ]
  };

  const toggleAIChat = () => {
    setShowAIChat(!showAIChat);
  };

  return (
    <div className="teacher-dashboard">
      <div className="profile-header">
        <div className="profile-info">
          <h2>Teacher Dashboard</h2>
          <h3>{classData.className}</h3>
        </div>
        <button className="btn btn-primary" onClick={toggleAIChat}>
          {showAIChat ? 'Hide AI Assistant' : 'AI Teaching Assistant'}
        </button>
      </div>

      <div className="dashboard-nav">
        <button 
          className={`nav-btn ${activeTab === 'dashboard' ? 'active' : ''}`}
          onClick={() => setActiveTab('dashboard')}
        >
          Dashboard
        </button>
        <button 
          className={`nav-btn ${activeTab === 'attendance' ? 'active' : ''}`}
          onClick={() => setActiveTab('attendance')}
        >
          Attendance
        </button>
        <button 
          className={`nav-btn ${activeTab === 'performance' ? 'active' : ''}`}
          onClick={() => setActiveTab('performance')}
        >
          Performance
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
          Quizzes
        </button>
      </div>

      <div className="dashboard-content">
        {activeTab === 'dashboard' && (
          <div className="overview-tab">
            <div className="quick-stats">
              <div className="stat-card">
                <h4>Total Students</h4>
                <p className="stat-value">{classData.students.length}</p>
              </div>
              <div className="stat-card">
                <h4>Average Attendance</h4>
                <p className="stat-value">90%</p>
              </div>
              <div className="stat-card">
                <h4>Average Performance</h4>
                <p className="stat-value">83%</p>
              </div>
            </div>

            <div className="recent-activity">
              <div className="activity-card">
                <h4>Recent Homework</h4>
                <ul>
                  {classData.recentHomework.map(hw => (
                    <li key={hw.id}>
                      <span className="subject">{hw.subject}</span>
                      <span className="due-date">Due: {hw.due}</span>
                      <span className="submissions">{hw.submissions} submitted</span>
                    </li>
                  ))}
                </ul>
                <button 
                  className="btn btn-outline"
                  onClick={() => setActiveTab('homework')}
                >
                  View All Homework
                </button>
              </div>

              <div className="activity-card">
                <h4>Recent Quizzes</h4>
                <ul>
                  {classData.recentQuizzes.map(quiz => (
                    <li key={quiz.id}>
                      <span className="subject">{quiz.subject}</span>
                      <span className="date">Date: {quiz.date}</span>
                      <span className="score">Avg: {quiz.avgScore}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  className="btn btn-outline"
                  onClick={() => setActiveTab('quizzes')}
                >
                  View All Quizzes
                </button>
              </div>
            </div>

            <div className="student-highlights">
              <h4>Top Performers</h4>
              <div className="student-grid">
                {classData.students.slice(0, 3).map(student => (
                  <div key={student.id} className="student-card">
                    <div className="student-avatar">
                      <i className="fas fa-user-graduate"></i>
                    </div>
                    <h5>{student.name}</h5>
                    <p>Performance: {student.performance}</p>
                    <p>Attendance: {student.attendance}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'attendance' && <Attendance students={classData.students} />}
        {activeTab === 'performance' && <Performance students={classData.students} />}
        {activeTab === 'homework' && <HomeworkUpload />}
        {activeTab === 'quizzes' && <QuizUpload />}
      </div>

      {showAIChat && (
        <div className="ai-chat-sidebar">
          <div className="sidebar-header">
            <h4>AI Teaching Assistant</h4>
            <button className="close-btn" onClick={toggleAIChat}>
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="sidebar-content">
            <div className="ai-message">
              <p>Hello! How can I assist you with your teaching today?</p>
            </div>
            <div className="quick-actions">
              <button className="btn btn-outline">
                Generate lesson plan
              </button>
              <button className="btn btn-outline">
                Create quiz questions
              </button>
              <button className="btn btn-outline">
                Analyze class performance
              </button>
            </div>
            <div className="chat-input">
              <input type="text" placeholder="Ask me anything..." />
              <button className="btn btn-primary">
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeacherDashboard;