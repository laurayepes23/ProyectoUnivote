import React from "react";
import { useNavigate } from "react-router-dom";

// MODIFICADO: Recibimos la propiedad 'disabled'
export default function CardCandidato({ candidato, onVotar, disabled }) {
  const navigate = useNavigate();

  const handleVerPropuestas = () => {
    navigate(`/Propuestas/${candidato.id_candidate}`);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 text-center flex flex-col items-center">
      <img
        src={candidato.foto_candidate || "/img/default-avatar.png"}
        alt={candidato.nombre_candidate}
        className="w-40 h-40 object-cover rounded-full mb-4 border-4 border-gray-200"
      />
      <h3 className="text-xl font-bold text-blue-900">{candidato.nombre_candidate}</h3>
      <p className="text-gray-700 text-sm mb-4 text-center">
        {candidato.descripcion_candidate}
      </p>
      <div className="flex gap-3 mt-4">
        <button
          onClick={() => onVotar(candidato)}
          // MODIFICADO: Se añade el estado 'disabled'
          disabled={disabled}
          // MODIFICADO: Cambia el estilo si está deshabilitado
          className={`bg-blue-900 text-white px-4 py-2 rounded-lg transition ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-800'
            }`}
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