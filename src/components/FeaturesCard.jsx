import React from "react";
import { motion } from "framer-motion";
function FeaturesCard({ name, description, number }) {
  return (
    <motion.div
      className="max-w-sm justify-self-center flex flex-col items-center justify-center py-4"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{once:true}}
      transition={{ duration: 1 }}
    >
      <div className="flex items-center justify-center w-16 h-16 p-2 lg:p-3 text-2xl font-black text-black bg-white hover:bg-yellow-800 border-4 border-yellow-800 rounded-full shadow-lg cursor-pointer transition hover:scale-110 mb-4">
        {number}
      </div>
      <h3 className="text-xl lg:text-2xl capitalize font-bold mb-2 text-center">
        {name}
      </h3>
      <p className="text-center text-sm text-gray-800 px-3">{description}</p>
    </motion.div>
  );
}

export default FeaturesCard;
