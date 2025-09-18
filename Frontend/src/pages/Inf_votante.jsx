import React from 'react';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar"; // Usaremos el mismo Navbar por ahora
import { FaUserPlus } from "react-icons/fa";


export default function Inf_votante() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800">
      {/* Navbar de administrador (o el Navbar que ya tienes) */}
      <Navbar />
      <div className="h-20"></div>

      <main className="flex-grow max-w-4xl mx-auto mt-12 p-6">
        <h2 className="text-center text-3xl font-bold text-blue-900 mb-8">
          Inscripción de Votantes Universitarios
        </h2>

        {/* Sección de Requisitos */}
        <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-blue-800 flex items-center gap-2">
            <span role="img" aria-label="checklist">✅</span>
            Requisitos  para inscribirte
          </h3>

          <ul className="space-y-4 text-gray-700 list-disc list-inside">
            <li>
              <span className="font-semibold">Ser estudiante activo:</span> estar matriculado oficialmente en el semestre o periodo académico vigente.
            </li>
            <li>
              <span className="font-semibold">Estar al día con pagos:</span> no tener deudas pendientes con la universidad (matrícula u otros).
            </li>
            <li>
              <span className="font-semibold">Documento de identidad vigente:</span> cédula de ciudadanía, tarjeta de identidad o documento equivalente en caso de extranjeros.
            </li>
            <li>
              <span className="font-semibold">Correo institucional activo:</span> muchas universidades validan la inscripción mediante el correo oficial del estudiante.
            </li>
          </ul>
        </section>

        {/* Sección de Recomendaciones */}
        <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-blue-800 flex items-center gap-2">
            <span role="img" aria-label="pin">📌</span>
            Recomendaciones para inscribirte y participar
          </h3>
          <ul className="space-y-4 text-gray-700 list-disc list-inside">
            <li>
              <span className="font-semibold">Lee bien la convocatoria:</span> revisa fechas, plazos y requisitos específicos de tu universidad.
            </li>
            <li>
              <span className="font-semibold">Ten a la mano tu documento de identidad</span> para diligenciar correctamente el registro.
            </li>
            <li>
              <span className="font-semibold">Verifica tu inscripción:</span> después de registrarte, revisa que tu nombre aparezca en el censo electoral.
            </li>
            <li>
              <span className="font-semibold">Mantén actualizado tu correo institucional,</span> ya que allí llegan las notificaciones.
            </li>
            <li>
              <span className="font-semibold">Participa activamente:</span> votar es una forma de tener voz en las decisiones de la universidad.
            </li>
            <li>
              <span className="font-semibold">Infórmate de los candidatos y propuestas</span> antes de votar, para que tu decisión sea consciente.
            </li>
          </ul>
        </section>

        {/* Botón de Registro */}
        <div className="text-center mt-10 mb-12">
          <a
            href="/RegistroVotante" // Cambia esta URL a la página de registro
            className="inline-flex items-center gap-2 bg-blue-900 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-800 transition transform hover:scale-105 shadow-md"
          >
            <FaUserPlus className="w-5 h-5" />
            Regístrate ahora
          </a>
        </div>
      </main>


    </div>
  );
}


