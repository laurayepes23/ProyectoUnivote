import React, { useState, useEffect } from "react";
import Navbar_admin from "../components/Navbar_admin";
import axios from "axios";

// Ajusta esta URL para que apunte a tu endpoint de candidatos en el backend
const API_BASE_URL = "http://localhost:3000/candidates";

const Aprobar_Eliminar_cand_admin = () => {
  // Estado para almacenar los candidatos de la base de datos
  const [candidatos, setCandidatos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null); // Para mensajes de éxito/error

  // Función para obtener los candidatos de la API
  const fetchCandidatos = async () => {
    setLoading(true);
    try {
      const response = await axios.get(API_BASE_URL);
      setCandidatos(response.data);
    } catch (err) {
      console.error("Error al cargar la lista de candidatos:", err);
      setError("No se pudo cargar la lista de candidatos.");
    } finally {
      setLoading(false);
    }
  };

  // Carga los candidatos al montar el componente
  useEffect(() => {
    fetchCandidatos();
  }, []);

  // Función para aprobar un candidato (sin cambios, ya estaba bien)
  const aprobarCandidato = async (id_candidate) => {
    try {
      await axios.patch(`${API_BASE_URL}/${id_candidate}`, {
        estado_candidate: "Aprobado",
      });
      setMessage("✅ Candidato aprobado correctamente.");
      // Actualiza el estado local para reflejar el cambio instantáneamente
      setCandidatos(candidatos.map(cand => 
        cand.id_candidate === id_candidate ? { ...cand, estado_candidate: "Aprobado" } : cand
      ));
    } catch (err) {
      console.error("Error al aprobar el candidato:", err);
      setMessage("❌ Error al aprobar el candidato. Intente de nuevo.");
    }
  };

  // --- CAMBIOS AQUÍ ---
  // Función para rechazar un candidato (antes 'eliminarCandidato')
  const rechazarCandidato = async (id_candidate) => {
    try {
      // Usamos PATCH para actualizar el estado, no DELETE
      await axios.patch(`${API_BASE_URL}/${id_candidate}`, {
        estado_candidate: "No Aprobado",
      });
      setMessage("✅ Candidato cambiado a 'No Aprobado' correctamente.");
      // Actualizamos el estado local, igual que en aprobarCandidato
      setCandidatos(candidatos.map(cand => 
        cand.id_candidate === id_candidate ? { ...cand, estado_candidate: "No Aprobado" } : cand
      ));
    } catch (err) {
      console.error("Error al rechazar el candidato:", err);
      setMessage("❌ Error al rechazar el candidato. Intente de nuevo.");
    }
  };
  // --- FIN DE LOS CAMBIOS ---

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col font-sans">
      {/* Navbar administrador */}
      <Navbar_admin />
      {/* Contenido principal */}
      <div className="flex-grow pt-24 px-6 pb-8">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-blue-900">
          Gestión de Candidatos
        </h1>

        {/* Mensaje de estado (éxito/error) */}
        {message && (
          <div
            className={`mb-6 p-4 rounded-xl font-semibold text-center shadow-lg transform transition-all duration-300 ${
              message.startsWith("✅") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
            }`}
          >
            {message}
          </div>
        )}

        {loading ? (
          <p className="text-center text-gray-500 text-lg">Cargando candidatos...</p>
        ) : error ? (
          <p className="text-center text-red-500 text-lg font-bold">{error}</p>
        ) : candidatos.length === 0 ? (
          <p className="text-gray-600 text-center text-lg">
            No hay candidatos para gestionar.
          </p>
        ) : (
          <div className="overflow-x-auto shadow-xl rounded-lg">
            <table className="w-full border-collapse bg-white">
              <thead className="bg-blue-800 text-white">
                <tr>
                  <th className="p-4 border-b text-left">Nombre Completo</th>
                  <th className="p-4 border-b">Correo</th>
                  <th className="p-4 border-b">Elección</th>
                  <th className="p-4 border-b">Estado</th>
                  <th className="p-4 border-b">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {candidatos.map((candidato) => (
                  <tr key={candidato.id_candidate} className="hover:bg-gray-100 text-center transition-colors">
                    <td className="p-4 border-b text-left flex items-center">
                      <img
                        src={candidato.foto_candidate || 'https://via.placeholder.com/150'}
                        alt={`Foto de ${candidato.nombre_candidate}`}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      {`${candidato.nombre_candidate} ${candidato.apellido_candidate}`}
                    </td>
                    <td className="p-4 border-b">{candidato.correo_candidate}</td>
                    <td className="p-4 border-b">
                      {candidato.election?.nombre_election || 'Sin elección'}
                    </td>
                    <td className="p-4 border-b">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold
                          ${candidato.estado_candidate === "Aprobado" ? "bg-green-200 text-green-800" :
                          candidato.estado_candidate === "Pendiente" ? "bg-yellow-200 text-yellow-800" :
                          "bg-red-200 text-red-800"}`}
                      >
                        {candidato.estado_candidate}
                      </span>
                    </td>
                    <td className="p-4 border-b">
                      <div className="flex justify-center items-center space-x-2">
                        <button
                          onClick={() => aprobarCandidato(candidato.id_candidate)}
                          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors shadow-md disabled:bg-gray-400"
                          aria-label="Aprobar candidato"
                          disabled={candidato.estado_candidate === 'Aprobado'}
                        >
                          Aprobar
                        </button>
                        {/* --- CAMBIOS AQUÍ --- */}
                        <button
                          onClick={() => rechazarCandidato(candidato.id_candidate)}
                          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors shadow-md disabled:bg-gray-400"
                          aria-label="Rechazar candidato"
                          disabled={candidato.estado_candidate === 'No Aprobado'}
                        >
                          Rechazar
                        </button>
                      </div>
                    </td>
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

export default Aprobar_Eliminar_cand_admin;