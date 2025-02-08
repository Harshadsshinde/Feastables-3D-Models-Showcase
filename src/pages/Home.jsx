import React from "react";
import ScrollingText from "../Components/ScrollingText";
import Navbar from "../Components/Navbar"; // Ensure the correct import path
import feastablesHero from "/animated.webp"; // Replace with the actual image path
import Video from "../Components/video"
import AnimatedBar from "../Components/AnimatedBar";
import footer from "../Components/Footer";
import Footer from "../Components/Footer";
const Home = () => {
  return (
    <div>
      {/* Navbar at the top */}
     

      {/* Hero Section */}
      <div className="relative w-full h-screen flex flex-col items-center justify-center text-center border-b-4">
        {/* Hero Image */}
        <img
          src={feastablesHero}
          alt="Feastables Hero"
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        />

        {/* Hero Content */}
        <div className="bg-transparent bg-opacity-50 p-6 rounded-lg border-b-4 ">
          <h1 className="text-5xl font-bold text-white"></h1>
          <button className="px-6 py-3 bg-yellow-500 border-4 text-3xl text-black font-semibold rounded-lg  transition absolute left-20 top-150 border-black  hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] ">
          Taste the Difference
          </button>
        </div>
      </div>

      {/* Scrolling Text Section */}
      <ScrollingText />
      <Video/>
      <AnimatedBar/>
      <Footer/>
    </div>
  );
};

export default Home;
