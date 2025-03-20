// src/pages/Home.js
import React from 'react';
import Torneios from '../components/Torneios';  // Importando o componente de torneios

const Home = () => {
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
    },
    { 
      id: 4, 
      name: "Torneio Feminino", 
      date: "Janeiro", 
      location: "Arena Nareia", 
      image: "/assets/Torneio4.jpg", 
      instagram: "https://www.instagram.com/torneio4", 
      youtube: "https://www.youtube.com/watch?v=torneio4"
    },
    { 
      id: 5, 
      name: "Torneio de Verão", 
      date: "Dezembro", 
      location: "Arena Nareia", 
      image: "/assets/Torneio5.png", 
      instagram: "https://www.instagram.com/torneio5", 
      youtube: "https://www.youtube.com/watch?v=torneio5"
    },
  ];

  return (
    <div>
      <Torneios eventos={eventos} />
    </div>
  );
};

export default Home;
