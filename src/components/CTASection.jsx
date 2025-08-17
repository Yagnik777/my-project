import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to boost your career?
        </h2>
        <p className="text-lg md:text-xl mb-10">
          Join thousands of students who learned from experts and accelerated their careers.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <Link
            to="/register"
            className="px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-md"
          >
            Register Now
          </Link>
          <Link
            to="/courses"
            className="px-8 py-4 border-2 border-white rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors duration-300 shadow-md"
          >
            Explore Courses
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
