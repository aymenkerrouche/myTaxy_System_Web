import React, { useEffect } from "react";
import { SectionHeader, ServicesCard } from "../components";
import { service1, service2, service3, wave } from "../assets";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

function Services() {
  const { t } = useTranslation();
  return (
    <div id="services" className="relative w-full h-full">
      <div className="absolute top-0 left-0 w-full h-auto -z-50 opacity-20">
        <img src={wave} />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-auto -z-50 opacity-30">
        <img src={wave} />
      </div>
      <div className="container pt-8 md:pt-16 pb-8 mb-16">
        <SectionHeader title={t("servicesTitle")} />
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, staggerChildren: 0.5 }}
        >
          <ServicesCard
            img={service1}
            alt="service 1"
            name={t("services")[0].title}
            description={t("services")[0].description}
          />
          <ServicesCard
            img={service2}
            alt="service 2"
            name={t("services")[0].title}
            description={t("services")[0].description}
          />
          <ServicesCard
            img={service3}
            alt="service 3"
            name={t("services")[0].title}
            description={t("services")[0].description}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Services;
