import React from 'react';
import Image from 'next/image';

function About() {
  return (
    <div id="about" className="py-12 md:py-24 px-4 md:px-8">
      {/* Judul About Me - Tetap di tengah */}
      <div className="flex justify-center w-full max-w-[90vw] md:max-w-[70vw] mx-auto mb-12">
        <h3 className="text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-gray-900 via-blue-700 to-purple-700 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
          About Me
        </h3>
      </div>

      {/* Wadah utama konten dengan lebar responsif */}
      <div className="w-full max-w-[90vw] md:max-w-[70vw] mx-auto bg-white dark:bg-gray-800 rounded-2xl border dark:border-gray-700 shadow-2xs p-8 md:p-10">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          {/* Kolom Kiri: Teks Informasi */}
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0 md:pr-10">
            <span className="inline-block bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-300 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              it is me
            </span>
            <p className="mt-2 text-base md:text-lg text-gray-700 dark:text-gray-300 leading-8 text-pretty max-w-prose mx-auto md:mx-0">
              My journey into the tech world began with a simple curiosity about how things work, and it quickly evolved into a passion for building intuitive and impactful digital experiences. As a Full-Stack Developer, I believe that great code is not just about functionality—it is about creating a <span className="font-semibold text-gray-900 dark:text-white">seamless and delightful user experience</span>. I constantly strive to merge beautiful design with optimal performance, ensuring every project I build is not only visually stunning but also <span className="font-semibold text-gray-900 dark:text-white">works flawlessly</span>.
            </p>
          </div>

          {/* Kolom Kanan: Skill Cards yang Bertumpuk */}
          {/* Kolom Kanan: Skill Cards yang Bertumpuk */}
          <div className="md:w-1/2 flex bg-amber-50 dark:bg-amber-900/20 justify-center items-center h-[300px] md:h-[400px] relative group">
            {/* Ilustrasi di kanan */}
            <div className="absolute inset-0 flex items-center justify-end z-0 pointer-events-none pr-4">
              <Image src="/about.svg" alt="About illustration" width={260} height={260} className="animate-float opacity-90 drop-shadow" />
            </div>

            {/* Card 1: Paling Belakang */}
            <div className="absolute w-44 h-16 md:w-64 md:h-20 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-3 md:p-4 flex items-center justify-start z-10 -rotate-6 transform origin-bottom-left transition-transform duration-300 ease-out will-change-transform hover:-translate-y-2 hover:-rotate-3 hover:shadow-xl"
              style={{ top: '10%', left: '10%' }}>
              {/* Konten Kartu */}
              <div className="flex items-center">
                <span className="inline-block w-4 h-4 bg-purple-500 rounded-full mr-3"></span>
                <span className="text-xs md:text-sm font-semibold text-gray-800 dark:text-gray-200">Thinking</span>
              </div>
            </div>

            {/* Card 2: Tengah */}
            <div className="absolute w-44 h-16 md:w-64 md:h-20 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-3 md:p-4 flex items-center justify-start z-20 rotate-3 transform origin-top-right transition-transform duration-300 ease-out will-change-transform hover:-translate-y-2 hover:rotate-6 hover:shadow-xl"
              style={{ top: '30%', left: '25%' }}>
              {/* Konten Kartu */}
              <div className="flex items-center">
                <span className="inline-block w-4 h-4 bg-orange-500 rounded-full mr-3"></span>
                <span className="text-xs md:text-sm font-semibold text-gray-800 dark:text-gray-200">Design</span>
              </div>
            </div>

            {/* Card 3: Paling Depan */}
            <div className="absolute w-44 h-16 md:w-64 md:h-20 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-3 md:p-4 flex items-center justify-start z-30 transition-transform duration-300 ease-out will-change-transform hover:-translate-y-2 hover:rotate-3 hover:shadow-xl"
              style={{ top: '50%', left: '15%' }}>
              {/* Konten Kartu */}
              <div className="flex items-center">
                <span className="inline-block w-4 h-4 bg-blue-500 rounded-full mr-3"></span>
                <span className="text-xs md:text-sm font-semibold text-gray-800 dark:text-gray-200">Execution</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;