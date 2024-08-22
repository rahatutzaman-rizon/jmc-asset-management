"use client";

import { useState } from 'react';
import Image from 'next/image';

const projects = {
  ongoing: [
   'https://i.ibb.co/g9hg4xR/design1.png',
 'https://i.ibb.co/KV7jKy6/p12.png',
'https://i.ibb.co/nk3twp0/p22.png',
'https://i.ibb.co/BCRNrp2/p2.png',
'https://i.ibb.co/KVvJT85/p3img.png',
  ],
  completed: [
   'https://i.ibb.co/nk3twp0/p22.png',
'https://i.ibb.co/BCRNrp2/p2.png',
'https://i.ibb.co/KVvJT85/p3img.png',
'https://i.ibb.co/g9hg4xR/design1.png',
 'https://i.ibb.co/KV7jKy6/p12.png',

  ],
  upcoming: [
    'https://i.ibb.co/BCRNrp2/p2.png',
'https://i.ibb.co/KVvJT85/p3img.png',
'https://i.ibb.co/g9hg4xR/design1.png',
  ],
};

export default function Projects() {
  const [activeTab, setActiveTab] = useState('ongoing');

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">Our Projects</h1>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
      </p>

      <div className="flex justify-center space-x-4 mb-8">
        {['ongoing', 'completed', 'upcoming'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-md flex items-center justify-between min-w-[150px] ${
              activeTab === tab
                ? 'bg-primary text-white'
                : 'bg-primary text-white'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
            {activeTab === tab ? (
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            ) : (
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            )}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {projects[activeTab].map((src, index) => (
          <div key={index} className="relative h-72 w-full">
            <Image src={src} alt={`Project ${index + 1}`} layout="fill" objectFit="cover" className="rounded-lg" />
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="px-6 py-2 bg-primary text-white border rounded-md">
          See More »
        </button>
      </div>
    </div>
  );
}
