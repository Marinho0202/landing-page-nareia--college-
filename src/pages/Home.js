// src/pages/Home.js
import React from 'react';
import HeroSection from '../components/HeroSection';  // Importando HeroSection
import Eventos from '../components/Eventos';  // Importando Eventos
import './Home.css';

const Home = () => {
  const eventos = [
    { id: 1, name: "Torneio de Casais", date: "17 de março", location: "Arena Nareia", image: "/assets/evento1.jpg" },
    { id: 2, name: "Torneio CONAFE", date: "19 de março", location: "Arena Nareia", image: "/assets/evento2.jpg" },
    { id: 3, name: "Torneio Interno", date: "25 de abril", location: "Itaguaçu Country Club", image: "/assets/evento3.jpg" },
  ];

  return (
    <div>
      <HeroSection />  {/* Seção Hero */}
      <Eventos eventos={eventos} />  {/* Lista de Eventos */}
    </div>
  );
};

export default Home;
