import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarCandidato from "../components/NavbarCandidato";
import Footer from "../components/Footer";
import { FaUserCircle, FaEnvelope, FaIdCard, FaBuilding, FaMapMarkerAlt, FaUniversity, FaPen, FaCamera, FaSave } from 'react-icons/fa';

// Datos de ejemplo simulando el perfil de un candidato
const mockCandidate = {
  id_candidato: 2,
  nombre: "Laura",
  apellido: "García",
  tipo_documento: "C.C.",
  numero_documento: "1002345678",
  correo: "laura.garcia@univote.com",
  estado: "Activo",
  foto: "./public/img/candidato2.png",
  eleccion: "Elecciones de Representante Estudiantil",
};

export default function MiPerfilCandidato() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(mockCandidate);
  const [isEditing, setIsEditing] = useState(false);
  const [newEmail, setNewEmail] = useState(profile.correo);

  const handleSaveChanges = () => {
    // Aquí se enviaría la lógica para actualizar el perfil en el servidor
    console.log("Guardando cambios...", {
      correo: newEmail,
      foto: profile.foto,
    });
    setProfile({ ...profile, correo: newEmail });
    setIsEditing(false);
    alert("¡Perfil actualizado con éxito!");
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newPhotoUrl = URL.createObjectURL(file);
      setProfile({ ...profile, foto: newPhotoUrl });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-blue-50 text-gray-800">
      <NavbarCandidato />
      <div className="h-20"></div>

      {/* Contenido principal */}
      <main className="flex-grow max-w-4xl mx-auto p-8 w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-blue-900">Perfil de Candidato</h2>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="px-4 py-2 text-sm font-semibold text-white bg-blue-900 rounded-lg hover:bg-blue-800 transition-colors flex items-center"
            >
              <FaPen className="mr-2" />
              {isEditing ? "Cancelar Edición" : "Editar Perfil"}
            </button>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
            {/* Sección de la foto y el ID */}
            <div className="flex flex-col items-center mb-6 md:mb-0">
              <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4">
                <img src={profile.foto} alt="Foto de Perfil" className="w-full h-full object-cover" />
                {isEditing && (
                  <label htmlFor="photo-upload" className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center cursor-pointer opacity-0 hover:opacity-100 transition-opacity">
                    <FaCamera className="text-white text-3xl" />
                    <input
                      id="photo-upload"
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoChange}
                      className="hidden"
                    />
                  </label>
                )}
              </div>
              <p className="text-lg font-bold text-gray-700">ID: {profile.id_candidato}</p>
            </div>

            {/* Sección de la información del perfil */}
            <div className="flex-grow space-y-4">
              {/* Campos no editables */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-xs font-bold text-gray-500">Nombre Completo</p>
                  <p className="font-semibold text-gray-800">{profile.nombre} {profile.apellido}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-xs font-bold text-gray-500">Tipo y No. de Documento</p>
                  <p className="font-semibold text-gray-800">{profile.tipo_documento} {profile.numero_documento}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-xs font-bold text-gray-500">Estado</p>
                  <p className="font-semibold text-gray-800">{profile.estado}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-xs font-bold text-gray-500">Elección a la que se postuló</p>
                  <p className="font-semibold text-gray-800">{profile.eleccion}</p>
                </div>
              </div>

              {/* Campos editables */}
              <div className="bg-white p-4 rounded-lg border-2 border-dashed border-blue-200">
                <label className="block text-xs font-bold text-gray-500">Correo Electrónico</label>
                {isEditing ? (
                  <input
                    type="email"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    className="w-full font-semibold text-gray-800 p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                ) : (
                  <p className="font-semibold text-gray-800 mt-1">{profile.correo}</p>
                )}
              </div>

              {isEditing && (
                <div className="flex justify-end mt-6">
                  <button
                    onClick={handleSaveChanges}
                    className="px-6 py-3 text-sm font-semibold text-white bg-green-600 rounded-md hover:bg-green-700 transition-colors flex items-center"
                  >
                    <FaSave className="mr-2" />
                    Guardar Cambios
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}