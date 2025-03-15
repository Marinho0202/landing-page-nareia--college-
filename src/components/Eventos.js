// src/components/Eventos.js
import React from 'react';
import './Eventos.css'; //TEMOS QUE CRIAR O ARQUIVO AINDA
import EventCard from './EventCard';  // Vamos assumir que você tenha um componente EventCard

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

export default Eventos;
