import React from 'react';
import Section from './Section';
import './Contact.css';

const Contact = () => {
  return (
    <Section id="contact">
      <div className="contact-content">
        <div className="contact-section">
          <h2>Contact Us</h2>
          <p>
            We'd love to hear from you! Whether you have a question about our work, want to collaborate, or just want to say hello, feel free to reach out to us.
          </p>
        </div>
        <div className="contact-info">
          <div className="contact-item">
            <h3>Email</h3>
            <p>contact@forplaystudio.com</p>
          </div>
          <div className="contact-item">
            <h3>Phone</h3>
            <p>(123) 456-7890</p>
          </div>
          <div className="contact-item">
            <h3>Address</h3>
            <p>1234 Studio Lane<br />Long Island City, NY 11101</p>
          </div>
        </div>
        <div className="contact-form-section">
          <h3>Send Us a Message</h3>
          <form className="contact-form">
            <label>
              Name
              <input type="text" name="name" required />
            </label>
            <label>
              Email
              <input type="email" name="email" required />
            </label>
            <label>
              Message
              <textarea name="message" required></textarea>
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
