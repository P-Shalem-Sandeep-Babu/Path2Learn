import React, { useState } from 'react';

const TeacherRegister = ({ navigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    degrees: '',
    experience: '',
    subjects: '',
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
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          className="form-control"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="form-control"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="degrees">Degrees/Certifications</label>
        <textarea
          name="degrees"
          id="degrees"
          className="form-control"
          placeholder="List your degrees and certifications"
          value={formData.degrees}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="experience">Years of Teaching Experience</label>
        <input
          type="number"
          name="experience"
          id="experience"
          className="form-control"
          placeholder="Enter years of experience"
          value={formData.experience}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="subjects">Subjects You Teach</label>
        <textarea
          name="subjects"
          id="subjects"
          className="form-control"
          placeholder="List the subjects you teach (comma separated)"
          value={formData.subjects}
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

export default TeacherRegister;