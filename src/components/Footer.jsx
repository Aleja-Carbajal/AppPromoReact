import React from "react";
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="font-sans w-full bg-gray-900">
      <div className="max-w-[1240px] mx-auto py-8 px-4 grid lg:grid-cols-2 gap-8 text-gray-300">
        <div className="div">
          <h1 className="w-full text-3xl font-bold">Book Worm</h1>
          <p className="py-4">
            Estudiantes de Ingeniería Informática creando proyectos con enfoque
            social. Universidad Centroamericana "José Simeón Cañas".
          </p>
          <p className="text-sm font-light">
            © 2022 Todos los derechos reservados.
          </p>
        </div>
        <div className="flex flex-col md:w-[75%] my-4">
          <p className="font-light">Nuestras Redes Sociales:</p>
          <div className="flex my-4">
            <a href="https://www.facebook.com/"><FaFacebookSquare size={30} className="mx-2"/></a>
            <a href="https://www.instagram.com/"><FaInstagram size={30} className="mx-2" /></a> 
            <a href="https://www.twitter.com/"><FaTwitterSquare size={30} className="mx-2" /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
