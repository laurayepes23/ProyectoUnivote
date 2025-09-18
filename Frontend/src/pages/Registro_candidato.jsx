import { useState } from "react";
import { Link } from 'react-router-dom';

export default function Registro_candidato() {
  const [formData, setFormData] = useState({
    nombre_del_candidato: "",
    apellido: "",
    tipo_de_doc: "",
    numero_doc: "",
    correo: "",
    contrasena: "",
    estado: "",
    foto: null,
    eleccion_a_la_que_se_postula: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "foto") {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del formulario del candidato (sin ID):", formData);
    alert("Registro de candidato exitoso. El ID será generado por el servidor.");

    // Aquí es donde enviarías `formData` a tu API del backend
    // fetch('/api/registro-candidato', {
    //   method: 'POST',
    //   body: JSON.stringify(formData),
    //   headers: { 'Content-Type': 'application/json' }
    // });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-900">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        {/* Logo */}
        <Link to="/">
          <div className="flex justify-center mb-4">
            <img
              src="/img/logo.png"
              alt="Logo"
              className="w-40 h-40 object-contain"
            />
          </div>
        </Link>
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Registro de Candidato
        </h2>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nombre del Candidato
            </label>
            <input
              type="text"
              name="nombre_del_candidato"
              value={formData.nombre_del_candidato}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Apellido
            </label>
            <input
              type="text"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Tipo de Documento
            </label>
            <select
              name="tipo_de_doc"
              value={formData.tipo_de_doc}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-white focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Seleccione</option>
              <option value="CC">Cédula de Ciudadanía</option>
              <option value="TI">Tarjeta de Identidad</option>
              <option value="CE">Cédula de Extranjería</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Número de Documento
            </label>
            <input
              type="text"
              name="numero_doc"
              value={formData.numero_doc}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Correo Institucional
            </label>
            <input
              type="email"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <input
              type="password"
              name="contrasena"
              value={formData.contrasena}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Estado
            </label>
            <input
              type="text"
              name="estado"
              value={formData.estado}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Foto
            </label>
            <input
              type="file"
              name="foto"
              onChange={handleChange}
              required
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Elección a la que se postula
            </label>
            <input
              type="text"
              name="eleccion_a_la_que_se_postula"
              value={formData.eleccion_a_la_que_se_postula}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-900 text-white py-2 rounded-md font-semibold hover:bg-blue-800 transition"
          >
            Registrarse como Candidato
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          ¿Ya tienes cuenta?{" "}
          <a href="/Login" className="text-blue-600 hover:underline">
            Inicia sesión
          </a>
        </p>
      </div>
    </div>
  );
}