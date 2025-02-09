import React from "react";
import { SectionHeader, Contact, Media, Wave } from "../components";
import { useTranslation } from "react-i18next";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTiktok,
  FaFacebookSquare,
  FaYoutube,
} from "react-icons/fa";
import { motion } from "framer-motion";
function Footer() {
  const { t } = useTranslation();
  return (
    <footer id="contact" className="bg-black text-slate-50">
      <Wave color="000" />
      <div className="container pt-8 md:pt-16 pb-8 flex flex-col md:flex-row">
        <div className="flex-1 flex flex-col gap-y-4 mb-8 lg:mb-0">
          <SectionHeader title={t("contactHeader")} />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <Contact>
              <FaPhone className="text-lg text-yellow-800" />
              <div>
                <p>0795889575</p>
                
              </div>
            </Contact>
            <Contact>
              <FaEnvelope className="text-lg text-yellow-800" />
              <p>contact@mytaxieur.com</p>
            </Contact>
            <Contact>
              <FaMapMarkerAlt className="text-lg text-yellow-800" />
              <p>{t("location")}</p>
            </Contact>
          </motion.div>
        </div>
        <div className="flex-1 flex items-end justify-center">
          <div className="text-center bg-yellow-800 p-4 lg:p-8 rounded-md  text-black">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <Media
                  href="https://www.tiktok.com/@mytaxieur"
                  title="Tiktok"
                  icon={<FaTiktok className="text-3xl lg:text-4xl" />}
                />
                <Media
                  href="https://www.facebook.com/mytaxieurdz/"
                  title="Facebook"
                  icon={<FaFacebookSquare className="text-3xl lg:text-4xl" />}
                />
                <Media
                  href="https://www.youtube.com/@MYTAXIEUR"
                  title="Youtube"
                  icon={<FaYoutube className="text-3xl lg:text-4xl" />}
                />
              </div>
              <p className="text-black font-light lg:text-lg ">
                {`${t("credentials")} `}
                <span className="font-bold uppercase ">
                  {t("myTaxieur")}
                </span>
                <br></br>2024 &copy;
              </p>

              <p class="text-black font-light lg:text-lg "><a href="https://www.mobix-dz.com" target="_blank">made by <span className="font-bold uppercase ">Mobix-dz</span> </a></p>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
