import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import './Torneios.css';

const Torneios = ({ eventos }) => {
  return (
    <section className="torneios">
      <h2>Próximos Torneios</h2>
      <div className="event-list">
        {eventos.map((evento) => (
          <Link to={`/event/${evento.id}`} key={evento.id} className="event-card-link">
            <div className="event-card">
              <img src={evento.image} alt={evento.name} className="event-image" />
              <div className="event-card-info">
                <h3>{evento.name}</h3>
                <p className="event-date">{evento.date}</p>
                <p className="event-location">{evento.location}</p>
                <div className="social-links">
                  {evento.instagram && (
                    <a href={evento.instagram} target="_blank" rel="noopener noreferrer">
                      <FaInstagram />
                    </a>
                  )}
                  {evento.youtube && (
                    <a href={evento.youtube} target="_blank" rel="noopener noreferrer">
                      <FaYoutube />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Torneios;
