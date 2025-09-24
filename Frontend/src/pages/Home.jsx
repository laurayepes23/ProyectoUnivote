import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Carrusel from "../components/Carrusel";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp, FaUser, FaUserTie } from "react-icons/fa";

const carouselImages = [
  {
    src: "/img/imagen_de_inicio.png",
    alt: "Imagen 1",
  },
  {
    src: "/img/IMG-2.png",
    alt: "Imagen 2",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800 overflow-x-hidden">
      {/* NAVBAR */}
      <Navbar />

      {/* ESPACIO */}
      <div className="h-20"></div>

      {/* CARRUSEL */}
      <Carrusel images={carouselImages} />

      {/* SECCIÓN DE INSCRIPCIONES */}
      <section className="max-w-4xl mx-auto mt-12 p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Cuadro de Inscripción de Votante */}
          <a
            href="/Inf_votante"
            className="flex flex-col items-center justify-center p-12 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <FaUser className="text-blue-900 w-20 h-20 mb-6" />
            <h5 className="text-2xl font-bold text-blue-900 leading-tight text-center">
              Inscripción <br />
              de Votante
            </h5>
          </a>

          {/* Cuadro de Inscripción de Candidatos */}
          <a
            href="/Inf_candidato"
            className="flex flex-col items-center justify-center p-12 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <FaUserTie className="text-blue-900 w-20 h-20 mb-6" />
            <h5 className="text-2xl font-bold text-blue-900 leading-tight text-center">
              Inscripción <br />
              de Candidatos
            </h5>
          </a>
        </div>
      </section>

      {/* SECCIÓN QUIÉNES SOMOS */}
      <section
        id="quienes-somos"
        className="max-w-4xl mx-auto mt-12 p-6 border border-blue-400 rounded-md"
      >
        <h5 className="text-center text-3xl font-semibold mb-4">¿Quiénes somos?</h5>
        <p className="text-justify text-gray-700 leading-relaxed">
          Somos una plataforma dedicada a transformar y facilitar los procesos electorales universitarios,
          garantizando seguridad, transparencia y accesibilidad para todos los miembros de la comunidad académica.
          Nuestra misión es integrar tecnologías modernas, como blockchain y validaciones digitales, para asegurar
          que cada voto sea confiable y cada proceso de elección sea legítimo. Nos enfocamos en la innovación tecnológica,
          la participación activa de estudiantes y docentes, y en fomentar la confianza en los sistemas de votación electrónica.
          Buscamos ser una herramienta que conecte a la comunidad universitaria, promoviendo la democracia y la transparencia
          en cada elección, y asegurando que los procesos electorales sean inclusivos, seguros y eficientes.
        </p>

        {/* VIDEO Nosotros */}
        <div className="mt-6">
          <video className="w-full rounded-md shadow-md" controls autoPlay={false}>
            <source src="/videos/Nosotros.mp4" type="video/mp4" />
            Tu navegador no soporta la reproducción de videos.
          </video>
        </div>
      </section>

      {/* VISIÓN Y MISIÓN */}
      <section className="w-full mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div id="vision" className="bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-md shadow-xl transform transition-all duration-300 hover:scale-105">
          <h3 className="text-2xl font-semibold mb-3 text-center">Visión</h3>
          <p className="text-sm text-gray-700 text-justify">
            Ser la plataforma líder en votaciones electrónicas universitarias a nivel nacional e internacional,
            reconocida por su innovación tecnológica, confiabilidad y capacidad para fomentar la participación democrática
            en la comunidad académica.
          </p>
        </div>

        <div id="mision" className="bg-gradient-to-br from-gray-100 to-gray-200 p-6 rounded-md shadow-xl transform transition-all duration-300 hover:scale-105">
          <h3 className="text-2xl font-semibold mb-3 text-center">Misión</h3>
          <p className="text-sm text-gray-700 text-justify">
            Facilitar un proceso electoral universitario seguro, transparente y accesible, integrando tecnologías modernas
            como blockchain y validaciones digitales, para garantizar la participación confiable de estudiantes y docentes
            en la elección de sus representantes.
          </p>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contactanos" className="max-w-2xl mx-auto mt-12 text-center px-6">
        {/* Título */}
        <h2 className="text-blue-900 font-bold text-2xl mb-6 uppercase">
          ¡Tu opinión es muy importante, déjanos tu comentario!
        </h2>

        {/* Correo */}
        <p className="mb-4 flex justify-center items-center gap-2 text-gray-700">
          <FaEnvelope className="text-blue-900 w-6 h-6" />
          <a
            href="mailto:servicioalcliente@univote.com.co"
            className="hover:underline text-blue-900"
          >
            servicioalcliente@univote.com.co
          </a>
        </p>

        {/* Teléfono */}
        <a
          href="tel:+573009134380"
          className="inline-flex items-center gap-2 bg-blue-900 text-white font-semibold px-6 py-2 rounded mb-6 hover:bg-blue-800 transition"
        >
          <FaPhoneAlt className="w-5 h-5" />
          310 567 5050
        </a>

        {/* Botón comentario */}
        <div className="mb-10">
          <a
            href="https://wa.me/573105675050"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-900 text-white font-semibold px-6 py-2 rounded hover:bg-blue-800 transition"
          >
            <FaWhatsapp className="w-5 h-5" />
            Enviar comentario
          </a>
        </div>

        {/* Segundo título */}
        <h2 className="text-blue-900 font-bold text-2xl mb-6 uppercase">
          ¡Si necesitas de nuestro servicio de votaciones digitales!
        </h2>

        {/* Botón escríbenos */}
        <a
          href="https://wa.me/573105675050"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-blue-900 text-white font-semibold px-6 py-2 rounded hover:bg-blue-800 transition"
        >
          <FaWhatsapp className="w-5 h-5" />
          Escríbenos
        </a>
      </section>

    </div>
  );
}