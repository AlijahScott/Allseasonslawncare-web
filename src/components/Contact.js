import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      date: '',
      time: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section className="contact">
      <div className="contact-container">
        <div className="contact-content">
          <h2>Contact Us</h2>
          <p className="contact-subtitle">Get in touch for a free consultation</p>
          
          <div className="contact-info">
            <div className="info-item">
              <h3>Phone</h3>
              <p>(330) 217-2935</p>
            </div>
            <div className="info-item">
              <h3>Email</h3>
              <p>Allseasonlawncare419@gmail.com</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="scheduling-group">
              <div className="form-group">
                <label>Preferred Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              <div className="form-group">
                <label>Preferred Time</label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a time</option>
                  <option value="morning">Morning (8AM - 12PM)</option>
                  <option value="afternoon">Afternoon (12PM - 4PM)</option>
                  <option value="evening">Evening (4PM - 7PM)</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone"
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Schedule Consultation
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 