// src/pages/EventDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

const EventDetail = () => {
  const { id } = useParams();  // Obtendo o id do evento da URL

  // Dados de exemplo
  const eventos = [
    { id: 1, name: "Torneio de Casais", date: "17 de março", location: "Arena Nareia", description: "Descrição do torneio de casais.", image: "/assets/evento1.jpg" },
    { id: 2, name: "Torneio CONAFE", date: "19 de março", location: "Arena Nareia", description: "Descrição do torneio CONAFE.", image: "/assets/evento2.jpg" },
    { id: 3, name: "Torneio Interno", date: "25 de abril", location: "Itaguaçu Country Club", description: "Descrição do torneio interno.", image: "/assets/evento3.jpg" },
  ];

  // Filtrando o evento com base no id
  const evento = eventos.find((evento) => evento.id === parseInt(id));

  return (
    <div className="event-detail">
      <h1>{evento.name}</h1>
      <img src={evento.image} alt={evento.name} />
      <p>{evento.date}</p>
      <p>{evento.location}</p>
      <p>{evento.description}</p>
    </div>
  );
};

export default EventDetail;
