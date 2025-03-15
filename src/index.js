// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  
import App from './App';  // Importa o componente principal da aplicação
import { BrowserRouter as Router } from 'react-router-dom';  // Importa o Router para a navegação

// Cria o "root" onde o React vai renderizar a aplicação
const rootElement = document.getElementById('root');

// Cria um root e renderiza o componente App, envolvido pelo Router
const root = ReactDOM.createRoot(rootElement);

root.render(
  <Router>  {/* Envolvendo a aplicação com Router */}
    <App />  {/* Componente principal da aplicação */}
  </Router>
);
