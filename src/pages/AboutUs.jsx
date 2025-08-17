import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { FaChalkboardTeacher, FaBriefcase, FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

// Expert Cards
const cards = [
  {
    icon: <FaChalkboardTeacher size={30} />,
    title: "Expert Mentors",
    desc: "Learn from industry leaders with real-world experience.",
  },
  {
    icon: <FaBriefcase size={30} />,
    title: "Career Focused",
    desc: "Courses designed to get you job-ready quickly.",
  },
  {
    icon: <FaClock size={30} />,
    title: "Flexible Learning",
    desc: "Learn online at your own pace with live sessions and resources.",
  },
];

// Stats / Counters
const stats = [
  { title: "Students Trained", count: 5000 },
  { title: "Courses Offered", count: 50 },
  { title: "Success Stories", count: 1200 },
];

// Mentor Images
const mentors = [
  { name: "John Doe", image: "/images/mentor1.webp" },
  { name: "Jane Smith", image: "/images/mentor2.webp" },
  { name: "Michael Lee", image: "/images/mentor3.webp" },
  { name: "Emily Clark", image: "/images/mentor4.webp" },
];

export default function About() {
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="py-24 bg-gradient-to-r from-indigo-50 to-indigo-100 px-4">
      {/* Heading + Subtitle */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">About Us</h2>
        <p className="text-gray-600 mt-2 text-lg md:text-xl">
          Empowering students for the future of tech
        </p>
      </motion.div>

      {/* Mission / Vision */}
      <motion.p
        className="max-w-3xl mx-auto text-center text-gray-700 mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        SkillInspire is dedicated to providing high-quality, career-focused courses
        in Data Analytics, Software Engineering, and Cybersecurity. Our expert instructors
        guide students from basics to advanced skills, preparing them for top industry roles.
      </motion.p>

      {/* Expert Cards */}
      <motion.div
        className="grid md:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="text-indigo-600 mb-4">{card.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-600">{card.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Statistics Counters */}
      <div ref={statsRef} className="grid md:grid-cols-3 gap-8 mt-16 text-center">
        {stats.map((stat, idx) => (
          <div key={idx}>
            <h3 className="text-3xl font-bold text-indigo-600">
              {statsInView ? <CountUp end={stat.count} duration={2} separator="," /> : 0}
            </h3>
            <p className="text-gray-700 mt-2">{stat.title}</p>
          </div>
        ))}
      </div>

      {/* Mentor Images */}
      <motion.div
        className="flex justify-center gap-6 mt-16 flex-wrap"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {mentors.map((mentor, idx) => (
          <motion.img
            key={idx}
            src={mentor.image}
            alt={mentor.name}
            loading="lazy"
            className="w-24 h-24 rounded-full border-4 border-indigo-100 shadow-lg"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </motion.div>

      {/* CTA Banner */}
      <div className="mt-16 bg-indigo-600 text-white rounded-xl p-8 text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">Join SkillInspire today</h3>
        <Link
          to="/courses"
          className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition"
        >
          Explore Courses
        </Link>
      </div>
    </section>
  );
}
