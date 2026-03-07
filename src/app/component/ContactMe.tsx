"use client";

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';

function ContactSection() {
  const { t } = useLanguage();

  return (
    <div className="py-12 md:py-24 px-4 md:px-8">
      {/* Judul */}
      <div className="flex justify-center w-full max-w-[90vw] md:max-w-[70vw] mx-auto mb-12">
        <h3 className="text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-gray-900 via-blue-700 to-purple-700 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
          {t('contact.title')}
        </h3>
      </div>

      {/* Wadah utama kontak */}
      <div className="w-full max-w-[90vw] md:max-w-[70vw] mx-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl border dark:border-gray-700 shadow-md p-8 md:p-10">
        <div className="flex flex-col items-center text-center">
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mb-8">
            {t('contact.description')}
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-8 items-center justify-center w-full">
            {/* Kartu Email */}
            <a href="mailto:jayaarfan92@gmail.com" className="w-full sm:w-1/3 max-w-[200px] group">
              <div className="flex flex-col items-center bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-xl p-4 md:p-6 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1 h-full justify-center">
                <Image src="/email-svgrepo-com.svg" alt="Email" width={24} height={24} className="mb-2" />
                <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 font-medium">Email</p>
              </div>
            </a>

            {/* Kartu LinkedIn */}
            <a href="https://linkedin.com/in/arfandwisukmajaya" target="_blank" rel="noopener noreferrer" className="w-full sm:w-1/3 max-w-[200px] group">
              <div className="flex flex-col items-center bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-xl p-4 md:p-6 hover:border-blue-600 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1 h-full justify-center">
                <Image src="/linkedin-1-svgrepo-com.svg" alt="LinkedIn" width={24} height={24} className="mb-2" />
                <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 font-medium">LinkedIn</p>
              </div>
            </a>

            {/* Kartu GitHub */}
            <a href="https://github.com/ArfanDwiSukmajaya" target="_blank" rel="noopener noreferrer" className="w-full sm:w-1/3 max-w-[200px] group">
              <div className="flex flex-col items-center bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-xl p-4 md:p-6 hover:border-gray-800 dark:hover:border-gray-400 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1 h-full justify-center">
                <Image src="/github.svg" alt="GitHub" width={24} height={24} className="mb-2" />
                <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 font-medium">GitHub</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;