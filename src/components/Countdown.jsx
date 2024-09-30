import React, { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";

const Countdown = ({ targetDate }) => {
  const [timeRemaining, setTimeRemaining] = useState({});

  const { t } = useTranslation();

  // Function to calculate the time remaining
  const calculateTimeRemaining = () => {
    const now = new Date().getTime();
    const distance = new Date(targetDate).getTime() - now;

    if (distance < 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  // Update countdown every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="countdown-container">
      <h1 className="text-4xl text-white md:text-5xl lg:text-6xl tracking-tight font-extrabold mb-8 capitalize white">🚀 {t("counterTitle")} 🚀</h1>
      <h2 className="subtitle"> {t("counterDesc")}</h2>
      <div className="countdown">
        <span>{timeRemaining.days} {t("Jours")} </span>
        <span>{timeRemaining.hours} {t("h")} </span>
        <span>{timeRemaining.minutes} {t("m")} </span>
        <span>{timeRemaining.seconds} {t("s")}</span>
      </div>
    </div>
  );
};

export default Countdown;
