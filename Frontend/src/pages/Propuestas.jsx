import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import NavbarVotante from "../components/NavbarVotante";

export default function Propuestas() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [propuestas, setPropuestas] = useState([]);
  const [candidato, setCandidato] = useState(null);

  useEffect(() => {
    // Simulación de datos de candidatos
    const candidatosMock = [
      {
        id: 1,
        nombre: "Juan Pérez",
        descripcion:
          "Estudiante de Ingeniería, con propuestas de innovación académica.",
        imagen: "/img/candidato1.png",
      },
      {
        id: 2,
        nombre: "María Gómez",
        descripcion:
          "Representante actual que busca fortalecer la participación estudiantil.",
        imagen: "/img/candidato2.png",
      },
      {
        id: 3,
        nombre: "Carlos Ruiz",
        descripcion:
          "Comprometido con el bienestar y la inclusión universitaria.",
        imagen: "/img/candidato3.png",
      },
    ];

    const propuestasMock = {
      1: [
        "Ampliar la biblioteca y horarios de estudio.",
        "Crear programas de apoyo para estudiantes con bajo rendimiento.",
        "Mejorar la conectividad de internet en toda la universidad.",
      ],
      2: [
        "Fomentar talleres extracurriculares gratuitos.",
        "Promover la sostenibilidad en el campus.",
        "Implementar encuestas para conocer necesidades de los estudiantes.",
      ],
      3: ["Garantizar inclusión y eventos de bienestar estudiantil."],
    };

    const candidatoSeleccionado = candidatosMock.find(
      (c) => c.id === Number(id)
    );
    setCandidato(candidatoSeleccionado);
    setPropuestas(propuestasMock[id] || []);
  }, [id]);

  return (
    <div div className="min-h-screen bg-gray-50 flex flex-col items-center px-4 py-10">
        
    <NavbarVotante />

      <h1 className="text-3xl font-bold text-blue-900 mb-10 text-center mt-24">
        Propuestas del Candidato
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
        {/* Columna izquierda: candidato */}
        {candidato && (
            
          <div className="bg-white rounded-xl shadow-xl p-6 flex flex-col items-center text-center md:items-start md:text-left h-full">
            <div className="flex justify-center items-center w-full mb-4">
                <img
                src={candidato.imagen}
                alt={candidato.nombre}
                className="w-40 h-40 object-cover rounded-full border-4 border-blue-200 mb-4"
                />
            </div>

            <h3 className="text-2xl font-bold text-blue-900 mb-2">
              {candidato.nombre}
            </h3>
            <p className="text-gray-700">{candidato.descripcion}</p>
          </div>
        )}

        {/* Columna derecha: propuestas */}
        <div className="md:col-span-2 bg-white rounded-xl shadow-xl p-8  h-full flex flex-col">
          <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">
            Lista de Propuestas
          </h2>
          {propuestas.length === 0 ? (
            <p className="text-gray-600 text-center flex-1">
              Este candidato no tiene propuestas registradas.
            </p>
          ) : (
            <ul className="space-y-4 flex-1">
              {propuestas.map((propuesta, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <span className="text-blue-700 font-bold">{index + 1}.</span>
                  <p className="text-gray-800">{propuesta}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
