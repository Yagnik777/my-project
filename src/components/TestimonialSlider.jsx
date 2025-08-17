// src/components/TestimonialSlider.jsx
import React from "react";
import Slider from "react-slick";
import { FaQuoteRight, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Mehak Sharma",
    img: "https://randomuser.me/api/portraits/women/79.jpg",
    text: "I am Mehak from Amritsar, Punjab. Currently pursuing BBA. Skillinspire helped me earn through freelancing & affiliate marketing. It truly changed my life.",
  },
  {
    name: "Manshi Saini",
    img: "https://randomuser.me/api/portraits/women/43.jpg",
    text: "With Skillinspire, I gained essential digital skills and earned 6 lakhs via affiliate marketing. This platform opened new opportunities for me.",
  },
  {
    name: "Supesh Thakare",
    img: "https://randomuser.me/api/portraits/men/50.jpg",
    text: "I learnt digital marketing & affiliate marketing from Skillinspire. Now I earn 50k–1 lakh/month. Thank you Skillinspire for this life-changing opportunity.",
  },
];

export default function TestimonialSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <span className="bg-indigo-100 text-indigo-600 px-4 py-1 rounded-full text-sm font-medium">
          Our Testimonials
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-2">
          What Students Think And Say <br /> About Skillinspire
        </h2>
        <p className="text-gray-500 mb-10">
          When known printer took a galley of type scrambled
        </p>

        <Slider {...settings}>
          {testimonials.map((t, i) => (
            <div key={i} className="px-3">
              <div className="bg-indigo-50 rounded-2xl p-6 shadow-md h-full flex flex-col">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-14 h-14 rounded-full border-2 border-indigo-500 object-cover"
                  />
                  <div className="text-left">
                    <h3 className="font-semibold text-lg">{t.name}</h3>
                    <div className="flex text-yellow-400">
                      {Array(5)
                        .fill()
                        .map((_, i) => (
                          <FaStar key={i} />
                        ))}
                    </div>
                  </div>
                  <FaQuoteRight className="ml-auto text-indigo-400 text-2xl" />
                </div>
                <p className="text-gray-600 text-left flex-1">{t.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
