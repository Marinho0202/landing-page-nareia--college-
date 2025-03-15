// src/components/HeroSection.js
import React from 'react';
import './HeroSection.css'; //TEMOS Q CRIAR AINDA


const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Bem-vindo aos Torneios de Beach Tennis</h1>
        <p>Fique por dentro dos próximos eventos de Beach Tennis organizados pela Nareia.</p>
        <button>Saiba Mais</button>
      </div>
    </section>
  );
};

export default HeroSection;
