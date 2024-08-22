"use client"


// pages/clients-reviews.js
import React, { useState, useEffect } from 'react';

const ClientReviewCard = ({ reviewText, imageUrl }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6 m-4">
      <img className="w-24 h-24 rounded-full mx-auto" src={imageUrl} alt="Client photo"/>
      <p className="text-primary mt-4">{reviewText}</p>
    </div>
  );
};

const ClientsReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Replace with your API endpoint
    fetch('http://localhost:5000/client')
      .then(response => response.json())
      .then(data => setReviews(data))
      .catch(error => console.error('Error fetching reviews:', error));
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="bg-gray-100 p-8">
      <h2 className="text-3xl font-bold text-center mb-6 text-primary">Clients Reviews</h2>
      {reviews.length > 0 && (
        <div className="flex flex-col items-center">
          <ClientReviewCard {...reviews[currentIndex]} />
          <div className="mt-4 flex gap-4">
            <button 
              onClick={handlePrev} 
              className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark"
            >
              Previous
            </button>
            <button 
              onClick={handleNext} 
              className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientsReviews;
