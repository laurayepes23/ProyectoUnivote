import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarCandidato from "../components/NavbarCandidato";
import Footer from "../components/Footer";
import { FaSave, FaTimesCircle } from 'react-icons/fa';

// Datos de ejemplo para las elecciones
const mockElecciones = [
    "Elecciones de Representante Estudiantil",
    "Elección de Decano de Facultad",
    "Elección de Consejo Académico",
];

export default function CrearPropuesta() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        titulo: "",
        descripcion: "",
        eleccion: mockElecciones[0],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí iría la lógica para enviar la propuesta a un servidor (API)
        console.log("Datos de la nueva propuesta:", formData);
        
        // Simulación de éxito y redirección
        alert("¡Propuesta creada exitosamente!");
        navigate('/GestionarPropuestas');
    };

    return (
        <div className="min-h-screen flex flex-col bg-blue-50 text-gray-800">
            <NavbarCandidato />
            <div className="h-20"></div>

            {/* Contenido principal */}
            <main className="flex-grow max-w-2xl mx-auto p-8 w-full">
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                    <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">
                        Crear Nueva Propuesta
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Título</label>
                            <input
                                type="text"
                                name="titulo"
                                value={formData.titulo}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Descripción</label>
                            <textarea
                                name="descripcion"
                                value={formData.descripcion}
                                onChange={handleChange}
                                required
                                rows="6"
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-2 focus:ring-blue-500"
                            ></textarea>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Elección</label>
                            <select
                                name="eleccion"
                                value={formData.eleccion}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-2 focus:ring-blue-500"
                            >
                                {mockElecciones.map((eleccion, index) => (
                                    <option key={index} value={eleccion}>{eleccion}</option>
                                ))}
                            </select>
                        </div>
                        
                        <div className="flex justify-end gap-4 mt-8">
                            <button
                                type="button"
                                onClick={() => navigate('/GestionarPropuestas')}
                                className="px-6 py-3 text-sm font-semibold text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors flex items-center"
                            >
                                <FaTimesCircle className="mr-2" />
                                Cancelar
                            </button>
                            <button
                                type="submit"
                                className="px-6 py-3 text-sm font-semibold text-white bg-blue-900 rounded-md hover:bg-blue-800 transition-colors flex items-center"
                            >
                                <FaSave className="mr-2" />
                                Guardar Propuesta
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
}