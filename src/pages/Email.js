import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import "../Styles/Email.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Replace with your EmailJS service ID, template ID, and user ID
    emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formData,
      'YOUR_USER_ID'
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setSubmitStatus('success');
      setFormData({ email: '', subject: '', message: '' });
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