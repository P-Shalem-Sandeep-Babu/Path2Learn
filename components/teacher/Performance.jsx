import React, { useState } from 'react';
import '../../styles/teacher.css';

const Performance = ({ students }) => {
  const [selectedSubject, setSelectedSubject] = useState('Math');
  const [selectedTest, setSelectedTest] = useState('Midterm Exam');

  // Mock performance data
  const performanceData = students.map(student => ({
    ...student,
    math: Math.floor(Math.random() * 20) + 80,
    science: Math.floor(Math.random() * 20) + 75,
    english: Math.floor(Math.random() * 20) + 85,
    tests: [
      { name: 'Midterm Exam', math: Math.floor(Math.random() * 20) + 70, science: Math.floor(Math.random() * 20) + 65, english: Math.floor(Math.random() * 20) + 75 },
      { name: 'Final Exam', math: Math.floor(Math.random() * 20) + 75, science: Math.floor(Math.random() * 20) + 70, english: Math.floor(Math.random() * 20) + 80 },
      { name: 'Quiz 1', math: Math.floor(Math.random() * 20) + 80, science: Math.floor(Math.random() * 20) + 75, english: Math.floor(Math.random() * 20) + 85 }
    ]
  }));

  const getSubjectPerformance = () => {
    return performanceData.map(student => ({
      name: student.name,
      score: student[selectedSubject.toLowerCase()],
      grade: getGrade(student[selectedSubject.toLowerCase()])
    }));
  };

  const getTestPerformance = () => {
    const test = performanceData[0].tests.find(t => t.name === selectedTest);
    if (!test) return [];
    
    return performanceData.map(student => ({
      name: student.name,
      score: test[selectedSubject.toLowerCase()],
      grade: getGrade(test[selectedSubject.toLowerCase()])
    }));
  };

  const getGrade = (score) => {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
  };

  return (
    <div className="performance-tab">
      <h3>Student Performance</h3>
      
      <div className="performance-filters">
        <div className="form-group">
          <label htmlFor="subject">Subject:</label>
          <select
            id="subject"
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
          >
            <option value="Math">Math</option>
            <option value="Science">Science</option>
            <option value="English">English</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="test">Test/Exam:</label>
          <select
            id="test"
            value={selectedTest}
            onChange={(e) => setSelectedTest(e.target.value)}
          >
            <option value="Overall">Overall Performance</option>
            {performanceData[0].tests.map((test, index) => (
              <option key={index} value={test.name}>{test.name}</option>
            ))}
          </select>
        </div>
      </div>
      
      {selectedTest === 'Overall' ? (
        <div className="subject-performance">
          <h4>{selectedSubject} Performance</h4>
          <div className="performance-list">
            {getSubjectPerformance().map((student, index) => (
              <div key={index} className="student-performance">
                <div className="student-info">
                  <span className="name">{student.name}</span>
                  <span className={`grade ${student.grade}`}>{student.grade}</span>
                </div>
                <div className="progress-container">
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${student.score}%` }}
                    ></div>
                  </div>
                  <span className="score">{student.score}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="test-performance">
          <h4>{selectedTest} - {selectedSubject}</h4>
          <div className="performance-list">
            {getTestPerformance().map((student, index) => (
              <div key={index} className="student-performance">
                <div className="student-info">
                  <span className="name">{student.name}</span>
                  <span className={`grade ${student.grade}`}>{student.grade}</span>
                </div>
                <div className="progress-container">
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${student.score}%` }}
                    ></div>
                  </div>
                  <span className="score">{student.score}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      <div className="performance-summary">
        <div className="summary-card">
          <h5>Class Average</h5>
          <p className="average-score">
            {selectedTest === 'Overall' 
              ? Math.round(getSubjectPerformance().reduce((sum, student) => sum + student.score, 0) / getSubjectPerformance().length)
              : Math.round(getTestPerformance().reduce((sum, student) => sum + student.score, 0) / getTestPerformance().length)}%
          </p>
        </div>
        <div className="summary-card">
          <h5>Highest Score</h5>
          <p className="high-score">
            {selectedTest === 'Overall' 
              ? Math.max(...getSubjectPerformance().map(s => s.score))
              : Math.max(...getTestPerformance().map(s => s.score))}%
          </p>
        </div>
        <div className="summary-card">
          <h5>Lowest Score</h5>
          <p className="low-score">
            {selectedTest === 'Overall' 
              ? Math.min(...getSubjectPerformance().map(s => s.score))
              : Math.min(...getTestPerformance().map(s => s.score))}%
          </p>
        </div>
      </div>
      
      <div className="performance-actions">
        <button className="btn btn-primary">
          Generate Performance Report
        </button>
        <button className="btn btn-outline">
          Identify Weak Areas
        </button>
      </div>
    </div>
  );
};

export default Performance;