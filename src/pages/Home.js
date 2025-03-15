// src/pages/Home.js
import React from 'react';
import HeroSection from '../components/HeroSection';
import Torneios from '../components/Torneios';  // Importando o componente de torneios

const Home = () => {
  // Dados de exemplo para os torneios
  const eventos = [
    { 
      id: 1, 
      name: "Torneio de Casais", 
      date: "17 de março", 
      location: "Arena Nareia", 
      image: "/assets/evento1.jpg" 
    },
    { 
      id: 2, 
      name: "Torneio CONAFE", 
      date: "19 de março", 
      location: "Arena Nareia", 
      image: "/assets/evento2.jpg" 
    },
    { 
      id: 3, 
      name: "Torneio Interno", 
      date: "25 de abril", 
      location: "Itaguaçu Country Club", 
      image: "/assets/evento3.jpg" 
    },
    { 
      id: 4, 
      name: "Torneio Feminino", 
      date: "Janeiro", 
      location: "Arena Nareia", 
      image: "/assets/evento4.jpg" 
    }
  ];

  return (
    <div>
      <HeroSection />  {/* Exibe a HeroSection com fundo estático */}
      <section className="torneios">  {/* Seção de torneios */}
        <h2>Próximos Torneios</h2>
        <div className="event-list">
          <Torneios eventos={eventos} />  {/* Passando os dados para o componente de Torneios */}
        </div>
      </section>
    </div>
  );
};

export default Home;
