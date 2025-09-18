import React, { useState } from 'react';
import NavbarCandidato from "../components/NavbarCandidato";
import Footer from "../components/Footer";
import { FaEdit, FaTrashAlt, FaPlusCircle, FaSave, FaTimesCircle, FaRegLightbulb } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

// Datos de ejemplo para simular las propuestas existentes del candidato
const mockProposals = [
    {
        id: 1,
        titulo: "Mejora de la infraestructura digital",
        descripcion: "Proponemos la renovación de los equipos de cómputo en las bibliotecas y laboratorios, así como la ampliación de la cobertura Wi-Fi en todas las áreas comunes.",
        eleccion: "Elecciones de Representante Estudiantil",
    },
    {
        id: 2,
        titulo: "Creación de un fondo de becas de investigación",
        descripcion: "Crear un fondo para apoyar a estudiantes de pregrado en proyectos de investigación, fomentando la innovación y la participación en semilleros.",
        eleccion: "Elecciones de Representante Estudiantil",
    },
];

const mockElecciones = [
    "Elecciones de Representante Estudiantil",
    "Elección de Decano de Facultad",
    "Elección de Consejo Académico",
];

export default function GestionarPropuestas() {
    const navigate = useNavigate(); // Inicializa el hook de navegación
    const [proposals, setProposals] = useState(mockProposals);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentProposal, setCurrentProposal] = useState(null);
    const [formData, setFormData] = useState({
        titulo: "",
        descripcion: "",
        eleccion: mockElecciones[0],
    });

    const handleGoToCreatePage = () => {
        navigate("/CrearPropuesta");
    };

    const handleOpenEditModal = (proposal) => {
        setCurrentProposal(proposal);
        setFormData({
            titulo: proposal.titulo,
            descripcion: proposal.descripcion,
            eleccion: proposal.eleccion,
        });
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSaveProposal = (e) => {
        e.preventDefault();
        if (currentProposal) {
            // Lógica para editar una propuesta
            setProposals(proposals.map(prop =>
                prop.id === currentProposal.id ? { ...formData, id: currentProposal.id } : prop
            ));
            console.log("Propuesta actualizada:", formData);
        }
        handleCloseModal();
    };

    const handleDeleteProposal = (id) => {
        if (window.confirm("¿Estás seguro de que deseas eliminar esta propuesta?")) {
            setProposals(proposals.filter(prop => prop.id !== id));
            console.log("Propuesta eliminada:", id);
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-blue-50 text-gray-800">
            <NavbarCandidato />
            <div className="h-20"></div>

            {/* Contenido principal */}
            <main className="flex-grow max-w-6xl mx-auto p-8">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900">
                        Mis Propuestas
                    </h2>
                    <button
                        onClick={handleGoToCreatePage}
                        className="bg-blue-900 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:bg-blue-800 transition-colors flex items-center"
                    >
                        <FaPlusCircle className="mr-2" />
                        Crear Propuesta
                    </button>
                </div>

                {proposals.length === 0 ? (
                    <div className="text-center p-12 bg-white rounded-2xl shadow-lg border border-gray-100">
                        <FaRegLightbulb className="text-6xl text-blue-500 mx-auto mb-4" />
                        <p className="text-lg text-gray-600 font-semibold mb-4">
                            Aún no tienes propuestas. ¡Crea la primera para empezar!
                        </p>
                        <button
                            onClick={handleGoToCreatePage}
                            className="bg-green-500 text-white font-semibold py-3 px-8 rounded-xl shadow-md hover:bg-green-600 transition-colors"
                        >
                            Crear Propuesta Ahora
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {proposals.map(proposal => (
                            <div
                                key={proposal.id}
                                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col justify-between"
                            >
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">{proposal.titulo}</h3>
                                    <p className="text-sm font-semibold text-blue-600 mb-4">{proposal.eleccion}</p>
                                    <p className="text-gray-600 text-sm mb-4">{proposal.descripcion}</p>
                                </div>
                                <div className="flex space-x-4 mt-auto">
                                    <button
                                        onClick={() => handleOpenEditModal(proposal)}
                                        className="flex-1 bg-blue-900 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-800 transition-colors flex items-center justify-center"
                                    >
                                        <FaEdit className="mr-2" />
                                        Editar
                                    </button>
                                    <button
                                        onClick={() => handleDeleteProposal(proposal.id)}
                                        className="flex-1 bg-red-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-600 transition-colors flex items-center justify-center"
                                    >
                                        <FaTrashAlt className="mr-2" />
                                        Eliminar
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </main>


        </div>
    );
}