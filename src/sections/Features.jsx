import React, { useEffect } from "react";
import { features, wave } from "../assets";
import { SectionHeader, FeaturesCard } from "../components";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
function Features() {
  const { t } = useTranslation();
  return (
    <div id="caractéristiques" className="relative w-full h-full">
      <div className="absolute top-0 left-0 w-full h-auto -z-50 opacity-30">
        <img src={wave} />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-auto -z-50 opacity-20">
        <img src={wave} />
      </div>
      <div className="container pt-8 md:pt-16 pb-4 flex flex-col-reverse lg:flex-row">
        <div className="flex-1 self-center">
          <p className="text-lg lg:text-2xl capitalize font-bold mb-4">
            {t("featuresBody")}
          </p>
          <motion.div
            className="rounded-xl shadow-lg max-w-lg gl:max-w-xl lg:mr-4 overflow-hidden"
            initial={{ x: -300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <img
              src={features}
              alt="my taxi"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </motion.div>
        </div>
        <div className="flex-1 mb-8 lg:mb-0">
          <SectionHeader title={t("featuresTitle")} />
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, staggerChildren: 0.5 }}
          >
            <FeaturesCard
              number="1"
              name={t("features")[0].title}
              description={t("features")[0].description}
            />
            <FeaturesCard
              number="2"
              name={t("features")[1].title}
              description={t("features")[1].description}
            />
            <FeaturesCard
              number="3"
              name={t("features")[2].title}
              description={t("features")[2].description}
            />
            <FeaturesCard
              number="4"
              name={t("features")[3].title}
              description={t("features")[3].description}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Features;
