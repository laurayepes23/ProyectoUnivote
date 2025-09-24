import React, { useState, useEffect } from "react";
import Navbar_admin from "../components/Navbar_admin";
import Footer from "../components/Footer";
import axios from "axios";

// Ajusta esta URL para que apunte a tu endpoint de resultados en el backend
const API_BASE_URL = "http://localhost:3000/results";

const Resultado_candidatos_admin = () => {
  // Estado para almacenar los resultados de la API
  const [elecciones, setElecciones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Función para obtener los resultados de las elecciones de la API
  const fetchResults = async () => {
    setLoading(true);
    try {
      // Se asume que el backend tiene un endpoint para obtener todas las elecciones con sus resultados
      const response = await axios.get(API_BASE_URL);
      // Agregado para depuración: muestra los datos en la consola
      console.log("Datos recibidos del backend:", response.data);
      setElecciones(response.data);
    } catch (err) {
      console.error("Error al cargar los resultados:", err);
      setError("No se pudieron cargar los resultados de las elecciones.");
    } finally {
      setLoading(false);
    }
  };

  // Carga los resultados al montar el componente
  useEffect(() => {
    fetchResults();
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

        {loading ? (
          <p className="text-center text-gray-500">Cargando resultados...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : elecciones.length === 0 ? (
          <p className="text-gray-600 text-center">
            No hay resultados de candidatos disponibles.
          </p>
        ) : (
          <div className="flex justify-center flex-col items-center">
            {elecciones.map((eleccion, index) => (
              <div key={eleccion.id_election + '-' + index} className="mb-8 w-full max-w-4xl">
                <h2 className="text-2xl font-semibold mb-4 text-center text-gray-700">
                  {eleccion.nombre_election}
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                    <thead className="bg-blue-900 text-white text-lg">
                      <tr>
                        <th className="p-3 border text-left">Candidato</th>
                        <th className="p-3 border text-center">Votos Obtenidos</th>
                      </tr>
                    </thead>
                    <tbody>
                      {eleccion.candidates && eleccion.candidates.length > 0 ? (
                        eleccion.candidates.map((candidato) => (
                          <tr key={candidato.id_candidate} className="hover:bg-gray-100">
                            <td className="p-3 border">{candidato.nombre_candidate} {candidato.apellido_candidate}</td>
                            <td className="p-3 border text-center font-bold">
                              {candidato._count && candidato._count.votes !== undefined ? candidato._count.votes : 0}
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="2" className="p-3 text-center text-gray-500">
                            No hay candidatos registrados para esta elección.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Resultado_candidatos_admin;
