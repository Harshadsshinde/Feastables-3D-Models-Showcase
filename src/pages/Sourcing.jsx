import React from 'react';
import Footer from '../Components/Footer';

const Sourcing = () => {
  return (
    // Wrap everything in a div with overflow-x-hidden so that the page doesn't scroll horizontally.
    <div className="overflow-x-hidden">
      <div className="bg-white m-7 mx-auto overflow-x-hidden border-4 rounded-2xl">
        <img src="./sourcing/banner.webp" alt="Banner" className="w-full" />
      </div>
      <div className="bg-white border-4 p-8 m-6 rounded-2xl">
        <h1 className="text-8xl font-bold font-[Anton] text-blue-400 text-border text-center">
          OUR PRINCIPLES
        </h1>

        <div className="flex flex-row text-2xl font-bold justify-around mt-8">
          <div className="flex flex-col items-center">
            <img 
              src="./sourcing/p1.webp" 
              alt="Principle 1" 
              className="w-80 h-80 rounded-full border-2 border-gray-300" 
            />
            <p className="text-center mt-2">
              Help farmers and their families <br /> earn a living income.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img 
              src="./sourcing/p2.webp" 
              alt="Principle 2" 
              className="w-80 h-80 rounded-full border-2 border-gray-300" 
            />
            <p className="text-center mt-2">
              Invest in local communities, in <br />children’s education and their wellbeing.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img 
              src="./sourcing/p3.webp" 
              alt="Principle 3" 
              className="w-80 h-80 rounded-full border-2 border-gray-300" 
            />
            <p className="text-center mt-2">
              Ensure farmers have access to <br /> skilled and mechanized labor to <br /> successfully operate their farms,<br /> without child labor.
            </p>
          </div>
        </div>
      </div>

      <div className="m-7 bg-blue-400 h-100 border-4 rounded-2xl relative overflow-hidden">
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-30">
          <p className="text-black text-3xl font-bold text-center">
            Feastables has joined Tony’s Open Chain, a leader in transforming cocoa supply chains, as its <br />
            latest Mission Ally and is the first major US chocolate brand to join the initiative. The two <br />
            organizations have been in conversations since October 2023, signed an agreement in May <br />
            2024, and this coming harvest will be scaling up their partnership.
          </p>
          <a
            href="https://feastables.myshopify.com/pages/feastables-and-tonys-open-chain-partnership-announcement"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-6 py-3 mb-5 bg-yellow-500 border-4 text-3xl text-black font-semibold rounded-lg transition absolute top-70 m-4 left-1/2 transform -translate-x-1/2 border-black hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]">
              VIEW PRESS RELEASE
            </button>
          </a>
        </div>
      </div>

      <div className="mt-5 border-t-4">
        <div className="bg-blue-400 border-4 m-6 text-center rounded-2xl flex flex-row">
          {/* Text Side */}
          <div className="w-1/2 p-4 flex items-center align-middle font-bold justify-center text-3xl">
            <p>
              “Tony’s Open Chain is a leader and <br /> a best-in-class representation of<br /> the highest ethical standards for<br /> our industry. As a Mission Ally, we<br /> share ethical sourcing principles <br />and also a commitment to take <br />transformative actions that are <br />already improving the cocoa sector<br /> throughout its supply chain. We <br /> know this will take time – but we <br />can’t do it alone so partnerships like <br />the one with Tony’s Open Chain matter."
              <br /><br />
              -Adriaan Verbeke, Global Head of Ethical Sourcing
            </p>
          </div>
          {/* Image Side */}
          <div className="w-1/2 border-l-4">
            <img
              src="./sourcing/img1.webp"
              alt="Sourcing Image"
              className="h-full w-full object-cover rounded-r-2xl"
            />
          </div>
        </div>
      </div>

      <div className="bg-amber-300 border-t-4">
        <div className="bg-white border-4 rounded-2xl items-center justify-center p-5 text-center m-6">
          <img src="/sourcing/ici.avif" className="h-30 relative left-130 m-6 items-center justify-center" alt="" />
          <h1 className="text-5xl font-bold font-[Anton] text-blue-400 text-border p-5 text-center">
            FEASTABLES JOINS THE <br />
            INTERNATIONAL COCOA INITIATIVE
          </h1>
          <p className="text-3xl font-bold p-6">
            “Our membership with ICI is a meaningful step for Feastables <br /> as we seek to help transform the West African cocoa sector by <br /> working on-the-ground with farmers, workers and within their <br /> communities to address the inequities faced by millions <br />throughout the supply chain.”
          </p>
          <a
            href="https://www.cocoainitiative.org/news/global-snacking-company-feastables-joins-ici"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-6 py-3 relative bg-yellow-500 border-4 text-3xl text-black font-semibold rounded-lg transition m-4 left-50 transform -translate-x-1/2 border-black hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]">
              VIEW PRESS RELEASE
            </button>
          </a>
        </div>
        <div className="m-6">
          <div className="container mx-auto border-4 m-6 bg-white py-6 my-6 rounded-2xl">
            {/* Remove the invalid class syntax here—only use overflow-x-auto if horizontal scrolling is intended in this container */}
            <div className="overflow-x-auto">
              {/* Flex container to align images in a row */}
              <div className="flex mx-auto space-x-4 gap-6 pb-4">
                <img
                  src="./sourcing/img2.webp"
                  alt="Image 1"
                  className="w-130 h-130 ml-6 border-4 object-cover flex-shrink-0 rounded-lg"
                />
                <img
                  src="./sourcing/img3.webp"
                  alt="Image 2"
                  className="w-130 h-130 border-4 object-cover flex-shrink-0 rounded-lg"
                />
                <img
                  src="./sourcing/img4.webp"
                  alt="Image 3"
                  className="w-130 h-130 border-4 object-cover flex-shrink-0 rounded-lg"
                />
                <img
                  src="./sourcing/img5.webp"
                  alt="Image 3"
                  className="w-130 h-130 border-4 object-cover flex-shrink-0 rounded-lg"
                />
                <img
                  src="./sourcing/img6.webp"
                  alt="Image 4"
                  className="w-130 h-130 border-4 object-cover flex-shrink-0 rounded-lg"
                />
                <img
                  src="./sourcing/img7.webp"
                  alt="Image 5"
                  className="w-130 h-130 m-6 border-4 object-cover flex-shrink-0 rounded-lg"
                />
                {/* Add more images as needed */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Sourcing;
