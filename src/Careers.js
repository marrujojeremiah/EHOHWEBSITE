import React, { useState } from 'react';
import './Careers.css';

function Careers() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create a new FormData object to send the data as a multipart form
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('message', formData.message);
    formDataToSend.append('resume', formData.resume);

    // Use fetch or another method to send the formDataToSend to your backend or email service
    fetch('https://your-server-or-email-service.com/submit', {
      method: 'POST',
      body: formDataToSend,
    })
      .then((response) => {
        if (response.ok) {
          alert('Application submitted successfully!');
        } else {
          alert('Failed to submit the application.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="careers">
      <h2>Join Our Team at Esperanza's Homes of Hope</h2>
      <p>
        We are dedicated to providing the best care to individuals with developmental disabilities. 
        We believe in a team approach to identify their needs and goals, helping them lead the most independent and productive life possible. 
        If you are passionate about making a difference, we would love to hear from you!
      </p>
      <h3>Current Job Opening</h3>
      <p><strong>Position:</strong> Caregiver</p>
      <p><strong>Location:</strong> Jamul, CA</p>
      <p><strong>Job Description:</strong> As a caregiver at Esperanza's Homes of Hope, you will be responsible for providing compassionate care to our residents, assisting with daily living activities, and ensuring a safe and supportive environment. This role requires patience, empathy, and a commitment to improving the quality of life for our residents.</p>
      <p><strong>Responsibilities include:</strong></p>
      <ul>
        <li>Assisting residents with daily living activities.</li>
        <li>Monitoring and documenting residents' health and well-being.</li>
        <li>Communicating effectively with residents, families, and team members.</li>
        <li>Ensuring a safe and clean living environment.</li>
      </ul>
      <p>If you are interested in this position, please fill out the form below and upload your resume. We look forward to hearing from you!</p>
      
      <form onSubmit={handleSubmit} className="careers-form">
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Phone:
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </label>
        <label>
          Message:
          <textarea name="message" value={formData.message} onChange={handleChange} required />
        </label>
        <label>
          Resume:
          <input type="file" name="resume" onChange={handleFileChange} required />
        </label>
        
        {/* Disclaimer text */}
        <p className="disclaimer-text">
          * All convictions other than minor traffic offenses must be disclosed. Some convictions are disqualifying, especially those related to robbery, rape and other sexual offenses, child abuse, elder or dependent adult abuse, arson or kidnapping.
        </p>
        
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
}

export default Careers;
