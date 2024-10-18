
import React from 'react';

const Header = () => {
  return (
    <header className="bg-black text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Website</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-gray-200">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200">About</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200">Services</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
