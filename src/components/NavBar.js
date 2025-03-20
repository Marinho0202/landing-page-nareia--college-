import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/"> {/* Link para Home */}
          <img src="/assets/logo.png" alt="Logo" />
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/quemsomos">Quem Somos</Link></li>
        <li><Link to="/contato">Contato</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
