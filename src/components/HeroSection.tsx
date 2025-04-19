import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-engineer-lightblue to-white pt-16 pb-12 md:pt-20 md:pb-20 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-engineer-rust blur-3xl"></div>
        <div className="absolute -left-20 bottom-20 w-80 h-80 rounded-full bg-engineer-navy blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Text Content */}
          <div className="md:w-1/2 space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-engineer-navy">
              Fauzatul Ilham
            </h1>
            <h5 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }}>
              <span className="animate-pulse text-engineer-navy">Mechanical Engineer</span> with Independent Project Experience
            </h5>
            <p className="text-lg text-gray-700 leading-relaxed">
              Mechanical Engineering graduate with nearly 4 years of freelance experience providing technical assistance on diverse client projects. Skilled in translating client needs into clear deliverables, solving real-world problems using engineering principles, and working independently across varied environments.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/fauzatul-ilham"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full border-2 border-engineer-navy hover:bg-engineer-navy hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <span className="font-medium">LinkedIn</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>


          {/* Profile Image */}
          <div className="md:w-2/5 max-w-xs md:max-w-sm relative animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="relative overflow-hidden rounded-xl shadow-2xl bg-white p-3 border-4 border-engineer-rust hover:scale-[1.02] transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-tr from-engineer-navy/20 to-transparent pointer-events-none z-10 rounded-lg"></div>
              <img
                src={`${import.meta.env.BASE_URL}lovable-uploads/26abd485-a2ce-4f51-84b5-e8b75dffd45d.png`}
                alt="Mechanical Engineer Profile"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>

            <div
              className="absolute -bottom-6 -left-6 p-4 bg-white shadow-lg rounded-lg border border-engineer-steel animate-fade-in hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: '500ms' }}
            >
              <p className="text-sm font-semibold text-engineer-navy">Open to opportunities:</p>
              <ul className="text-xs text-engineer-steel">
                <li>✓ Mechanical Drafter</li>
                <li>✓ CNC Machine Technician / Workshop Support</li>
                <li>✓ Maintenance Technician / Mechanical Maintenance Support</li>

              </ul>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-fade-in animate-bounce"
          style={{ animationDelay: '700ms' }}
        >
          <a
            href="#about"
            className="flex flex-col items-center text-engineer-steel hover:text-engineer-rust transition-colors"
          >
            {/* <span className="text-sm font-medium mb-2">Scroll Down</span> */}
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
