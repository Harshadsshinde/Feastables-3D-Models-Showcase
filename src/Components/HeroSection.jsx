import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center bg-yellow-400">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="text-6xl font-bold"
      >
        Welcome to Feastables 🍫
      </motion.h1>
      <motion.img 
        src="/choco-bar.png" 
        alt="Chocolate Bar"
        className="w-80 mt-5"
        initial={{ scale: 0.8 }} 
        animate={{ scale: 1 }} 
        transition={{ duration: 0.5 }}
      />
    </div>
  );
};

export default HeroSection;
