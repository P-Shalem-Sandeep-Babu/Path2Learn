import React, { useState } from 'react';
import '../../styles/teacher.css';

const HomeworkUpload = () => {
  const [homework, setHomework] = useState({
    subject: '',
    topic: '',
    description: '',
    dueDate: '',
    attachments: []
  });
  const [submittedHomework, setSubmittedHomework] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHomework(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setHomework(prev => ({
      ...prev,
      attachments: [...prev.attachments, ...files]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newHomework = {
      ...homework,
      id: Date.now(),
      assignedDate: new Date().toISOString().split('T')[0]
    };
    setSubmittedHomework(prev => [...prev, newHomework]);
    setHomework({
      subject: '',
      topic: '',
      description: '',
      dueDate: '',
      attachments: []
    });
  };

  return (
    <div className="homework-tab">
      <h3>Homework Management</h3>
      
      <div className="homework-form">
        <h4>Assign New Homework</h4>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <select
              id="subject"
              name="subject"
              value={homework.subject}
              onChange={handleChange}
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
              value={homework.topic}
              onChange={handleChange}
              placeholder="E.g., Algebraic Equations, Chemical Bonds"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={homework.description}
              onChange={handleChange}
              rows="4"
              placeholder="Provide detailed instructions for the homework..."
              required
            ></textarea>
          </div>
          
          <div className="form-group">
            <label htmlFor="dueDate">Due Date</label>
            <input
              type="date"
              id="dueDate"
              name="dueDate"
              value={homework.dueDate}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="attachments">Attachments (Optional)</label>
            <input
              type="file"
              id="attachments"
              onChange={handleFileUpload}
              multiple
            />
            <div className="file-preview">
              {homework.attachments.map((file, index) => (
                <div key={index} className="file-item">
                  <i className="fas fa-paperclip"></i>
                  <span>{file.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          <button type="submit" className="btn btn-primary">
            Assign Homework
          </button>
        </form>
      </div>
      
      <div className="homework-list">
        <h4>Recently Assigned Homework</h4>
        {submittedHomework.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Topic</th>
                <th>Assigned</th>
                <th>Due</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {submittedHomework.map(hw => (
                <tr key={hw.id}>
                  <td>{hw.subject}</td>
                  <td>{hw.topic}</td>
                  <td>{hw.assignedDate}</td>
                  <td>{hw.dueDate}</td>
                  <td>
                    <button className="btn btn-sm btn-outline">
                      View
                    </button>
                    <button className="btn btn-sm btn-outline">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="no-homework">
            <i className="fas fa-book-open"></i>
            <p>No homework assigned yet</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeworkUpload;