import React from 'react';
import { Button } from "@/components/ui/button";
import { Download } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-light">
      <div className="container flex items-center justify-between h-16 mx-auto">
        <div className="flex items-center">
          <a href="/" className="text-xl font-bold text-dark">
            <span className="text-primary">Mech</span>Engineer
          </a>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
            }}
            className="text-sm font-medium text-text hover:text-primary transition-colors"
          >
            About
          </a>
          <a
            href="#skills"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
            }}
            className="text-sm font-medium text-text hover:text-primary transition-colors"
          >
            Skills
          </a>
          <a
            href="#experience"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
            }}
            className="text-sm font-medium text-text hover:text-primary transition-colors"
          >
            Experience
          </a>
          <a
            href="#education"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('education')?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
            }}
            className="text-sm font-medium text-text hover:text-primary transition-colors"
          >
            Education
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
            }}
            className="text-sm font-medium text-text hover:text-primary transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* <Button variant="default" size="sm" className="hidden md:flex gap-2 bg-primary hover:bg-primary/90">
          <Download size={16} />
          Download CV
        </Button> */}

        <Button variant="outline" size="icon" className="md:hidden border-light text-text hover:bg-light">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
