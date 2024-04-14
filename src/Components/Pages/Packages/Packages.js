import React, { useState, useEffect } from 'react';
import './packages.css';

const Packages = () => {
  const [destinos, setDestinos] = useState([]);

  useEffect(() => {
    fetch('https://www.google.com/search?q=destinos+turisticos')
      .then(response => response.json())
      .then(data => setDestinos(data));
  }, []);

  return (
    <div className="destinos">
      {destinos.map(destino => (
        <div key={destino.id} className="destino">
          <h2>{destino.titulo}</h2>
          <img src={destino.imagen} alt={destino.titulo} />
          <p>{destino.descripcion}</p>
          <p>Precio: {destino.precio}</p>
          <button>Reservar</button>
        </div>
      ))}
    </div>
  );
};

export default Packages;
