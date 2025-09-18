
import React, { useState, useEffect } from "react";
import NavbarVotante from "../components/NavbarVotante";

const MiPerfilVotante = () => {
  const [perfil, setPerfil] = useState({
    id: 1,
    nombre: "Laura",
    apellido: "Yepes",
    tipoDoc: "C.C.",
    numeroDoc: "1012345678",
    correo: "laura.yepes@example.com",
    contrasena: "", // No se carga la contraseña real
  });

  const [formulario, setFormulario] = useState({
    nombre: "",
    apellido: "",
    tipoDoc: "",
    numeroDoc: "",
    correo: "",
    nuevaContrasena: "",
    confirmarContrasena: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // Al cargar el componente, precargamos los datos en el formulario
    setFormulario({
      nombre: perfil.nombre,
      apellido: perfil.apellido,
      tipoDoc: perfil.tipoDoc,
      numeroDoc: perfil.numeroDoc,
      correo: perfil.correo,
      nuevaContrasena: "",
      confirmarContrasena: "",
    });
  }, [perfil]);

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    // Validación de contraseñas
    if (formulario.nuevaContrasena && formulario.nuevaContrasena !== formulario.confirmarContrasena) {
      setErrorMessage("Las contraseñas no coinciden.");
      setLoading(false);
      return;
    }

    // Simulación de una llamada al backend
    try {
      // Aquí harías una llamada a tu API para actualizar el perfil
      // await axios.put('/api/perfil/1', formulario);
      
      // Simulación de la actualización
      setPerfil({
        ...perfil,
        nombre: formulario.nombre,
        apellido: formulario.apellido,
        tipoDoc: formulario.tipoDoc,
        numeroDoc: formulario.numeroDoc,
        correo: formulario.correo,
        // La contraseña no se guarda en el estado, solo se envía
      });

      setSuccessMessage("Perfil actualizado con éxito.");
    } catch (error) {
      setErrorMessage("Error al actualizar el perfil. Inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">

      <NavbarVotante />

      <div className="pt-24 px-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-900">
          Mi Perfil
        </h1>
        <div className="flex justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* ID del Administrador (No editable) */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    ID de Administrador
                  </label>
                  <input
                    type="text"
                    name="id"
                    value={perfil.id}
                    disabled
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-gray-200 cursor-not-allowed"
                  />
                </div>
                {/* Nombre */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formulario.nombre}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
                {/* Apellido */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Apellido
                  </label>
                  <input
                    type="text"
                    name="apellido"
                    value={formulario.apellido}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
                {/* Tipo de Documento */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Tipo de Documento
                  </label>
                  <input
                    type="text"
                    name="tipoDoc"
                    value={formulario.tipoDoc}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
                {/* Número de Documento */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Número de Documento
                  </label>
                  <input
                    type="text"
                    name="numeroDoc"
                    value={formulario.numeroDoc}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
                {/* Correo */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Correo
                  </label>
                  <input
                    type="email"
                    name="correo"
                    value={formulario.correo}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
              </div>

              <h2 className="text-xl font-bold mb-4 text-blue-900">
                Cambiar Contraseña
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Nueva Contraseña */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Nueva Contraseña
                  </label>
                  <input
                    type="password"
                    name="nuevaContrasena"
                    value={formulario.nuevaContrasena}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
                {/* Confirmar Contraseña */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Confirmar Contraseña
                  </label>
                  <input
                    type="password"
                    name="confirmarContrasena"
                    value={formulario.confirmarContrasena}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
              </div>

              {/* Mensajes de feedback */}
              {loading && <p className="text-blue-500 text-center">Guardando cambios...</p>}
              {successMessage && (
                <p className="text-green-600 text-center font-bold">{successMessage}</p>
              )}
              {errorMessage && (
                <p className="text-red-600 text-center font-bold">{errorMessage}</p>
              )}

              {/* Botón de guardar */}
              <div className="mt-6 text-center">
                <button
                  type="submit"
                  disabled={loading}
                  className={`px-6 py-2 rounded-lg text-white font-semibold transition
                    ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}
                >
                  Guardar Cambios
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiPerfilVotante;