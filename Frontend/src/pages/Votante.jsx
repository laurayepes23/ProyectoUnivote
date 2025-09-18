import { Navbar } from "@material-tailwind/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import NavbarVotante from "../components/NavbarVotante";

export default function Votante() {
  const navigate = useNavigate(); 

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-6 py-10">
      <NavbarVotante />

      {/* Título principal */}
      <h1 className="text-4xl font-extrabold text-blue-900 mb-12 text-center mt-24">
        Bienvenido
      </h1>

      {/* Sección de Gestión y Resultados */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mb-12">
        {/* Gestión Elecciones */}
        <div className="bg-blue-50 border border-blue-200 shadow-md rounded-2xl p-8 flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-3">
            Gestión Elecciones
          </h2>
          <p className="text-gray-700 mb-6">
            Consulta todas las elecciones disponibles en este momento.
          </p>
          {/* ✅ Botón con navegación */}
          <button
            onClick={() => navigate("/EleccionesVotante")}
            className="bg-blue-900 text-white w-full py-3 rounded-lg font-medium hover:bg-blue-800 transition-all"
          >
            Consultar
          </button>
        </div>

        {/* Resultados */}
        <div className="bg-blue-50 border border-blue-200 shadow-md rounded-2xl p-8 flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-3">
            Resultados
          </h2>
          <p className="text-gray-700 mb-6">
            Una vez finalizada la elección podrás ver los resultados aquí.
          </p>

          <button
            onClick={() => navigate("/ResultadosVotante")}
            className="bg-blue-900 text-white w-full py-3 rounded-lg font-medium hover:bg-blue-800 transition-all"
          >
            Ver Resultados
          </button>
        </div>
      </div>

      {/* Sección de Novedades */}
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-lg p-10">
        <h2 className="text-3xl font-extrabold text-blue-700 text-center mb-10">
          Novedades
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Tarjeta Próxima Elección */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 text-center hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-blue-600 mb-3">
              Próximas Elecciónes
            </h3>
            <p className="text-gray-700">
              Se informara las proximas elecciones para que participes en estas.
              ¡Tu voto cuenta!
            </p>
          </div>

          {/* Tarjeta Seguridad */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 text-center hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-blue-600 mb-3">
              Seguridad
            </h3>
            <p className="text-gray-700">
              Cierra sesión al terminar para mantener la seguridad del sistema.
            </p>
          </div>

          {/* Tarjeta Voto Confidencial */}
          <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 text-center hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-blue-600 mb-3">
              Voto Confidencial
            </h3>
            <p className="text-gray-700">
              Tu voto es libre y secreto. Nadie puede obligarte a votar por
              alguien distinto a tu verdadera elección.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
