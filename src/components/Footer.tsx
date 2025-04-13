import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-xl font-bold mb-2">
              <span className="text-engineer-red">Mech</span>Engineer
            </div>
            <p className="text-gray-400 text-sm">
              Mechanical Engineering Professional Portfolio
            </p>
            <p className="text-gray-400 text-sm mt-2">
              <a
                href="https://www.linkedin.com/in/annisa1202"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-engineer-navy transition-colors"
              >
                Developed by AnnisaCode
              </a>
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="text-sm text-gray-400">
              &copy; {currentYear} All Rights Reserved
            </div>
            <div className="mt-2 text-xs text-gray-500">
              Created with passion for engineering excellence
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
