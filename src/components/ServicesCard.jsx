import React from "react";
import { motion } from "framer-motion";
function ServicesCard({ img, alt, name, description }) {
  return (
    <motion.div
      className="max-w-sm justify-self-center bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 cursor-pointer"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0, duration:1 }}
      viewport={{once:true}}
      whileHover={{
        scale: 1.05,
        duration: 0.5,
        easing: 'easeInOutQuint',
      }}
    >
      <img className="w-full" src={img} alt={alt || "my taxi"} loading="lazy" />
      <div className="px-6 py-4">
        <div className="text-xl lg:text-2xl capitalize text-center font-bold mb-2">
          {name}
        </div>
        <p className="text-sm text-gray-800 px-3">{description}</p>
      </div>
    </motion.div>
  );
}

export default ServicesCard;
