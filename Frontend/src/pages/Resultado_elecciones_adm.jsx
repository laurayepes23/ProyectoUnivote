

import React, { useState, useEffect } from "react";
import Navbar_admin from "../components/Navbar_admin";

const Resultado_elecciones_adm = () => {
  // Simulación de datos para una elección específica
  const [resultados, setResultados] = useState([]);
  const [nombreEleccion, setNombreEleccion] = useState("");

  useEffect(() => {
    // Simulación de datos de resultados (luego los traerías del backend)
    const data = {
      nombre: "Elección Consejo Estudiantil 2025",
      candidatos: [
        { id: 1, nombre: "Juan Pérez", votos: 150 },
        { id: 2, nombre: "María García", votos: 120 },
        { id: 3, nombre: "Luis Ramírez", votos: 95 },
      ],
    };

    setNombreEleccion(data.nombre);
    setResultados(data.candidatos);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar administrador */}
      <Navbar_admin />

      {/* Contenido */}
      <div className="pt-24 px-6">
        <h1 className="text-3xl font-bold mb-2 text-center text-blue-900">
          Resultados de Elecciones
        </h1>
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-700">
          {nombreEleccion}
        </h2>

        {resultados.length === 0 ? (
          <p className="text-gray-600 text-center">
            Aún no hay resultados disponibles para esta elección.
          </p>
        ) : (
          <div className="flex justify-center">
            <table className="w-full max-w-2xl border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
              <thead className="bg-blue-900 text-white text-lg">
                <tr>
                  <th className="p-3 border text-left">Candidato</th>
                  <th className="p-3 border text-left">Elección a la que se postula</th>
                  <th className="p-3 border text-center">Votos</th>
                </tr>
              </thead>
              <tbody>
                {resultados.map((candidato) => (
                  <tr key={candidato.id} className="hover:bg-gray-100">
                    <td className="p-3 border">{candidato.nombre}</td>
                    <td className="p-3 border">{nombreEleccion}</td> {/* Corregido para mostrar el nombre de la elección */}
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

export default Resultado_elecciones_adm;