import React from "react";
import CountUp from "react-countup";
import { FaUserGraduate, FaBook, FaAward } from "react-icons/fa";
import { motion } from "framer-motion";

const stats = [
  { icon: <FaUserGraduate size={40} />, title: "Students Trained", count: 5000 },
  { icon: <FaBook size={40} />, title: "Courses Offered", count: 50 },
  { icon: <FaAward size={40} />, title: "Success Stories", count: 1200 },
];

export default function Stats() {
  return (
    <section className="py-20 bg-gray-50 text-gray-800 px-4">
      <motion.h2
        className="text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Our Achievements
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            className="bg-white shadow-lg rounded-xl p-10 flex flex-col items-center hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <div className="text-indigo-600 mb-4">{stat.icon}</div>
            <h3 className="text-3xl font-bold mb-2">
              <CountUp end={stat.count} duration={2} separator="," />
            </h3>
            <p className="text-lg text-gray-600">{stat.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
