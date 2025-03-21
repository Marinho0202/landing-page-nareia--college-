import React from 'react';
import './EventDetail.css';
import { useParams } from 'react-router-dom';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; // Ícones do React Icons

const eventos = [
  { 
    id: 1, 
    name: "TORNEIO DE CASAIS", 
    date: "17 de março", 
    location: "Arena Nareia", 
    address: "Av. Brasil, Quadra 20 - Redenção - PA",
    description: "O Torneio de Casais vem com intuito de proporcionar uma incrível experiência aos participantes, incentivando sempre a prática de atividade física, saúde e bem-estar.",
    organization: "NAREIA SPORTS",
    contactEmail: "nareiasports@gmail.com",
    contactPhone: "(94) 9xxxx-xxxx",
    instagram: "https://www.instagram.com/torneio1", 
    youtube: "https://www.youtube.com/watch?v=torneio1"
  },
  { 
    id: 2, 
    name: "TORNEIO CONAFE", 
    date: "19 de março", 
    location: "Arena Nareia", 
    address: "Av. Brasil, Quadra 20 - Redenção - PA",
    description: "O Torneio CONAFE é um evento anual com a proposta de fomentar o esporte entre os profissionais da área.",
    organization: "CONAFE",
    contactEmail: "conafe@gmail.com",
    contactPhone: "(94) 9xxxx-xxxx",
    instagram: "https://www.instagram.com/torneio2", 
    youtube: "https://www.youtube.com/watch?v=torneio2"
  },
  { 
    id: 3, 
    name: "TORNEIO INTERNO", 
    date: "25 de abril", 
    location: "Itaguaçu Country Club", 
    address: "Itaguaçu Country Club - Localização precisa",
    description: "Torneio fechado para membros do clube, com premiação para os melhores jogadores da temporada.",
    organization: "Itaguaçu Country Club",
    contactEmail: "itaguacuclub@gmail.com",
    contactPhone: "(94) 9xxxx-xxxx",
    instagram: "https://www.instagram.com/torneio3", 
    youtube: "https://www.youtube.com/watch?v=torneio3"
  },
  { 
    id: 4, 
    name: "TORNEIO FEMININO", 
    date: "15 de Junho", 
    location: "Arena Nareia", 
    address: "Av. Brasil, Quadra 20 - Redenção - PA",
    description: "Torneio fechado para membros do clube, com premiação para os melhores jogadores da temporada.",
    organization: "NAREIA SPORTS",
    contactEmail: "nareiasports@gmail.com",
    contactPhone: "(94) 9xxxx-xxxx",
    instagram: "https://www.instagram.com/torneio4", 
    youtube: "https://www.youtube.com/watch?v=torneio4"
  },{ 
    id: 5, 
    name: "TORNEIO DE VERÃO", 
    date: "Dezembro", 
    location: "Arena Nareia", 
    address: "Av. Brasil, Quadra 20 - Redenção - PA",
    description: "Torneio fechado para membros do clube, com premiação para os melhores jogadores da temporada.",
    organization: "NAREIA SPORTS",
    contactEmail: "nareiasports@gmail.com",
    contactPhone: "(94) 9xxxx-xxxx",
    instagram: "https://www.instagram.com/torneio5", 
    youtube: "https://www.youtube.com/watch?v=torneio5"
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
      <header className="event-header">
        <div className="event-header-info">
          <h1>{evento.name}</h1>
          <p><FaCalendarAlt /> <strong>{evento.date}</strong> - <FaMapMarkerAlt /> {evento.location}</p>
          <p>{evento.address}</p>
        </div>
        <div className="event-header-buttons">
          <button className="btn-cronograma">Cronograma</button>
          <button className="btn-inscricao">Inscrição</button>
        </div>
      </header>

      <section className="event-description">
        <h2>DESCRIÇÃO</h2>
        <p>{evento.description}</p>
      </section>

      <section className="event-regulation">
        <h2>REGULAMENTO</h2>
        <p>O regulamento detalhado do evento será divulgado conforme a proximidade do torneio.</p>
      </section>

      <section className="event-organization">
        <h2>ORGANIZAÇÃO</h2>
        <p><FaPhoneAlt /> <strong>{evento.contactPhone}</strong></p>
        <p><FaEnvelope /> <a href={`mailto:${evento.contactEmail}`}>{evento.contactEmail}</a></p>
        <p><strong>{evento.organization}</strong></p>
      </section>
    </div>
  );
};

export default EventDetail;
