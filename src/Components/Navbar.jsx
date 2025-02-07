import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import { HelpCircle, Globe, Smile, MapPin, ShoppingCart } from "lucide-react";
import Checkout from "../pages/Checkout"; // Import Checkout component

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [cartOpen, setCartOpen] = useState(false); // Cart visibility state

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY <= lastScrollY);
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`w-full bg-[#75D8FF] p-4 flex justify-between items-center border-b-4 transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Left side - Logo + Navigation Links */}
        <div className="flex items-center space-x-8">
          {/* ✅ Clicking Logo Opens Home Page */}
          <Link to="/">
            <img src="/logo.png" alt="Feastables Logo" className="h-12 cursor-pointer" />
          </Link>

          <div className="flex space-x-8 font-bold text-black italic text-2xl">
            {/* ✅ Clicking 'SHOP' Opens Shop Page */}
            <Link to="/shop" className="hover:underline">SHOP</Link>
            <a href="#" className="hover:underline">ETHICAL SOURCING</a>
            <a href="#" className="hover:underline">WORLDWIDE DOMINATION</a>
          </div>
        </div>

        {/* Right side - Icons */}
        <div className="flex space-x-4 text-black">
          <HelpCircle className="h-6 w-6 cursor-pointer" />
          <Globe className="h-6 w-6 cursor-pointer" />
          <Smile className="h-6 w-6 cursor-pointer" />
          <MapPin className="h-6 w-6 cursor-pointer" />
          
          {/* Checkout linking remains unchanged */}
          <button onClick={() => setCartOpen(true)}>
            <ShoppingCart className="h-6 w-6 cursor-pointer" />
          </button>
        </div>
      </nav>

      {/* Checkout (Cart Sidebar) - Kept as is */}
      <Checkout cartOpen={cartOpen} setCartOpen={setCartOpen} />
    </>
  );
}
