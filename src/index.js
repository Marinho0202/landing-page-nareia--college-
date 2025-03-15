// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Importando o CSS global
import App from './App';  // Importando o App.js

// Cria o "root" onde o React vai renderizar a aplicação
const rootElement = document.getElementById('root');

// Criando a raiz e renderizando o componente App
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />  {/* Componente principal da aplicação */}
  </React.StrictMode>
);
