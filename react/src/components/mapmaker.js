// src/components/MapMaker.js
import React from 'react';
import './mapmaker.css'; // Make sure to create this CSS file

const MapMaker = () => {
  return (
    <div className="mapmaker-container">
      <h1 className="mapmaker-title">Map Maker</h1>
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
