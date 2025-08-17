import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { ref: mapRef, inView: mapInView } = useInView({ triggerOnce: true, rootMargin: "100px" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${form.name}! Your message has been sent.`);
    setForm({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    { icon: <FaMapMarkerAlt size={24} />, title: "Address", details: "123 Skill Street, India" },
    { icon: <FaPhoneAlt size={24} />, title: "Phone", details: "+91 123 456 7890" },
    { icon: <FaEnvelope size={24} />, title: "Email", details: "contact@skillinspire.in" },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, url: "#" },
    { icon: <FaInstagram />, url: "#" },
    { icon: <FaLinkedinIn />, url: "#" },
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-indigo-50 to-indigo-100 px-4">
      {/* Heading */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Contact Us</h2>
        <p className="text-gray-600 mt-2">We’d love to hear from you. Reach out for any queries!</p>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white shadow-xl rounded-2xl p-10 flex flex-col gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            required
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Message"
            rows="6"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-indigo-600 text-white font-bold px-6 py-3 rounded-lg hover:bg-indigo-500 transition-colors duration-300"
          >
            Send Message
          </button>
        </motion.form>

        {/* Contact Info + Social + Map */}
        <div className="flex flex-col gap-8">
          {/* Contact Cards */}
          <div className="grid gap-6">
            {contactInfo.map((info, idx) => (
              <motion.div
                key={idx}
                className="flex items-center gap-4 bg-white shadow-lg rounded-xl p-5 hover:shadow-2xl transition-shadow duration-300"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="text-indigo-600">{info.icon}</div>
                <div>
                  <h4 className="font-semibold">{info.title}</h4>
                  <p className="text-gray-600">{info.details}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center md:justify-start mt-4">
            {socialLinks.map((social, idx) => (
              <motion.a
                key={idx}
                href={social.url}
                className="bg-white p-3 rounded-full text-indigo-600 shadow transition-transform duration-300"
                whileHover={{ scale: 1.1 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* Lazy-loaded Map */}
          <div ref={mapRef} className="mt-6 rounded-xl overflow-hidden shadow-lg">
            {mapInView && (
              <iframe
                title="office-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11602599353!2d72.74109925959603!3d19.082197839311075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c63e6adf8a7b%3A0x3c8059d99c2a73c4!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1692222222222!5m2!1sen!2sin"
                width="100%"
                height="250"
                className="border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
