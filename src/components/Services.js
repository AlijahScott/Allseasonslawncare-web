import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 'lawn-care',
      title: 'Lawn Care',
      description: 'Professional lawn mowing, edging, and maintenance services',
      basePrice: 50,
      pricePerSqFt: 0.10
    },
    {
      id: 'car-wash',
      title: 'Car Wash',
      description: 'Exterior and interior car cleaning services',
      basePrice: 30,
      pricePerSqFt: 0
    },
    {
      id: 'fertilizer',
      title: 'Fertilizer',
      description: 'Customized lawn fertilization programs',
      basePrice: 75,
      pricePerSqFt: 0.15
    },
    {
      id: 'mulching',
      title: 'Mulching',
      description: 'Garden bed mulching and maintenance',
      basePrice: 60,
      pricePerSqFt: 0.20
    },
    {
      id: 'clean-outs',
      title: 'Clean Outs',
      description: 'Property cleanup and debris removal',
      basePrice: 100,
      pricePerSqFt: 0.25
    }
  ];

  return (
    <section className="services">
      <div className="services-container">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 