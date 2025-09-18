import React, { useState } from "react";
import Navbar_admin from "../components/Navbar_admin";
import Footer from "../components/Footer";

const Gestionar_votantes = () => {
    // Estado con los datos iniciales
    const [votantes, setVotantes] = useState([
        { id: 1, nombre: "Laura", apellido: "García", tipoDoc: "CC", numeroDoc: "1001234567", correo: "laura.garcia@mail.com", estado: "Habilitado" },
        { id: 2, nombre: "Carlos", apellido: "Pérez", tipoDoc: "TI", numeroDoc: "1023456789", correo: "carlos.perez@mail.com", estado: "Deshabilitado" },
        { id: 3, nombre: "Sofía", apellido: "Martínez", tipoDoc: "CC", numeroDoc: "1012345678", correo: "sofia.martinez@mail.com", estado: "Habilitado" },
        { id: 4, nombre: "Andrés", apellido: "Ramírez", tipoDoc: "CE", numeroDoc: "2009876543", correo: "andres.ramirez@mail.com", estado: "Habilitado" },
        { id: 5, nombre: "Valentina", apellido: "López", tipoDoc: "CC", numeroDoc: "1034567890", correo: "valentina.lopez@mail.com", estado: "Deshabilitado" },
        { id: 6, nombre: "Juan", apellido: "Torres", tipoDoc: "TI", numeroDoc: "1045678901", correo: "juan.torres@mail.com", estado: "Habilitado" },
        { id: 7, nombre: "Mariana", apellido: "Rodríguez", tipoDoc: "CC", numeroDoc: "1056789012", correo: "mariana.rodriguez@mail.com", estado: "Habilitado" },
        { id: 8, nombre: "Felipe", apellido: "Hernández", tipoDoc: "CE", numeroDoc: "2012345678", correo: "felipe.hernandez@mail.com", estado: "Deshabilitado" },
        { id: 9, nombre: "Camila", apellido: "Moreno", tipoDoc: "CC", numeroDoc: "1067890123", correo: "camila.moreno@mail.com", estado: "Habilitado" },
        { id: 10, nombre: "Daniel", apellido: "Suárez", tipoDoc: "CC", numeroDoc: "1078901234", correo: "daniel.suarez@mail.com", estado: "Habilitado" },
    ]);

    // Función para habilitar/deshabilitar
    const toggleEstado = (id) => {
        setVotantes((prevVotantes) =>
            prevVotantes.map((votante) =>
                votante.id === id
                    ? { ...votante, estado: votante.estado === "Habilitado" ? "Deshabilitado" : "Habilitado" }
                    : votante
            )
        );
    };

    return (
        <>
            <Navbar_admin />
            <div className="p-6 mt-24">
                {/* Título centrado y más grande */}
                <h1 className="text-4xl font-extrabold text-center text-blue-900 mb-6">
                    Información de Votantes
                </h1>

                <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300 bg-white shadow-md rounded-lg">
                        {/* Encabezados azul oscuro */}
                        <thead className="bg-blue-900 text-white">
                            <tr>
                                <th className="px-4 py-3 border">ID Votante</th>
                                <th className="px-4 py-3 border">Nombre</th>
                                <th className="px-4 py-3 border">Apellido</th>
                                <th className="px-4 py-3 border">Tipo Doc</th>
                                <th className="px-4 py-3 border">Número Doc</th>
                                <th className="px-4 py-3 border">Correo</th>
                                <th className="px-4 py-3 border">Estado</th>
                                <th className="px-4 py-3 border">Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {votantes.map((votante) => (
                                <tr key={votante.id} className="text-center hover:bg-gray-100">
                                    <td className="px-4 py-2 border">{votante.id}</td>
                                    <td className="px-4 py-2 border">{votante.nombre}</td>
                                    <td className="px-4 py-2 border">{votante.apellido}</td>
                                    <td className="px-4 py-2 border">{votante.tipoDoc}</td>
                                    <td className="px-4 py-2 border">{votante.numeroDoc}</td>
                                    <td className="px-4 py-2 border">{votante.correo}</td>
                                    <td
                                        className={`px-4 py-2 border font-semibold ${votante.estado === "Habilitado"
                                                ? "text-green-600"
                                                : "text-red-600"
                                            }`}
                                    >
                                        {votante.estado}
                                    </td>
                                    <td className="px-4 py-2 border">
                                        <button
                                            onClick={() => toggleEstado(votante.id)}
                                            className={`px-3 py-1 rounded ${votante.estado === "Habilitado"
                                                    ? "bg-red-500 text-white hover:bg-red-700"
                                                    : "bg-green-500 text-white hover:bg-green-700"
                                                }`}
                                        >
                                            {votante.estado === "Habilitado"
                                                ? "Deshabilitar"
                                                : "Habilitar"}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Gestionar_votantes;
