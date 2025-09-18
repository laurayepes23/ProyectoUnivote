import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardEleccion from "../components/CardEleccion";
import NavbarVotante from "../components/NavbarVotante";

export default function GestionElecciones() {
  const [elecciones, setElecciones] = useState([]);
  const [cargando, setCargando] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulación de datos
    setTimeout(() => {
      setElecciones([
        {
          id: 1,
          nombre: "Elección de Rector 2025",
          fecha: "15 de septiembre 2025",
          estado: "Activa",
          imagen: "/img/rector.png",
        },
        {
          id: 2,
          nombre: "Elección de Representante Estudiantil",
          fecha: "10 de octubre 2025",
          estado: "Próxima",
          imagen: "/img/representante.png",
        },
        {
          id: 3,
          nombre: "Elección de Consejo Académico",
          fecha: "1 de agosto 2025",
          estado: "Finalizada",
          imagen: "/img/consejo.png",
        },
      ]);
      setCargando(false);
    }, 1000);
  }, []);

  const handleVotar = (id) => {
    navigate(`/CandidatosVotante/${id}`);
  };

  return (

    
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4 py-8">

      <NavbarVotante />
      
      <h1 className="text-3xl font-bold text-blue-900 mb-8 mt-24">
        Elecciones Disponibles
      </h1>

      <div className="w-full max-w-6xl">
        {cargando ? (
          <p className="text-center text-gray-600">Cargando elecciones...</p>
        ) : elecciones.length === 0 ? (
          <p className="text-center text-gray-600">
            No hay elecciones registradas.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {elecciones.map((eleccion) => (
              <CardEleccion
                key={eleccion.id}
                eleccion={eleccion}
                onVotar={() => handleVotar(eleccion.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
