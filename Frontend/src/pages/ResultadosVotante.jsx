import React, { useState, useEffect } from "react";
import NavbarVotante from "../components/NavbarVotante";
import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable'; 
import axios from "axios";

export default function ResultadosVotante() {
  const [elecciones, setElecciones] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const fetchResultados = async () => {
      try {
        const response = await axios.get("http://localhost:3000/elections/results");
        const data = response.data;

        const eleccionesFinalizadas = data.filter(
          (eleccion) => eleccion.estado_election === "Finalizada"
        );

        const resultadosAdaptados = eleccionesFinalizadas.map((eleccion) => {
          const totalVotos = eleccion.candidates.reduce(
            (sum, candidato) => sum + candidato.votos,
            0
          );

          return {
            id: eleccion.id_election,
            nombre: eleccion.nombre_election,
            fecha: new Date(eleccion.fecha_fin).toLocaleDateString("es-ES", {}),
            imagen: "/img/rector.png",
            resultados: eleccion.candidates.map((candidato) => ({
              nombre: `${candidato.nombre_candidate} ${candidato.apellido_candidate}`,
              votos: candidato.votos,
              porcentaje:
                totalVotos > 0
                  ? ((candidato.votos / totalVotos) * 100).toFixed(2)
                  : "0.00",
            })),
          };
        });

        setElecciones(resultadosAdaptados);

      } catch (error) {
        console.error("Error al cargar los resultados de las elecciones:", error);
      } finally {
        setCargando(false);
      }
    };

    fetchResultados();
  }, []);

  // 2. Función de PDF actualizada para usar autoTable
  const generarPDF = (eleccion) => {
    const doc = new jsPDF();

    // Título y subtítulo
    doc.setFontSize(18);
    doc.text(`Resultados Electorales: ${eleccion.nombre}`, 14, 22);
    doc.setFontSize(12);
    doc.text(`Fecha de Finalización: ${eleccion.fecha}`, 14, 30);

    //  columnas de la tabla
    const tableColumn = ["Candidato", "Votos Obtenidos", "Porcentaje"];
    
    // Mapear los resultados para que coincidan con el formato de la tabla
    const tableRows = eleccion.resultados.map(res => [
      res.nombre,
      res.votos,
      `${res.porcentaje}%` // Añadir el símbolo %
    ]);

    // Crear la tabla
    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 40, // Posición inicial de la tabla, debajo del título
      theme: 'grid', // Estilo de la tabla
      headStyles: { fillColor: [22, 160, 133] }, // Color de la cabecera
    });

    // Guardar el documento
    doc.save(`Resultados_${eleccion.nombre.replace(/\s+/g, "_")}.pdf`);
  };

  // El JSX no necesita cambios, solo un pequeño ajuste en el texto de la fecha
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4 py-10">
      <NavbarVotante />

      <h1 className="text-3xl font-bold text-blue-900 mt-24 mb-8 text-center">
        Resultados de Elecciones
      </h1>

      <div className="w-full max-w-6xl">
        {cargando ? (
          <p className="text-center text-gray-600">Cargando resultados...</p>
        ) : elecciones.length === 0 ? (
          <p className="text-center text-gray-600">
            No hay elecciones finalizadas aún.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {elecciones.map((eleccion) => (
              <div
                key={eleccion.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={eleccion.imagen}
                  alt={eleccion.nombre}
                  className="h-80 w-full object-cover"
                />
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-blue-700 mb-2">
                      {eleccion.nombre}
                    </h2>
                    <p className="text-gray-600 text-sm mb-4">
                      Finalizada el: {eleccion.fecha}
                    </p>
                  </div>
                  <button
                    className="bg-blue-900 text-white py-2 rounded-lg font-medium hover:bg-blue-800 transition"
                    onClick={() => generarPDF(eleccion)}
                  >
                    Descargar Resultados
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}