import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Checkout from "./pages/Checkout"; // ✅ Import Checkout
import Feastables3D from "./Components/Feastables3D";

import './index.css';
import './styles.css';
import './move.css'; 

function App() {
  return (
    <Router>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/checkout" element={<Checkout />} /> {/* ✅ Add Checkout Route */}
          <Route path="/3d-model" element={<Feastables3D />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
