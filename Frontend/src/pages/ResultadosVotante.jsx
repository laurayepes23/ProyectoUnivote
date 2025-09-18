import React, { useState, useEffect } from "react";
import NavbarVotante from "../components/NavbarVotante";
import { jsPDF } from "jspdf";

export default function ResultadosVotante() {
  const [elecciones, setElecciones] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    // Simulación de elecciones finalizadas
    setTimeout(() => {
      setElecciones([
        {
          id: 1,
          nombre: "Elección de Rector 2025",
          fecha: "15 de septiembre 2025",
          imagen: "/img/rector.png",
          resultados: [
            { nombre: "Juan Pérez", votos: 120, porcentaje: 60 },
            { nombre: "Ana Gómez", votos: 80, porcentaje: 40 },
          ],
        },
        {
          id: 2,
          nombre: "Elección de Consejo Académico",
          fecha: "1 de agosto 2025",
          imagen: "/img/consejo.png",
          resultados: [
            { nombre: "Carlos Ruiz", votos: 200, porcentaje: 70 },
            { nombre: "Laura Méndez", votos: 85, porcentaje: 30 },
          ],
        },
      ]);
      setCargando(false);
    }, 1000);
  }, []);

  const generarPDF = (eleccion) => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text(`Resultados - ${eleccion.nombre}`, 20, 20);
    doc.setFontSize(12);
    doc.text(`Fecha: ${eleccion.fecha}`, 20, 30);

    let y = 50;
    eleccion.resultados.forEach((candidato) => {
      doc.text(
        `${candidato.nombre} - ${candidato.votos} votos (${candidato.porcentaje}%)`,
        20,
        y
      );
      y += 10;
    });

    doc.save(`Resultados_${eleccion.nombre.replace(/\s+/g, "_")}.pdf`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4 py-10">
      <NavbarVotante />

      <h1 className="text-3xl font-bold text-blue-900 mt-24 mb-8 text-center">
        Resultados de Elecciones
      </h1>

      <div className="w-full max-w-6xl">
        {cargando ? (
          <p className="text-center text-gray-600">Cargando elecciones...</p>
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
                      Fecha: {eleccion.fecha}
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
