import React, { useState } from 'react';
import 'D:/Path2Learn/Frontend/path2learn/src/styles/student.css';

const Quiz = () => {
  // Mock quiz questions
  const quizQuestions = [
    {
      id: 1,
      question: "What is the capital of France?",
      options: ["London", "Berlin", "Paris", "Madrid"],
      correctAnswer: "Paris",
      topic: "Geography"
    },
    {
      id: 2,
      question: "What is 5 x 7?",
      options: ["25", "30", "35", "40"],
      correctAnswer: "35",
      topic: "Math"
    },
    {
      id: 3,
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Mars",
      topic: "Science"
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
  const [timerActive, setTimerActive] = useState(false);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    
    setSelectedAnswer('');
    
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
      setTimerActive(false);
    }
  };

  const startQuiz = () => {
    setTimerActive(true);
    setIsMonitoring(true);
    setCurrentQuestion(0);
    setScore(0);
    setQuizCompleted(false);
    setTimeLeft(600);
  };

  // Timer logic
  React.useEffect(() => {
    let interval = null;
    
    if (timerActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft => timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      clearInterval(interval);
      setTimerActive(false);
      setQuizCompleted(true);
    }
    
    return () => clearInterval(interval);
  }, [timerActive, timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="quiz-container">
      {!timerActive && !quizCompleted ? (
        <div className="quiz-intro">
          <h3>Daily Quiz</h3>
          <p>Test your knowledge with this 10-minute quiz!</p>
          <ul className="quiz-rules">
            <li><i className="fas fa-check-circle"></i> {quizQuestions.length} questions total</li>
            <li><i className="fas fa-check-circle"></i> 10 minutes time limit</li>
            <li><i className="fas fa-check-circle"></i> Camera monitoring enabled</li>
            <li><i className="fas fa-check-circle"></i> No going back to previous questions</li>
          </ul>
          <button className="btn btn-primary" onClick={startQuiz}>
            Start Quiz
          </button>
        </div>
      ) : quizCompleted ? (
        <div className="quiz-results">
          <h3>Quiz Completed!</h3>
          <div className="score-card">
            <h4>Your Score</h4>
            <p className="score">{score}/{quizQuestions.length}</p>
            <p className="percentage">{(score / quizQuestions.length * 100).toFixed(0)}%</p>
          </div>
          
          <div className="performance-analysis">
            <h4>Performance Analysis</h4>
            <div className="topics-grid">
              {quizQuestions.map((question, index) => (
                <div key={index} className="topic-card">
                  <h5>{question.topic}</h5>
                  <p>{question.question}</p>
                  <p className={selectedAnswer === question.correctAnswer ? 'correct' : 'incorrect'}>
                    {selectedAnswer === question.correctAnswer ? '✓ Correct' : '✗ Incorrect'}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="leaderboard">
            <h4>Class Leaderboard</h4>
            <table>
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Name</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                <tr className="current-user">
                  <td>5</td>
                  <td>You</td>
                  <td>{score}/{quizQuestions.length}</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Priya</td>
                  <td>3/3</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Rohan</td>
                  <td>2/3</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Ankit</td>
                  <td>2/3</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Neha</td>
                  <td>1/3</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <button className="btn btn-primary" onClick={startQuiz}>
            Retake Quiz
          </button>
        </div>
      ) : (
        <div className="quiz-questions">
          <div className="quiz-header">
            <h3>Daily Quiz</h3>
            <div className="quiz-timer">
              <i className="fas fa-clock"></i> {formatTime(timeLeft)}
            </div>
          </div>
          
          <div className="monitoring-indicator">
            <i className="fas fa-video"></i> Camera Monitoring: {isMonitoring ? 'Active' : 'Inactive'}
          </div>
          
          <div className="question-progress">
            Question {currentQuestion + 1} of {quizQuestions.length}
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <div className="question-card">
            <h4>{quizQuestions[currentQuestion].question}</h4>
            <div className="options-grid">
              {quizQuestions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className={`option-btn ${selectedAnswer === option ? 'selected' : ''}`}
                  onClick={() => handleAnswerSelect(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          
          <button 
            className="btn btn-primary" 
            onClick={handleNextQuestion}
            disabled={!selectedAnswer}
          >
            {currentQuestion < quizQuestions.length - 1 ? 'Next Question' : 'Finish Quiz'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;