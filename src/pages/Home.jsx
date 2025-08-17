import React from "react";
import Hero from "../components/Hero";
import Courses from "../pages/Courses";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Stats from "../components/Stats";
import CTASection from "../components/CTASection";
import Newsletter from "../components/Newsletter";
import FaqSection from "../components/FaqSection";
export default function Home() {
  return (
    <>
      
      {/* Hero Section with id for smooth scroll */}
      <section id="home">
        <Hero />
      </section>

      {/* Courses Section with ids for each course */}
      <section id="courses">
        <Courses />
        <Features />
        <Testimonials/>
        <Stats/>
        <CTASection/>
        
        <FaqSection/>
        <Newsletter/>
        
      </section>
    </>
  );
}

