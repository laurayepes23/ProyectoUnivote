import React, { useState, useEffect } from "react";
import Navbar_admin from "../components/Navbar_admin";

const Iniciar_Cerrar_vot_adm = () => {
  const [elecciones, setElecciones] = useState([]);

  useEffect(() => {
    // Simulación de datos de elecciones
    const data = [
      { id: 1, nombre: "Elección Consejo Estudiantil 2025", estado: "Pendiente" },
      { id: 2, nombre: "Elección Representante Docente 2024", estado: "Finalizada" },
      { id: 3, nombre: "Elección Alcaldía Estudiantil", estado: "Activa" },
    ];
    setElecciones(data);
  }, []);

  // Función para iniciar una elección
  const iniciarEleccion = (id) => {
    // En un caso real, aquí harías una llamada a tu backend
    console.log(`Iniciando la elección con ID: ${id}`);
    setElecciones(
      elecciones.map((eleccion) =>
        eleccion.id === id ? { ...eleccion, estado: "Activa" } : eleccion
      )
    );
  };

  // Función para cerrar una elección
  const cerrarEleccion = (id) => {
    // En un caso real, aquí harías una llamada a tu backend
    console.log(`Cerrando la elección con ID: ${id}`);
    setElecciones(
      elecciones.map((eleccion) =>
        eleccion.id === id ? { ...eleccion, estado: "Finalizada" } : eleccion
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar administrador */}
      <Navbar_admin />

      {/* Contenido */}
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
                  <tr key={eleccion.id} className="hover:bg-gray-100 text-center">
                    <td className="p-3 border">{eleccion.id}</td>
                    <td className="p-3 border">{eleccion.nombre}</td>
                    <td className="p-3 border">{eleccion.estado}</td>
                    <td className="p-3 border">
                      {eleccion.estado === "Activa" ? (
                        <button
                          onClick={() => cerrarEleccion(eleccion.id)}
                          className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition mx-1"
                        >
                          Cerrar
                        </button>
                      ) : (
                        <button
                          onClick={() => iniciarEleccion(eleccion.id)}
                          className="bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700 transition mx-1"
                          disabled={eleccion.estado === "Finalizada"}
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