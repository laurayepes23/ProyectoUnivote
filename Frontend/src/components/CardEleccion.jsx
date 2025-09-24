export default function CardEleccion({ eleccion, onVotar }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden m-4 cursor-pointer transform hover:scale-105 transition-transform duration-300 flex flex-col">

      <div className="p-6 flex flex-col justify-between flex-1">
        <div>
          <h2 className="text-xl font-bold text-blue-700 mb-2">
            {eleccion.nombre}
          </h2>

          <div className="mb-2">
            <p className="text-gray-600 text-sm">
              <span className="font-semibold">Inicio:</span> {eleccion.fechaInicio}
            </p>
            <p className="text-gray-600 text-sm">
              <span className="font-semibold">Fin:</span> {eleccion.fechaFin}
            </p>
          </div>

          <p
            className={`text-sm font-medium mb-4 ${
              eleccion.estado === "Activa"
                ? "text-green-600"
                : eleccion.estado === "Programada"
                ? "text-yellow-600"
                : "text-red-600"
            }`}
          >
            Estado: {eleccion.estado}
          </p>
        </div>

        <button
          onClick={eleccion.estado === "Activa" ? onVotar : undefined}
          className={`w-full py-2 rounded-lg font-medium text-white transition ${
            eleccion.estado === "Activa"
              ? "bg-green-600 hover:bg-green-700"
              : eleccion.estado === "Programada"
              ? "bg-yellow-500 hover:bg-yellow-600"
              : "bg-red-600 cursor-not-allowed"
          }`}
          disabled={eleccion.estado === "Finalizada"}
        >
          {eleccion.estado === "Activa"
            ? "Votar"
            : eleccion.estado === "Programada"
            ? "Ver Detalles"
            : "Ver Resultados"}
        </button>
      </div>
    </div>
  );
}