import React from "react";
import bottomleft from "../assets/pppointed.svg";
import bottomright from "../assets/bottomright.svg";
import arrow from "../assets/bottomrightlong.svg";
import sd from "../assets/sd-removed.png";
import smp from "../assets/smp-removed.png";
import sma from "../assets/sma-removed.png";
import pointerone from "../assets/pppointed(1).svg"
import pointertwo from "../assets/pppointed(2).svg"

const Education = () => {
  return (
    <div className="w-screen min-h-screen bg-white p-10 relative">
      <div className="flex gap-10 justify-center items-center text-black">
        <div className="flex flex-col justify-center">
          <div className="flex flex-row gap-4 justify-center items-center font-montserrat border border-black/20 bg-white/20 rounded p-4 z-50 backdrop-blur-3xl overflow-hidden relative">
          <div className="w-20 h-20 rounded-full bg-yellow-200 animate-pulse absolute left-0 top-0 -z-20 blur-3xl" />
            <img src={sd} alt="" />
            <div className="flex flex-col">
              <h1 className="font-poppins text-xl font-semibold">
                SDI PLUS AL IJTIHAD
              </h1>
              <p className="w-[20ch] text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam dolorem aliquam adipisci totam quasi aliquid vel
                voluptas impedit dolorum saepe.
              </p>
            </div>
          </div>

          <img src={pointerone} className="w-80 mx-auto" alt="" />

          <div className="flex flex-row gap-4 justify-center items-center font-montserrat border border-black/20 bg-white/20 rounded p-4 z-50 backdrop-blur-3xl relative overflow-hidden h-[30vh]">
          <div className="w-20 h-20 rounded-full bg-red-400 absolute right-0 top-0 -z-20 blur-3xl" />
            <img src={smp} alt="" />
            <div className="w-[20ch] relative right-32">
              <h1 className="text-xl font-semibold">SMPN 15 Tangerang</h1>

              <p className="w-[20ch] text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam dolorem aliquam adipisci totam quasi aliquid vel
                voluptas impedit dolorum saepe.
              </p>
            </div>
          </div>
          <img src={pointertwo} className="w-80 mx-auto" alt="" />

          <div className="flex flex-row gap-4 justify-center items-center font-montserrat z-50 border border-black/20 bg-white/20 rounded p-4 relative overflow-hidden">
          <div className="w-20 h-20 rounded-full bg-blue-700 animate-pulse absolute left-0 bottom-0 -z-20 blur-3xl" />
            <img src={sma} alt="" />
            <div className="flex flex-col">
              <h1 className="text-xl font-semibold">
                SMAS 1 YUPPENTEK Tangerang
              </h1>
              <p className="w-[20ch] text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam dolorem aliquam adipisci totam quasi aliquid vel
                voluptas impedit dolorum saepe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
