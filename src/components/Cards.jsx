import React from "react";
import Seguridad from "../assets/seguridadimg.png";
import Diversidad from "../assets/diversidadimg.png";
import PhoneImage from "../assets/telefonoimg.png";

const Cards = () => {
    return (
    <div className="font-sans w-full py-[10rem] px-4 bg-gradient-to-r from-[#F7D3C8] to-[#D6D9F1]">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        {/*CARDS CARACTERISTICAS*/}
        <div className="w-full shadow-xl flex flex-col p-4 my-4 bg-white rounded-lg hover:scale-[1.04] duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white rounded-full "
            src={Seguridad}
            alt="/"
          />
          <h2 className="text-2xl  font-medium text-center py-5 border-b">
            Préstamos seguros
          </h2>
          <p className="text-center py-12 mx-8 ">
            No debes preocuparte por tu seguridad, ni por la de tus libros.
            Todas las entregas de libros son dentro del campus universitario.
            Además puedes reportar cualquier daño causado a tus libros y te
            ayudamos a resolver el problema en el menor tiempo posible.
          </p>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 md:m-0 my-4 bg-white rounded-lg hover:scale-[1.04] duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white rounded-full "
            src={Diversidad}
            alt="/"
          />
          <h2 className="text-2xl  font-medium text-center py-5 border-b">
            Diversidad
          </h2>
          <p className="text-center py-12 mx-8 ">
            Gracias a que App brinda servicios a todo tipo de alumnos dentro del
            campus, puedes asegurar que encontrarás una buena variedad de
            libros. Intenta buscando algo que te guste o sobre alguna materia
            que se te hace difícil.
          </p>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 bg-white rounded-lg hover:scale-[1.04] duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white rounded-full "
            src={PhoneImage}
            alt="/"
          />
          <h2 className="text-2xl  font-medium text-center py-5 border-b">
            Cero papeleo
          </h2>
          <p className="text-center py-12 mx-8 ">
            A pesar de que tratamos con libros, no queremos que te llenes de
            papeles innecesarios. Todas las consultas, solicitudes, reclamos y
            cualquier tipo de información o proceso podrás realizarlo y
            obtenerlo desde nuestra App de manera muy sencilla y rápida.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
