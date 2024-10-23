// export default Carousel;
import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';

const Carousel = ({ currentIndex, setCurrentIndex }) => {
  // const [currentIndex, setCurrentIndex] = useState(0);

  // Array of image paths corresponding to values 1 to 7
  const images = [
    '/images/1.jpg',  // Replace with actual image paths
    '/images/2.jpg',
    '/images/3.jpg',
    '/images/4.jpg',
    '/images/5.jpg',
    '/images/6.jpg',
    '/images/7.jpg',
  ];

  // Function to handle moving to the next image
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to handle moving to the previous image
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex justify-center items-center h-screen bg-transparent">
      <div className="relative w-full max-w-lg h-70">
        {/* Image Display */}
        <div className="absolute inset-0 bg-transparent flex items-center justify-center">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full focus:outline-none text-xl"
        >
          <ChevronLeft />
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full focus:outline-none"
        >
          <ChevronRight />
        </button>

        {/* Carousel Indicator with Numbers */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-10 h-10 text-lg flex items-center justify-center rounded-full text-white ${
                index === currentIndex
                  ? 'bg-gray-600 shadow-lg'
                  : 'bg-black text-gray-400'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
