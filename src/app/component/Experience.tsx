"use client";

import React from 'react';
import { useLanguage } from '../context/LanguageContext';

function ExperienceTimeline() {
  const { t } = useLanguage();
  const experiences = [
    {
      company: t('experience.adira_finance.company'),
      role: t('experience.adira_finance.role'),
      date: t('experience.adira_finance.date'),
      description: [
        t('experience.adira_finance.description.1'),
        t('experience.adira_finance.description.2'),
        t('experience.adira_finance.description.3'),
        t('experience.adira_finance.description.4'),
        t('experience.adira_finance.description.5'),
      ],
    },
  ];

  return (
    <div id="experience" className="md:py-24 px-4 md:px-8">
      {/* Judul */}
      <div className="flex justify-center w-full max-w-[90vw] md:max-w-[70vw] mx-auto mb-12">
        <h3 className="text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-gray-900 via-blue-700 to-purple-700 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
          {t('experience.title')}
        </h3>
      </div>

      {/* Wadah utama timeline */}
      <div className="flex justify-center w-full max-w-[90vw] md:max-w-[70vw] mx-auto mb-12">
        {/* Garis vertikal di tengah */}

        {experiences.map((exp, index) => (
          <div key={index} className="mb-10 relative">
            {/* Kotak konten pengalaman */}
            <div className="rounded-lg md:p-8 shadow-lg sm:ml-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border dark:border-gray-700">
              <div className="flex justify-between items-center mb-2 flex-wrap">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white">{exp.company}</h3>
                <span className="inline-flex items-center rounded-md bg-purple-400/10 dark:bg-purple-400/20 px-2 py-1 text-xs font-medium text-purple-400 dark:text-purple-300 inset-ring inset-ring-purple-400/30">{exp.date}</span>
              </div>
              <p className="text-base font-semibold text-gray-700 dark:text-gray-300">{exp.role}</p>
              <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-400 space-y-1">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExperienceTimeline;