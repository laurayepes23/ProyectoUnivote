import React, { useState } from "react";
import Navbar_admin from "../components/Navbar_admin";
import Footer from "../components/Footer";

const Eliminar_eleccion = () => {
  // Datos de ejemplo (puedes reemplazarlos luego con datos reales de tu backend)
  const [elecciones, setElecciones] = useState([
    { id: 1, nombre: "Elección Personero 2025", fechaInicio: "2025-09-14T09:00", fechaFin: "2025-09-14T17:00", estado: "Pendiente" },
    { id: 2, nombre: "Elección Consejo Estudiantil", fechaInicio: "2025-09-20T08:00", fechaFin: "2025-09-20T16:00", estado: "Pendiente" },
    { id: 3, nombre: "Elección Representante Docentes", fechaInicio: "2025-10-01T09:30", fechaFin: "2025-10-01T15:30", estado: "Pendiente" },
  ]);

  // Función para eliminar una elección
  const eliminarEleccion = (id) => {
    const confirmacion = window.confirm("¿Seguro que quieres eliminar esta elección?");
    if (confirmacion) {
      setElecciones(elecciones.filter((eleccion) => eleccion.id !== id));
    }
  };

  return (
    <>
      <Navbar_admin />
      <div className="p-6 mt-24 flex flex-col items-center">
        <h1 className="text-4xl font-extrabold text-center text-red-700 mb-6">
          Eliminar Elección
        </h1>

        <div className="w-full max-w-5xl overflow-x-auto">
          <table className="min-w-full border border-gray-300 bg-white shadow-md rounded-lg">
            <thead className="bg-blue-900 text-white">
              <tr>
                <th className="px-4 py-2 border">ID Elección</th>
                <th className="px-4 py-2 border">Nombre</th>
                <th className="px-4 py-2 border">Fecha Inicio</th>
                <th className="px-4 py-2 border">Fecha Fin</th>
                <th className="px-4 py-2 border">Estado</th>
                <th className="px-4 py-2 border">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {elecciones.length > 0 ? (
                elecciones.map((eleccion) => (
                  <tr key={eleccion.id} className="text-center hover:bg-gray-100">
                    <td className="px-4 py-2 border">{eleccion.id}</td>
                    <td className="px-4 py-2 border">{eleccion.nombre}</td>
                    <td className="px-4 py-2 border">
                      {new Date(eleccion.fechaInicio).toLocaleString()}
                    </td>
                    <td className="px-4 py-2 border">
                      {new Date(eleccion.fechaFin).toLocaleString()}
                    </td>
                    <td className="px-4 py-2 border font-semibold text-yellow-600">
                      {eleccion.estado}
                    </td>
                    <td className="px-4 py-2 border">
                      <button
                        onClick={() => eliminarEleccion(eleccion.id)}
                        className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-800 transition"
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="px-4 py-6 text-center text-gray-500">
                    No hay elecciones registradas.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Eliminar_eleccion;
