import React, {useState} from 'react';
import 'D:/Path2Learn/Frontend/path2learn/src/styles/student.css';

const StudyPlan = () => {
  // Mock study plan data
  const studyPlan = {
    today: [
      { subject: 'Math', topic: 'Algebraic Equations', duration: '45 mins' },
      { subject: 'Science', topic: 'Chemical Reactions', duration: '45 mins' },
      { subject: 'English', topic: 'Essay Writing', duration: '30 mins' }
    ],
    weekly: [
      { day: 'Monday', subjects: ['Math', 'Science', 'English'] },
      { day: 'Tuesday', subjects: ['History', 'Geography', 'Math'] },
      { day: 'Wednesday', subjects: ['Science', 'English', 'Computer'] },
      { day: 'Thursday', subjects: ['Math', 'History', 'Science'] },
      { day: 'Friday', subjects: ['English', 'Geography', 'Computer'] },
      { day: 'Saturday', subjects: ['Revision'] },
      { day: 'Sunday', subjects: ['Rest'] }
    ]
  };

  return (
    <div className="study-plan-container">
      <h3>Your Study Plan</h3>
      
      <div className="today-plan">
        <h4>Today's Study Schedule</h4>
        <div className="subjects-grid">
          {studyPlan.today.map((item, index) => (
            <div key={index} className="subject-card">
              <div className="subject-header">
                <h5>{item.subject}</h5>
                <span className="duration">{item.duration}</span>
              </div>
              <p className="topic">{item.topic}</p>
              <div className="progress-indicator">
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '30%' }}></div>
                </div>
                <span>30% completed</span>
              </div>
              <button className="btn btn-outline">
                <i className="fas fa-play"></i> Start Studying
              </button>
            </div>
          ))}
        </div>
      </div>
      
      <div className="weekly-plan">
        <h4>Weekly Study Schedule</h4>
        <div className="week-grid">
          {studyPlan.weekly.map((day, index) => (
            <div key={index} className="day-card">
              <h5>{day.day}</h5>
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
      
      <div className="study-resources">
        <h4>Recommended Resources</h4>
        <div className="resources-list">
          <div className="resource-card">
            <i className="fas fa-video"></i>
            <h5>Algebra Basics</h5>
            <p>Video tutorial covering fundamental concepts</p>
            <a href="#" className="btn btn-outline">View</a>
          </div>
          <div className="resource-card">
            <i className="fas fa-file-pdf"></i>
            <h5>Chemical Reactions Guide</h5>
            <p>PDF with examples and practice problems</p>
            <a href="#" className="btn btn-outline">View</a>
          </div>
          <div className="resource-card">
            <i className="fas fa-link"></i>
            <h5>Essay Writing Tips</h5>
            <p>Interactive writing exercises</p>
            <a href="#" className="btn btn-outline">View</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyPlan;