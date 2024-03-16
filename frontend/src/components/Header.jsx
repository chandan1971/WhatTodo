import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center">
      <h1 className="text-2xl font-bold mb-4 md:mb-0">WhatTodo App</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="hover:text-gray-300">Home</a>
          </li>
          <li>
            <a href="https://github.com/chandan1971" className="hover:text-gray-300">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
