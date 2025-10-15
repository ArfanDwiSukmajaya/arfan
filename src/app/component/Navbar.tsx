"use client";
import Link from 'next/link';
import React from 'react';
import MobileNavbar from './MobileNavbar';
import { useTheme } from '../context/ThemeContext';

function Navbar() {
  const [isHidden, setIsHidden] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('');
  const { isDark, toggleTheme } = useTheme();

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
          className='flex justify-between items-center w-full max-w-4xl h-20 px-6 py-4 rounded-[2rem] bg-white/70 dark:bg-gray-800/70 backdrop-blur-md shadow-2xs border dark:border-gray-700'
        >
          {/* Logo Section */}
          <div className='flex items-center space-x-2'>
            <span className='text-xl text-black dark:text-white'>ADS</span>
          </div>

          {/* Menu Items */}
          <div className='flex items-center space-x-6 text-black dark:text-white'>
            <Link
              href='#about'
              className={`relative transition-colors duration-200 hover:text-blue-900 dark:hover:text-blue-300 ${activeSection === 'about'
                ? 'text-blue-600 dark:text-blue-400 font-semibold'
                : 'text-gray-700 dark:text-gray-300'
                }`}
            >
              About
            </Link>
            <Link
              href='#experience'
              className={`relative transition-colors duration-200 hover:text-blue-900 dark:hover:text-blue-300 ${activeSection === 'experience'
                ? 'text-blue-600 dark:text-blue-400 font-semibold'
                : 'text-gray-700 dark:text-gray-300'
                }`}
            >
              Experience
            </Link>
            <Link
              href='#portfolio'
              className={`relative transition-colors duration-200 hover:text-blue-900 dark:hover:text-blue-300 ${activeSection === 'portfolio'
                ? 'text-blue-600 dark:text-blue-400 font-semibold'
                : 'text-gray-700 dark:text-gray-300'
                }`}
            >
              Portfolio
            </Link>
          </div>

          {/* Action Buttons */}
          <div className='flex items-center space-x-3'>
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className='p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200'
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            <a
              href="mailto:jayaarfan92@gmail.com"
              className='px-6 py-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold shadow-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 inline-block'
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