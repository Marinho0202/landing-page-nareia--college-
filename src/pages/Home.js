// src/pages/Home.js
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Eventos from '../components/Eventos';

const Home = () => {
  const eventos = [
    { nome: "Torneio Nareia Beach", data: "15 de Abril" },
    { nome: "Desafio Nareia", data: "30 de Maio" },
    // Adicione mais eventos conforme necessário
  ];

  return (
    <div>
      <Header />
      <HeroSection />
      <Eventos eventos={eventos} />
    </div>
  );
};

export default Home;
