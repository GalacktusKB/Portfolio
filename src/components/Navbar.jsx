import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logomine.png'; // Assuming you have a logo image
import { NavLink } from 'react-router';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // react hooks
  const [animate, setAnimate] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Close the menu when a menu item is clicked
  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  // Animate on mount
  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="w-full fixed z-10 ">
      <div
        className={` backdrop-blur-xs border-b border-gray-800 max-w-6xl mx-auto px-2 md:px-3 py-4 font-bold flex justify-between items-center text-white transition-all duration-700 ease-out transform ${animate ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
          }`}
      >
        {/* Logo */}
        <NavLink to='/' onClick={() => window.scrollTo(0, 0)}>
          <h1 className="text-2xl md:text-3xl font-medium">
            {/* <span className="text-gray-500">&lt;</span>
            <span className="text-white"> */}
              <img src={logo} alt="" className="h-6 md:h-9 inline" />
            {/* </span>
            <span className="text-gray-500">/&gt;</span> */}
          </h1>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-2">
          <NavLink onClick={() => window.scrollTo(0, 0)} className="px-4 py-2 rounded hover:backdrop-blur-xs transition" to={'/'} >Home</NavLink>
          <NavLink onClick={() => window.scrollTo(0, 0)} className="px-4 py-2 rounded hover:backdrop-blur-xs transition" to={'/about'} >About</NavLink>
          <NavLink onClick={() => window.scrollTo(0, 0)} className="px-4 py-2 rounded hover:backdrop-blur-xs transition" to={'/projects'} >Projects</NavLink>
          <NavLink onClick={() => window.scrollTo(0, 0)} className="px-4 py-2 rounded hover:backdrop-blur-xs transition" to={'/contact'} >Contact</NavLink>
        </nav>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden backdrop-blur-xs border-t border-gray-700 transition-all duration-300 ease-in-out transform ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5 pointer-events-none'
          }`}
      >
        {/* Mobile Menu */}
        <div
          className={`md:hidden backdrop-blur-xl bg-black/30 border-t border-gray-700 overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-[500px] translate-y-0' : 'max-h-0 -translate-y-4'
            }`}
        >
          <div className="flex flex-col items-center gap-4 py-4 text-white">
            <NavLink
              onClick={handleMenuItemClick}
              className="px-4 py-2 rounded hover:bg-gray-900 transition"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              onClick={handleMenuItemClick}
              className="px-4 py-2 rounded hover:bg-gray-900 transition"
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              onClick={handleMenuItemClick}
              className="px-4 py-2 rounded hover:bg-gray-900 transition"
              to="/projects"
            >
              Projects
            </NavLink>
            
            <NavLink
              onClick={handleMenuItemClick}
              className="px-4 py-2 rounded hover:bg-gray-900 transition"
              to="/contact"
            >
              Contact
            </NavLink>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
