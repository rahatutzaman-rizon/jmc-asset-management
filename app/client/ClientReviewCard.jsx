
"use client"

// components/ClientReviewCard.js
import React from 'react';

const ClientReviewCard = ({ reviewText, imageUrl }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6 m-4">
      <img className="w-24 h-24 rounded-full mx-auto" src={imageUrl} alt="Client photo"/>
      <p className="text-primary mt-4 text-center">{reviewText}</p>
    </div>
  );
};

export default ClientReviewCard;
