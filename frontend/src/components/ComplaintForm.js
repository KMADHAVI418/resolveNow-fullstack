import React, { useState } from 'react';
import axios from 'axios';

function ComplaintForm() {
  const [formData, setFormData] = useState({
    name: '',
    issue: '',
    contact: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://backend-ayyk.onrender.com/submit', formData);
      alert('✅ Complaint submitted and saved!');
      setFormData({ name: '', issue: '', contact: '' });
    } catch (error) {
      console.error('❌ Submission error:', error);
      alert('❌ Failed to submit complaint');
    }
  };

  return (
    <div style={{ backgroundColor: '#151010', minHeight: '100vh', paddingTop: '50px' }}>
      <div style={{
        backgroundColor: 'white',
        width: '400px',
        margin: 'auto',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 0 15px rgba(0,0,0,0.3)'
      }}>
        <h2 style={{ textAlign: 'center' }}>Submit a Complaint</h2>
        <form onSubmit={handleSubmit}>
          <label>Name:</label><br />
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', marginBottom: '15px' }}
          /><br />

          <label>Issue:</label><br />
          <textarea
            name="issue"
            value={formData.issue}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', marginBottom: '15px' }}
          /><br />

          <label>Contact Info:</label><br />
          <input
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', marginBottom: '20px' }}
          /><br />

          <button type="submit" style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#007BFF',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>
            Submit Complaint
          </button>
        </form>
      </div>
    </div>
  );
}

export default ComplaintForm;

      
     