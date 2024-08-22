"use client"

import React, { useState } from 'react';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-[#f6fdff]">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
        <div className="flex items-center space-x-4">
          <img src="https://i.ibb.co/ryBNHbp/images.png" alt="JMC Asset Management" className="h-12 w-20 rounded-lg border" />
        </div>
        <nav className="flex items-center space-x-8 text-[#00263b]">
          <div className="relative">
            <button onClick={toggleDropdown} className="flex items-center space-x-1 focus:outline-none">
              <span>About Us</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {/* Dropdown Content */}
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-40 bg-white rounded-lg shadow-lg z-50">
                <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Our Team
                </button>
                <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  History
                </button>
              </div>
            )}
          </div>
          <button className="focus:outline-none">Project</button>
          <button className="focus:outline-none">Our Achievement</button>
          <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark focus:outline-none">Contact</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
