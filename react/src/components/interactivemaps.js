// src/components/InteractiveMaps.js
import React from 'react';
import Tabs from './tabs';
import './interactivemaps.css';

const InteractiveMaps = () => {
  const tabs = [
    {
      title: "Map 1",
      content: <iframe src="https://maps.ottawa.ca/geoottawa/" width="1000px " height="700px" title="Map 1"></iframe>
    },
    {
      title: "Map 2",
      content: <iframe src="https://snazzymaps.com/style/8097/wy" width="1000px" height="700px" title="Map 2"></iframe>
    },
    {
      title: "Map 3",
      content: <iframe src="https://map-generator.vercel.app/" width="1000px" height="700px" title="Map 3"></iframe>
    },
    {
      title: "Map 4",
      content: <iframe src="https://chatguessr.com/map" width="1000px" height="700px" title="Map 4"></iframe>
    },
  ];

  return (
    <div className="interactive-maps">
      <h1>Interactive Maps</h1>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default InteractiveMaps;
