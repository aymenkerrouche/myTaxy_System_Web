import React, { useState, useEffect } from "react";
import { Navbar, Hero, Features, Services, Footer } from "./sections";
import { Helmet } from "react-helmet";
function App() {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "fr"
  );
  function changeLanguage(language) {
    setLanguage(language);
    localStorage.setItem("language", language);
  }
  useEffect(() => {
    if (
      navigator.language.startsWith("ar") &&
      !localStorage.getItem("language")
    ) {
      localStorage.setItem("language", "ar");
      setLanguage("ar");
    }
  }, []);

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: language,
          dir: language === "fr" ? "ltr" : "rtl",
        }}
      />
      <Navbar language={language} changeLanguage={changeLanguage} />
      <Hero language={language}/>
      <Features />
      <Services />
      <Footer />
    </>
  );
}

export default App;
