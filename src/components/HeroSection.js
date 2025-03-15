// src/components/Eventos.js
import React from 'react';
import EventCard from './EventCard';  // Importa o componente do card do evento

const Eventos = ({ eventos }) => {
  return (
    <section className="eventos">
      <h2>Próximos Torneios</h2>
      <div className="event-list">
        {eventos.map((evento) => (
          <EventCard key={evento.id} evento={evento} />
        ))}
      </div>
    </section>
  );
};

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="content">
        <h2>Futuros Torneios</h2>
        <p>Confira os próximos torneios de Beach Tennis organizados pela Nareia!</p>
      </div>
    </div>
  );
};

export default Eventos;
