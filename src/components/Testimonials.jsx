import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "John Doe",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    feedback: "SkillInspire helped me land my dream job in IT!",
    rating: 5,
  },
  {
    name: "Jane Smith",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    feedback: "Amazing instructors and practical courses.",
    rating: 5,
  },
  {
    name: "Mike Johnson",
    photo: "https://randomuser.me/api/portraits/men/56.jpg",
    feedback: "Highly recommend for anyone wanting to upgrade their skills.",
    rating: 4,
  },
];

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="py-20 bg-gray-50 text-center max-w-7xl mx-auto px-4">
      <motion.h2
        className="text-4xl font-bold mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        What Our Students Say
      </motion.h2>

      <Slider {...settings}>
        {testimonials.map((testi, idx) => (
          <motion.div
            key={idx}
            className="p-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
          >
            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
              <img
                src={testi.photo}
                alt={testi.name}
                className="w-20 h-20 rounded-full mb-4 object-cover"
              />
              <p className="text-gray-600 mb-2">"{testi.feedback}"</p>
              <div className="flex text-yellow-400 mb-2">
                {[...Array(testi.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <h4 className="font-semibold">{testi.name}</h4>
            </div>
          </motion.div>
        ))}
      </Slider>
    </section>
  );
}
