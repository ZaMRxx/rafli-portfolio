import React from "react";
import instagram from "../assets/instagram.png";
import github from "../assets/github.png";
import gmail from "../assets/gmail.png";

const Footer = () => {
  return (
    <div className="w-screen min-h-[10vh] bg-black border-t-2 border-white/20 flex justify-center items-center flex-col text-white py-4">
      <h1 className="font-specify text-2xl">Rafli's Portfolio</h1>
      <div className="w-96 bg-white/20 h-[0.5px] mt-2" />
      <div className="mt-2 flex flex-row gap-4 items-center">
        <a href="https://www.instagram.com/raflizam_" target="_blank">
          <img src={instagram} className="w-10" alt="" />
        </a>
        <a
          href="https://github.com/ZaMRxx"
          target="_blank"
          className="bg-white p-1 rounded-full"
        >
          <img src={github} className="w-10" alt="" />
        </a>
        <a href="raflizamzami001@gmail.com" target="_blank">
          <img src={gmail} className="w-10" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
