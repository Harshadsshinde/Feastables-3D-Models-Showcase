import React, { useState } from "react";
import { motion } from "framer-motion"; // Importing Framer Motion

const models = {
  crunch: {
    id: "2e9c8bfe80d74899af3ace7ea99d863f",
    name: "Crunch Bar",
    image: "./crunch.jpg"
  },
  milkChocolate: {
    id: "0cb1cd974c4f48059da6166d8f328e6b",
    name: "Almond Bar",
    image: "./almond.webp"
  },
  almond: {
    id: "20f66c4b91194ca7b60219c0ec7636a5",
    name: "Lunchly",
    image: "./lunchly.webp"
  }
};

// Sketchfab parameters to REMOVE ALL UI ELEMENTS
const sketchfabParams = "?ui_theme=dark&transparent=1&autospin=1&ui_watermark=0&ui_inspector=0&ui_help=0&ui_vr=0&ui_infos=0&ui_controls=0&ui_stop=0";

export default function Feastables3DSection() {
  const [selectedModel, setSelectedModel] = useState(models.crunch.id);
  const [key, setKey] = useState(0); // State to force reload

  const changeModel = (modelId) => {
    setSelectedModel(modelId);
    setKey((prevKey) => prevKey + 1); // Update key to force iframe reload
  };

  return (
    <div className="flex flex-col items-center p-10 bg-blue-400 border-b-4">
      {/* Section Title */}
      <h2
        className="text-5xl font-bold text-white mb-6"
         style={{ WebkitTextStroke: '2px black' }} >
         Explore Our 3D Creations
      </h2>
      {/* 3D Model Viewer */}
      <motion.div
        key={key} // Use key to force re-render of iframe
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.5 }}
        className="w-[800px] h-[550px] overflow-hidden mb-6"
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

      {/* Model Selection Buttons */}
      <div className="flex space-x-4">
        {Object.values(models).map((model) => (
          <button
            key={model.id}
            onClick={() => changeModel(model.id)}
            className="flex flex-col items-center p-2 bg-white rounded-lg flex-row hover:scale-110 transition-transform"
          >
            <img
              src={model.image}
              alt={model.name}
              className="w-24 h-24 object-contain rounded-md shadow-md"
            />
            <span className="mt-2 text-sm font-medium">{model.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
