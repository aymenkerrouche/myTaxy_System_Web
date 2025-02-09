import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { logo, openMenu, closeMenu, fr, ar } from "../assets";
import { FaAngleDown } from "react-icons/fa";
import { motion } from "framer-motion";

function Navbar({ language, changeLanguage }) {
  const [isActive, setIsActive] = useState("accueil");
  const [isOpen, setisOpen] = useState(false);
  const [isDropdownOpen, setisDropdownOpen] = useState(false);
  const { t, i18n } = useTranslation();
  function toggleMenu() {
    setisOpen((prev) => !prev);
  }
  function toggleDropdown() {
    setisDropdownOpen((prev) => !prev);
  }
  function handleScroll() {
    const scrollPosition = window.scrollY;
    const homeH = document.getElementById("accueil").clientHeight;
    const featuresH = document.getElementById("caractéristiques").clientHeight;
    const servicesH = document.getElementById("services").clientHeight;
    const contactH = document.getElementById("contact").clientHeight;
    if (scrollPosition < homeH * 0.66) {
      setIsActive("accueil");
    } else if (scrollPosition <= homeH + featuresH * 0.66) {
      setIsActive("caractéristiques");
    } else if (scrollPosition <= homeH + featuresH + servicesH * 0.66) {
      setIsActive("services");
    } else {
      setIsActive("contact");
    }
  }
  function toggleLanguage() {
    try {
      const fr = "fr";
      const ar = "ar";
      if (language === fr) {
        changeLanguage(ar);
        i18n.changeLanguage(ar);
      } else {
        changeLanguage(fr);
        i18n.changeLanguage(fr);
      }
    } catch (error) {
      console.error(error);
    }
    isDropdownOpen && toggleDropdown();
  }
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className="sticky top-0 z-40 py-2 bg-white backdrop-blur-sm shadow-sm">
      <div className="container flex items-center justify-between">
        <a href="/">
          <div className="flex items-center justify-center gap-4 min-w-max">
            <div className="bg-white p-2 rounded-full border">
              <img
                src={logo}
                alt="my taxi"
                width="36"
                height="36"
                loading="lazy"
              />
            </div>
            <h3 className="text-xl lg:text-2xl text-black font-bold uppercase">
              {`${t("myTaxi")}`}
            </h3>
          </div>
        </a>
        {/* TABLET AND DESKTOP */}
        <nav className="hidden md:flex items-center md:ml-8">
          <ul className="flex flex-row gap-4 xl:gap-8">
            {t("nav").map(({ name, link }) => (
              <li
                key={link}
                className={`capitalize xl:text-lg cursor-pointer transition-colors hover:text-yellow-500 hover:underline hover:underline-offset-8 
            ${
              isActive === link.substr(1) &&
              "text-yellow-500 font-bold underline underline-offset-8"
            }`}
              >
                <a href={link} className="truncate">
                  {name}
                </a>
              </li>
            ))}
          </ul>
          <div className="relative inline-block text-left mx-4 lg:mx-8">
            <div className="flex items-center justify-center">
              <button
                className="flex items-center justify-center gap-2 rounded-md py-2 px-4 text-sm font-semibold text-gray-800 shadow-sm hover:bg-gray-50"
                onClick={toggleDropdown}
              >
                <img
                  src={language === "fr" ? fr : ar}
                  alt="fr"
                  className="w-4 h-4 "
                  loading="lazy"
                />
                <span className="hidden lg:inline">{`${t("language")}`}</span>
                <div>
                  <FaAngleDown />
                </div>
              </button>
            </div>
            {isDropdownOpen && (
              <div className="absolute right-0 left-0 z-50 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg">
                <div className="py-2 w-full">
                  <div
                    className="text-gray-800 flex items-center gap-2 px-4 py-2 text-sm  hover:bg-gray-100 cursor-pointer"
                    onClick={toggleLanguage}
                  >
                    <img
                      src={language === "fr" ? ar : fr}
                      alt="language"
                      className="w-4 h-4 "
                      loading="lazy"
                    />
                    <span className="hidden lg:inline">
                      {language === "fr" ? "العربية" : "français"}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* MOBILE */}
        <div className="flex md:hidden ">
          <button onClick={toggleMenu} className="p-2">
            <img
              src={isOpen ? closeMenu : openMenu}
              alt="menu"
              width="24"
              height="24"
              loading="lazy"
            />
          </button>
          {isOpen && (
            <>
              <div
                className={`w-screen h-screen bg-black/60 fixed top-16 left-0 z-40`}
              ></div>
              <motion.nav
                className="absolute top-24 left-4 right-4 z-50 bg-white shadow-sm border rounded-md py-8 px-4"
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ul className="flex flex-col items-center gap-4 ">
                  {t("nav").map(({ name, link }) => (
                    <li key={name} className="w-full">
                      <a
                        href={link}
                        className={`block w-full text-center py-2 capitalize text-lg sm:text-xl cursor-pointer rounded-md transition-colors hover:bg-yellow-800 hover:text-white
                ${isActive === link.substr(1) && "bg-yellow-800 text-white"}`}
                        onClick={() => {
                          setIsActive(link.substr(1));
                          toggleMenu();
                        }}
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                  <div className="w-full h-[2px] bg-gray-500 rounded-full" />
                  <div className="flex items-center justify-left w-full p-0 rounded-lg overflow-hidden shadow-md">
                    <button
                      className={`flex-1 flex items-center justify-center gap-4 p-4 cursor-pointer transition-colors ${
                        language === "fr"
                          ? "bg-yellow-800 text-white"
                          : "hover:bg-yellow-300"
                      }`}
                      onClick={() => {
                        toggleLanguage();
                        toggleMenu();
                      }}
                    >
                      <img
                        src={fr}
                        alt="fr"
                        className="w-4 h-4 "
                        loading="lazy"
                      />
                      français
                    </button>
                    <button
                      className={`flex-1 flex items-center justify-center gap-4 p-4 cursor-pointer transition-colors ${
                        language === "ar"
                          ? "bg-yellow-800 text-white"
                          : "hover:bg-yellow-300"
                      }`}
                      onClick={() => {
                        toggleLanguage();
                        toggleMenu();
                      }}
                    >
                      <img
                        src={ar}
                        alt="ar"
                        className="w-4 h-4"
                        loading="lazy"
                      />
                      العربية
                    </button>
                  </div>
                </ul>
              </motion.nav>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
