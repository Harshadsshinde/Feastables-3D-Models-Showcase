import React, { useState } from "react";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Milk Chocolate",
    price: 34.99,
    rating: 5.0,
    reviews: 4,
    image: "../img/img1.webp",
    video: "../img/vid1.mp4",
  },
  {
    id: 2,
    name: "Peanut Butter",
    price: 36.99,
    rating: 4.8,
    reviews: 5,
    image: "/images/peanut_butter.jpg",
    video: "/videos/peanut_butter.mp4",
  },
  {
    id: 3,
    name: "Milk Crunch",
    price: 32.99,
    rating: 4.9,
    reviews: 6,
    image: "/images/milk_crunch.jpg",
    video: "/videos/milk_crunch.mp4",
  },
  {
    id: 4,
    name: "Peanut Butter Crunch",
    price: 38.99,
    rating: 4.7,
    reviews: 7,
    image: "/images/peanut_butter_crunch.jpg",
    video: "/videos/peanut_butter_crunch.mp4",
  },
  {
    id: 5,
    name: "Almond ",
    price: 39.99,
    rating: 4.9,
    reviews: 8,
    image: "/images/almond_dark_chocolate.jpg",
    video: "/videos/almond_dark_chocolate.mp4",
  },
  {
    id: 6,
    name: " Dark Chocolate",
    price: 38.99,
    rating: 4.9,
    reviews: 7,
    image: "/images/almond_dark_chocolate.jpg",
    video: "/videos/almond_dark_chocolate.mp4",
  }
];

export default function Shop() {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [quantity, setQuantity] = useState(1);
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="flex flex-col md:flex-row bg-blue-400  p-8">

      {/* Left Side - Image & Video Toggle */}
      <div className="w-full md:w-1/2 flex flex-col border-r-4 items-center ">
        <div className="overflow-hidden w-150 h-150 flex items-center justify-center bg-gray-100 rounded-lg">
          {showVideo ? (
            <video
              src={selectedProduct.video}
              controls
              className="w-full rounded-lg"
            ></video>
          ) : (
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-full object-cover rounded-lg"
            />
          )}
        </div>

        {/* Image & Video Toggle */}
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
              className="w-16 h-16 rounded-lg border-2 border-transparent  hover:border-blue-500"
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
            <div className="w-16 h-16 bg-gray-300 flex items-center justify-center rounded-lg border-2 border-transparent hover:border-blue-500">
              <img src="./milk.webp" alt="" />
            </div>
            
          </label>
          
        </div>
      </div>

      {/* Right Side - Product Details & Selection */}
      <div className="w-full md:w-1/2 flex flex-col space-y-4 p-4">
        <h1 className="text-3xl font-bold">Chocolate Bars</h1>
        <div className="">
        <h2 className="text-5xl text-pink-500 font-semibold">{selectedProduct.name}</h2>
        <p className="text-xl">10 Pack | ${selectedProduct.price.toFixed(2)}</p>
        <p className="text-yellow-500 font-bold">⭐ {selectedProduct.rating} out of 5.0 ({selectedProduct.reviews})</p>

        <p className="text-gray-600">Max 3 per item</p>
        <p className="text-gray-600">Delivered in 3-5 business days</p>
        </div>
        {/* Product Selection */}
        <div className=" flex-row  space-y-2 grid grid-cols-2 gap-4 ">
          {products.map((product) => (
            <label key={product.id} className="flex items-center border-2 bg-white p-3 cursor-pointer space-x-2">
              <input
                type="radio"
                name="chocolate"
                value={product.id}
                checked={selectedProduct.id === product.id}
                onChange={() => {
                  setSelectedProduct(product);
                  setShowVideo(false);
                }}
              />
              <span className="text-lg">{product.name}</span>
            </label>
          ))}
        </div>
      
        {/* Quantity Selector */}
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
          className=" text-white bg-pink-500 text-xl px-6 py-3 rounded-lg font-bold"
        >
        
          ADD TO BAG
        </motion.button>
      </div>
    </div>
  );
}