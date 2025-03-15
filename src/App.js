// src/App.js
import React from 'react';  
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // React Router para navegação
import NavBar from './components/NavBar';  // Importando a NavBar
import Home from './pages/Home';  // Página principal (Home)
import EventDetail from './pages/EventDetail';  // Página de detalhes do evento
import Contato from './pages/Contato';  // Página de Contato
import QuemSomos from './pages/QuemSomos';  // Página "Quem Somos"
import './App.css';  // Importando o arquivo de estilos principais

const App = () => {
  return (
    <Router>  {/* Envolvendo toda a aplicação com Router */}
      <NavBar />  {/* A NavBar será exibida em todas as páginas */}
      <Routes>
        <Route path="/" element={<Home />} />  {/* Página inicial com os torneios */}
        <Route path="/event/:id" element={<EventDetail />} />  {/* Página de detalhes do evento */}
        <Route path="/contato" element={<Contato />} />  {/* Página de Contato */}
        <Route path="/quemsomos" element={<QuemSomos />} />  {/* Página Quem Somos */}
      </Routes>
    </Router>
  );
};

export default App;
