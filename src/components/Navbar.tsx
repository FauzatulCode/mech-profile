import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Deteksi scroll untuk mengubah tampilan navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Mendeteksi section mana yang sedang aktif
      const sections = ['about', 'skills', 'experience', 'education', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom > 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll yang lebih halus dengan durasi yang lebih panjang
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Mendapatkan posisi elemen
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 80;

      // Scroll lambat dengan durasi lebih panjang
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Gunakan timeout untuk memastikan scrolling selesai sebelum menutup menu
      setTimeout(() => {
        setIsOpen(false);
        setActiveSection(id);
      }, 800); // Tunggu 800ms untuk memastikan scrolling selesai
    }
  };

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-500 ${scrolled
      ? 'bg-background/95 backdrop-blur-md shadow-md py-2'
      : 'bg-background/80 backdrop-blur-sm py-4'
      }`}>
      <div className="container flex items-center justify-between mx-auto">
        <div className="flex items-center">
          <a href="/mech-profile/" className="text-xl font-bold flex items-center">
            <span className="text-engineer-navy font-extrabold">Mech</span>
            <span className="bg-engineer-navy text-white px-2 py-1 rounded">Engineer</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-1">
          {['about', 'skills', 'experience', 'education', 'contact'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(section);
              }}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 hover:bg-light/50 ${activeSection === section
                ? 'text-primary border-b-2 border-primary font-semibold'
                : 'text-text'
                }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-text hover:bg-light/50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="container mx-auto py-2">
          <div className="flex flex-col bg-background/95 backdrop-blur-md rounded-lg shadow-lg border border-light overflow-hidden">
            {['about', 'skills', 'experience', 'education', 'contact'].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(section);
                }}
                className={`px-6 py-4 text-sm font-medium flex justify-between items-center hover:bg-light/30 border-b border-light/50 last:border-0 transition-colors duration-300 ${activeSection === section ? 'text-primary bg-light/20' : 'text-text'
                  }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                <ChevronRight size={16} className={activeSection === section ? 'text-primary' : 'text-text/50'} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;