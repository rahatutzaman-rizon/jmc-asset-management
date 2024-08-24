"use client"

import React, { useState } from 'react';
import { useSpringCarousel } from 'react-spring-carousel';

const Gallery = () => {
  const images = [
    'https://i.ibb.co/HVPmQVh/main-gala.png',
    'https://i.ibb.co/g9hg4xR/design1.png',
    'https://i.ibb.co/KV7jKy6/p12.png',
    'https://i.ibb.co/nk3twp0/p22.png',
    'https://i.ibb.co/BCRNrp2/p2.png',
    'https://i.ibb.co/KVvJT85/p3img.png'
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const { carouselFragment, slideToPrevItem, slideToNextItem } = useSpringCarousel({
    itemsPerSlide: 3,
    withLoop: true,
    initialStartingPosition: 'center',
    gutter: 24,
    items: images.map((img, index) => ({
      id: `item-${index}`,
      renderItem: (
        <div className={`w-full h-full transition-all duration-300 ${index === activeIndex ? 'scale-110 z-10' : 'scale-90 opacity-50'}`}>
          <img src={img} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover rounded-lg shadow-lg" />
        </div>
      ),
    })),
  });

  const handleSlideChange = (direction) => {
    if (direction === 'next') {
      slideToNextItem();
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    } else {
      slideToPrevItem();
      setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 py-8">
     <h1 className="text-4xl  mt-2 text-center text-primary font-bold mb-8">Welcome to our gallery</h1>
      <div className="h-[40vh] md:h-[50vh] overflow-hidden">
        {carouselFragment}
      </div>
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
        <button onClick={() => handleSlideChange('prev')} className="bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
        <button onClick={() => handleSlideChange('next')} className="bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${index === activeIndex ? 'bg-blue-500' : 'bg-gray-300'}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;