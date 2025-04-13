import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-engineer-lightblue to-white py-20 md:py-32 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-engineer-rust blur-3xl"></div>
        <div className="absolute -left-20 bottom-20 w-80 h-80 rounded-full bg-engineer-navy blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Text Content */}
          <div
            className="md:w-1/2 space-y-6 animate-fade-in"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-engineer-navy tracking-tight">
              <span className="text-engineer-rust animate-pulse">Mechanical Engineer</span> with a Passion for Innovation
            </h1>
            <p className="text-lg text-engineer-steel max-w-xl">
              A highly adaptable and dedicated Mechanical Engineering graduate with hands-on experience and strong technical capabilities.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button
                size="lg"
                className="font-medium bg-engineer-navy hover:bg-engineer-rust transition-colors duration-300 hover:scale-105 transform"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })}
              >
                Contact Me
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div
            className="md:w-2/5 relative animate-fade-in"
            style={{ animationDelay: '200ms' }}
          >
            <div
              className="relative overflow-hidden rounded-xl shadow-2xl bg-white p-3 border-4 border-engineer-rust hover:scale-[1.02] transition-transform duration-300"
            >
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
                <li>✓ Mechanical Technician</li>
                <li>✓ Junior Mechanical Engineer</li>
                <li>✓ Mechanical Drafter</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in animate-bounce"
          style={{ animationDelay: '700ms' }}
        >
          <a
            href="#about"
            className="flex flex-col items-center text-engineer-steel hover:text-engineer-rust transition-colors"
          >
            <span className="text-sm font-medium mb-2">Scroll Down</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
