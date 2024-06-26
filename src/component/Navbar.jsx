import React from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo-removed.png";

const Navbar = () => {
  return (
    <div className="absolute w-screen p-10 h-fit">
      <nav className="absolute py-1 px-4 rounded-full max-w-fit min-w-[45vw] h-[6.5vh] flex flex-row justify-between items-center font-pixel text-lg text-black z-10 border border-black/20 bg-[#FBFBFB]">
        <div>
          <img src={logo} className="w-[5vw] relative right-6 top-[0.2vh] invisible md:visible" alt="logo" />
        </div>
        <ul className="flex flex-row gap-4 cursor-pointer">
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              ABOUT
            </Link>
          </li>
          <li>
            <Link
              to="education"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              EDUCATION
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              SKILLS
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
