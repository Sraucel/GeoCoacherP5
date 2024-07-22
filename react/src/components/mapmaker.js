// src/components/MapMaker.js
import React from 'react';
import './mapmaker.css'; // Make sure to create this CSS file

const MapMaker = () => {
  return (
    <div className="mapmaker-container">
      <h1 className="mapmaker-title">Map Maker / Créateur de Cartes</h1>
      <h2>Here you can use Javascript and google maps to create your own ideas, such as mapping all McDonalds within an area</h2>
      <h3>Ici, vous pouvez utiliser Javascript et Google Maps pour créer vos propres idées, comme cartographier tous les McDonald's d'une zone.</h3>
      <iframe 
        src="https://overpass-turbo.eu/" 
        title="Map Maker"
        className="mapmaker-iframe"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default MapMaker;
