import React, { useState } from 'react';
import 'D:/Path2Learn/Frontend/path2learn/src/styles/student.css';

const AIInterview = () => {
  const [domain, setDomain] = useState('');
  const [resume, setResume] = useState('');
  const [interviewStarted, setInterviewStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [userResponse, setUserResponse] = useState('');
  const [feedback, setFeedback] = useState('');
  const [interviewCompleted, setInterviewCompleted] = useState(false);

  // Mock questions based on domain
  const domainQuestions = {
    programming: [
      "Explain the concept of object-oriented programming.",
      "What are the differences between let, const, and var in JavaScript?",
      "How would you optimize a slow database query?",
      "Describe your approach to debugging a complex issue."
    ],
    english: [
      "Tell me about yourself.",
      "Describe a challenging situation you faced and how you handled it.",
      "What are your strengths and weaknesses?",
      "Where do you see yourself in five years?"
    ],
    subject: [
      "Explain the theory of relativity in simple terms.",
      "What are the key themes in Shakespeare's Macbeth?",
      "Describe the process of photosynthesis.",
      "How would you solve a quadratic equation?"
    ]
  };

  const handleDomainSelect = (selectedDomain) => {
    setDomain(selectedDomain);
  };

  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setResume(e.target.result);
      };
      reader.readAsText(file);
    }
  };

  const startInterview = () => {
    setInterviewStarted(true);
    askQuestion(0);
  };

  const askQuestion = (index) => {
    if (index < domainQuestions[domain].length) {
      setCurrentQuestion(domainQuestions[domain][index]);
    } else {
      setInterviewCompleted(true);
    }
  };

  const handleSubmitResponse = () => {
    // In a real app, this would send to an AI API for analysis
    const mockFeedback = `Good response! You demonstrated understanding of the topic. 
    To improve, try to provide more specific examples and structure your answer clearly.`;
    
    setFeedback(mockFeedback);
    setUserResponse('');
    
    // Move to next question after a delay
    setTimeout(() => {
      setFeedback('');
      askQuestion(domainQuestions[domain].indexOf(currentQuestion) + 1);
    }, 3000);
  };

  const resetInterview = () => {
    setDomain('');
    setResume('');
    setInterviewStarted(false);
    setCurrentQuestion('');
    setUserResponse('');
    setFeedback('');
    setInterviewCompleted(false);
  };

  return (
    <div className="ai-interview-container">
      {!domain ? (
        <div className="domain-selection">
          <h3>AI Integrated Interview Practice</h3>
          <p>Select a domain to practice your interview skills:</p>
          
          <div className="domain-cards">
            <div 
              className={`domain-card ${domain === 'programming' ? 'selected' : ''}`}
              onClick={() => handleDomainSelect('programming')}
            >
              <i className="fas fa-code"></i>
              <h4>Programming</h4>
              <p>Practice technical interviews for software roles</p>
            </div>
            
            <div 
              className={`domain-card ${domain === 'english' ? 'selected' : ''}`}
              onClick={() => handleDomainSelect('english')}
            >
              <i className="fas fa-language"></i>
              <h4>English Communication</h4>
              <p>Improve your spoken English and interview skills</p>
            </div>
            
            <div 
              className={`domain-card ${domain === 'subject' ? 'selected' : ''}`}
              onClick={() => handleDomainSelect('subject')}
            >
              <i className="fas fa-book"></i>
              <h4>Subject Specific</h4>
              <p>Prepare for subject-related academic interviews</p>
            </div>
          </div>
        </div>
      ) : !interviewStarted ? (
        <div className="interview-setup">
          <h3>Setup Your {domain.charAt(0).toUpperCase() + domain.slice(1)} Interview</h3>
          
          {domain === 'programming' && (
            <div className="resume-upload">
              <h4>Upload Your Resume (Optional)</h4>
              <p>For personalized questions based on your experience</p>
              <input 
                type="file" 
                accept=".pdf,.doc,.docx,.txt" 
                onChange={handleResumeUpload}
              />
              {resume && <p className="success-message">Resume uploaded successfully!</p>}
            </div>
          )}
          
          <div className="interview-info">
            <h4>Interview Format</h4>
            <ul>
              <li><i className="fas fa-check-circle"></i> 4-5 questions based on your selected domain</li>
              <li><i className="fas fa-check-circle"></i> Type or speak your responses</li>
              <li><i className="fas fa-check-circle"></i> AI-powered feedback after each response</li>
              <li><i className="fas fa-check-circle"></i> No time limit, take your time to respond</li>
            </ul>
          </div>
          
          <div className="action-buttons">
            <button className="btn btn-outline" onClick={() => setDomain('')}>
              <i className="fas fa-arrow-left"></i> Back to Domains
            </button>
            <button className="btn btn-primary" onClick={startInterview}>
              Start Interview <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      ) : interviewCompleted ? (
        <div className="interview-completed">
          <h3>Interview Completed!</h3>
          <div className="completion-card">
            <i className="fas fa-check-circle"></i>
            <p>Great job completing the interview practice session.</p>
          </div>
          
          <div className="feedback-summary">
            <h4>Key Areas to Improve</h4>
            <ul>
              <li>Technical depth in programming concepts</li>
              <li>Clarity and structure in responses</li>
              <li>Use of specific examples</li>
              <li>Confidence in communication</li>
            </ul>
          </div>
          
          <div className="resources">
            <h4>Recommended Resources</h4>
            <div className="resource-cards">
              <div className="resource-card">
                <i className="fas fa-video"></i>
                <h5>Technical Interview Prep Course</h5>
                <p>10-hour course covering common interview questions</p>
              </div>
              <div className="resource-card">
                <i className="fas fa-book"></i>
                <h5>Communication Skills Guide</h5>
                <p>Improve your verbal and non-verbal communication</p>
              </div>
            </div>
          </div>
          
          <button className="btn btn-primary" onClick={resetInterview}>
            Practice Again
          </button>
        </div>
      ) : (
        <div className="interview-session">
          <div className="interview-header">
            <h3>{domain.charAt(0).toUpperCase() + domain.slice(1)} Interview</h3>
            <p>Question {domainQuestions[domain].indexOf(currentQuestion) + 1} of {domainQuestions[domain].length}</p>
          </div>
          
          <div className="question-card">
            <h4>Question:</h4>
            <p>{currentQuestion}</p>
          </div>
          
          <div className="response-area">
            <h4>Your Response:</h4>
            <textarea
              className="form-control"
              rows="6"
              placeholder="Type your response here..."
              value={userResponse}
              onChange={(e) => setUserResponse(e.target.value)}
            ></textarea>
            
            <div className="voice-notes">
              <button className="btn btn-outline">
                <i className="fas fa-microphone"></i> Record Voice Response
              </button>
              <p>Or type your answer above</p>
            </div>
          </div>
          
          {feedback ? (
            <div className="feedback-card">
              <h4>AI Feedback:</h4>
              <p>{feedback}</p>
            </div>
          ) : (
            <button 
              className="btn btn-primary" 
              onClick={handleSubmitResponse}
              disabled={!userResponse}
            >
              Submit Response
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default AIInterview;