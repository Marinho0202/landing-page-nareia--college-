// src/components/Eventos.js
import React from 'react';

const Eventos = ({ eventos }) => {
  return (
    <section className="eventos">
      <h2>Próximos Eventos</h2>
      <ul>
        {eventos.map((evento, index) => (
          <li key={index}>
            <h3>{evento.nome}</h3>
            <p>{evento.data}</p>
            <button>Inscreva-se</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Eventos;
