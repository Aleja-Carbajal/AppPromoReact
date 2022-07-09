import React from "react";
import Typed from "react-typed";
import MockUp from "../assets/mockup_phone.png";

const Hero = () => {
  return (
    <div className="font-sans w-full flex-center bg-gradient-to-r from-[#F7D3C8] to-[#D6D9F1] py-0 md:py-10">
      <div className="md:flex md:max-w-[1000px] items-center bg-gray-100 max-h-[620px]  md:mx-auto py-16 md:px-20  md:rounded-xl">
        <div className="flex-col text-center">
          <p className="font-semibold md:pt-10 pb-2">
            TRAE DE VUELTA EL CONOCIMIENTO EN PAPEL
          </p>
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-2">
            Comparte tus libros con otros
          </h1>
          <div className="md:text-xl md:py-4 py-2 m-auto">
            <p>
              Si quieres disfrutar, aprender o enseñar puedes encontrar libros
              de
            </p>
            {/*Si no funciona esta parte deben correr en la terminal el siguiente comando:
                "npm install react-typed --save --force"*/}
            <Typed
              strings={[
                "Cálculo",
                "Arquitectura",
                "Inglés",
                "Ciencia ficción",
                "Gastronomía",
                "Química",
              ]}
              typeSpeed={50}
              backSpeed={40}
              loop
            />
          </div>
          {/*-- Botón Descargar -- */}
          <a
            href="https://drive.google.com/file/d/16UWSvlftNETxpgcVWIsjeEhcZbUpX4hp/view"
            class="mt-4 w-[200px] bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
          >
            <svg
              class="mr-3 w-7 h-7"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google-play"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
              ></path>
            </svg>
            <div class="text-left">
              <div class="mb-1 text-xs">Disponible en</div>
              <div class="-mt-1 font-sans text-sm font-semibold">
                Google Play
              </div>
            </div>
          </a>
        </div>
        <div>
          <img
            src={MockUp}
            alt="/"
            className="hidden md:flex md:max-w-[250px] md:max-h-[500px] md:mr-[-150px] rounded-3xl"
          ></img>
        </div>
      </div>
      <div className="hidden md:flex justify-center md:mt-3">
        <svg
          class="justify-center animate-bounce w-10 h-10"
          fill="rgb(255 255 255)"
          xmlns="http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"
          viewBox="0 0 24 24"
        >
          <path d="M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
