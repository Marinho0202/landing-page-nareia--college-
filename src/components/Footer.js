// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2025 Nareia. Todos os direitos reservados.</p>
        <div className="social-links">
          <a href="https://www.instagram.com/nareia" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.youtube.com/c/nareia" target="_blank" rel="noopener noreferrer">YouTube</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
