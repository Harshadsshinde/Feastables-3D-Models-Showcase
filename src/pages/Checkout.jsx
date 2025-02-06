import React from "react";
import { motion } from "framer-motion";

const Checkout = () => {
  return (
    <motion.div 
      className="text-center p-10 bg-black text-white min-h-screen"
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      exit={{ x: "-100vw" }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <h1 className="text-4xl font-bold">Checkout</h1>
      <p className="text-lg">Complete your purchase now.</p>
    </motion.div>
  );
};

export default Checkout;
