"use client"

import React from 'react';

const AboutUs = () => {
  return (
    <div className="mx-auto px-2 sm:px-6 lg:px-8 py-4 mt-8">
      {/* About Us Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center ml-12">
        {/* Right Side Image */}
       
        {/* Left Side Text */}
        <div>
          <h2 className="text-4xl font-bold text-primary mb-4 ">About Us</h2>
          <p className="text-lg text-gray-700">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing .....
          </p>
        </div>


        <div className=" ">
          <img
            src="https://i.ibb.co/qBGDYm6/about.png"
            alt="About Us"
            className="w-96 h-72  ml-48 h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Our Mission & Our Vision Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {/* Our Mission Card */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-semibold text-primary mb-4">Our Mission</h3>
          <p className="text-gray-700">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing .....
          </p>
        </div>
        {/* Our Vision Card */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-semibold text-primary mb-4">Our Vision</h3>
          <p className="text-gray-700">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing .....
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;