// src/pages/Ver_elecciones.jsx
import React, { useState, useEffect } from "react";
import Navbar_admin from "../components/Navbar_admin";

const Ver_elecciones = () => {
    // Aquí simulo elecciones de ejemplo
    const [elecciones, setElecciones] = useState([]);

    useEffect(() => {
        // Simulación de datos (luego puedes traerlos del backend)
        const data = [
            { id: 1, nombre: "Elección Consejo Estudiantil 2025", estado: "Activa" },
            { id: 2, nombre: "Elección Representante Docente 2024", estado: "Finalizada" },
            { id: 3, nombre: "Elección Alcaldía Estudiantil", estado: "Pendiente" },
        ];
        setElecciones(data);
    }, []);

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Navbar administrador */}
            <Navbar_admin />

            {/* Contenido */}
            <div className="pt-24 px-6">
                <h1 className="text-3xl font-bold mb-6 text-center text-blue-900">
                    Lista de Elecciones
                </h1>

                {elecciones.length === 0 ? (
                    <p className="text-gray-600 text-center">
                        No hay elecciones registradas.
                    </p>
                ) : (
                    <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                        <thead className="bg-blue-900 text-white text-lg">
                            <tr>
                                <th className="p-3 border text-center">ID</th>
                                <th className="p-3 border text-center">Nombre</th>
                                <th className="p-3 border text-center">Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {elecciones.map((eleccion) => (
                                <tr key={eleccion.id} className="hover:bg-gray-100 text-center">
                                    <td className="p-3 border">{eleccion.id}</td>
                                    <td className="p-3 border">{eleccion.nombre}</td>
                                    <td className="p-3 border">{eleccion.estado}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default Ver_elecciones;