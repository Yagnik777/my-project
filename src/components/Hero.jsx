import React from "react";
import { Parallax } from "react-parallax";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <Parallax
      bgImage="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1950&q=80"
      strength={300}
    >
      <section className="h-screen flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-50 px-4">
        
        {/* Heading */}
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Learn with Experts
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-xl md:text-2xl mb-8 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Master Data Analytics, Software Engineering & Cybersecurity from industry leaders.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex gap-4 flex-wrap justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Link
            to="/courses"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-500 transition-colors duration-300"
          >
            Explore Courses
          </Link>
          <Link
            to="/register"
            className="px-6 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors duration-300"
          >
            Register
          </Link>
        </motion.div>

      </section>
    </Parallax>
  );
}
