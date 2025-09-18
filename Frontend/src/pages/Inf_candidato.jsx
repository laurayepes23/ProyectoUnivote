import React from 'react';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { FaUserTie } from "react-icons/fa";

export default function Inf_candidato() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800">
      
      {/* Navbar */}
      <Navbar /> 

      <div className="h-20"></div>

      <main className="flex-grow max-w-4xl mx-auto p-6">
        <h2 className="text-center text-3xl font-bold text-blue-900 mb-8">
          Inscripción de Candidatos Universitarios
        </h2>

        {/* Sección de Requisitos */}
        <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-blue-800 flex items-center gap-2">
            <span role="img" aria-label="checklist">✅</span>
            Requisitos comunes para inscribirte como candidato
          </h3>
          <ul className="space-y-4 text-gray-700 list-disc list-inside">
            <li>
              <span className="font-semibold">Ser estudiante activo</span> y estar matriculado en el periodo vigente.
            </li>
            <li>
              <span className="font-semibold">Haber cursado un mínimo de 3 semestres</span> 
            </li>
            <li>
              <span className="font-semibold">Promedio académico mínimo 4.0 - 5.0</span>
            </li>
            <li>
              <span className="font-semibold">No tener sanciones disciplinarias vigentes</span> ni antecedentes que afecten la participación.
            </li>
            <li>
              <span className="font-semibold">Estar a paz y salvo</span> por todo concepto financiero y académico con la universidad.
            </li>
            <li>
              <span className="font-semibold">Presentar plan de trabajo</span> o propuestas de manera escrita y oficial.
            </li>
            <li>
              <span className="font-semibold">Inscribirse dentro de las fechas establecidas (5 dias habiles desde que abre la eleccion)</span> 
            </li>
          </ul>
        </section>

        {/* Sección de Recomendaciones */}
        <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-blue-800 flex items-center gap-2">
            <span role="img" aria-label="pin">📌</span>
            Recomendaciones para candidatos
          </h3>
          <ul className="space-y-4 text-gray-700 list-disc list-inside">
            <li>
              <span className="font-semibold">Prepara un plan de trabajo claro y realista:</span> enfocado en las necesidades de los estudiantes.
            </li>
            <li>
              <span className="font-semibold">Mantén un perfil académico y disciplinario impecable:</span> eso da confianza a los votantes.
            </li>
            <li>
              <span className="font-semibold">Haz campaña respetuosa y transparente:</span> evita ataques personales, promueve ideas y propuestas.
            </li>
            <li>
              <span className="font-semibold">Usa canales oficiales de comunicación</span> (correo institucional, foros, charlas, redes internas).
            </li>
            <li>
              <span className="font-semibold">Escucha a los estudiantes:</span> abre espacios de diálogo antes y durante la campaña.
            </li>
            <li>
              <span className="font-semibold">Cumple con los plazos y formatos establecidos</span> para no quedar fuera del proceso.
            </li>
            <li>
              <span className="font-semibold">Sé visible y cercano:</span> los votantes deben conocerte y sentir confianza en tu liderazgo.
            </li>
          </ul>
        </section>

        {/* Botón de Registro */}
        <div className="text-center mt-10 mb-12">
          <a
            href="/Registro_candidato" // Cambia esta URL a tu página de registro
            className="inline-flex items-center gap-2 bg-blue-900 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-800 transition transform hover:scale-105 shadow-md"
          >
            <FaUserTie className="w-5 h-5" />
            Regístrate como candidato
          </a>
        </div>
      </main>

    </div>
  );
}