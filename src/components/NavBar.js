// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';  // Usando Link do React Router para navegação
import './NavBar.css';  // Importando o arquivo CSS para a NavBar

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/assets/logo.png" alt="Logo Nareia" /> {/* Aqui você pode substituir pelo seu logo */}
      </div>
      <ul className="nav-links">
        <li><Link to="/">Torneios</Link></li>
        <li><Link to="/contato">Contato</Link></li>
        <li><Link to="/quemsomos">Quem Somos</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
