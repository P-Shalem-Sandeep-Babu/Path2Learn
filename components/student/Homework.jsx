import React, {useState} from 'react';
import 'D:/Path2Learn/Frontend/path2learn/src/styles/student.css';

const Homework = ({ homework }) => {
  return (
    <div className="homework-container">
      <h3>Your Homework</h3>
      
      {homework.length > 0 ? (
        <div className="homework-list">
          {homework.map((item, index) => (
            <div key={index} className="homework-item">
              <div className="homework-subject">
                <i className="fas fa-book"></i>
                <h4>{item.subject}</h4>
              </div>
              <div className="homework-details">
                <p>{item.task}</p>
                <span className="due-date">Due: {item.due}</span>
              </div>
              <div className="homework-actions">
                <button className="btn btn-outline">
                  <i className="fas fa-check"></i> Mark as Done
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-homework">
          <i className="fas fa-check-circle"></i>
          <p>No homework assigned for today!</p>
        </div>
      )}
      
      <div className="homework-notes">
        <h4>Notes</h4>
        <textarea 
          className="form-control" 
          placeholder="Add any notes about your homework..."
          rows="4"
        ></textarea>
        <button className="btn btn-primary">Save Notes</button>
      </div>
    </div>
  );
};

export default Homework;