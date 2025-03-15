// src/components/Eventos.js
import React from 'react';
import EventCard from './EventCard';  // Componente do card de evento

const Eventos = ({ eventos }) => {
  if (!eventos || eventos.length === 0) {
    return <p>Não há eventos disponíveis no momento.</p>;  // Exibe uma mensagem se não houver eventos
  }

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
