import React from 'react';

function InfoBox({ pokemon, onClose }) {
  return (
    <div className="overlay">
      <div className="overlay-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{pokemon.name}</h2>
        <p>stats</p>
        <p>hp:              {pokemon.stats[0].base_stat}</p>
        <p>ataque:          {pokemon.stats[1].base_stat}</p>
        <p>ataque especial: {pokemon.stats[2].base_stat}</p>
        <p>defensa:         {pokemon.stats[3].base_stat}</p>
        <p>defensa especial {pokemon.stats[4].base_stat}</p>
        <p>velocidad:       {pokemon.stats[5].base_stat}</p>
      </div>
    </div>
  );
}

export default InfoBox;
