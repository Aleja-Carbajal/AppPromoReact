import React from "react";
import Logo from "../assets/logo.jpg";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="font-sans flex justify-between items-center max-w-[1240px] mx-auto px-4 bg-white md:mb-4">
      <div className="flex items-center my-5 md:m-0">
        {/*Logo  y nombre */}
        <img src={Logo} alt="/" className="w-32 h-28 py-3"></img>
      </div>
      <div className="hidden md:flex">
        {/*Opciones del menu*/}
        <a
          href="https://drive.google.com/file/d/16UWSvlftNETxpgcVWIsjeEhcZbUpX4hp/view"
          className="link text-xl font-light text-gray-700 text-opacity-90 mr-16"
        >
          Descargar
        </a>
        <Link
          to="definition"
          smooth={true}
          duration={1000}
          className="text-xl font-light text-gray-700 text-opacity-90 mr-16 hover:cursor-pointer"
        >
          ¿Cómo funciona?
        </Link>
        <Link
          to="opinions"
          smooth={true}
          duration={1000}
          className="text-xl font-light text-gray-700 text-opacity-90 mr-16 hover:cursor-pointer"
        >
          Opiniones
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
