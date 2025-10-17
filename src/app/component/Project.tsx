"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

function ProjectsSection() {
  const { t } = useLanguage();
  const [imageErrors, setImageErrors] = useState<{ [key: string]: boolean }>({});

  const handleImageError = (imageSrc: string) => {
    setImageErrors(prev => ({ ...prev, [imageSrc]: true }));
  };

  const getImageSrc = (originalSrc: string) => {
    return imageErrors[originalSrc] ? '/default.png' : originalSrc;
  };
  const projects = [
    {
      title: t('project.wmp_gnow.title'),
      description: t('project.wmp_gnow.description'),
      image: "/gnow.png",
      codeLink: "",
      detailLink: "/projects/wmp-gnow",
    },
    {
      title: t('project.riplay.title'),
      description: t('project.riplay.description'),
      image: "/riplay.png",
      codeLink: "",
      detailLink: "/projects/riplay",
    },
    {
      title: t('project.4c_ilabs.title'),
      description: t('project.4c_ilabs.description'),
      image: "/4c-ilabs.png",
      codeLink: "",
      detailLink: "/projects/4c-ilabs",
    },
    {
      title: t('project.basis.title'),
      description: t('project.basis.description'),
      image: "/basis.png",
      codeLink: "",
      detailLink: "/projects/basis",
    },
    {
      title: t('project.tukerin.title'),
      description: t('project.tukerin.description'),
      image: "/tukerin.png",
      codeLink: "https://github.com/orgs/CPI-FS-SDG-12-C/repositories",
      detailLink: "/projects/tukerin",
    },
    {
      title: t('project.text_summarization.title'),
      description: t('project.text_summarization.description'),
      image: "/text-sumarization.png",
      codeLink: "https://github.com/ArfanDwiSukmajaya/Text-Summarization-CLSA",
      detailLink: "/projects/text-summarization",
    },

  ];

  return (
    <div id="portfolio" className="py-12 md:py-24 px-4 md:px-8">
      {/* Judul "Core Features" / "Portfolio" */}
      <div className="flex justify-center w-full min-w-[70vw] mx-auto mb-12">
        <h3 className="text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-gray-900 via-blue-700 to-purple-700 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
          {t('portfolio.title')}
        </h3>
      </div>

      {/* Wadah utama grid untuk proyek */}
      <div className="w-full max-w-[80vw] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 border dark:border-gray-700 shadow-2xs flex flex-col h-full">
            {/* Gambar atau Thumbnail Proyek - Fixed height */}
            <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
              <Image
                src={getImageSrc(project.image)}
                alt={project.title}
                width={640}
                height={360}
                className="w-full h-full object-cover"
                onError={() => handleImageError(project.image)}
              />
            </div>

            {/* Judul dan Deskripsi */}
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-2">{project.title}</h3>
            <p className="text-base text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 flex-grow min-h-[4.5rem]">{project.description}</p>

            {/* Tombol Aksi */}
            <div className="flex space-x-4 mt-auto">
              <Link
                href={project.detailLink}
                className="flex items-center justify-center px-4 py-2 border-2 border-yellow-500 dark:border-yellow-400 text-sm font-semibold rounded-full text-yellow-500 dark:text-yellow-400 bg-white dark:bg-gray-800 hover:bg-yellow-50 dark:hover:bg-yellow-900/20 hover:text-yellow-600 dark:hover:text-yellow-300 transition-colors duration-200"
              >
                {t('portfolio.view_details')}
              </Link>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default ProjectsSection;