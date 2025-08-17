import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll"; // Smooth scroll for sections
import { Link } from "react-router-dom"; // React Router for pages
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-indigo-600 cursor-pointer">
          <Link to="/">SkillInspire</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Home redirect */}
          <Link to="/" className="hover:text-indigo-600 cursor-pointer">Home</Link>

          {/* Courses Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="hover:text-indigo-600 font-medium"
            >
              Courses
            </button>
            {dropdownOpen && (
              <div className="absolute bg-white shadow-lg mt-2 rounded w-48">
                <ScrollLink
                  to="course1"
                  smooth={true}
                  duration={500}
                  className="block px-4 py-2 hover:bg-indigo-50 cursor-pointer"
                >
                  Data Analytics
                </ScrollLink>
                <ScrollLink
                  to="course2"
                  smooth={true}
                  duration={500}
                  className="block px-4 py-2 hover:bg-indigo-50 cursor-pointer"
                >
                  Software Engineering
                </ScrollLink>
                <ScrollLink
                  to="course3"
                  smooth={true}
                  duration={500}
                  className="block px-4 py-2 hover:bg-indigo-50 cursor-pointer"
                >
                  Cybersecurity
                </ScrollLink>
                <Link
                  to="/courses"
                  className="block px-4 py-2 hover:bg-indigo-50"
                >
                  All Courses
                </Link>
              </div>
            )}
          </div>

          <Link to="/about" className="hover:text-indigo-600">About</Link>
          <Link to="/contact" className="hover:text-indigo-600">Contact</Link>

          {/* Login/Register Buttons */}
          <Link to="/login" className="px-4 py-2 border border-indigo-600 rounded hover:bg-indigo-50">Login</Link>
          <Link to="/register" className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500">Register</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setNavOpen(!navOpen)}>
            {navOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 py-4 flex flex-col gap-3">
          <Link to="/" onClick={() => setNavOpen(false)} className="hover:text-indigo-600 cursor-pointer">Home</Link>

          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="text-left"
          >
            Courses
          </button>
          {dropdownOpen && (
            <div className="pl-4 flex flex-col gap-2">
              <ScrollLink
                to="course1"
                smooth={true}
                duration={500}
                onClick={() => setNavOpen(false)}
              >
                Data Analytics
              </ScrollLink>
              <ScrollLink
                to="course2"
                smooth={true}
                duration={500}
                onClick={() => setNavOpen(false)}
              >
                Software Engineering
              </ScrollLink>
              <ScrollLink
                to="course3"
                smooth={true}
                duration={500}
                onClick={() => setNavOpen(false)}
              >
                Cybersecurity
              </ScrollLink>
              <Link
                to="/courses"
                className="py-2"
                onClick={() => setNavOpen(false)}
              >
                All Courses
              </Link>
            </div>
          )}

          <Link to="/about" onClick={() => setNavOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setNavOpen(false)}>Contact</Link>
          <Link
            to="/login"
            className="px-4 py-2 border border-indigo-600 rounded text-center"
            onClick={() => setNavOpen(false)}
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-4 py-2 bg-indigo-600 text-white rounded text-center"
            onClick={() => setNavOpen(false)}
          >
            Register
          </Link>
        </div>
      )}
    </nav>
  );
}
