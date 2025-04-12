import React, { useState } from 'react';

const ParentRegister = ({ navigate }) => {
  const [formData, setFormData] = useState({
    parent1Name: '',
    parent2Name: '',
    studentName: '',
    parent1Phone: '',
    parent2Phone: '',
    studentPhone: '',
    studentClass: '',
    studentGender: '',
    parentEmail: '',
    terms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle registration logic
    // For now, we'll just navigate to login
    navigate('/login');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="parent1Name">Parent 1 Name (Mother)</label>
        <input
          type="text"
          name="parent1Name"
          id="parent1Name"
          className="form-control"
          placeholder="Enter mother's name"
          value={formData.parent1Name}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="parent2Name">Parent 2 Name (Father)</label>
        <input
          type="text"
          name="parent2Name"
          id="parent2Name"
          className="form-control"
          placeholder="Enter father's name"
          value={formData.parent2Name}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="studentName">Student Name</label>
        <input
          type="text"
          name="studentName"
          id="studentName"
          className="form-control"
          placeholder="Enter student name"
          value={formData.studentName}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="parent1Phone">Parent 1 Phone (Mother)</label>
        <input
          type="tel"
          name="parent1Phone"
          id="parent1Phone"
          className="form-control"
          placeholder="Enter mother's phone number"
          value={formData.parent1Phone}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="parent2Phone">Parent 2 Phone (Father)</label>
        <input
          type="tel"
          name="parent2Phone"
          id="parent2Phone"
          className="form-control"
          placeholder="Enter father's phone number"
          value={formData.parent2Phone}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="studentPhone">Student Phone</label>
        <input
          type="tel"
          name="studentPhone"
          id="studentPhone"
          className="form-control"
          placeholder="Enter student phone number"
          value={formData.studentPhone}
          onChange={handleChange}
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="studentClass">Student Class/Grade</label>
        <input
          type="text"
          name="studentClass"
          id="studentClass"
          className="form-control"
          placeholder="Enter student class/grade"
          value={formData.studentClass}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="studentGender">Student Gender</label>
        <select
          name="studentGender"
          id="studentGender"
          className="form-control"
          value={formData.studentGender}
          onChange={handleChange}
          required
        >
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      
      <div className="form-group">
        <label htmlFor="parentEmail">Parent Email</label>
        <input
          type="email"
          name="parentEmail"
          id="parentEmail"
          className="form-control"
          placeholder="Enter parent email"
          value={formData.parentEmail}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-group form-check">
        <input
          type="checkbox"
          name="terms"
          id="terms"
          className="form-check-input"
          checked={formData.terms}
          onChange={handleChange}
          required
        />
        <label htmlFor="terms" className="form-check-label">
          I agree to the Terms and Conditions
        </label>
      </div>
      
      <button type="submit" className="btn btn-primary btn-block">Register</button>
    </form>
  );
};

export default ParentRegister;