import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const StudentRegister = ({ navigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    class: '',
    phone: '',
    email: '',
    dob: '',
    parent1Name: '',
    parent2Name: '',
    parent1Phone: '',
    parent2Phone: '',
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
        <label htmlFor="name">Student Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
          placeholder="Enter student name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="class">Class/Grade</label>
        <input
          type="text"
          name="class"
          id="class"
          className="form-control"
          placeholder="Enter class/grade"
          value={formData.class}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="phone">Student Phone Number</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          className="form-control"
          placeholder="Enter student phone number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="email">Student Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="form-control"
          placeholder="Enter student email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="dob">Date of Birth</label>
        <input
          type="date"
          name="dob"
          id="dob"
          className="form-control"
          value={formData.dob}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="parent1Name">Parent 1 Name</label>
        <input
          type="text"
          name="parent1Name"
          id="parent1Name"
          className="form-control"
          placeholder="Enter parent 1 name"
          value={formData.parent1Name}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="parent1Phone">Parent 1 Phone</label>
        <input
          type="tel"
          name="parent1Phone"
          id="parent1Phone"
          className="form-control"
          placeholder="Enter parent 1 phone number"
          value={formData.parent1Phone}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="parent2Name">Parent 2 Name</label>
        <input
          type="text"
          name="parent2Name"
          id="parent2Name"
          className="form-control"
          placeholder="Enter parent 2 name"
          value={formData.parent2Name}
          onChange={handleChange}
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="parent2Phone">Parent 2 Phone</label>
        <input
          type="tel"
          name="parent2Phone"
          id="parent2Phone"
          className="form-control"
          placeholder="Enter parent 2 phone number"
          value={formData.parent2Phone}
          onChange={handleChange}
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

export default StudentRegister;