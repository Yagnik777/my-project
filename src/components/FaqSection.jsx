import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What courses do you offer?",
    answer: "We provide career-focused courses in Data Analytics, Software Engineering, and Cybersecurity with hands-on projects.",
  },
  {
    question: "Do I get a certificate?",
    answer: "Yes! Each course completion earns you an industry-recognized SkillInspire certificate.",
  },
  {
    question: "Can I learn at my own pace?",
    answer: "Absolutely! All our courses are flexible, self-paced, and online with optional live sessions.",
  },
  {
    question: "Are instructors experienced?",
    answer: "Yes, our instructors are industry experts with real-world project experience.",
  },
];

export default function UniqueFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gradient-to-r from-indigo-50 to-indigo-100 px-4">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-indigo-700"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.p
          className="text-gray-700 mt-2 text-lg"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Get clarity on everything about SkillInspire courses
        </motion.p>
      </div>

      <div className="max-w-3xl mx-auto grid gap-6">
        {faqs.map((faq, idx) => (
          <motion.div
            key={idx}
            className="relative bg-white rounded-3xl shadow-xl overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform duration-300"
            onClick={() => toggleFAQ(idx)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div className="p-6 flex justify-between items-center bg-gradient-to-r from-indigo-100 to-indigo-200">
              <h3 className="text-lg md:text-xl font-semibold text-indigo-800">{faq.question}</h3>
              <motion.span
                animate={{ rotate: openIndex === idx ? 45 : 0 }}
                className="text-indigo-800 text-2xl font-bold transition-transform"
              >
                +
              </motion.span>
            </div>

            <AnimatePresence>
              {openIndex === idx && (
                <motion.div
                  className="p-6 bg-white text-gray-700 text-base md:text-lg"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Optional colorful stripe */}
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-indigo-400 to-indigo-600 rounded-l-3xl"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
