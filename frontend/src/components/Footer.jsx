import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 px-4 md:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm mb-4 md:mb-0">© 2024 WhatTodo App. All rights reserved.</p>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">Terms of Service</a>
            </li>
            <li>
              <a href="https://github.com/chandan1971" className="hover:text-gray-300">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
