// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Importando o arquivo de estilos globais
import App from './App';  // Importa o componente principal da aplicação

// Cria o "root" onde o React vai renderizar a aplicação
const rootElement = document.getElementById('root');

// Cria um root e renderiza o componente App
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />  {/* Componente principal da aplicação */}
  </React.StrictMode>
);
