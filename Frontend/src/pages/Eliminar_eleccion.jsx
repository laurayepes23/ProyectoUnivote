import React, { useState, useEffect } from "react";
import Navbar_admin from "../components/Navbar_admin";
import Footer from "../components/Footer";
import axios from "axios";

// Ajusta esta URL para que apunte a tu endpoint de elecciones en el backend
const API_BASE_URL = "http://localhost:3000/elections";

const Eliminar_eleccion_adm = () => {
    // Estado para almacenar las elecciones de la base de datos
    const [elecciones, setElecciones] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null); // Para mensajes de éxito/error

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

    // Carga las elecciones al montar el componente
    useEffect(() => {
        fetchElections();
    }, []);

    // Nueva función para eliminar una elección
    const handleDelete = async (id) => {
        try {
            await axios.delete(`${API_BASE_URL}/${id}`);
            setMessage("✅ Elección eliminada correctamente.");
            // Vuelve a cargar la lista para mostrar el cambio
            await fetchElections(); 
        } catch (err) {
            console.error("Error al eliminar la elección:", err);
            // Manejo de errores más específico
            if (err.response && err.response.status === 500) {
                setMessage("❌ Error: No se puede eliminar esta elección. Es posible que tenga candidatos o votantes asociados.");
            } else {
                setMessage("❌ Error al eliminar la elección. Por favor, intente de nuevo.");
            }
        }
    };

    return (
        <>
            <Navbar_admin />
            <div className="p-6 mt-24 flex flex-col items-center">
                {/* Título */}
                <h1 className="text-4xl font-extrabold text-center text-red-700 mb-6">
                    Eliminar Elección
                </h1>

                {/* Mensaje de estado (éxito/error) */}
                {message && (
                    <div className={`mb-4 p-3 rounded-lg font-bold ${
                        message.startsWith("✅") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                    }`}>
                        {message}
                    </div>
                )}

                {/* Tabla de elecciones */}
                {loading ? (
                    <p className="text-center text-gray-500">Cargando elecciones...</p>
                ) : error ? (
                    <p className="text-center text-red-500">{error}</p>
                ) : (
                    elecciones.length > 0 && (
                        <div className="w-full max-w-5xl">
                            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
                                Elecciones Registradas
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
                                            <th className="px-4 py-2 border">Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {elecciones.map((eleccion) => (
                                            <tr key={eleccion.id_election} className="text-center hover:bg-gray-100">
                                                <td className="px-4 py-2 border">{eleccion.id_election}</td>
                                                <td className="px-4 py-2 border">{eleccion.nombre_election}</td>
                                                
                                                <td className="px-4 py-2 border">
                                                    {eleccion.fecha_inicio || 'Invalid Date'}
                                                </td>
                                                <td className="px-4 py-2 border">
                                                    {eleccion.fecha_fin || 'Invalid Date'}
                                                </td>
                                                <td
                                                    className={`px-4 py-2 border font-semibold ${
                                                        eleccion.estado_election === "Programada"
                                                            ? "text-yellow-600"
                                                            : eleccion.estado_election === "Finalizada"
                                                            ? "text-red-600"
                                                            : "text-green-600"
                                                    }`}
                                                >
                                                    {eleccion.estado_election}
                                                </td>
                                                <td className="px-4 py-2 border">
                                                    <button
                                                        onClick={() => handleDelete(eleccion.id_election)}
                                                        className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-800 transition"
                                                    >
                                                        Eliminar
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )
                )}
            </div>
        </>
    );
};

export default Eliminar_eleccion_adm;