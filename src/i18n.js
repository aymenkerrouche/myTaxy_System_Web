import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Importing translation files

import translationFR from "./constants/translation/fr.json";
import translationAR from "./constants/translation/ar.json";

// Creating object with the variables of imported translation files
const resources = {
  fr: {
    translation: translationFR,
  },
  ar: {
    translation: translationAR,
  },
};

//i18N Initialization

i18n.use(initReactI18next).init({
  resources,
  lng: "fr",
  returnObjects: true,
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
