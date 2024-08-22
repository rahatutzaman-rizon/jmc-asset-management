"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

const ClientsReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('http://localhost:5000/client'); // Replace with your actual API endpoint
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 3, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 3, reviews.length - 3));
  };

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">Clients Reviews</h2>
      {reviews.length > 0 && (
        <div className="relative max-w-7xl mx-auto flex items-center">
          <button onClick={handlePrev} className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
            {reviews.slice(currentIndex, currentIndex + 3).map((review, index) => (
              <div
                key={review._id}
                className="bg-white border border-primary rounded-lg shadow-md p-6 mx-4 transition-all duration-300 ease-in-out opacity-100"
              >
                <div className="flex justify-center mb-4">
                  <Image
                    src={review.imageUrl}
                    alt="Client"
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                </div>
                <p className="text-gray-600 text-center">{review.reviewText}</p>
              </div>
            ))}
          </div>
          <button onClick={handleNext} className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ClientsReviews;
