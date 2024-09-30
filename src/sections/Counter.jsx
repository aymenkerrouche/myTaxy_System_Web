import React, { useEffect } from "react";
import {Countdown} from "../components";
import {wave } from "../assets";
import { useTranslation } from "react-i18next";
function Counter() {
  const { t } = useTranslation();
  const openingDate = "2024-11-01T00:00:00";
  return (
    <div id="Counter" className="relative w-full h-full">
      <div className="absolute top-0 left-0 w-full h-auto -z-50 opacity-30">
        <img src={wave} />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-auto -z-50 opacity-20">
        <img src={wave} />
      </div>

      <div>
        <Countdown targetDate={openingDate} />
      </div>

    </div>
  );
}

export default Counter;
