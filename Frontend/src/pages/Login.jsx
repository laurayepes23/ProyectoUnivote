import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import api from '../api/axios';

export default function Login() {
    const navigate = useNavigate();
    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        try {
            // Intento 1: Iniciar sesión como candidato
            const candidateResponse = await api.post('/candidates/login', {
                correo_candidate: correo,
                contrasena_candidate: contrasena
            });
            console.log("Inicio de sesión de candidato exitoso:", candidateResponse.data);
            setSuccess("¡Inicio de sesión exitoso!");
            navigate('/candidato');
            return; // Importante: Salir de la función si el inicio de sesión es exitoso

        } catch (candidateError) {
            // Si el login de candidato falla, intentamos como votante.
            // No hacemos nada, simplemente continuamos con el siguiente `try`.
        }

        try {
            // Intento 2: Iniciar sesión como votante
            const voterResponse = await api.post('/voters/login', {
                correo_voter: correo,
                contrasena_voter: contrasena
            });
            console.log("Inicio de sesión de votante exitoso:", voterResponse.data);
            setSuccess("¡Inicio de sesión exitoso!");
            navigate('/votante');
            return; // Salir de la función si el inicio de sesión es exitoso
        } catch (voterError) {
            // Si el login de votante falla, intentamos como administrador.
        }

        try {
            // Intento 3: Iniciar sesión como administrador
            const adminResponse = await api.post('/administrators/login', {
                correo_admin: correo,
                contrasena_admin: contrasena
            });
            console.log("Inicio de sesión de administrador exitoso:", adminResponse.data);
            setSuccess("¡Inicio de sesión exitoso!");
            navigate('/administrador');
            return; // Salir de la función si el inicio de sesión es exitoso
        } catch (adminError) {
            // Si los tres intentos fallan, mostramos un error genérico
            const errorMessage = adminError.response?.data?.message || "Correo o contraseña incorrectos.";
            setError(errorMessage);
            console.error("Error al iniciar sesión:", errorMessage);
        }
    };

    return (
        <div className="min-h-screen bg-blue-900 flex items-center justify-center px-4">
            <div className="bg-white shadow-xl rounded-2xl w-full max-w-sm p-8">
                {/* Logo */}
                <Link to="/">
                    <div className="flex justify-center mb-4">
                        <img src="/img/logo.png" alt="Univote" className="w-40 h-40" />
                    </div>
                </Link>

                <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
                    Iniciar Sesión
                </h1>

                {/* Mensajes */}
                {error && (
                    <div className="bg-red-100 text-red-700 text-sm p-3 rounded-md mb-4 text-center">
                        {error}
                    </div>
                )}

                {success && (
                    <div className="bg-green-100 text-green-700 text-sm p-3 rounded-md mb-4 text-center">
                        {success}
                    </div>
                )}

                {/* Formulario */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                        <label className="block text-gray-700 mb-1">Correo</label>
                        <input
                            type="text"
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                            placeholder="Escribe tu correo institucional"
                            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-1">Contraseña</label>
                        <input
                            type="password"
                            value={contrasena}
                            onChange={(e) => setContrasena(e.target.value)}
                            placeholder="Escribe tu contraseña"
                            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800 transition"
                    >
                        Ingresar
                    </button>

                    <p className="text-center text-sm mt-4">
                        ¿Aun no tienes cuenta?{" "}
                        <a href="/RegistroVotante" className="text-blue-600 hover:underline">
                            Regístrate
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
}