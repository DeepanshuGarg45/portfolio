import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold">
          D. Garg
        </div>
        <div className="flex space-x-6">
          <Link to="home" smooth={true} duration={500} className="hover:text-yellow-400 cursor-pointer">
            Home
          </Link>
          <Link to="about" smooth={true} duration={500} className="hover:text-yellow-400 cursor-pointer">
            About
          </Link>
          <Link to="resume" smooth={true} duration={500} className="hover:text-yellow-400 cursor-pointer">
            Resume
          </Link>
          <Link to="projects" smooth={true} duration={500} className="hover:text-yellow-400 cursor-pointer">
            Projects
          </Link>
          <Link to="contact" smooth={true} duration={500} className="hover:text-yellow-400 cursor-pointer">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;