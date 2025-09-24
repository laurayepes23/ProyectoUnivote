import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardEleccion from "../components/CardEleccion";
import NavbarVotante from "../components/NavbarVotante";
import axios from 'axios'; 

export default function GestionElecciones() {
  const [elecciones, setElecciones] = useState([]);
  const [cargando, setCargando] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchElecciones = async () => {
      try {

        const response = await axios.get('http://localhost:3000/elections');
        
        const data = response.data;

        const eleccionesAdaptadas = data.map(eleccion => ({
          id: eleccion.id_election,
          nombre: eleccion.nombre_election,
          fechaInicio: eleccion.fecha_inicio, 
          fechaFin: eleccion.fecha_fin,       
          estado: eleccion.estado_election,
          imagen: "/img/rector.png", 
        }));
        
        setElecciones(eleccionesAdaptadas);

      } catch (error) {
        console.error("Error al cargar las elecciones:", error);
      } finally {
        setCargando(false);
      }
    };

    fetchElecciones();
  }, []);

  const handleVotar = (id) => {
    navigate(`/CandidatosVotante/${id}`);
  };

  // El resto del componente (el JSX) no necesita cambios
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