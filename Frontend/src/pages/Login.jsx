import React, { useState } from "react";
import { Link } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError("Por favor completa todos los campos.");
            setSuccess("");
            return;
        }

        if (email === "admin" && password === "1234") {
            setSuccess("Inicio de sesión exitoso.");
            setError("");
        } else {
            setError("Usuario o contraseña incorrectos");
            setSuccess("");
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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Escribe tu correo institucional"
                            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-1">Contraseña</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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
