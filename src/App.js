import React from 'react';  
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import NavBar from './components/NavBar';  
import Home from './pages/Home';  
import EventDetail from './pages/EventDetail';  
import Contato from './pages/Contato';  
import QuemSomos from './pages/QuemSomos';  
import Footer from './components/Footer';  // Importação do Footer
import './App.css';  

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event/:id" element={<EventDetail />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/quemsomos" element={<QuemSomos />} />
      </Routes>
      <Footer />  {}
    </Router>
  );
};

export default App;
