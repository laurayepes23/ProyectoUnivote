import React, { useState, useEffect } from "react";
import Navbar_admin from "../components/Navbar_admin";
import axios from "axios"; // Asegúrate de tener axios instalado (npm install axios)

const Mi_perfil_admin = () => {
    // El estado del perfil empieza como nulo hasta que se carguen los datos
    const [perfil, setPerfil] = useState(null);

    const [formulario, setFormulario] = useState({
        nombre: "",
        apellido: "",
        tipoDoc: "",
        numeroDoc: "",
        correo: "",
        nuevaContrasena: "",
        confirmarContrasena: "",
    });

    // Empezamos en 'true' para mostrar un mensaje mientras se cargan los datos
    const [loading, setLoading] = useState(true);
    const [isUpdating, setIsUpdating] = useState(false); // Estado para el proceso de actualización
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    // --- NUEVO: useEffect para cargar los datos del administrador ---
    useEffect(() => {
        const fetchAdminData = async () => {
            try {
                // 1. Obtenemos los datos guardados en el login desde localStorage
                const adminDataString = localStorage.getItem('adminData');
                if (!adminDataString) {
                    throw new Error("No se encontraron datos de sesión. Por favor, inicie sesión de nuevo.");
                }
                const adminData = JSON.parse(adminDataString);
                const adminId = adminData.id_admin;

                // 2. Hacemos la petición al backend para obtener los datos frescos del perfil
                const response = await axios.get(`http://localhost:3000/administrators/${adminId}`);
                const data = response.data;

                // 3. Mapeamos los nombres del backend a los del estado del frontend
                const formattedProfile = {
                    id: data.id_admin,
                    nombre: data.nombre_admin,
                    apellido: data.apellido_admin,
                    tipoDoc: data.tipo_doc_admin,
                    numeroDoc: data.num_doc_admin.toString(), // BigInt se convierte a string
                    correo: data.correo_admin,
                };
                
                setPerfil(formattedProfile);

            } catch (error) {
                console.error("Error al cargar el perfil:", error);
                setErrorMessage(error.message || "No se pudieron cargar los datos del perfil.");
            } finally {
                setLoading(false);
            }
        };

        fetchAdminData();
    }, []); // El array vacío [] asegura que esto se ejecute solo una vez al montar el componente

    // Este useEffect se encarga de rellenar el formulario cuando los datos del perfil se cargan
    useEffect(() => {
        if (perfil) {
            setFormulario({
                nombre: perfil.nombre,
                apellido: perfil.apellido,
                tipoDoc: perfil.tipoDoc,
                numeroDoc: perfil.numeroDoc,
                correo: perfil.correo,
                nuevaContrasena: "",
                confirmarContrasena: "",
            });
        }
    }, [perfil]);

    const handleChange = (e) => {
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value,
        });
    };

    // --- LÓGICA DE ACTUALIZACIÓN MODIFICADA ---
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsUpdating(true);
        setSuccessMessage("");
        setErrorMessage("");

        if (formulario.nuevaContrasena && formulario.nuevaContrasena !== formulario.confirmarContrasena) {
            setErrorMessage("Las contraseñas no coinciden.");
            setIsUpdating(false);
            return;
        }

        try {
            // Preparamos los datos para enviar al backend
            const updateData = {
                nombre_admin: formulario.nombre,
                apellido_admin: formulario.apellido,
                tipo_doc_admin: formulario.tipoDoc,
                num_doc_admin: BigInt(formulario.numeroDoc), // Convertimos a BigInt para el backend
                correo_admin: formulario.correo,
            };

            // Solo incluimos la contraseña si se va a cambiar
            if (formulario.nuevaContrasena) {
                updateData.contrasena_admin = formulario.nuevaContrasena;
            }

            // Hacemos la llamada a la API para actualizar
            await axios.patch(`http://localhost:3000/administrators/${perfil.id}`, updateData);

            // Actualizamos el estado local del perfil para reflejar los cambios
            setPerfil({
                ...perfil,
                nombre: formulario.nombre,
                apellido: formulario.apellido,
                tipoDoc: formulario.tipoDoc,
                numeroDoc: formulario.numeroDoc,
                correo: formulario.correo,
            });

            setSuccessMessage("Perfil actualizado con éxito.");

        } catch (error) {
            console.error("Error al actualizar el perfil:", error);
            setErrorMessage("Error al actualizar el perfil. Inténtalo de nuevo.");
        } finally {
            setIsUpdating(false);
        }
    };

    // --- Renderizado condicional mientras se cargan los datos ---
    if (loading) {
        return (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <p className="text-xl text-blue-900">Cargando perfil...</p>
            </div>
        );
    }
    
    if (!perfil) {
        return (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                 <p className="text-xl text-red-600">{errorMessage}</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar_admin />
            <div className="pt-24 px-6">
                <h1 className="text-3xl font-bold mb-6 text-center text-blue-900">
                    Mi Perfil
                </h1>
                <div className="flex justify-center">
                    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        ID de Administrador
                                    </label>
                                    <input
                                        type="text"
                                        name="id"
                                        value={perfil.id} // Se muestra el ID del perfil cargado
                                        disabled
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-gray-200 cursor-not-allowed"
                                    />
                                </div>
                                {/* Nombre */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Nombre
                                    </label>
                                    <input
                                        type="text"
                                        name="nombre"
                                        value={formulario.nombre}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                </div>
                                {/* Apellido */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Apellido
                                    </label>
                                    <input
                                        type="text"
                                        name="apellido"
                                        value={formulario.apellido}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                </div>
                                {/* Tipo de Documento */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Tipo de Documento
                                    </label>
                                    <input
                                        type="text"
                                        name="tipoDoc"
                                        value={formulario.tipoDoc}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                </div>
                                {/* Número de Documento */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Número de Documento
                                    </label>
                                    <input
                                        type="text"
                                        name="numeroDoc"
                                        value={formulario.numeroDoc}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                </div>
                                {/* Correo */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Correo
                                    </label>
                                    <input
                                        type="email"
                                        name="correo"
                                        value={formulario.correo}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                </div>
                            </div>

                            <h2 className="text-xl font-bold mb-4 text-blue-900">
                                Cambiar Contraseña
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                {/* Nueva Contraseña */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Nueva Contraseña
                                    </label>
                                    <input
                                        type="password"
                                        name="nuevaContrasena"
                                        value={formulario.nuevaContrasena}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                </div>
                                {/* Confirmar Contraseña */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Confirmar Contraseña
                                    </label>
                                    <input
                                        type="password"
                                        name="confirmarContrasena"
                                        value={formulario.confirmarContrasena}
                                        onChange={handleChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    />
                                </div>
                            </div>

                            {/* Mensajes de feedback */}
                            {isUpdating && <p className="text-blue-500 text-center">Guardando cambios...</p>}
                            {successMessage && (
                                <p className="text-green-600 text-center font-bold">{successMessage}</p>
                            )}
                            {errorMessage && (
                                <p className="text-red-600 text-center font-bold">{errorMessage}</p>
                            )}

                            {/* Botón de guardar */}
                            <div className="mt-6 text-center">
                                <button
                                    type="submit"
                                    disabled={isUpdating}
                                    className={`px-6 py-2 rounded-lg text-white font-semibold transition
                                    ${isUpdating ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}
                                >
                                    Guardar Cambios
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mi_perfil_admin;