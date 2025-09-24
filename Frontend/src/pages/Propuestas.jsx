import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import NavbarVotante from "../components/NavbarVotante";
import axios from "axios"; // 1. Importar axios

export default function Propuestas() {
  const { id } = useParams(); // Obtiene el ID del candidato de la URL
  const [propuestas, setPropuestas] = useState([]);
  const [candidato, setCandidato] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Estado para la carga
  const [error, setError] = useState(null);       // Estado para errores

  useEffect(() => {
    // 2. Función asíncrona para obtener los datos desde el backend
    const fetchCandidatoYPropuestas = async () => {
      try {
        // Se llama al nuevo endpoint que trae el candidato y sus propuestas
        const response = await axios.get(`http://localhost:3000/candidates/${id}/proposals`);
        
        // 3. Se actualizan los estados con los datos reales
        setCandidato(response.data);
        setPropuestas(response.data.proposals || []); // Aseguramos que 'proposals' sea un array
        
      } catch (err) {
        setError("No se pudo cargar la información del candidato.");
        console.error("Error fetching data:", err);
      } finally {
        setIsLoading(false); // La carga termina, ya sea con éxito o con error
      }
    };

    fetchCandidatoYPropuestas();
  }, [id]); // El efecto se ejecuta cada vez que el ID de la URL cambia

  // Renderizado mientras carga la información
  if (isLoading) {
    return <p className="text-center text-gray-600 text-lg mt-24">Cargando propuestas...</p>;
  }

  // Renderizado si ocurre un error
  if (error) {
    return <p className="text-center text-red-600 text-lg mt-24">{error}</p>;
  }

  // El JSX se adapta para usar los nombres de las propiedades del backend
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4 py-10">
      <NavbarVotante />

      <h1 className="text-3xl font-bold text-blue-900 mb-10 text-center mt-24">
        Propuestas del Candidato
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
        {/* Columna izquierda: candidato */}
        {candidato && (
          <div className="bg-white rounded-xl shadow-xl p-6 flex flex-col items-center text-center md:items-start md:text-left h-full">
            <div className="flex justify-center items-center w-full mb-4">
              <img
                src={candidato.foto_candidate || "/img/default-avatar.png"}
                alt={`${candidato.nombre_candidate} ${candidato.apellido_candidate}`}
                className="w-40 h-40 object-cover rounded-full border-4 border-blue-200 mb-4"
              />
            </div>
            <h3 className="text-2xl font-bold text-blue-900 mb-2">
              {candidato.nombre_candidate} {candidato.apellido_candidate}
            </h3>
            {/* Nota: El campo 'descripcion' no existe en el modelo Candidate, por lo que se omite */}
          </div>
        )}

        {/* Columna derecha: propuestas */}
        <div className="md:col-span-2 bg-white rounded-xl shadow-xl p-8 h-full flex flex-col">
          <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">
            Lista de Propuestas
          </h2>
          {propuestas.length === 0 ? (
            <p className="text-gray-600 text-center flex-1">
              Este candidato no tiene propuestas registradas.
            </p>
          ) : (
            <ul className="space-y-4 flex-1">
              {propuestas.map((propuesta, index) => (
                <li
                  key={propuesta.id_proposal} // Usar un ID único de la base de datos
                  className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <span className="text-blue-700 font-bold">{index + 1}.</span>
                  {/* Se renderiza la descripción de la propuesta */}
                  <p className="text-gray-800">{propuesta.descripcion_proposal}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}