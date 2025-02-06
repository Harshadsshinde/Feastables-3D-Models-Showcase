import React, { useState, useEffect } from "react";
import { HelpCircle, Globe, Smile, MapPin, ShoppingCart } from "lucide-react";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false); // Hide navbar on scroll down
      } else {
        setIsVisible(true); // Show navbar on scroll up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`w-full bg-[#75D8FF] p-4 flex justify-between items-center border-b-4 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Left side - Logo + Navigation Links */}
      <div className="flex items-center space-x-8">
        <img src="/logo.png" alt="Feastables Logo" className="h-12" />
        <div className="flex space-x-8 font-bold text-black italic text-2xl">
          <a href="#" className="hover:underline">
            SHOP
          </a>
          <a href="#" className="hover:underline">
            ETHICAL SOURCING
          </a>
          <a href="#" className="hover:underline">
            WORLDWIDE DOMINATION
          </a>
        </div>
      </div>

      {/* Right side - Icons */}
      <div className="flex space-x-4 text-black">
        <HelpCircle className="h-6 w-6 cursor-pointer" />
        <Globe className="h-6 w-6 cursor-pointer" />
        <Smile className="h-6 w-6 cursor-pointer" />
        <MapPin className="h-6 w-6 cursor-pointer" />
        <ShoppingCart className="h-6 w-6 cursor-pointer" />
      </div>
    </nav>
  );
}
