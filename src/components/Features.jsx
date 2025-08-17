import React from "react";
import { FaChalkboardTeacher, FaLaptopCode, FaHeadset } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FaChalkboardTeacher size={40} />,
    title: "Expert Instructors",
    desc: "Learn from industry leaders with real-world experience.",
  },
  {
    icon: <FaLaptopCode size={40} />,
    title: "Career-Oriented Courses",
    desc: "Courses designed to boost your career opportunities.",
  },
  {
    icon: <FaHeadset size={40} />,
    title: "24/7 Support",
    desc: "Get assistance anytime with our dedicated support team.",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-white text-center max-w-7xl mx-auto px-4">
      <motion.h2
        className="text-4xl font-bold mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Why Choose Us
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-50 shadow-lg rounded-lg p-8 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <div className="text-indigo-600 mb-4">{feature.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
