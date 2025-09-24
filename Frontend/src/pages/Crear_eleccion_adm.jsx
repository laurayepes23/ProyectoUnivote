import React, { useState, useEffect } from "react";
import Navbar_admin from "../components/Navbar_admin";
import Footer from "../components/Footer";
import axios from "axios";

// Ajusta esta URL para que apunte a tu endpoint de elecciones en el backend
const API_BASE_URL = "http://localhost:3000/elections";

const Crear_eleccion_adm = () => {
    // Estado para almacenar las elecciones de la base de datos
    const [elecciones, setElecciones] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null); // Para mensajes de éxito/error

    // Estado para los datos del formulario
    const [formData, setFormData] = useState({
        nombre: "",
        fechaInicio: "",
        fechaFin: "",
        estado: "Pendiente",
    });

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

    // Maneja cambios en los inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Maneja el envío del formulario para crear una nueva elección
    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(null); // Limpia mensajes anteriores

        try {
            const dataToSend = {
                nombre_election: formData.nombre,
                fecha_inicio: new Date(formData.fechaInicio).toISOString(),
                fecha_fin: new Date(formData.fechaFin).toISOString(),
                estado_election: formData.estado,
                admin_id: 3, 
            };

            const response = await axios.post(API_BASE_URL, dataToSend);

            await fetchElections();

            setMessage("✅ Elección creada correctamente.");
            
            setFormData({
                nombre: "",
                fechaInicio: "",
                fechaFin: "",
                estado: "Pendiente",
            });
        } catch (err) {
            console.error("Error al crear la elección:", err);
            setMessage("❌ Error al crear la elección. Por favor, intente de nuevo.");
        }
    };

    return (
        <>
            <Navbar_admin />
            <div className="p-6 mt-24 flex flex-col items-center">
                {/* Título */}
                <h1 className="text-4xl font-extrabold text-center text-blue-900 mb-6">
                    Crear Nueva Elección
                </h1>

                {/* Mensaje de estado (éxito/error) */}
                {message && (
                    <div className={`mb-4 p-3 rounded-lg font-bold ${
                        message.startsWith("✅") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                    }`}>
                        {message}
                    </div>
                )}

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

                    {/* Nuevo campo de selección para el estado de la elección */}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">
                            Estado
                        </label>
                        <select
                            name="estado"
                            value={formData.estado}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                        >
                            <option value="Pendiente">Pendiente</option>
                            <option value="En curso">En curso</option>
                            <option value="Finalizada">Finalizada</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-700 text-white py-2 rounded-lg font-bold hover:bg-blue-900 transition"
                    >
                        Crear Elección
                    </button>
                </form>

                {/* Tabla de elecciones creadas */}
                {loading ? (
                    <p className="text-center text-gray-500">Cargando elecciones...</p>
                ) : error ? (
                    <p className="text-center text-red-500">{error}</p>
                ) : (
                    elecciones.length > 0 && (
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
                                            <tr key={eleccion.id_election} className="text-center hover:bg-gray-100">
                                                <td className="px-4 py-2 border">{eleccion.id_election}</td>
                                                <td className="px-4 py-2 border">{eleccion.nombre_election}</td>
                                                <td className="px-4 py-2 border">
                                                    {new Date(eleccion.fecha_inicio).toLocaleString()}
                                                </td>
                                                <td className="px-4 py-2 border">
                                                    {new Date(eleccion.fecha_fin).toLocaleString()}
                                                </td>
                                                <td
                                                    className={`px-4 py-2 border font-semibold ${
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
                            </div>
                        </div>
                    )
                )}
            </div>
        </>
    );
};

export default Crear_eleccion_adm;
