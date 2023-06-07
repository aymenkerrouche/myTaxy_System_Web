import React, { useEffect } from "react";
import { motion } from "framer-motion";
function SectionHeader({ title }) {
  return (
    <motion.h2
      className="text-4xl lg:text-5xl capitalize font-bold mb-4 lg:mb-8 rtl:border-r-8 ltr:border-l-8 border-yellow-800 rounded-md px-4"
      whileInView={{ x: [-200, 0], opacity: [0, 1] }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, repeat: 0 }}
    >
      {title}
    </motion.h2>
  );
}

export default SectionHeader;
