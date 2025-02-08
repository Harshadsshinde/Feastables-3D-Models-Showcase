import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Checkout from "./pages/Checkout"; // Import Checkout
import Feastables3D from "./Components/Feastables3D";
import NotFound from "./pages/NotFound";
import Sourcing from "./pages/Sourcing";
import World from "./pages/World";
import './index.css';
import './styles.css';
import './move.css';
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/checkout" element={<Checkout />} /> {/* Add Checkout Route */}
          <Route path="/3d-model" element={<Feastables3D />} />
          <Route path="/footer" element={<Footer/>}></Route>
          <Route path="/404" element={<NotFound />} />
          <Route path="/Sourcing" element={<Sourcing />} />
          <Route path="/world" element={<Sourcing />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
