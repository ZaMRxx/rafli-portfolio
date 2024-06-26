import React, { useEffect, useState } from "react";
import rapli from "../assets/photo.png";
import newyork from "../assets/newyork.png";
import { motion } from "framer-motion";
import bgbg from "../assets/bgbg.jpg";
import Snowfall from 'react-snowfall';

const Landing = () => {
  const [time, setTime] = useState(new Date());
  const [isDay, setIsDay] = useState(true);

  useEffect(() => {
    const updateTime = () => {
      const currentTime = new Date();
      setTime(currentTime);
      const tangerangTime = new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "Asia/Jakarta",
      }).format(currentTime);
      setIsDay(currentTime.getHours() >= 6 && currentTime.getHours() < 18);
      return tangerangTime;
    };

    const intervalId = setInterval(updateTime, 60000);
    updateTime();

    return () => clearInterval(intervalId);
  }, []);

  const tangerangTime = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "Asia/Jakarta",
  }).format(time);

  return (
    <>
      <div className="absolute right-0 overflow-hidden skew-x-12 bg-purple-400 rounded-full animate-pulse w-32 h-32 sm:w-96 sm:h-96 mix-blend-mode" />
      <div className="absolute skew-x-12 skew-y-12 animate-pulse right-10 sm:right-80 top-[20%] bg-orange-400 rounded-full w-32 h-32 sm:w-96 sm:h-96" />
      <div className="relative flex items-center w-screen h-screen overflow-hidden bg-white/50 backdrop-blur-3xl">
        <img src={bgbg} alt="" className="absolute object-cover object-center brightness-50 w-screen h-screen" />
        <div className="relative flex flex-row justify-end gap-4 bottom-20 left-4 sm:left-20 text-white">
          <div className="w-8 h-8 sm:w-12 sm:h-12 bg-white rounded-lg"></div>
          <div className="flex flex-col">
            <span className="font-specify text-sm sm:text-lg">MUHAMAD RAFLI ZAM-ZAMI</span>{" "}
            <span className="font-specify text-sm sm:text-lg">
              TANGERANG <span className="font-montserrat">{tangerangTime}</span>
            </span>{" "}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-screen p-4 sm:p-10 m-2 sm:m-4 font-semibold tracking-wide text-white font-oswald">
          <h1 className="flex flex-col sm:flex-row justify-between text-[6vw] sm:text-[3vw] font-pixel">
            <motion.span
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              MUHAMAD RAFLI ZAM-ZAMI
            </motion.span>{" "}
            <motion.span
              className="relative sm:right-14"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              ラフィ
            </motion.span>
          </h1>
          <motion.h1
            className="font-specify text-[8vw] sm:text-[6.8vw]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            WEB DEVELOPER
          </motion.h1>
        </div>
      </div>
      <Snowfall />
    </>
  );
};

export default Landing;
