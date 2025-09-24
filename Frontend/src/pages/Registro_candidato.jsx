import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import api from '../api/axios';

export default function RegistroCandidato() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nombre_candidate: "",
        apellido_candidate: "",
        tipo_doc_candidate: "",
        num_doc_candidate: "",
        correo_candidate: "",
        contrasena_candidate: "",
        estado_candidate: "Activo",
        id_role: 3, 
        id_career: "",
        id_election: "",
    });
    const [fotoFile, setFotoFile] = useState(null);
    const [careers, setCareers] = useState([]);
    const [elections, setElections] = useState([]);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        const fetchRelations = async () => {
            try {
                const [careersResponse, electionsResponse] = await Promise.all([
                    api.get('/careers'),
                    api.get('/elections')
                ]);
                setCareers(careersResponse.data);
                setElections(electionsResponse.data);
            } catch (error) {
                console.error("Error al obtener datos:", error);
                setError("Error al cargar datos. Intenta recargar la página.");
            }
        };
        fetchRelations();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setFotoFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            const formPayload = new FormData();
            
            Object.keys(formData).forEach(key => {
                const value = formData[key];
                if (value !== "") {
                    formPayload.append(key, String(value));
                }
            });

            if (fotoFile) {
                formPayload.append("foto_candidate", fotoFile);
            }
            
            const response = await api.post('/candidates/register', formPayload, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            
            console.log("Registro exitoso:", response.data);
            setSuccess("¡Registro exitoso! Serás redirigido al login.");

            setTimeout(() => {
                navigate('/login');
            }, 2000);

        } catch (error) {
            const errorMessage = error.response?.data?.message || error.message || "Error en el registro. Por favor, inténtalo de nuevo.";
            console.error("Hubo un error al registrar el candidato:", errorMessage);
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
                    Registro de Candidato
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
                            name="nombre_candidate"
                            value={formData.nombre_candidate}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Apellido</label>
                        <input
                            type="text"
                            name="apellido_candidate"
                            value={formData.apellido_candidate}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Tipo de Documento</label>
                        <select
                            name="tipo_doc_candidate"
                            value={formData.tipo_doc_candidate}
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
                            name="num_doc_candidate"
                            value={formData.num_doc_candidate}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Correo Institucional</label>
                        <input
                            type="email"
                            name="correo_candidate"
                            value={formData.correo_candidate}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Contraseña</label>
                        <input
                            type="password"
                            name="contrasena_candidate"
                            value={formData.contrasena_candidate}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

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

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Elección a la que se postula (Opcional)</label>
                        <select
                            name="id_election"
                            value={formData.id_election}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 bg-white focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Seleccione una elección</option>
                            {elections.map((election) => (
                                <option key={election.id_election} value={election.id_election}>
                                    {election.nombre_election}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Foto (Opcional)</label>
                        <input
                            type="file"
                            name="foto_candidate"
                            onChange={handleFileChange}
                            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-900 text-white py-2 rounded-md font-semibold hover:bg-blue-800 transition"
                    >
                        Registrar Candidato
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