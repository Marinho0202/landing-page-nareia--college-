// src/components/Footer.js
import React from 'react';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa'; // Ícones para redes sociais
import './Footer.css'; // Importando o CSS do footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-contact">
          <p><strong>CONTATO</strong></p>
          <p>beachscorearena@gmail.com</p>
          <p>(94) 3424-0000</p>
        </div>

        <div className="footer-logo">
          <img src="/assets/logo.png" alt="Nareia logo" />
        </div>

        <div className="footer-social">
          <p><strong>SIGA NOS</strong></p>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
