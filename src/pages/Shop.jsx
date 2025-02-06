import React from "react";
import { motion } from "framer-motion";

const products = [
  { id: 1, name: "ChocoDelight Bar", price: "$5" },
  { id: 2, name: "Crunchy Delight", price: "$6" },
  { id: 3, name: "Peanut Butter Bliss", price: "$7" },
];

const Shop = () => {
  return (
    <div className="text-center p-10 min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-8">Shop</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {products.map(product => (
          <motion.div 
            key={product.id} 
            className="p-5 bg-gray-800 rounded-lg cursor-pointer hover:shadow-lg"
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
          >
            <h3 className="text-2xl">{product.name}</h3>
            <p className="text-yellow-500">{product.price}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
