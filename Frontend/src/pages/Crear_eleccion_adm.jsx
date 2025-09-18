import React, { useState } from "react";
import Navbar_admin from "../components/Navbar_admin";
import Footer from "../components/Footer";

const Crear_eleccion_adm = () => {
  const [elecciones, setElecciones] = useState([]); // Lista de elecciones creadas
  const [formData, setFormData] = useState({
    nombre: "",
    fechaInicio: "",
    fechaFin: "",
    estado: "Pendiente", // Estado por defecto
  });

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Crear nueva elección
  const handleSubmit = (e) => {
    e.preventDefault();

    // Generar un ID automático
    const nuevaEleccion = {
      id: elecciones.length + 1,
      ...formData,
    };

    // Agregarla a la lista
    setElecciones([...elecciones, nuevaEleccion]);

    // Resetear formulario
    setFormData({
      nombre: "",
      fechaInicio: "",
      fechaFin: "",
      estado: "Pendiente",
    });

    alert("✅ Elección creada correctamente");
  };

  return (
    <>
      <Navbar_admin />
      <div className="p-6 mt-24 flex flex-col items-center">
        {/* Título */}
        <h1 className="text-4xl font-extrabold text-center text-blue-900 mb-6">
          Crear Nueva Elección
        </h1>

        {/* Formulario */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 border mb-10"
        >
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Nombre de la elección
            </label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Ej: Elección de Personero 2025"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Fecha y hora de inicio
              </label>
              <input
                type="datetime-local"
                name="fechaInicio"
                value={formData.fechaInicio}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Fecha y hora de cierre
              </label>
              <input
                type="datetime-local"
                name="fechaFin"
                value={formData.fechaFin}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 rounded-lg font-bold hover:bg-blue-900 transition"
          >
            Crear Elección
          </button>
        </form>

        {/* Tabla de elecciones creadas */}
        {elecciones.length > 0 && (
          <div className="w-full max-w-5xl">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
              Elecciones Creadas
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 bg-white shadow-md rounded-lg">
                <thead className="bg-blue-900 text-white">
                  <tr>
                    <th className="px-4 py-2 border">ID Elección</th>
                    <th className="px-4 py-2 border">Nombre</th>
                    <th className="px-4 py-2 border">Fecha Inicio</th>
                    <th className="px-4 py-2 border">Fecha Fin</th>
                    <th className="px-4 py-2 border">Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {elecciones.map((eleccion) => (
                    <tr
                      key={eleccion.id}
                      className="text-center hover:bg-gray-100"
                    >
                      <td className="px-4 py-2 border">{eleccion.id}</td>
                      <td className="px-4 py-2 border">{eleccion.nombre}</td>
                      <td className="px-4 py-2 border">
                        {new Date(eleccion.fechaInicio).toLocaleString()}
                      </td>
                      <td className="px-4 py-2 border">
                        {new Date(eleccion.fechaFin).toLocaleString()}
                      </td>
                      <td
                        className={`px-4 py-2 border font-semibold ${
                          eleccion.estado === "Pendiente"
                            ? "text-yellow-600"
                            : "text-green-600"
                        }`}
                      >
                        {eleccion.estado}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Crear_eleccion_adm;
