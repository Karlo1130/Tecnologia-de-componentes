import React from 'react';

function InfoBox({ pokemon, onClose }) {
  return (
    <div className="overlay">
      <div className="overlay-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{pokemon.name}</h2>
        <p>Numero: {pokemon.order}</p>
        <p>Peso: {pokemon.weight}</p>
        {/* Puedes mostrar más información sobre el Pokémon aquí si lo deseas */}
      </div>
    </div>
  );
}

export default InfoBox;
