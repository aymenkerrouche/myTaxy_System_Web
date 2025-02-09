import React from "react";
import { appstoreIcon, playstoreIcon, heroCar, halfCircle, driver } from "../assets";
import { Button, Wave } from "../components";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

function Hero({ language }) {
  const { t } = useTranslation();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await fetch('https://mytaxieur.com/api/addChauffeur', {
        method: 'POST',
      
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        alert('Driver added successfully!');
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
      <div id="accueil" className="relative bg-yellow-800 text-black overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-full h-auto z-0 opacity-10">
          <img src={halfCircle} alt="Background Half Circle" />
        </div>
        <div className="absolute bottom-0 right-0 w-full h-auto z-0 opacity-20">
          <img src={halfCircle} alt="Background Half Circle" />
        </div>
        <div className="container flex flex-col lg:flex-row py-20 md:py-24 relative z-40">
          <motion.div
            className="flex-1 mb-4 lg:mb-0"
            viewport={{ once: true }}
            whileInView={{ opacity: [0, 1], y: [10, 0] }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight font-extrabold mb-8 capitalize">
              {t("heroTitle")} <span className="text-white uppercase">{`${t("myTaxi")} `}</span>
            </h1>
            <p className="font-normal text-gray-800 text-lg md:text-xl mb-6">
              {t("heroSubtitle")}
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <Button href="https://forms.gle/DruWq8X5EqpZ2ZNx7">
                <img
                  src={appstoreIcon}
                  alt="Investir"
                  width="40"
                  height="40"
                  loading="lazy"
                />
                {t("appStore")}
              </Button>
              <Button href="https://play.google.com/store">
                <img
                  src={playstoreIcon}
                  alt="App Store"
                  width="36"
                  height="36"
                  loading="lazy"
                />
                {t("playStore")}
              </Button>
            </div>
            <br />
            <div className="flex justify-center md:justify-start gap-4">
              <Button 
              href={"https://inscription-chauffeur.mytaxieur.com/"}
              >
                <img
                  src={driver}
                  alt="Driver"
                  width="36"
                  height="36"
                  loading="lazy"
                />
                {t("Chauffeur")}
              </Button>
          

            </div>
          </motion.div>
          <div className="flex-1 flex flex-col mt-8 md:mt-0">
            <motion.div
              className="px-8 md:pl-0 md:pr-12 lg:ml-8 w-full h-full max-w-3xl cursor-pointer"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              whileHover={language === "ar" ? { x: [0, -100] } : { x: [0, 100] }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <img
                src={heroCar}
                alt="my taxieur"
                className="w-full h-full object-contain object-center rtl:-scale-x-100 ltr:scale-x-100"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
        <Wave />
      </div>
  );
}

export default Hero;
