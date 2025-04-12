import React, {useState} from 'react';
import '../../styles/teacher.css';

const Attendance = ({ students }) => {
  const [attendanceDate, setAttendanceDate] = useState(new Date().toISOString().split('T')[0]);
  const [attendanceRecords, setAttendanceRecords] = useState(
    students.map(student => ({ ...student, present: true }))
  );

  const handleToggleAttendance = (studentId) => {
    setAttendanceRecords(prev => 
      prev.map(student => 
        student.id === studentId 
          ? { ...student, present: !student.present } 
          : student
      )
    );
  };

  const handleSaveAttendance = () => {
    // In a real app, this would save to the backend
    alert('Attendance saved successfully!');
  };

  return (
    <div className="attendance-tab">
      <h3>Attendance Management</h3>
      
      <div className="attendance-header">
        <div className="date-selector">
          <label htmlFor="attendance-date">Date:</label>
          <input
            type="date"
            id="attendance-date"
            value={attendanceDate}
            onChange={(e) => setAttendanceDate(e.target.value)}
          />
        </div>
        <div className="summary-stats">
          <span>Present: {attendanceRecords.filter(s => s.present).length}</span>
          <span>Absent: {attendanceRecords.filter(s => !s.present).length}</span>
        </div>
      </div>
      
      <div className="attendance-list">
        <table>
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Overall Attendance</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {attendanceRecords.map(student => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: student.attendance }}
                    ></div>
                  </div>
                  <span>{student.attendance}</span>
                </td>
                <td>
                  <span className={`status-badge ${student.present ? 'present' : 'absent'}`}>
                    {student.present ? 'Present' : 'Absent'}
                  </span>
                </td>
                <td>
                  <button 
                    className={`btn btn-sm ${student.present ? 'btn-outline' : 'btn-primary'}`}
                    onClick={() => handleToggleAttendance(student.id)}
                  >
                    {student.present ? 'Mark Absent' : 'Mark Present'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="attendance-actions">
        <button className="btn btn-primary" onClick={handleSaveAttendance}>
          Save Attendance
        </button>
        <button className="btn btn-outline">
          Generate Report
        </button>
      </div>
    </div>
  );
};

export default Attendance;