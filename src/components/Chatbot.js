import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hello! I'm your All Seasons Lawn Care assistant. How can I help you today?",
      sender: 'bot'
    }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const services = [
    {
      name: 'Lawn Care',
      description: 'Professional lawn mowing, edging, and maintenance services',
      basePrice: 50,
      pricePerSqFt: 0.10
    },
    {
      name: 'Car Wash',
      description: 'Exterior and interior car cleaning services',
      basePrice: 30,
      pricePerSqFt: 0
    },
    {
      name: 'Fertilizer',
      description: 'Customized lawn fertilization programs',
      basePrice: 75,
      pricePerSqFt: 0.15
    },
    {
      name: 'Mulching',
      description: 'Garden bed mulching and maintenance',
      basePrice: 60,
      pricePerSqFt: 0.20
    },
    {
      name: 'Clean Outs',
      description: 'Property cleanup and debris removal',
      basePrice: 100,
      pricePerSqFt: 0.25
    }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleServiceInquiry = (serviceName) => {
    const service = services.find(s => s.name.toLowerCase() === serviceName.toLowerCase());
    if (service) {
      return `Our ${service.name} service includes ${service.description}. The base price is $${service.basePrice}, plus $${service.pricePerSqFt} per square foot. Would you like to schedule this service?`;
    }
    return "I'm not sure about that service. Could you please check our services page for more information?";
  };

  const handleScheduleRequest = () => {
    return "You can schedule a service by visiting our Services page and using the scheduling form. Would you like me to take you there?";
  };

  const handlePriceEstimate = (serviceName, size) => {
    const service = services.find(s => s.name.toLowerCase() === serviceName.toLowerCase());
    if (service) {
      const total = service.basePrice + (parseFloat(size) * service.pricePerSqFt);
      return `For ${size} square feet, the estimated total for ${service.name} would be $${total.toFixed(2)}. Would you like to schedule this service?`;
    }
    return "I couldn't find that service. Please check our services page for available options.";
  };

  const handleBotResponse = (userInput) => {
    const lowerInput = userInput.toLowerCase();
    
    if (lowerInput.includes('service') || lowerInput.includes('services')) {
      const serviceNames = services.map(s => s.name.toLowerCase());
      const mentionedService = serviceNames.find(name => lowerInput.includes(name));
      if (mentionedService) {
        return handleServiceInquiry(mentionedService);
      }
      return "We offer several services including Lawn Care, Car Wash, Fertilizer, Mulching, and Clean Outs. Which one would you like to know more about?";
    }

    if (lowerInput.includes('schedule') || lowerInput.includes('book')) {
      return handleScheduleRequest();
    }

    if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('estimate')) {
      const serviceNames = services.map(s => s.name.toLowerCase());
      const mentionedService = serviceNames.find(name => lowerInput.includes(name));
      if (mentionedService) {
        const sizeMatch = userInput.match(/\d+/);
        if (sizeMatch) {
          return handlePriceEstimate(mentionedService, sizeMatch[0]);
        }
        return "To get a price estimate, please provide the size of your property in square feet.";
      }
      return "For a price estimate, please specify which service you're interested in and your property size.";
    }

    if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
      return "Hello! How can I help you today?";
    }

    if (lowerInput.includes('help')) {
      return "I can help you with:\n- Information about our services\n- Price estimates\n- Scheduling appointments\n- General questions about lawn care\nWhat would you like to know?";
    }

    return "I'm not sure I understand. Could you please rephrase your question? I can help you with service information, pricing, or scheduling.";
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { text: input, sender: 'user' }]);
    
    // Simulate bot response
    setTimeout(() => {
      const botResponse = handleBotResponse(input);
      setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }]);
    }, 500);

    setInput('');
  };

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      <button 
        className="chatbot-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close chatbot" : "Open chatbot"}
      >
        {isOpen ? '✕' : '💬'}
      </button>

      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3>All Seasons Assistant</h3>
            <button 
              className="close-button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chatbot"
            >
              ✕
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`message ${message.sender}`}
              >
                {message.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSendMessage} className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              required
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot; 