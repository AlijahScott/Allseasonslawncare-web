import React, { useState } from 'react';
import './Hero.css';
import lawnImage from '../images/lawn1.jpg';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    services: [],
    width: '',
    length: '',
    date: '',
    time: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        services: checked 
          ? [...prev.services, value]
          : prev.services.filter(service => service !== value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically calculate the estimate based on services and dimensions
    console.log('Estimate requested:', formData);
    setIsModalOpen(false);
    // Reset form
    setFormData({
      services: [],
      width: '',
      length: '',
      date: '',
      time: ''
    });
  };

  const services = [
    { id: 'lawn-care', label: 'Lawn Care' },
    { id: 'car-wash', label: 'Car Wash' },
    { id: 'fertilizer', label: 'Fertilizer' },
    { id: 'mulching', label: 'Mulching' },
    { id: 'clean-outs', label: 'Clean Outs' }
  ];

  return (
    <section className="hero" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${lawnImage})` }}>
      <div className="hero-content">
        <h1>Professional Lawn Care Services</h1>
        <p>Transform your outdoor space with our expert lawn care solutions</p>
        <div className="hero-buttons">
          <button 
            className="cta-button"
            onClick={() => setIsModalOpen(true)}
          >
            Get a Free Quote
          </button>
          <button className="secondary-button">Learn More</button>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button 
              className="modal-close"
              onClick={() => setIsModalOpen(false)}
            >
              ✕
            </button>
            <h2>Get Your Free Quote</h2>
            <form onSubmit={handleSubmit} className="quote-form">
              <div className="dimensions-group">
                <div className="form-group">
                  <label>Width (ft)</label>
                  <input
                    type="number"
                    name="width"
                    value={formData.width}
                    onChange={handleChange}
                    placeholder="Enter width"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Length (ft)</label>
                  <input
                    type="number"
                    name="length"
                    value={formData.length}
                    onChange={handleChange}
                    placeholder="Enter length"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Select Services</label>
                <div className="services-checkbox-group">
                  {services.map(service => (
                    <label key={service.id} className="checkbox-label">
                      <input
                        type="checkbox"
                        name="services"
                        value={service.id}
                        checked={formData.services.includes(service.id)}
                        onChange={handleChange}
                      />
                      {service.label}
                    </label>
                  ))}
                </div>
              </div>

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

              <button type="submit" className="submit-button">
                Schedule Estimate
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero; 