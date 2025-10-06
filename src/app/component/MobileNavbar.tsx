"use client";
import Link from 'next/link';
import React from 'react';

interface MobileNavbarProps {
  isHidden: boolean;
  activeSection: string;
}

function MobileNavbar({ isHidden, activeSection }: MobileNavbarProps) {
  return (
    <div className={`md:hidden fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${isHidden ? 'translate-y-full' : 'translate-y-0'}`}>
      <div className='flex justify-center items-center bg-white/90 backdrop-blur-md border-t border-gray-200 px-4 py-3'>
        <div className='flex items-center justify-around w-full max-w-md space-x-2'>
          {/* About Icon */}
          <Link
            href='#about'
            className={`relative p-3 rounded-full transition-all duration-200 ${activeSection === 'about'
              ? 'bg-blue-100 text-blue-600'
              : 'text-gray-600 hover:bg-gray-100'
              }`}
            title="About"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </Link>

          {/* Experience Icon */}
          <Link
            href='#experience'
            className={`relative p-3 rounded-full transition-all duration-200 ${activeSection === 'experience'
              ? 'bg-blue-100 text-blue-600'
              : 'text-gray-600 hover:bg-gray-100'
              }`}
            title="Experience"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
            </svg>
          </Link>

          {/* Portfolio Icon */}
          <Link
            href='#portfolio'
            className={`relative p-3 rounded-full transition-all duration-200 ${activeSection === 'portfolio'
              ? 'bg-blue-100 text-blue-600'
              : 'text-gray-600 hover:bg-gray-100'
              }`}
            title="Portfolio"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </Link>

          {/* Contact Icon */}
          <a
            href="mailto:jayaarfan92@gmail.com"
            className="p-3 rounded-full text-gray-600 hover:bg-gray-100 transition-all duration-200"
            title="Contact Me"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default MobileNavbar;
