import React from 'react';
import { useParams } from 'react-router-dom';

const eventos = [
  { 
    id: 1, 
    name: "Torneio de Casais", 
    date: "17 de março", 
    location: "Arena Nareia", 
    image: "/assets/Torneio1.png", 
    instagram: "https://www.instagram.com/torneio1", 
    youtube: "https://www.youtube.com/watch?v=torneio1"
  },
  { 
    id: 2, 
    name: "Torneio CONAFE", 
    date: "19 de março", 
    location: "Arena Nareia", 
    image: "/assets/Torneio2.jpg", 
    instagram: "https://www.instagram.com/torneio2", 
    youtube: "https://www.youtube.com/watch?v=torneio2"
  },
  { 
    id: 3, 
    name: "Torneio Interno", 
    date: "25 de abril", 
    location: "Itaguaçu Country Club", 
    image: "/assets/Torneio3.jpg", 
    instagram: "https://www.instagram.com/torneio3", 
    youtube: "https://www.youtube.com/watch?v=torneio3"
  }
];

const EventDetail = () => {
  const { id } = useParams();
  const evento = eventos.find(evento => evento.id.toString() === id);

  if (!evento) {
    return <h2>Evento não encontrado</h2>;
  }

  return (
    <div className="event-detail">
      <h2>{evento.name}</h2>
      <img src={evento.image} alt={evento.name} />
      <p>Data: {evento.date}</p>
      <p>Local: {evento.location}</p>
      <div className="social-links">
        {evento.instagram && (
          <a href={evento.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
        )}
        {evento.youtube && (
          <a href={evento.youtube} target="_blank" rel="noopener noreferrer">YouTube</a>
        )}
      </div>
    </div>
  );
};

export default EventDetail;
