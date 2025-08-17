import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const courses = [
  { title: "Data Analytics", desc: "Become a data expert." },
  { title: "Software Engineering", desc: "Build modern apps." },
  { title: "Cybersecurity", desc: "Secure digital world." },
  { title: "AI & ML", desc: "Master AI and Machine Learning." },
  { title: "Cloud Computing", desc: "Learn AWS, Azure & GCP." },
];

export default function CoursesPreview() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section id="courses" className="py-20 bg-gray-50 text-center max-w-7xl mx-auto px-4">
      <motion.h2
        className="text-4xl font-bold mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Our Courses
      </motion.h2>

      <Slider {...settings}>
        {courses.map((course, idx) => (
          <motion.div
            key={idx}
            className="p-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
          >
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-600">{course.desc}</p>
            </div>
          </motion.div>
        ))}
      </Slider>

      {/* CTA Button */}
      <motion.div
        className="mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <Link
          to="/courses"
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-500 transition-colors duration-300"
        >
          View All Courses
        </Link>
      </motion.div>
    </section>
  );
}
