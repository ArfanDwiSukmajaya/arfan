import React from 'react';
import Image from 'next/image';

function HeroSection() {
  return (
    // Outer wrapper for background grid and padding
    <div className="min-h-[calc(110vh-7rem)] flex items-center px-4 md:px-8 pt-6 md:pt-8">

      {/* Main content wrapper with responsive width */}
      <div className="w-full max-w-[90vw] md:max-w-[70vw] mx-auto bg-white rounded-2xl border shadow-2xs p-10">

        <div className="flex flex-col md:flex-row items-center">
          {/* Left Column: Title and Description */}
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 p-4">
            <span className="text-2xl text-gray-900 leading-tight">
              Hi, I am
            </span>
            <h3 className="text-5xl md:text-4xl font-extrabold leading-tight bg-gradient-to-r from-gray-900 via-blue-700 to-purple-700 bg-clip-text text-transparent">
              Arfan Dwi Sukmajaya
            </h3>
            <p className="mt-4 text-base md:text-lg text-gray-600 max-w-lg mx-auto md:mx-0">
              Hi, I’m Arfan Dwi Sukmajaya. I’m a Fullstack Developer who loves turning ideas into high-quality, scalable web applications. With hands-on experience in both frontend and backend development, I create solutions that are not just functional, but also fast, reliable, and user-friendly.            </p>

            {/* Button */}
            <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#about" className="flex items-center justify-center px-6 py-3 border-2 border-yellow-500 text-base font-semibold rounded-full text-yellow-500 bg-white hover:bg-yellow-50 hover:text-yellow-600 transition-colors duration-200">
                Explore
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Element */}
          <div className="md:w-1/2 flex justify-center items-center relative animate-float shadow-2xs">
            <Image src="/me.svg" alt="Ilustrasi diri" width={512} height={512} className="w-full h-auto max-w-sm" priority />
          </div>
        </div>
      </div>
    </div >
  );
}

export default HeroSection;