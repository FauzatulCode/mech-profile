
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container flex items-center justify-between h-16 mx-auto">
        <div className="flex items-center">
          <a href="/" className="text-xl font-bold text-engineer-darkgray">
            <span className="text-engineer-red">Mech</span>Engineer
          </a>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-sm font-medium text-gray-700 hover:text-engineer-red transition-colors">
            About
          </a>
          <a href="#skills" className="text-sm font-medium text-gray-700 hover:text-engineer-red transition-colors">
            Skills
          </a>
          <a href="#experience" className="text-sm font-medium text-gray-700 hover:text-engineer-red transition-colors">
            Experience
          </a>
          <a href="#education" className="text-sm font-medium text-gray-700 hover:text-engineer-red transition-colors">
            Education
          </a>
        </nav>
        
        <Button variant="default" size="sm" className="hidden md:flex gap-2">
          <Download size={16} />
          Download CV
        </Button>
        
        <Button variant="outline" size="icon" className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
