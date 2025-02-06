import React, { useState } from "react";
import { motion } from "framer-motion"; // Importing Framer Motion

const models = {
  crunch: "2e9c8bfe80d74899af3ace7ea99d863f",
  milkChocolate: "0cb1cd974c4f48059da6166d8f328e6b",
  almond: "20f66c4b91194ca7b60219c0ec7636a5"
};

// Sketchfab parameters to REMOVE ALL UI ELEMENTS
const sketchfabParams = "?ui_theme=dark&transparent=1&autospin=1&ui_watermark=0&ui_inspector=0&ui_help=0&ui_vr=0&ui_infos=0&ui_controls=0&ui_stop=0";

export default function Feastables3D() {
  const [selectedModel, setSelectedModel] = useState(models.crunch);
  const [key, setKey] = useState(0); // State to force reload

  const changeModel = (model) => {
    setSelectedModel(model);
    setKey((prevKey) => prevKey + 1); // Update key to force iframe reload
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      {/* 3D Model Display with Transition */}
      <motion.div
        key={key} // Use key to force re-render of iframe
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.5 }}
        className="w-[600px] h-[400px] overflow-hidden"
      >
        <iframe
          key={key} // Update iframe key to trigger full reload
          title="Feastables Bar"
          frameBorder="0"
          allowFullScreen
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          src={`https://sketchfab.com/models/${selectedModel}/embed${sketchfabParams}&t=${Date.now()}`} // Added a timestamp to avoid cache
          className="w-full h-full"
        ></iframe>
      </motion.div>

      {/* Model Selection Buttons Below */}
      <div className="flex space-x-4">
        <button 
          onClick={() => changeModel(models.crunch)} 
          className="p-2 bg-white rounded-lg hover:scale-110 transition-transform"
        >
          <img 
            src="./crunch.jpg" 
            alt="Crunch Bar" 
            className="w-16 h-auto rounded-md shadow-md"
          />
        </button>
        <button 
          onClick={() => changeModel(models.milkChocolate)} 
          className="p-2 bg-white rounded-lg hover:scale-110 transition-transform"
        >
          <img 
            src="./almond.webp" 
            alt="Milk Chocolate" 
            className="w-16 h-auto rounded-md shadow-md"
          />
        </button>
        <button 
          onClick={() => changeModel(models.almond)} 
          className="p-2 bg-white rounded-lg hover:scale-110 transition-transform"
        >
          <img 
            src="./lunchly.webp" 
            alt="Almond Bar" 
            className="w-16 h-auto rounded-md shadow-md"
          />
        </button>
      </div>
    </div>
  );
}
