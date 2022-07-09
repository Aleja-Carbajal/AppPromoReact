import React from "react";
import BookImage from "../assets/books.png";

const Definition = () => {
  return (
    <div className="font-sans w-full bg-white py-16 px-4" id="definition" >
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src={BookImage} alt="/" className="w-[500px] mx-auto my-4" />
        <div className="flex flex-col justify-center">
          <p className="text-primary font-bold">
            AGILIZA EL APRENDIZAJE UNIVERSITARIO
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl fond-bold py-2">
            Intercambia libros dentro de la comunindad estudiantil
          </h1>
          <p className="py-2">
            Ofreciendo una manera de encontrar los libros que necesitas. Sin
            necesidad de compras o gastos adicionales.
            <br />
            Intercambia libros con otros estudiantes de manera simple y rápida.
            Una vez termines de usar el libro lo devuelves, permites que otros
            estudiantes puedan prestarlo y mantienes el ciclo de utilidad de
            docenas de libros.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Definition;
