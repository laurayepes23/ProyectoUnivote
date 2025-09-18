
import React, { useState, useEffect } from "react";
import Navbar_admin from "../components/Navbar_admin";

const Aprobar_Eliminar_cand_admin = () => {
  // Simulación de datos de candidatos
  const [candidatos, setCandidatos] = useState([]);

  useEffect(() => {
    // Simulación de datos (luego puedes traerlos del backend)
    const data = [
      {
        id: 1,
        nombre: "Juan",
        apellido: "Pérez",
        tipoDoc: "C.C.",
        numeroDoc: "1012345678",
        correo: "juan.perez@example.com",
        estado: "Pendiente",
        foto: "/public/img/candidato3.png",
        eleccion: "Elección Consejo Estudiantil 2025",
        propuesta: "Crear un programa de reciclaje en el campus.",
      },
      {
        id: 2,
        nombre: "María",
        apellido: "García",
        tipoDoc: "T.I.",
        numeroDoc: "1023456789",
        correo: "maria.garcia@example.com",
        estado: "Aprobado",
        foto: "/public/img/candidato2.png",
        eleccion: "Elección Representante Docente 2024",
        propuesta: "Mejorar la calidad de los laboratorios de ciencia.",
      },
      {
        id: 3,
        nombre: "Luis",
        apellido: "Ramírez",
        tipoDoc: "C.C.",
        numeroDoc: "1034567890",
        correo: "luis.ramirez@example.com",
        estado: "Pendiente",
        foto: "/public/img/candidato1.png",
        eleccion: "Elección Alcaldía Estudiantil",
        propuesta: "Organizar eventos culturales cada mes.",
      },
    ];
    setCandidatos(data);
  }, []);

  // Función para aprobar un candidato
  const aprobarCandidato = (id) => {
    console.log(`Aprobando al candidato con ID: ${id}`);
    setCandidatos(
      candidatos.map((candidato) =>
        candidato.id === id ? { ...candidato, estado: "Aprobado" } : candidato
      )
    );
  };

  // Función para eliminar un candidato
  const eliminarCandidato = (id) => {
    console.log(`Eliminando al candidato con ID: ${id}`);
    setCandidatos(candidatos.filter((candidato) => candidato.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar administrador */}
      <Navbar_admin />

      {/* Contenido */}
      <div className="pt-24 px-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-900">
          Gestión de Candidatos
        </h1>

        {candidatos.length === 0 ? (
          <p className="text-gray-600 text-center">
            No hay candidatos para gestionar.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg">
              <thead className="bg-blue-900 text-white text-lg">
                <tr>
                  <th className="p-3 border">ID</th>
                  <th className="p-3 border">Foto</th>
                  <th className="p-3 border">Nombre</th>
                  <th className="p-3 border">Documento</th>
                  <th className="p-3 border">Correo</th>
                  <th className="p-3 border">Elección</th>
                  <th className="p-3 border">Propuesta</th>
                  <th className="p-3 border">Estado</th>
                  <th className="p-3 border">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {candidatos.map((candidato) => (
                  <tr key={candidato.id} className="hover:bg-gray-100 text-center">
                    <td className="p-3 border">{candidato.id}</td>
                    <td className="p-3 border">
                      <img
                        src={candidato.foto}
                        alt={`Foto de ${candidato.nombre}`}
                        className="w-12 h-12 rounded-full object-cover mx-auto"
                      />
                    </td>
                    <td className="p-3 border">{`${candidato.nombre} ${candidato.apellido}`}</td>
                    <td className="p-3 border">{`${candidato.tipoDoc} - ${candidato.numeroDoc}`}</td>
                    <td className="p-3 border">{candidato.correo}</td>
                    <td className="p-3 border">{candidato.eleccion}</td>
                    <td className="p-3 border text-left max-w-xs">{candidato.propuesta}</td>
                    <td className="p-3 border">
                      <span className={`px-2 py-1 rounded-full text-sm font-semibold
                        ${candidato.estado === "Aprobado" ? "bg-green-200 text-green-800" :
                         candidato.estado === "Pendiente" ? "bg-yellow-200 text-yellow-800" :
                         "bg-red-200 text-red-800"}`}
                      >
                        {candidato.estado}
                      </span>
                    </td>
                    <td className="p-3 border">
                      {candidato.estado === "Pendiente" && (
                        <>
                          <button
                            onClick={() => aprobarCandidato(candidato.id)}
                            className="bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700 transition mx-1 my-1"
                          >
                            Aprobar
                          </button>
                          <button
                            onClick={() => eliminarCandidato(candidato.id)}
                            className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition mx-1 my-1"
                          >
                            Eliminar
                          </button>
                        </>
                      )}
                      {candidato.estado === "Aprobado" && (
                        <button
                          onClick={() => eliminarCandidato(candidato.id)}
                          className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition mx-1 my-1"
                        >
                          Eliminar
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

export default Aprobar_Eliminar_cand_admin;