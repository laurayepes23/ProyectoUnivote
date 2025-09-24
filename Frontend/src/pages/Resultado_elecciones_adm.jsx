import React, { useState, useEffect } from "react";
import Navbar_admin from "../components/Navbar_admin";
import Footer from "../components/Footer";
import axios from "axios";

// AJUSTE AQUÍ: Apunta al nuevo endpoint que creamos en el controlador
const API_BASE_URL = "http://localhost:3000/elections/results";

const Resultado_elecciones_adm = () => {
    // Estado para almacenar los resultados de la API
    const [elecciones, setElecciones] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Función para obtener los resultados de las elecciones de la API
    const fetchResults = async () => {
        setLoading(true);
        try {
            // Se asume que el backend tiene un endpoint para obtener todas las elecciones con sus resultados
            const response = await axios.get(API_BASE_URL);
            // Agregado para depuración: muestra los datos en la consola
            console.log("Datos recibidos del backend:", response.data);
            setElecciones(response.data);
        } catch (err) {
            console.error("Error al cargar los resultados:", err);
            setError("No se pudieron cargar los resultados de las elecciones.");
        } finally {
            setLoading(false);
        }
    };

    // Carga los resultados al montar el componente
    useEffect(() => {
        fetchResults();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Navbar administrador */}
            <Navbar_admin />

            {/* Contenido */}
            <div className="pt-24 px-6 pb-12">
                <h1 className="text-3xl font-bold mb-6 text-center text-blue-900">
                    Resultados de Elecciones
                </h1>

                {loading ? (
                    <p className="text-center text-gray-500">Cargando resultados...</p>
                ) : error ? (
                    <p className="text-center text-red-500">{error}</p>
                ) : elecciones.length === 0 ? (
                    <p className="text-gray-600 text-center">
                        No hay resultados disponibles.
                    </p>
                ) : (
                    elecciones.map((eleccion) => (
                        <div key={eleccion.id_election} className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4 text-center text-gray-700">
                                {eleccion.nombre_election}
                            </h2>
                            <div className="flex justify-center">
                                <table className="w-full max-w-2xl border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                                    <thead className="bg-blue-900 text-white text-lg">
                                        <tr>
                                            <th className="p-3 border text-left">Candidato</th>
                                            <th className="p-3 border text-center">Votos</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {eleccion.candidates && eleccion.candidates.length > 0 ? (
                                            eleccion.candidates
                                              .sort((a, b) => b.votos - a.votos) // Opcional: ordenar de mayor a menor
                                              .map((candidato) => (
                                                <tr key={candidato.id_candidate} className="hover:bg-gray-100">
                                                    <td className="p-3 border">
                                                        {candidato.nombre_candidate}
                                                    </td>
                                                    <td className="p-3 border text-center font-bold">
                                                        {candidato.votos}
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="2" className="p-3 text-center text-gray-500">
                                                    No hay candidatos registrados para esta elección.
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Resultado_elecciones_adm;