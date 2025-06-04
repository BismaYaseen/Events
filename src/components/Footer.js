import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id='contact' className="contact-footer">
      <div className="floating-elements">
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
      </div>

      <div className="footer-content">
        <div className="contact-header">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-subtitle">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-icon">📧</div>
            <div className="contact-info">
              <h3>Email Us</h3>
              <p>Drop us a line anytime</p>
              <a href="mailto:hello@company.com" className="contact-link">
                hello@company.com
              </a>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon">📞</div>
            <div className="contact-info">
              <h3>Call Us</h3>
              <p>Mon-Fri from 8am to 5pm</p>
              <a href="tel:+1234567890" className="contact-link">
                +1 (234) 567-8900
              </a>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon">📍</div>
            <div className="contact-info">
              <h3>Visit Us</h3>
              <p>Come say hello at our office</p>
              <p className="contact-link">
                123 Business Ave<br />
                Suite 100, City, ST 12345
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="social-links">
            <a href="#" className="social-link">📘</a>
            <a href="#" className="social-link">🐦</a>
            <a href="#" className="social-link">📷</a>
          </div>
          <p className="footer-text">&copy; 2025 Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
