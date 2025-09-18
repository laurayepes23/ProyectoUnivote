import React from 'react';
import NavbarCandidato from "../components/NavbarCandidato"; 
import Footer from "../components/Footer";
import { FaBullhorn, FaUserTie, FaTasks, FaLightbulb } from "react-icons/fa";

export default function Candidato() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800">
      
      {/* Navbar de administrador (o el que ya tienes) */}
      <NavbarCandidato/>
      
      <div className="h-20"></div>

      <main className="flex-grow max-w-6xl mx-auto p-6 text-center">
        
        <h2 className="text-3xl font-bold text-blue-900 mb-4">
          ¡Bienvenido, Candidato!
        </h2>
        <p className="text-lg text-gray-700 mb-10">
          Explora las opciones para tu postulación. Aquí podrás conocer las elecciones disponibles, los cargos a los que puedes aspirar y gestionar tus propuestas.
        </p>

        {/* Contenedor de las tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          
          {/* Tarjeta 1: Postularse a Elecciones */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <FaBullhorn className="text-blue-900 w-16 h-16 mb-4 mx-auto" />
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Postularse a elecciones disponibles
            </h3>
            <p className="text-gray-600 mb-4">
              Revisa el listado de elecciones activas y presenta tu postulación.
            </p>
            <a
              href="/PostularseElecciones"
              className="inline-block bg-blue-900 text-white font-semibold py-2 px-6 rounded-md hover:bg-blue-800 transition"
            >
              Postularme
            </a>
          </div>

          {/* Tarjeta 2: Consultar Cargos */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <FaUserTie className="text-blue-900 w-16 h-16 mb-4 mx-auto" />
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Consultar cargos disponibles
            </h3>
            <p className="text-gray-600 mb-4">
              Conoce los roles a los que puedes aspirar en cada elección.
            </p>
            <a
              href="/ConsultarCargosCandidato"
              className="inline-block bg-blue-900 text-white font-semibold py-2 px-6 rounded-md hover:bg-blue-800 transition"
            >
              Ver cargos
            </a>
          </div>

          {/* Tarjeta 3: Consultar Funciones */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <FaTasks className="text-blue-900 w-16 h-16 mb-4 mx-auto" />
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Consultar las funciones
            </h3>
            <p className="text-gray-600 mb-4">
              Detalles sobre las responsabilidades de cada cargo.
            </p>
            <a
              href="/ConsultarFunciones"
              className="inline-block bg-blue-900 text-white font-semibold py-2 px-6 rounded-md hover:bg-blue-800 transition"
            >
              Ver funciones
            </a>
          </div>

          {/* Tarjeta 4: Crear Propuestas */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
            <FaLightbulb className="text-blue-900 w-16 h-16 mb-4 mx-auto" />
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Crear sus propuestas
            </h3>
            <p className="text-gray-600 mb-4">
              Añade, edita o elimina las propuestas que defenderás.
            </p>
            <a
              href="/GestionarPropuestas"
              className="inline-block bg-blue-900 text-white font-semibold py-2 px-6 rounded-md hover:bg-blue-800 transition"
            >
              Gestionar
            </a>
          </div>
          
        </div>
      </main>
    </div>
  );
}