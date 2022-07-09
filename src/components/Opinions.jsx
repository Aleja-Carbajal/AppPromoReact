import React from "react";

const Opinions = () => {
  return (
    <div>
      <div className="font-sans w-full bg-white py-16 px-4" id="opinions">
        <p className="md:text-4xl sm:text-4xl text-3xl font-semibold py-12 text-center border-b text-gray-900">
          <p className="text-[0.9rem] font-bold text-gray-600">
            ANIMATE A LEER UN PAR DE OPINIONES DE USUARIOS QUE COMENZARON A USAR
            LA APP
          </p>
          ¿Qué opinan otros?
        </p>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 py-12">
          <div className="w-full shadow-xl flex flex-col p-4 my-4 bg-white rounded-lg duration-300">
            <h2 className="md:text-xl text-md font-medium py-4 px-3 border-b">
              Ana María Escobar
              <p className="text-sm font-light px-2">anaesc99@gmail.com</p>
            </h2>
            <p className="py-6 mx-6 italic ">
              "Nunca había probado una app así, pero me termino gustando
              bastante. Es más fácil de usar de lo que había pensado, además de
              que es muy raro llegar a tener problemas cuando todos los
              prestamos son entre estudiantes de la misma universidad."
            </p>
          </div>
          <div className="w-full shadow-xl flex flex-col p-4 my-4 bg-white rounded-lg duration-300">
            <h2 className="md:text-xl text-md font-medium py-4 px-3 border-b">
              Jorge Samuel Alvarado
              <p className="text-sm font-light px-2">joshshias12@gmail.com</p>
            </h2>
            <p className="py-6 mx-6 italic ">
              "Es muy buena, me ha ayudado un montón a la hora de buscar libros
              que necesito por mi carrera. No he tenido que gastar dinero en
              libros nuevos, por que los he encontrado rápido en la App. Ahora
              me queda un dinero extra gracias a eso."
            </p>
          </div>
          <div className="w-full shadow-xl flex flex-col p-4 my-4 bg-white rounded-lg duration-300">
            <h2 className="md:text-xl text-md font-medium py-4 px-3 border-b">
              Johana Alejandra Vargas
              <p className="text-sm font-light px-2">alevhana@gmail.com</p>
            </h2>
            <p className="py-6 mx-6 italic ">
              "Nunca había probado una app así, pero me termino gustando
              bastante. Es más fácil de usar de lo que había pensado, además de
              que es muy raro llegar a tener problemas cuando todos los
              prestamos son entre estudiantes de la misma universidad."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opinions;
