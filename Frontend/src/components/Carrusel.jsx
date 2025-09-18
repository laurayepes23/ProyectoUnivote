import React, { useState } from "react";

const carouselImages = [
  { src: "/img/carrusel7.jpeg", alt: "Imagen 1" },
  { src: "/img/Carrusel4.png", alt: "Imagen 2" },
  { src: "/img/carrusel5.png", alt: "Imagen 3" },
];

export default function Carrusel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex(
      (currentIndex - 1 + carouselImages.length) % carouselImages.length
    );
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % carouselImages.length);
  };

  return (
    <div className="relative w-screen h-[90vh] flex items-center justify-center bg-gradient-to-r from-blue-900 via-black to-blue-900 overflow-hidden">
      {/* Imagen */}
      <img
        src={carouselImages[currentIndex].src}
        alt={carouselImages[currentIndex].alt}
        className="w-full h-full object-contain"
      />

      {/* Flechas */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-40 text-white rounded-full p-3 hover:bg-opacity-70 transition"
        aria-label="Anterior"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-40 text-white rounded-full p-3 hover:bg-opacity-70 transition"
        aria-label="Siguiente"
      >
        ›
      </button>
    </div>
  );
}
