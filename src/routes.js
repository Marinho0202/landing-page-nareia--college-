// src/routes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import EventDetail from './pages/EventDetail';

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />  {/* Página inicial com lista de eventos */}
      <Route path="/event/:id" element={<EventDetail />} />  {/* Página de detalhes de cada evento */}
    </Routes>
  );
};

export default RoutesConfig;
