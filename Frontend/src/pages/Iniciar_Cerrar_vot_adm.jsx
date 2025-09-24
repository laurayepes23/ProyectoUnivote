import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar_admin from "../components/Navbar_admin";

const Iniciar_Cerrar_vot_adm = () => {
  const [elecciones, setElecciones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchElections();
  }, []);

  const fetchElections = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:3000/elections");
      setElecciones(response.data);
      setError(null);
    } catch (err) {
      setError("Error al cargar las elecciones.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const iniciarEleccion = async (id) => {
    try {
      await axios.put(`http://localhost:3000/elections/iniciar/${id}`);
      fetchElections(); // Recargar la lista de elecciones
    } catch (err) {
      setError("Error al iniciar la elección.");
      console.error(err);
    }
  };

  const cerrarEleccion = async (id) => {
    try {
      await axios.put(`http://localhost:3000/elections/cerrar/${id}`);
      fetchElections(); // Recargar la lista de elecciones
    } catch (err) {
      setError("Error al cerrar la elección.");
      console.error(err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-xl font-semibold text-gray-700">Cargando...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-xl font-semibold text-red-600">
          Error: {error}.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar_admin />
      <div className="pt-24 px-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-900">
          Gestión de Elecciones
        </h1>
        {elecciones.length === 0 ? (
          <p className="text-gray-600 text-center">
            No hay elecciones registradas para gestionar.
          </p>
        ) : (
          <div className="flex justify-center">
            <table className="w-full max-w-4xl border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
              <thead className="bg-blue-900 text-white text-lg">
                <tr>
                  <th className="p-3 border text-center">ID</th>
                  <th className="p-3 border text-center">Nombre</th>
                  <th className="p-3 border text-center">Estado</th>
                  <th className="p-3 border text-center">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {elecciones.map((eleccion) => (
                  <tr key={eleccion.id_election} className="hover:bg-gray-100 text-center">
                    <td className="p-3 border">{eleccion.id_election}</td>
                    <td className="p-3 border">{eleccion.nombre_election}</td>
                    <td className="p-3 border">{eleccion.estado_election}</td>
                    <td className="p-3 border">
                      {eleccion.estado_election === "Activa" ? (
                        <button
                          onClick={() => cerrarEleccion(eleccion.id_election)}
                          className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition mx-1"
                        >
                          Cerrar
                        </button>
                      ) : (
                        <button
                          onClick={() => iniciarEleccion(eleccion.id_election)}
                          className="bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700 transition mx-1"
                          disabled={eleccion.estado_election === "Finalizada"}
                        >
                          Iniciar
                        </button>
                      )}
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

export default Iniciar_Cerrar_vot_adm;
