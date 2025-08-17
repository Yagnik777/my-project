import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Logo + Description */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-indigo-500 mb-2">SkillInspire</h2>
          <p className="text-gray-400 max-w-xs">
            Learn from industry experts and boost your career with top-notch IT courses.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col md:flex-row gap-6 text-gray-300">
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-white">Quick Links</h3>
            <Link to="/" className="hover:text-indigo-500">Home</Link>
            <ScrollLink to="courses" smooth={true} duration={500} className="hover:text-indigo-500 cursor-pointer">Courses</ScrollLink>
            <ScrollLink to="about" smooth={true} duration={500} className="hover:text-indigo-500 cursor-pointer">About</ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500} className="hover:text-indigo-500 cursor-pointer">Contact</ScrollLink>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-white">Account</h3>
            <Link to="/login" className="hover:text-indigo-500">Login</Link>
            <Link to="/register" className="hover:text-indigo-500">Register</Link>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-gray-300 text-xl">
          <a href="#" className="hover:text-indigo-500 transition-colors duration-300"><FaFacebookF /></a>
          <a href="#" className="hover:text-indigo-500 transition-colors duration-300"><FaTwitter /></a>
          <a href="#" className="hover:text-indigo-500 transition-colors duration-300"><FaInstagram /></a>
          <a href="#" className="hover:text-indigo-500 transition-colors duration-300"><FaLinkedinIn /></a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        © 2025 SkillInspire. All rights reserved.
      </div>
    </footer>
  );
}
