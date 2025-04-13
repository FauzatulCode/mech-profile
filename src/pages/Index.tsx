
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import EducationSection from '@/components/EducationSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  // Initialize intersection observer for fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.section-fade-in');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  // Update page title
  // useEffect(() => {
  //   document.title = "Mechanical Engineer Portfolio | Professional Profile";
  // }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />

        <div className="section-fade-in">
          <AboutSection />
        </div>

        <div className="section-fade-in">
          <SkillsSection />
        </div>

        <div className="section-fade-in">
          <ExperienceSection />
        </div>

        <div className="section-fade-in">
          <EducationSection />
        </div>

        <div className="section-fade-in">
          <ContactSection />
        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
