import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import "../Styles/Email.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear submit status on user input
    if (submitStatus) {
      setSubmitStatus(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.send(
      'service_gnacdwy',
      'template_ivncq7e',
      formData,
      'A4N6pc0YONPPgiqby'
    )
    emailjs.send(
      'service_gnacdwy',
      'template_4chdqln',
      formData,
      'A4N6pc0YONPPgiqby'
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    })
    .catch((err) => {
      console.log('FAILED...', err);
      setSubmitStatus('error');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <div className="contact-form-container">
      
      {submitStatus === 'success' && (
        <div className="success-message">
          Thank you! Your message has been sent successfully.
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="error-message">
          Oops! Something went wrong. Please try again later.
        </div>
      )}
      
      
      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder='Your name'
            maxLength={100} 
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder='Your email'
          />
        </div>
        
        <div className="form-group">
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            placeholder='Your subject'
            maxLength={800} 
          />
        </div>
        
        <div className="form-group">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder='Your message'
            maxLength={5000}
          />
        </div>
        
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="submit-btn"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;