"use client"

import React, { useState } from 'react';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-[#f6fdff] sticky top-0 z-30">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
        <div className='mx-[-16px]'>
          <h2 className="text-primary text-2xl font-bold">JMC Group</h2>
          <p className='text-primary'>JMC Asset Management Ltd.</p>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-[#00263b]">
          <div className="relative">
            <button onClick={toggleDropdown} className="flex items-center space-x-1 focus:outline-none">
              <span>About Us</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
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
        
        {/* Mobile Menu Button */}
        <button className="md:hidden focus:outline-none" onClick={toggleMobileMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white px-4 pt-2 pb-4 shadow-lg">
          <div className="space-y-2">
            <div>
              <button onClick={toggleDropdown} className="flex items-center justify-between w-full py-2 focus:outline-none">
                <span>About Us</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="pl-4 space-y-2 mt-2">
                  <button className="block w-full text-left py-2 text-sm text-gray-700">Our Team</button>
                  <button className="block w-full text-left py-2 text-sm text-gray-700">History</button>
                </div>
              )}
            </div>
            <button className="block w-full text-left py-2">Project</button>
            <button className="block w-full text-left py-2">Our Achievement</button>
            <button className="block w-full bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark focus:outline-none">Contact</button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;