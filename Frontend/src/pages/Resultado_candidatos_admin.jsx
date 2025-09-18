import React, { useState, useEffect } from "react";
import Navbar_admin from "../components/Navbar_admin";

const Resultado_candidatos_admin = () => {
  // Simulación de datos de resultados de candidatos
  const [resultados, setResultados] = useState([]);

  useEffect(() => {
    // Simulación de datos (luego puedes traerlos del backend)
    const data = [
      {
        id: 1,
        nombre: "Juan Pérez",
        eleccion: "Elección Consejo Estudiantil 2025",
        votos: 150,
      },
      {
        id: 2,
        nombre: "María García",
        eleccion: "Elección Representante Docente 2024",
        votos: 120,
      },
      {
        id: 3,
        nombre: "Luis Ramírez",
        eleccion: "Elección Alcaldía Estudiantil",
        votos: 95,
      },
      {
        id: 4,
        nombre: "Ana Torres",
        eleccion: "Elección Consejo Estudiantil 2025",
        votos: 80,
      },
    ];
    setResultados(data);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar administrador */}
      <Navbar_admin />

      {/* Contenido */}
      <div className="pt-24 px-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-900">
          Resultados de Votación por Candidato
        </h1>

        {resultados.length === 0 ? (
          <p className="text-gray-600 text-center">
            No hay resultados de candidatos disponibles.
          </p>
        ) : (
          <div className="flex justify-center">
            <table className="w-full max-w-4xl border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
              <thead className="bg-blue-900 text-white text-lg">
                <tr>
                  <th className="p-3 border text-left">Candidato</th>
                  <th className="p-3 border text-left">Elección</th>
                  <th className="p-3 border text-center">Votos Obtenidos</th>
                </tr>
              </thead>
              <tbody>
                {resultados.map((candidato) => (
                  <tr key={candidato.id} className="hover:bg-gray-100">
                    <td className="p-3 border">{candidato.nombre}</td>
                    <td className="p-3 border">{candidato.eleccion}</td>
                    <td className="p-3 border text-center font-bold">{candidato.votos}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Resultado_candidatos_admin;