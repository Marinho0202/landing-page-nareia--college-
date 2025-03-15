// src/components/EventCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const EventCard = ({ evento }) => {
  return (
    <div className="event-card">
      <img src={evento.image} alt={evento.name} />
      <h3>{evento.name}</h3>
      <p>{evento.date}</p>
      <p>{evento.location}</p>
      <Link to={`/event/${evento.id}`}>Ver Detalhes</Link> {/* Link para a página de detalhes */}
    </div>
  );
};

export default EventCard;
