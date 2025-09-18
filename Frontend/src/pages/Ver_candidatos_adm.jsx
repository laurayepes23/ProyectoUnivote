import React, { useState, useEffect } from "react";
import Navbar_admin from "../components/Navbar_admin";

const Ver_candidatos_adm = () => {
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
        estado: "Activo",
        foto: "/public/img/candidato3.png",
        eleccion: "Elección Consejo Estudiantil 2025",
      },
      {
        id: 2,
        nombre: "María",
        apellido: "García",
        tipoDoc: "T.I.",
        numeroDoc: "1023456789",
        correo: "maria.garcia@example.com",
        estado: "Inactivo",
        foto: "/public/img/candidato2.png",
        eleccion: "Elección Representante Docente 2024",
      },
      {
        id: 3,
        nombre: "Luis",
        apellido: "Ramírez",
        tipoDoc: "C.C.",
        numeroDoc: "1034567890",
        correo: "luis.ramirez@example.com",
        estado: "Activo",
        foto: "/public/img/candidato1.png",
        eleccion: "Elección Alcaldía Estudiantil",
      },
    ];
    setCandidatos(data);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar administrador */}
      <Navbar_admin />

      {/* Contenido */}
      <div className="pt-24 px-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-900">
          Lista de Candidatos
        </h1>

        {candidatos.length === 0 ? (
          <p className="text-gray-600 text-center">
            No hay candidatos registrados.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg">
              <thead className="bg-blue-900 text-white text-lg">
                <tr>
                  <th className="p-3 border">ID</th>
                  <th className="p-3 border">Foto</th>
                  <th className="p-3 border">Nombre Completo</th>
                  <th className="p-3 border">Tipo Doc.</th>
                  <th className="p-3 border">Número Doc.</th>
                  <th className="p-3 border">Correo</th>
                  <th className="p-3 border">Estado</th>
                  <th className="p-3 border">Elección</th>
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
                    <td className="p-3 border">{candidato.tipoDoc}</td>
                    <td className="p-3 border">{candidato.numeroDoc}</td>
                    <td className="p-3 border">{candidato.correo}</td>
                    <td className="p-3 border">{candidato.estado}</td>
                    <td className="p-3 border">{candidato.eleccion}</td>
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

export default Ver_candidatos_adm;
