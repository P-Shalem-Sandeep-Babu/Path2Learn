import React, { useState } from 'react';
import '../../styles/teacher.css';

const QuizUpload = () => {
  const [quiz, setQuiz] = useState({
    title: '',
    subject: '',
    topic: '',
    duration: 10,
    questions: []
  });
  const [currentQuestion, setCurrentQuestion] = useState({
    text: '',
    options: ['', '', '', ''],
    correctAnswer: 0
  });
  const [submittedQuizzes, setSubmittedQuizzes] = useState([]);
  const [showQuestionForm, setShowQuestionForm] = useState(false);

  const handleQuizChange = (e) => {
    const { name, value } = e.target;
    setQuiz(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleQuestionChange = (e) => {
    const { name, value } = e.target;
    setCurrentQuestion(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...currentQuestion.options];
    newOptions[index] = value;
    setCurrentQuestion(prev => ({
      ...prev,
      options: newOptions
    }));
  };

  const handleAddQuestion = () => {
    if (currentQuestion.text.trim() === '' || currentQuestion.options.some(opt => opt.trim() === '')) {
      alert('Please fill all question fields');
      return;
    }
    
    setQuiz(prev => ({
      ...prev,
      questions: [...prev.questions, currentQuestion]
    }));
    
    setCurrentQuestion({
      text: '',
      options: ['', '', '', ''],
      correctAnswer: 0
    });
    
    setShowQuestionForm(false);
  };

  const handleSubmitQuiz = (e) => {
    e.preventDefault();
    if (quiz.questions.length < 4) {
      alert('Quiz must have at least 4 questions');
      return;
    }
    
    const newQuiz = {
      ...quiz,
      id: Date.now(),
      createdDate: new Date().toISOString().split('T')[0]
    };
    
    setSubmittedQuizzes(prev => [...prev, newQuiz]);
    setQuiz({
      title: '',
      subject: '',
      topic: '',
      duration: 10,
      questions: []
    });
  };

  return (
    <div className="quiz-tab">
      <h3>Quiz Management</h3>
      
      <div className="quiz-form">
        <h4>Create New Quiz</h4>
        <form onSubmit={handleSubmitQuiz}>
          <div className="form-group">
            <label htmlFor="title">Quiz Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={quiz.title}
              onChange={handleQuizChange}
              placeholder="E.g., Chapter 5 Review, Midterm Practice"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <select
              id="subject"
              name="subject"
              value={quiz.subject}
              onChange={handleQuizChange}
              required
            >
              <option value="">Select Subject</option>
              <option value="Math">Math</option>
              <option value="Science">Science</option>
              <option value="English">English</option>
              <option value="History">History</option>
              <option value="Geography">Geography</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="topic">Topic</label>
            <input
              type="text"
              id="topic"
              name="topic"
              value={quiz.topic}
              onChange={handleQuizChange}
              placeholder="E.g., Algebraic Equations, World War II"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="duration">Duration (minutes)</label>
            <input
              type="number"
              id="duration"
              name="duration"
              value={quiz.duration}
              onChange={handleQuizChange}
              min="5"
              max="60"
              required
            />
          </div>
          
          <div className="questions-section">
            <h5>Questions ({quiz.questions.length}/10)</h5>
            
            {quiz.questions.length > 0 && (
              <div className="questions-list">
                {quiz.questions.map((q, index) => (
                  <div key={index} className="question-preview">
                    <p><strong>Q{index + 1}:</strong> {q.text}</p>
                    <ul>
                      {q.options.map((opt, optIndex) => (
                        <li key={optIndex} className={optIndex === q.correctAnswer ? 'correct' : ''}>
                          {opt}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
            
            {showQuestionForm ? (
              <div className="question-form">
                <div className="form-group">
                  <label>Question Text</label>
                  <textarea
                    name="text"
                    value={currentQuestion.text}
                    onChange={handleQuestionChange}
                    rows="3"
                    required
                  ></textarea>
                </div>
                
                <div className="form-group">
                  <label>Options</label>
                  {currentQuestion.options.map((opt, index) => (
                    <div key={index} className="option-input">
                      <input
                        type="radio"
                        name="correctAnswer"
                        checked={currentQuestion.correctAnswer === index}
                        onChange={() => setCurrentQuestion(prev => ({
                          ...prev,
                          correctAnswer: index
                        }))}
                      />
                      <input
                        type="text"
                        value={opt}
                        onChange={(e) => handleOptionChange(index, e.target.value)}
                        placeholder={`Option ${index + 1}`}
                        required
                      />
                    </div>
                  ))}
                </div>
                
                <div className="question-actions">
                  <button 
                    type="button" 
                    className="btn btn-primary"
                    onClick={handleAddQuestion}
                  >
                    Add Question
                  </button>
                  <button 
                    type="button" 
                    className="btn btn-outline"
                    onClick={() => setShowQuestionForm(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <button 
                type="button" 
                className="btn btn-outline"
                onClick={() => setShowQuestionForm(true)}
                disabled={quiz.questions.length >= 10}
              >
                <i className="fas fa-plus"></i> Add Question
              </button>
            )}
          </div>
          
          <div className="quiz-actions">
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={quiz.questions.length < 4}
            >
              Create Quiz
            </button>
          </div>
        </form>
      </div>
      
      <div className="quiz-list">
        <h4>Your Quizzes</h4>
        {submittedQuizzes.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Subject</th>
                <th>Topic</th>
                <th>Questions</th>
                <th>Duration</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {submittedQuizzes.map(q => (
                <tr key={q.id}>
                  <td>{q.title}</td>
                  <td>{q.subject}</td>
                  <td>{q.topic}</td>
                  <td>{q.questions.length}</td>
                  <td>{q.duration} mins</td>
                  <td>
                    <button className="btn btn-sm btn-outline">
                      View
                    </button>
                    <button className="btn btn-sm btn-outline">
                      Assign
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="no-quizzes">
            <i className="fas fa-question-circle"></i>
            <p>No quizzes created yet</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizUpload;