// src/components/Torneios.js
import React from 'react';
import { Link } from 'react-router-dom';  // Para criar links para as páginas de detalhes

const Torneios = ({ eventos }) => {
  return (
    <div className="event-list">
      {eventos && eventos.length > 0 ? (
        eventos.map((evento) => (
          <Link to={`/event/${evento.id}`} key={evento.id} className="event-card-link">
            <div className="event-card">
              <img src={evento.image} alt={evento.name} className="event-image" />
              <div className="event-info">
                <h3>{evento.name}</h3>
                <p>{evento.date}</p>
                <p>{evento.location}</p>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <p>Não há torneios disponíveis no momento.</p>
      )}
    </div>
  );
};

export default Torneios;
