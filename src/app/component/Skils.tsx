"use client";

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';

function FloatingSkills() {
  const { t } = useLanguage();
  const skills = [
    { icon: '/github.svg', size: 'h-24 w-24' },
    { icon: '/spring-boot.svg', size: 'h-20 w-20' },
    { icon: '/typescript-official-svgrepo-com.svg', size: 'h-16 w-16' },
    { icon: '/sass-svgrepo-com.svg', size: 'h-20 w-20' },
    { icon: '/reactjs-svgrepo-com.svg', size: 'h-24 w-24' },
    { icon: '/oracle-svgrepo-com.svg', size: 'h-16 w-16' },
    { icon: '/nodejs-icon-logo-svgrepo-com.svg', size: 'h-24 w-24' },
    { icon: '/nextjs-icon-svgrepo-com.svg', size: 'h-20 w-20' },
    { icon: '/mysql-svgrepo-com.svg', size: 'h-16 w-16' },
    { icon: '/mongodb-logo-svgrepo-com.svg', size: 'h-20 w-20' },
    { icon: '/jira-svgrepo-com.svg', size: 'h-16 w-16' },
    { icon: '/javascript-svgrepo-com.svg', size: 'h-24 w-24' },
    { icon: '/java-svgrepo-com.svg', size: 'h-20 w-20' },
    { icon: '/html-5-svgrepo-com.svg', size: 'h-24 w-24' },
    { icon: '/docker-svgrepo-com.svg', size: 'h-20 w-20' },
    { icon: '/css-3-svgrepo-com.svg', size: 'h-16 w-16' },
    { icon: '/vue-9-logo-svgrepo-com.svg', size: 'h-20 w-20' },
  ];

  return (
    <div className="py-12 md:py-24 px-4 md:px-8">
      {/* Judul di atas */}
      <div className="flex justify-center w-full max-w-[90vw] md:max-w-[70vw] mx-auto mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-gray-900 via-blue-700 to-purple-700 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
          {t('skills.title')}
        </h2>
      </div>

      {/* Wadah utama konten dengan lebar responsif */}
      <div className="w-full max-w-[90vw] md:max-w-[70vw] mx-auto bg-white dark:bg-gray-800 rounded-2xl border dark:border-gray-700 shadow-2xs p-10 relative overflow-hidden min-h-[400px]">
        <div className="absolute inset-0 flex items-center justify-center">
          {skills.map((skill, index) => {
            const positions = [
              { top: 15, left: 20, delay: 0.5 },
              { top: 25, left: 70, delay: 1.2 },
              { top: 40, left: 15, delay: 0.8 },
              { top: 60, left: 80, delay: 1.5 },
              { top: 75, left: 25, delay: 0.3 },
              { top: 20, left: 60, delay: 1.8 },
              { top: 45, left: 40, delay: 0.7 },
              { top: 65, left: 85, delay: 1.1 },
              { top: 30, left: 10, delay: 1.6 },
              { top: 80, left: 50, delay: 0.9 },
              { top: 35, left: 75, delay: 1.3 },
              { top: 55, left: 30, delay: 0.4 },
              { top: 70, left: 65, delay: 1.7 },
              { top: 25, left: 45, delay: 0.6 },
              { top: 50, left: 90, delay: 1.4 },
              { top: 85, left: 35, delay: 0.2 },
              { top: 40, left: 55, delay: 1.9 }
            ];

            const pos = positions[index % positions.length];

            return (
              <div
                key={index}
                className={`absolute flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-600 shadow-md animate-bubble hover:animate-none ${skill.size}`}
                style={{
                  top: `${pos.top}%`,
                  left: `${pos.left}%`,
                  animationDelay: `${pos.delay}s`
                }}
              >
                <Image src={skill.icon} alt="Skill Icon" width={96} height={96} className="h-1/2 w-1/2" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FloatingSkills;