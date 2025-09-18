import React from 'react';
import { useNavigate } from "react-router-dom";
import NavbarCandidato from "../components/NavbarCandidato";
import Footer from "../components/Footer"; // Asegúrate de importar el Footer
import { FaGraduationCap, FaUserTie, FaExternalLinkAlt } from 'react-icons/fa';

// Datos de ejemplo para los cargos de las elecciones
const eleccionesCargos = [
  {
    id: 1,
    nombre: "Elecciones de Representante Estudiantil",
    cargos: [
      {
        id: 101,
        nombre: "Representante Principal de la Facultad",
        descripcion: "Responsable de ser la voz de los estudiantes y gestionar sus inquietudes ante las autoridades de la facultad."
      },
      {
        id: 102,
        nombre: "Representante Suplente de la Facultad",
        descripcion: "Asume las funciones del representante principal en su ausencia y apoya en la gestión de proyectos estudiantiles."
      }
    ]
  },
  {
    id: 2,
    nombre: "Elección de Decano de Facultad",
    cargos: [
      {
        id: 201,
        nombre: "Decano de la Facultad",
        descripcion: "Lidera la gestión académica y administrativa, asegurando el cumplimiento de los objetivos y la calidad educativa."
      }
    ]
  },
  {
    id: 3,
    nombre: "Elección de Consejo Académico",
    cargos: [
      {
        id: 301,
        nombre: "Miembro del Consejo Académico",
        descripcion: "Participa en la formulación de políticas y reglamentos académicos a nivel universitario."
      }
    ]
  }
];

export default function ConsultarCargosCandidato() {
  const navigate = useNavigate();

  const handlePostularse = () => {
    navigate("/PostularseElecciones");
  };

  return (
    <div className="min-h-screen flex flex-col bg-blue-50 text-gray-800">
      <NavbarCandidato />
      <div className="h-20"></div>

      {/* Contenido principal */}
      <main className="flex-grow max-w-6xl mx-auto p-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-2">
            Cargos Disponibles
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A continuación, puedes consultar los cargos a los que puedes postularte en las diferentes elecciones de la universidad.
          </p>
        </div>

        {/* Listado de elecciones */}
        <div className="space-y-12">
          {eleccionesCargos.map((eleccion) => (
            <div
              key={eleccion.id}
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <FaGraduationCap className="text-4xl text-blue-900 mr-4" />
                <h3 className="text-2xl font-bold text-gray-800">{eleccion.nombre}</h3>
              </div>

              {/* Listado de cargos dentro de la elección */}
              <div className="space-y-4">
                {eleccion.cargos.map((cargo) => (
                  <div
                    key={cargo.id}
                    className="p-6 bg-gray-50 rounded-lg flex flex-col md:flex-row md:items-center justify-between shadow-sm"
                  >
                    <div className="mb-4 md:mb-0 md:mr-4">
                      <div className="flex items-center mb-2">
                        <FaUserTie className="text-xl text-blue-500 mr-2" />
                        <span className="text-lg font-bold text-gray-800">{cargo.nombre}</span>
                      </div>
                      <p className="text-sm text-gray-600 ml-7">{cargo.descripcion}</p>
                    </div>

                    <button
                      onClick={handlePostularse}
                      className="bg-blue-900 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-800 transition-colors flex items-center justify-center"
                    >
                      <FaExternalLinkAlt className="mr-2" />
                      Postularse
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer /> {/* Agregado el componente Footer */}
    </div>
  );
}