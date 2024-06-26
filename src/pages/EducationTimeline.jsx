import React from "react";
import untirta from "../assets/untirta.png";
import { motion } from "framer-motion";
import sd from "../assets/sd.png";
import smp from "../assets/smp.png";
import sma from "../assets/sma.png";

const EducationTimeline = () => {
  return (
    <div className="bg-black grid-background text-white min-h-[90vh] flex flex-col py-10 sm:py-20 items-center">
      <style jsx>{`
        .grid-background {
          background-image: linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.05) 1px,
              transparent 1px
            ),
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
      <div className="flex flex-col gap-2 items-center">
        <h1 className="font-specify text-4xl sm:text-7xl text-center">
          Education History
        </h1>
        <p className="font-montserrat text-center">
          Riwayat sekolah sd, smp, sma hingga kuliah.
        </p>
      </div>
      <div className="w-[100vw] px-10 sm:w-[60vw] sm:px-0 justify-center items-center flex relative mt-20 sm:mt-40">
        <div className="w-full h-[3px] sm:h-[5px] bg-white/20 flex flex-row justify-between items-center px-2 sm:px-4">
          <div className="flex flex-col gap-2 relative justify-start items-center">
            <h1 className="font-oswald font-semibold sm:text-lg text-sm text-nowrap absolute bottom-10 sm:invisible visible">
              SD IJTIHAD
            </h1>
            <div className="w-6 h-6 sm:w-10 sm:h-10 rounded-full bg-white/50 flex justify-center items-center">
              <div className="bg-black w-2 h-2 sm:w-3 sm:h-3 rounded-full" />
            </div>
            <motion.div
              className="absolute top-12 sm:top-16 w-[15ch] sm:w-[20ch] text-center"
              initial={{ opacity: 0, skew: 12 }}
              whileInView={{ opacity: 1, skew: 0 }}
              transition={{ duration: 3, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <img
                src={sd}
                className="w-10 absolute left-11 rounded-full visible sm:invisible"
                alt=""
              />
              <div className="invisible sm:visible">
                <h1 className="font-oswald font-semibold sm:text-lg text-[3vw]">
                  SDI PLUS AL IJTIHAD
                </h1>
                <p className="text-[3vw]  sm:text-sm">Graduated 2016.</p>
              </div>
            </motion.div>
          </div>
          <div className="flex flex-col gap-2 relative justify-start items-center">
            <h1 className="font-oswald font-semibold sm:text-lg text-sm text-nowrap absolute bottom-10 sm:invisible visible">
              SMP 15
            </h1>
            <div className="w-6 h-6 sm:w-10 sm:h-10 rounded-full bg-white/50 flex justify-center items-center">
              <div className="bg-black w-2 h-2 sm:w-3 sm:h-3 rounded-full" />
            </div>
            <motion.div
              className="absolute top-12 sm:top-16 w-[15ch] sm:w-[20ch] text-center"
              initial={{ opacity: 0, skew: 12 }}
              whileInView={{ opacity: 1, skew: 0 }}
              transition={{ duration: 3, delay: 1 }}
              viewport={{ once: true }}
            >
              <img
                src={smp}
                className="w-10 left-11 absolute rounded-full visible sm:invisible"
                alt=""
              />
              <div className="invisible sm:visible">
                <h1 className="font-oswald font-semibold sm:text-lg text-[3vw]">
                  SMPN 15 Tangerang
                </h1>
                <p className="text-[3vw] sm:text-sm">Graduated 2019.</p>
              </div>
            </motion.div>
          </div>
          <div className="flex flex-col gap-2 relative justify-start items-center">
            <h1 className="font-oswald font-semibold sm:text-lg text-sm text-nowrap absolute bottom-10 sm:invisible visible">
              YUPPENTEK
            </h1>
            <div className="w-6 h-6 sm:w-10 sm:h-10 rounded-full bg-white/50 flex justify-center items-center">
              <div className="bg-black w-2 h-2 sm:w-3 sm:h-3 rounded-full" />
            </div>
            <motion.div
              className="absolute top-12 sm:top-16 w-[15ch] sm:w-[20ch] text-center"
              initial={{ opacity: 0, skew: 12 }}
              whileInView={{ opacity: 1, skew: 0 }}
              transition={{ duration: 3, delay: 2 }}
              viewport={{ once: true }}
            >
              <img
                src={sma}
                className="w-10 left-11 mx-auto visible sm:invisible rounded-full absolute"
                alt=""
              />
              <div className="hidden sm:block">
                <h1 className="font-oswald font-semibold sm:text-lg text-[3vw]">
                  SMAS 1 YUPPENTEK Tangerang
                </h1>
                <p className="text-[3vw]  sm:text-sm">Graduated 2023.</p>
              </div>
            </motion.div>
          </div>
          <div className="flex flex-col gap-2 relative justify-start items-center">
            <div className="w-6 h-6 sm:w-10 sm:h-10 rounded-full bg-yellow-200 flex justify-center items-center">
              <div className="bg-black w-2 h-2 sm:w-3 sm:h-3 rounded-full" />
            </div>
            <div className="absolute top-12 sm:top-14">
              <div className="flex justify-center items-center flex-col relative bottom-0 sm:invisible visible sm:absolute block">
                <img
                  src={untirta}
                  className="relative w-12 mx-auto sm:invisible visible rounded-full bottom-1"
                  alt=""
                />
                <h1 className="text-lg font-oswald">Untirta</h1>
              </div>
              <div className="sm:visible invisible -left-32 bottom-10 block ">
                <motion.div
                  className="w-[40vw] sm:w-[20vw] h-32 sm:h-40 bg-slate-700/50 rounded relative border border-white/20 flex justify-center items-center card-with-pointer"
                  initial={{ y: 10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 3 }}
                  viewport={{ once: true }}
                >
                  <motion.div className="flex justify-center items-center flex-col">
                    <img
                      src={untirta}
                      className="w-8 sm:w-10 rounded-full"
                      alt=""
                    />
                    <h1 className="font-oswald font-semibold text-center">
                      Universitas Sultan Ageng Tirtayasa
                    </h1>
                    <p className="font-montserrat">2023 - Current</p>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .card-with-pointer::before {
          content: "";
          position: absolute;
          top: -10px;
          left: 48%;
          transform: translateX(-50%);
          transform: rotate(180deg);
          border-width: 10px 10px 0 10px;
          border-style: solid;
          border-color: slategray transparent transparent transparent;
        }
      `}</style>
    </div>
  );
};

export default EducationTimeline;
