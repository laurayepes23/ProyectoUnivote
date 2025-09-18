import React from 'react';
import NavbarCandidato from "../components/NavbarCandidato";
import Footer from "../components/Footer";
import { FaGraduationCap, FaChalkboardTeacher, FaTasks } from 'react-icons/fa';

// Datos de ejemplo para las funciones y cargos de las elecciones
const eleccionesFunciones = [
  {
    id: 1,
    nombre: "Elecciones de Representante Estudiantil",
    cargos: [
      {
        id: 101,
        nombre: "Representante Principal de la Facultad",
        funciones: [
          "Presidir las asambleas estudiantiles de la facultad.",
          "Ser el enlace principal entre los estudiantes y la decanatura.",
          "Gestionar el presupuesto asignado a iniciativas estudiantiles.",
          "Organizar eventos académicos y culturales para el alumnado."
        ]
      },
      {
        id: 102,
        nombre: "Representante Suplente de la Facultad",
        funciones: [
          "Asumir las responsabilidades del representante principal en su ausencia.",
          "Apoyar en la coordinación de proyectos estudiantiles.",
          "Participar activamente en los comités de la facultad."
        ]
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
        funciones: [
          "Dirigir la gestión académica, administrativa y financiera de la facultad.",
          "Promover la investigación y la innovación en el currículo.",
          "Garantizar la calidad educativa y el bienestar de los estudiantes.",
          "Representar a la facultad en el Consejo Académico de la universidad."
        ]
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
        funciones: [
          "Participar en la toma de decisiones sobre políticas educativas.",
          "Evaluar y aprobar nuevas propuestas de planes de estudio.",
          "Supervisar el cumplimiento de las normativas universitarias."
        ]
      }
    ]
  }
];

export default function ConsultarFunciones() {
  return (
    <div className="min-h-screen flex flex-col bg-blue-50 text-gray-800">
      <NavbarCandidato />
      <div className="h-20"></div>

      {/* Contenido principal */}
      <main className="flex-grow max-w-6xl mx-auto p-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-2">
            Funciones de los Cargos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A continuación, puedes consultar las responsabilidades asociadas a cada cargo en las diferentes elecciones de la universidad.
          </p>
        </div>

        {/* Listado de elecciones */}
        <div className="space-y-12">
          {eleccionesFunciones.map((eleccion) => (
            <div 
              key={eleccion.id}
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <FaGraduationCap className="text-4xl text-blue-900 mr-4" />
                <h3 className="text-2xl font-bold text-gray-800">{eleccion.nombre}</h3>
              </div>

              {/* Listado de cargos dentro de la elección */}
              <div className="space-y-8">
                {eleccion.cargos.map((cargo) => (
                  <div
                    key={cargo.id}
                    className="border-l-4 border-blue-500 pl-4"
                  >
                    <div className="flex items-center mb-2">
                      <FaChalkboardTeacher className="text-2xl text-blue-500 mr-2" />
                      <h4 className="text-xl font-semibold text-gray-700">{cargo.nombre}</h4>
                    </div>
                    
                    {/* Lista de funciones */}
                    <ul className="list-disc pl-8 text-gray-600 space-y-2">
                      {cargo.funciones.map((funcion, index) => (
                        <li key={index} className="flex items-start">
                          <FaTasks className="text-sm text-blue-500 mr-2 mt-1 flex-shrink-0" />
                          <span>{funcion}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}