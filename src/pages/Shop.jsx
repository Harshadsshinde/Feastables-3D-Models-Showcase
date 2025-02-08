import React, { useState } from "react";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext"; // Import Cart Context
import Footer from "../Components/Footer";

const products = [
  {
    id: 1,
    name: "Milk Chocolate",
    price: 34.99,
    rating: 5.0,
    reviews: 4,
    image: "../cart/milk.webp",
    video: "../cart/milk.mp4",
  },
  {
    id: 2,
    name: "Peanut Butter",
    price: 36.99,
    rating: 4.8,
    reviews: 5,
    image: "../cart/penut.webp",
    video: "../cart/penut.mp4",
  },
  {
    id: 3,
    name: "Milk Crunch",
    price: 32.99,
    rating: 4.9,
    reviews: 6,
    image: "../cart/milkcrunch.webp",
    video: "../cart/milkcrunch.mp4",
  },
  {
    id: 4,
    name: "Dark Chocolate",
    price: 38.99,
    rating: 4.7,
    reviews: 7,
    image: "../cart/dark.webp",
    video: "../cart/dark.mp4",
  },
  {
    id: 5,
    name: "Almond Crunch",
    price: 35.99,
    rating: 4.6,
    reviews: 5,
    image: "../cart/almond.webp",
    video: "../cart/almond.mp4",
  },
  {
    id: 6,
    name: "Cookies & Creme",
    price: 35.99,
    rating: 4.6,
    reviews: 5,
    image: "../cart/cookies.webp",
    video: "../cart/cookies.mp4",
  },
];

export default function Shop() {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [quantity, setQuantity] = useState(1);
  const [showVideo, setShowVideo] = useState(false);

  const { addToCart } = useCart(); // Use CartContext

  return (
    <>
    <div className="flex flex-col md:flex-row bg-blue-400 p-8">
      
      <div className="w-full md:w-1/2 flex flex-col border-r-4 items-center">

        <div className=" overflow-hidden w-170 h-150 flex items-center justify-center bg-gray-100 rounded-lg">
          
          {showVideo ? (
            <video
              src={selectedProduct.video}
              controls
              autoPlay
              loop
              className="w-full rounded-lg"
            ></video>
          ) : (
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-full bg-blue-400 object-cover rounded-lg"
            />
          )}
        </div>

        <div className="flex space-x-4 mt-4">
          <label className="cursor-pointer">
            <input
              type="radio"
              name="media"
              checked={!showVideo}
              onChange={() => setShowVideo(false)}
              className="hidden"
            />
            <img
              src={selectedProduct.image}
              alt="Image Preview"
              className="w-16 h-16 rounded-lg border-2 border-transparent hover:border-pink-500"
            />
          </label>
          <label className="cursor-pointer">
            <input
              type="radio"
              name="media"
              checked={showVideo}
              onChange={() => setShowVideo(true)}
              className="hidden"
            />
            <img
              src="../cart/vid.webp"
              alt="Video Preview"
              className="w-16 h-16 rounded-lg border-2 border-transparent hover:border-pink -500"
            />
          </label>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex flex-col space-y-4 p-4">
        <h1 class="text-3xl font-bold text-stroke text-stroke-2 text-stroke-black">
          Chocolate Bars
        </h1>

        <h2 className="text-5xl text-pink-500 font-semibold">
          {selectedProduct.name}
        </h2>
        <p className="text-xl">
          10 Pack | ${selectedProduct.price.toFixed(2)}
        </p>
        <p className="text-yellow-500 font-bold">
          ⭐ {selectedProduct.rating} out of 5.0 ({selectedProduct.reviews})
        </p>

        <div className="grid grid-cols-2 gap-4">
          {products.map((product) => (
            <label
              key={product.id}
              className={`border-4 p-3 text-2xl bg-white cursor-pointer space-x-2 ${
                selectedProduct.id === product.id
                  ? "border-pink-500"
                  : "border-transparent"
              }`}
            >
              <input
                type="radio"
                checked={selectedProduct.id === product.id}
                onChange={() => {
                  setSelectedProduct(product);
                  setShowVideo(false);
                }}
                className="hidden"
              />
              <span>{product.name}</span>
            </label>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <button
            className="px-4 py-2 bg-gray-300 rounded"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
          >
            -
          </button>
          <span className="text-xl font-bold">{quantity}</span>
          <button
            className="px-4 py-2 bg-gray-300 rounded"
            onClick={() => setQuantity(Math.min(3, quantity + 1))}
          >
            +
          </button>
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-white bg-pink-500 text-xl px-6 py-3 rounded-lg font-bold"
          onClick={() => addToCart(selectedProduct, quantity)}
        >
          ADD TO BAG
        </motion.button>
      </div>
     
    </div>
     <Footer/>
     </>
  );
}
