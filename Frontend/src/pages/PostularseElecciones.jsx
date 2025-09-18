import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import NavbarCandidato from "../components/NavbarCandidato";
import Footer from "../components/Footer";
import { FaCalendarAlt, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

// Datos de ejemplo para las elecciones disponibles
const eleccionesDisponibles = [
  { id: 1, nombre: "Elecciones de Representante Estudiantil", inicio: "15/10/2025", fin: "20/10/2025", estado: "Abierta" },
  { id: 2, nombre: "Elecciones de Decano de Facultad", inicio: "01/11/2025", fin: "05/11/2025", estado: "Abierta" },
  { id: 3, nombre: "Elección de Consejo Académico", inicio: "10/12/2025", fin: "15/12/2025", estado: "Cerrada" },
];

export default function PostularseElecciones() {
  const navigate = useNavigate();

  // Esta función ahora redirige a la página de creación de propuestas
  const handleGoToCreatePage = (eleccion) => {
    // Aquí puedes pasar datos a través de `state` si lo necesitas en la página de destino
    navigate('/CrearPropuesta', { state: { eleccion: eleccion.nombre } });
  };

  return (
    <div className="min-h-screen flex flex-col bg-blue-50 text-gray-800">
      <NavbarCandidato />
      <div className="h-20"></div>

      {/* Sección principal de la página */}
      <main className="flex-grow max-w-6xl mx-auto p-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
            Postúlate a Elecciones
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explora las elecciones disponibles y presenta tus propuestas para el futuro de nuestra comunidad.
          </p>
        </div>

        {/* Contenedor de las tarjetas de elecciones */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {eleccionesDisponibles.map((eleccion) => (
            <div 
              key={eleccion.id} 
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-800">{eleccion.nombre}</h3>
                {eleccion.estado === "Abierta" ? (
                  <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full uppercase">
                    {eleccion.estado}
                  </span>
                ) : (
                  <span className="bg-red-100 text-red-700 text-xs font-semibold px-3 py-1 rounded-full uppercase">
                    {eleccion.estado}
                  </span>
                )}
              </div>
              <div className="text-gray-600 space-y-2">
                <p className="flex items-center">
                  <FaCalendarAlt className="mr-2 text-blue-500" />
                  <span className="font-semibold">Inicio:</span> {eleccion.inicio}
                </p>
                <p className="flex items-center">
                  <FaCalendarAlt className="mr-2 text-blue-500" />
                  <span className="font-semibold">Fin:</span> {eleccion.fin}
                </p>
              </div>

              {eleccion.estado === "Abierta" ? (
                <button
                  onClick={() => handleGoToCreatePage(eleccion)}
                  className="mt-6 w-full bg-blue-900 text-white font-semibold py-3 px-4 rounded-xl shadow-md hover:bg-blue-800 transition-colors"
                >
                  <span className="flex items-center justify-center">
                    <FaCheckCircle className="mr-2" />
                    Postularme
                  </span>
                </button>
              ) : (
                <button
                  disabled
                  className="mt-6 w-full bg-gray-400 text-white font-semibold py-3 px-4 rounded-xl cursor-not-allowed"
                >
                  <span className="flex items-center justify-center">
                    <FaExclamationCircle className="mr-2" />
                    Elección cerrada
                  </span>
                </button>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}