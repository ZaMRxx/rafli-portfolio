import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import c from "../assets/c.png";
import cplus from "../assets/c++.png";
import word from "../assets/word.png";
import excel from "../assets/excel.png";

const Skills = () => {
  const skillList = [
    {
      name: "HTML",
      image: html,
    },
    {
      name: "CSS",
      image: css,
    },
    {
      name: "Javascript",
      image: js,
    },
    {
      name: "C",
      image: c,
    },
    {
      name: "C++",
      image: cplus,
    },
    {
      name: "Microsoft Word",
      image: word,
    },
    {
      name: "Microsoft Excel",
      image: excel,
    },
  ];

  return (
    <div className="relative flex flex-col items-center w-screen min-h-screen py-10 overflow-hidden bg-black text-white grid-background">
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
      <div className="absolute w-96 h-96 bg-white/10 rounded-full -z-10 blur-3xl"></div>
      <h1 className="mb-20 text-7xl font-specify">Skills</h1>
      <div className="grid w-4/5 grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {skillList.map(({ name, image }, i) => (
          <div
            key={i}
            className={`relative flex flex-col items-center justify-center gap-2 p-6 transition-transform bg-black border border-white/20 rounded-xl hover:scale-105 ${
              name === "HTML" || name === "CSS" ? "col-span-2 row-span-2" : ""
            }`}
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl blur-3xl opacity-20"></div>
            <img src={image} alt={name} className="w-3/5" />
            <h1 className="text-lg font-semibold font-oswald">{name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
