import React from "react";
import photo from "../assets/photo.png";
import photokos from "../assets/photokos.jpeg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="z-10 grid-background flex flex-col items-center w-screen min-h-screen overflow-x-hidden overflow-clip gap-10 text-white bg-black relative">
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
      <h1 className="mt-10 text-5xl sm:text-[6.8vw] font-specify text-center">ABOUT ME</h1>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 place-content-center place-items-center">
        <div className="relative">
          <div className="absolute skew-x-12 bg-white/20 rounded-full w-48 h-48 sm:w-96 sm:h-96 -z-10 blur-3xl" />
          <img
            src={photo}
            className="order-1 w-40 sm:w-80 border border-white/50 rounded z-10"
          />
        </div>
        <div className="flex flex-col gap-4 items-center sm:items-start">
          <p className="w-[30ch] sm:w-[25ch] font-specify flex flex-col gap-2 text-center sm:text-left">
            <motion.span
              className="text-xl w-[10ch] mx-auto sm:mx-0 sm:w-full sm:text-4xl text-slate-200"
              initial={{ skewY: 6, opacity: 0 }}
              whileInView={{ skewY: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              Hai!, I'm Muhammad Rafli Zam Zami{" "}
            </motion.span>
            <span className="font-montserrat text-pretty w-[25ch] text-center mx-auto sm:text-start sm:mx-0 sm:w-full">
              Undergraduate Informatics Student at Sultan Ageng Tirtayasa
              University
            </span>
          </p>
          <motion.div
            className="w-fit sm:min-w-96 h-fit p-4 border border-white/20"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h1 className="font-oswald font-semibold">Name</h1>
                <p>Muhammad Rafli Zam Zami</p>
              </div>
              <div>
                <h1 className="font-oswald font-semibold">Email</h1>
                <p>raflizamzami001@gmail.com</p>
              </div>
              <div>
                <h1 className="font-oswald font-semibold">Birthday</h1>
                <p>14 October 2005 </p>
              </div>
              <div>
                <h1 className="font-oswald font-semibold">Gender</h1>
                <p>Male</p>
              </div>
              <div>
                <h1 className="font-oswald font-semibold">Status</h1>
                <p>Student</p>
              </div>
              <div>
                <h1 className="font-oswald font-semibold">Domicile</h1>
                <p>Tangerang</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
