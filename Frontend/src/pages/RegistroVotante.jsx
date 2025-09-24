import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import api from '../api/axios'; // Importa la instancia de Axios

export default function RegistroVotante() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nombre_voter: "",
        apellido_voter: "",
        tipo_doc_voter: "",
        num_doc_voter: "",
        correo_voter: "",
        contrasena_voter: "",
        id_career: "",
        id_role: 2,
        estado_voter: "Activo",
    });
    const [careers, setCareers] = useState([]);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        const fetchCareers = async () => {
            try {
                const response = await api.get('/careers');
                setCareers(response.data);
            } catch (error) {
                console.error("Error al obtener las carreras:", error);
                setError("Error al cargar las carreras. Intenta recargar la página.");
            }
        };
        fetchCareers();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            // Asegúrate de que los valores numéricos se envíen como números
            const payload = {
                ...formData,
                num_doc_voter: Number(formData.num_doc_voter),
                id_career: Number(formData.id_career),
            };

            const response = await api.post('/voters', payload);

            console.log("Registro exitoso:", response.data);
            setSuccess("¡Registro exitoso! Serás redirigido al login.");

            setTimeout(() => {
                navigate('/login');
            }, 2000);

        } catch (error) {
            const errorMessage = error.response?.data?.message || "Error en el registro. Por favor, inténtalo de nuevo.";
            console.error("Hubo un error al registrar el votante:", errorMessage);
            setError(errorMessage);
        }
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
                    Registro Univote
                </h2>
                
                {error && (
                    <div className="bg-red-100 text-red-700 p-3 rounded-md mb-4 text-sm text-center">
                        {error}
                    </div>
                )}
                {success && (
                    <div className="bg-green-100 text-green-700 p-3 rounded-md mb-4 text-sm text-center">
                        {success}
                    </div>
                )}

                {/* Formulario */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Nombre</label>
                        <input
                            type="text"
                            name="nombre_voter"
                            value={formData.nombre_voter}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Apellido</label>
                        <input
                            type="text"
                            name="apellido_voter"
                            value={formData.apellido_voter}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Tipo de Documento</label>
                        <select
                            name="tipo_doc_voter"
                            value={formData.tipo_doc_voter}
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
                        <label className="block text-sm font-medium text-gray-700">Número de Documento</label>
                        <input
                            type="number"
                            name="num_doc_voter"
                            value={formData.num_doc_voter}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Correo Institucional</label>
                        <input
                            type="email"
                            name="correo_voter"
                            value={formData.correo_voter}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Contraseña</label>
                        <input
                            type="password"
                            name="contrasena_voter"
                            value={formData.contrasena_voter}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Menú desplegable para las carreras */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Carrera</label>
                        <select
                            name="id_career"
                            value={formData.id_career}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-white focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Seleccione una carrera</option>
                            {careers.map((career) => (
                                <option key={career.id_career} value={career.id_career}>
                                    {career.nombre_career}
                                </option>
                            ))}
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-900 text-white py-2 rounded-md font-semibold hover:bg-blue-800 transition"
                    >
                        Registrarse
                    </button>
                </form>

                <p className="text-center text-sm mt-4">
                    ¿Ya tienes cuenta?{" "}
                    <Link to="/login" className="text-blue-600 hover:underline">
                        Inicia sesión
                    </Link>
                </p>
            </div>
        </div>
    );
}
