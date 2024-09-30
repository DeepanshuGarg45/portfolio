import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-20 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold">Hi, I'm D. Garg</h1>
      <p className="text-lg mt-3">Data Scientist & Analyst</p>
      <a href="#projects" className="mt-5 bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-400 transition duration-300">
        View My Projects
      </a>
    </header>
  );
};

export default Header;