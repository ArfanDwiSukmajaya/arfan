"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

function ProjectsSection() {
  const { t } = useLanguage();
  const projects = [
    {
      title: "WMP GNow",
      description: "A comprehensive learning management system tailored for student lab experiences. Key features include attendance tracking, live Arduino coding, and interactive virtual sessions.",
      image: "/gnow.png",
      codeLink: "",
      detailLink: "/projects/wmp-gnow",
    },
    {
      title: "Riplay",
      description: "A system for managing contract documents with digital signature and document management. My role involved building the mobile application and backend API.",
      image: "/riplay.png",
      codeLink: "",
      detailLink: "/projects/riplay",
    },
    {
      title: "4c-ilabs",
      description: "A comprehensive learning management system tailored for student lab experiences. Key features include attendance tracking, live Arduino coding, and interactive virtual sessions.",
      image: "/4c-ilabs.png",
      codeLink: "",
      detailLink: "/projects/4c-ilabs",
    },
    {
      title: "BASIS",
      description: "A platform for student discussion and survey. My role involved building the responsive user interface to simplify item management and facilitate community-based transactions.",
      image: "/basis.png",
      codeLink: "",
      detailLink: "/projects/basis",
    },
    {
      title: "Tukerin",
      description: " A platform for item exchange, auctions, and charitable donations. My role involved building the responsive user interface to simplify item management and facilitate community-based transactions.",
      image: "/tukerin.png",
      codeLink: "https://github.com/orgs/CPI-FS-SDG-12-C/repositories",
      detailLink: "/projects/tukerin",
    },
    {
      title: "Text-Summarization",
      description: "Developed an AI-based language model application to automatically summarize news articles and long-form texts. Implemented the CLSA (Cross Latent Semantic Analysis) method to extract key information and generate coherent summaries.",
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
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 border dark:border-gray-700 shadow-2xs">
            {/* Gambar atau Thumbnail Proyek */}
            <Image src={project.image} alt={project.title} width={640} height={360} className="w-full h-auto rounded-lg mb-4" />

            {/* Judul dan Deskripsi */}
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-2">{project.title}</h3>
            <p className="text-base text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{project.description}</p>

            {/* Tombol Aksi */}
            <div className="flex space-x-4">
              <Link
                href={project.detailLink}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                {t('portfolio.view_details')}
              </Link>
              {project.codeLink && (
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-200"
                >
                  {t('portfolio.view_code')}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default ProjectsSection;