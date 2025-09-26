import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Importa Axios
import NavbarCandidato from "../components/NavbarCandidato";
import Footer from "../components/Footer";
import { FaCalendarAlt, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

export default function PostularseElecciones() {
  const [elecciones, setElecciones] = useState([]);
  const [mensaje, setMensaje] = useState({ texto: '', tipo: '' }); // Estado para mensajes
  const [loading, setLoading] = useState(true);

  // Efecto para cargar las elecciones desde el backend al montar el componente
  useEffect(() => {
    const fetchElecciones = async () => {
      try {
        // Asegúrate de que la URL coincida con tu endpoint del backend
        const response = await axios.get('http://localhost:3000/elections');
        setElecciones(response.data);
      } catch (error) {
        console.error("Error al cargar las elecciones:", error);
        setMensaje({ texto: 'No se pudieron cargar las elecciones. Inténtalo de nuevo más tarde.', tipo: 'error' });
      } finally {
        setLoading(false);
      }
    };

    fetchElecciones();
  }, []);

  // Función para manejar la postulación del candidato
  const handlePostularse = async (electionId) => {
    // NOTA: Se asume que el ID del candidato se guarda en localStorage tras el login.
    // Si lo guardas de otra forma (ej. Context API), ajusta esta línea.
    const candidateId = localStorage.getItem('candidateId');

    if (!candidateId) {
      setMensaje({ texto: 'No se pudo encontrar tu ID. Por favor, inicia sesión de nuevo.', tipo: 'error' });
      return;
    }

    // Limpiamos el mensaje previo antes de una nueva solicitud
    setMensaje({ texto: '', tipo: '' });

    try {
      await axios.patch('http://localhost:3000/candidates/apply', {
        candidateId: parseInt(candidateId, 10), // Asegurarse que es un número
        electionId: electionId,
      });

      setMensaje({ 
        texto: '¡Postulación exitosa! Tu solicitud está pendiente de aprobación por un administrador.', 
        tipo: 'success' 
      });

    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Ocurrió un error al postularte. Inténtalo de nuevo.';
      setMensaje({ texto: errorMessage, tipo: 'error' });
      console.error("Error en la postulación:", error.response?.data || error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-blue-50 text-gray-800">
      <NavbarCandidato />
      <div className="h-20"></div>

      {/* Sección principal de la página */}
      <main className="flex-grow max-w-6xl mx-auto p-8 w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
            Postúlate a Elecciones
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explora las elecciones disponibles y presenta tus propuestas para el futuro de nuestra comunidad.
          </p>
        </div>

        {/* Contenedor para mostrar mensajes de éxito o error */}
        {mensaje.texto && (
          <div className={`text-center p-4 mb-8 rounded-lg ${mensaje.tipo === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {mensaje.texto}
          </div>
        )}

        {/* Contenedor de las tarjetas de elecciones */}
        {loading ? (
          <p className="text-center text-gray-500">Cargando elecciones...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {elecciones.map((eleccion) => (
              <div 
                key={eleccion.id_election} 
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-800">{eleccion.nombre_election}</h3>
                  {eleccion.estado_election === "Programada" ? (
                    <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full uppercase">
                      {eleccion.estado_election}
                    </span>
                  ) : (
                    <span className="bg-red-100 text-red-700 text-xs font-semibold px-3 py-1 rounded-full uppercase">
                      {eleccion.estado_election}
                    </span>
                  )}
                </div>
                <div className="text-gray-600 space-y-2">
                  <p className="flex items-center">
                    <FaCalendarAlt className="mr-2 text-blue-500" />
                    <span className="font-semibold">Inicio:</span> {eleccion.fecha_inicio}
                  </p>
                  <p className="flex items-center">
                    <FaCalendarAlt className="mr-2 text-blue-500" />
                    <span className="font-semibold">Fin:</span> {eleccion.fecha_fin}
                  </p>
                </div>

                {eleccion.estado_election === "Programada" ? (
                  <button
                    onClick={() => handlePostularse(eleccion.id_election)}
                    className="mt-6 w-full bg-blue-900 text-white font-semibold py-3 px-4 rounded-xl shadow-md hover:bg-blue-800 transition-colors"
                  >
                    <span className="flex items-center justify-center">
                      <FaCheckCircle className="mr-2" />
                      Postularme
                    </span>
                  </button>
                ) : (
                  <button
                    disabled
                    className="mt-6 w-full bg-gray-400 text-white font-semibold py-3 px-4 rounded-xl cursor-not-allowed"
                  >
                    <span className="flex items-center justify-center">
                      <FaExclamationCircle className="mr-2" />
                      Postulación cerrada
                    </span>
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}