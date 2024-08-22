'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Banner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    'https://i.ibb.co/HNHYnfW/sophie-Gz3iikctf-Ew-unsplash.jpg',
    'https://i.ibb.co/fnc0TG1/unsplash-Qd-AAasr-Zhdk.png',
    'https://i.ibb.co/HNHYnfW/sophie-Gz3iikctf-Ew-unsplash.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % images.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const changeImage = (direction) => {
    if (direction === 'next') {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    } else {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <div className="relative h-[80vh] flex items-center justify-start px-8 md:px-12 lg:px-24">
      {/* Background Image Slider */}
      {images.map((img, index) => (
        <Image
          key={img}
          src={img}
          alt={`Slide ${index + 1}`}
          fill
          style={{
            objectFit: 'cover',
            opacity: index === currentImageIndex ? 1 : 0,
            transition: 'opacity 0.2s ease-in-out',
          }}
          priority
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Text Content */}
      <div className="relative max-w-2xl z-10">
        <p className="text-lg font-semibold text-primary uppercase tracking-widest">
          Discover | Dream | Live
        </p>
        <h1 className="mt-2 text-6xl font-bold text-primary leading-tight ">
          Unlock Your Ideal Space
        </h1>
        <p className="mt-4 text-lg text-primary">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the.
        </p>
        <button className="mt-8 px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-blue-100 transition-colors">
          See More »
        </button>
      </div>

      {/* Navigation Buttons */}
      <button 
        onClick={() => changeImage('prev')} 
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75"
      >
        <FaChevronLeft size={24} />
      </button>
      <button 
        onClick={() => changeImage('next')} 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75"
      >
        <FaChevronRight size={24} />
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentImageIndex ? 'bg-blue-900' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;