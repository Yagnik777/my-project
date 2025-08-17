// src/components/StatsSection.jsx
import React from "react";
 // 👈 aa image assets folder ma mukjo

export default function StatsSection() {
  return (
    <section className="bg-[#1E1B4B] text-white py-16 px-6 md:px-20 rounded-2xl relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            Thousands Of{" "}
            <span className="bg-yellow-400 text-black px-2 rounded-md">
              Courses
            </span>{" "}
            <br /> Authored By Industry Experts
          </h2>

          {/* Stats */}
          <div className="flex flex-col md:flex-row md:items-center gap-10 mt-10">
            <div>
              <h3 className="text-4xl font-bold">45K+</h3>
              <p className="text-gray-300 text-lg">Active Students</p>
            </div>
            <div className="hidden md:block w-px h-16 bg-gray-500"></div>
            <div>
              <h3 className="text-4xl font-bold">50+</h3>
              <p className="text-gray-300 text-lg">Best Instructors</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            
            alt="Students"
            className="max-w-[350px] md:max-w-[420px] drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
