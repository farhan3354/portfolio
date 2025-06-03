import React, { useState, useEffect } from "react";

const images = [
  {
    id: 1,
    url: "https://img.lazcdn.com/us/domino/02f2fa3a-227f-4330-b9b6-84529f434346_PK-1976-688.jpg_2200x2200q80.jpg_.webp",
    caption: "Elevate Your Style – New Collection Out Now",
  },
  {
    id: 2,
    url: "https://img.lazcdn.com/us/domino/2791dc50-40be-4d9c-a049-2523b340c649_PK-1976-688.jpg_2200x2200q80.jpg_.webp",
    caption: "Fresh Deals for Trendsetters – Limited Time",
  },
  {
    id: 3,
    url: "https://img.lazcdn.com/us/domino/d153511d-c20b-41b1-b1b7-72b5ddf64fca_PK-1976-688.jpg_2200x2200q80.jpg_.webp",
    caption: "Unbeatable Prices on Your Favorite Brands",
  },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % images.length);

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mt-3 w-full h-[400px] md:h-[500px] overflow-hidden">
      {images.map((img, index) => (
        <div
          key={img.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={img.url}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h2 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
              {img.caption}
            </h2>
          </div>
        </div>
      ))}

      {/* Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-3 rounded-full hover:bg-opacity-60 transition"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-3 rounded-full hover:bg-opacity-60 transition"
      >
        ❯
      </button>
    </div>
  );
};

export default ImageSlider;
