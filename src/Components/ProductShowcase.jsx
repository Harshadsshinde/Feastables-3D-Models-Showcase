import { motion } from "framer-motion";

const products = [
  { id: 1, name: "Milk Chocolate", image: "/milk-choco.png" },
  { id: 2, name: "Dark Chocolate", image: "/dark-choco.png" },
];

const ProductShowcase = () => {
  return (
    <div className="grid grid-cols-2 gap-6 p-10">
      {products.map((product) => (
        <motion.div 
          key={product.id}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="p-5 bg-white rounded-xl shadow-lg text-center"
        >
          <img src={product.image} alt={product.name} className="w-40 mx-auto"/>
          <h2 className="text-xl font-bold mt-3">{product.name}</h2>
        </motion.div>
      ))}
    </div>
  );
};

export default ProductShowcase;
