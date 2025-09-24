import React, { useState, useEffect } from "react";
import Navbar_admin from "../components/Navbar_admin";
import Footer from "../components/Footer";
import axios from "axios";

// Ajusta esta URL para que apunte a tu endpoint de elecciones en el backend
const API_BASE_URL = "http://localhost:3000/elections";

const Ver_elecciones = () => {
    const [elecciones, setElecciones] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Función para obtener las elecciones de la API
    const fetchElections = async () => {
        setLoading(true);
        try {
            const response = await axios.get(API_BASE_URL);
            setElecciones(response.data);
        } catch (err) {
            console.error("Error al cargar las elecciones:", err);
            setError("No se pudieron cargar las elecciones.");
        } finally {
            setLoading(false);
        }
    };

    console.log(elecciones);

    // Carga las elecciones al montar el componente
    useEffect(() => {
        fetchElections();
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

                {loading ? (
                    <p className="text-center text-gray-500">Cargando elecciones...</p>
                ) : error ? (
                    <p className="text-center text-red-500">{error}</p>
                ) : elecciones.length === 0 ? (
                    <p className="text-gray-600 text-center">
                        No hay elecciones registradas.
                    </p>
                ) : (
                    <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                        <thead className="bg-blue-900 text-white text-lg">
                            <tr>
                                <th className="p-3 border text-center">ID</th>
                                <th className="p-3 border text-center">Nombre</th>
                                <th className="p-3 border text-center">Fecha de Inicio</th>
                                <th className="p-3 border text-center">Fecha de Fin</th>
                                <th className="p-3 border text-center">Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {elecciones.map((eleccion) => (
                                <tr key={eleccion.id_election} className="hover:bg-gray-100 text-center">
                                    <td className="p-3 border">{eleccion.id_election}</td>
                                    <td className="p-3 border">{eleccion.nombre_election}</td>
                                    <td className="p-3 border">
                                        {eleccion.fecha_inicio}
                                    </td>
                                    <td className="p-3 border">
                                        {eleccion.fecha_fin}
                                    </td>
                                    <td
                                        className={`p-3 border font-semibold ${
                                            eleccion.estado_election === "Pendiente"
                                                ? "text-yellow-600"
                                                : "text-green-600"
                                        }`}
                                    >
                                        {eleccion.estado_election}
                                    </td>
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