import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import StudentPage from './pages/StudentPage';
import ParentPage from './pages/ParentPage';
import TeacherPage from './pages/TeacherPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/student" element={<StudentPage />} />
        <Route path="/parent" element={<ParentPage />} />
        <Route path="/teacher" element={<TeacherPage />} />
      </Routes>
    </Router>
  );
}

export default App;