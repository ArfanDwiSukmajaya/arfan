"use client";
import Link from 'next/link';
import React from 'react';
import MobileNavbar from './MobileNavbar';

function Navbar() {
  const [isHidden, setIsHidden] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('');

  React.useEffect(() => {
    const sections = ['about', 'experience', 'portfolio'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY;
      if (y < 10) {
        setIsHidden(false);
      } else if (delta > 0) {
        setIsHidden(true);
      } else if (delta < 0) {
        setIsHidden(false);
      }
      lastY = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Desktop Navbar - Top */}
      <div className={`hidden md:flex fixed top-0 left-0 right-0 z-50 justify-center p-3 transition-transform duration-300 ${isHidden ? '-translate-y-full' : 'translate-y-0'}`}>
        <div
          className='flex justify-between items-center w-full max-w-4xl h-20 px-6 py-4 rounded-[2rem] bg-white/70 backdrop-blur-md shadow-2xs border'
        >
          {/* Logo Section */}
          <div className='flex items-center space-x-2'>
            <span className='text-xl text-black'>ADS__</span>
          </div>

          {/* Menu Items */}
          <div className='flex items-center space-x-6 text-black'>
            <Link
              href='#about'
              className={`relative transition-colors duration-200 hover:text-blue-900 ${activeSection === 'about'
                ? 'text-blue-600 font-semibold'
                : 'text-gray-700'
                }`}
            >
              About
            </Link>
            <Link
              href='#experience'
              className={`relative transition-colors duration-200 hover:text-blue-900 ${activeSection === 'experience'
                ? 'text-blue-600 font-semibold'
                : 'text-gray-700'
                }`}
            >
              Experience
            </Link>
            <Link
              href='#portfolio'
              className={`relative transition-colors duration-200 hover:text-blue-900 ${activeSection === 'portfolio'
                ? 'text-blue-600 font-semibold'
                : 'text-gray-700'
                }`}
            >
              Portfolio
            </Link>
          </div>

          {/* Action Button */}
          <div className='flex items-center space-x-3'>
            <a
              href="mailto:jayaarfan92@gmail.com"
              className='px-6 py-2 rounded-full bg-gray-100 text-gray-700 font-semibold shadow-md hover:bg-gray-200 bg-transparent(rgba(255, 255, 255, 0.1)) inline-block'
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navbar */}
      <MobileNavbar isHidden={isHidden} activeSection={activeSection} />
    </>
  );
}

export default Navbar;