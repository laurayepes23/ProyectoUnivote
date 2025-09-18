
import React from "react";
import { useNavigate } from "react-router-dom";

export default function CardCandidato({ candidato, onVotar }) {
  const navigate = useNavigate();

  // Función para navegar a propuestas
  const handleVerPropuestas = () => {
    navigate(`/Propuestas/${candidato.id}`);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 text-center flex flex-col items-center">
      {/* Imagen centrada */}
      <img
        src={candidato.imagen}
        alt={candidato.nombre}
        className="w-40 h-40 object-cover rounded-full mb-4 border-4 border-gray-200"
      />

      {/* Información del candidato */}
      <h3 className="text-xl font-bold text-blue-900">{candidato.nombre}</h3>
      <p className="text-gray-700 text-sm mb-4 text-center">
        {candidato.descripcion}
      </p>

      {/* Botones */}
      <div className="flex gap-3 mt-4">
        <button
          onClick={() => onVotar(candidato)} 
          className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition"
        >
          Votar
        </button>

        <button
          onClick={handleVerPropuestas} 
          className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
        >
          Propuestas
        </button>
      </div>
    </div>
  );
}
