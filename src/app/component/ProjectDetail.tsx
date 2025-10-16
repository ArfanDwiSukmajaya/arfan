"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import LanguageSwitcher from './LanguageSwitcher';

interface ProjectDetailProps {
  project: {
    title: string;
    description: string;
    fullDescription: string;
    image: string;
    codeLink: string;
    liveDemoLink?: string;
    techStack: string[];
    role: string;
    responsibilities: string[];
    challenge: string;
    solution: string;
    features: string[];
    figmaScreenshots?: string[];
    additionalScreenshots?: string[];
  };
}

function ProjectDetail({ project }: ProjectDetailProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { t } = useLanguage();
  const { isDark, toggleTheme } = useTheme();

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-striped-pattern">
      {/* Fixed Header with Dark Mode & Language Switcher */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Back Button */}
            <Link
              href="/#portfolio"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="hidden sm:inline">{t('project.back_to_portfolio')}</span>
              <span className="sm:hidden">Back</span>
            </Link>

            {/* Dark Mode & Language Switcher */}
            <div className="flex items-center space-x-3">
              {/* Language Switcher */}
              <LanguageSwitcher />

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
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
            </div>
          </div>
        </div>
      </div>

      {/* Header Section with spacing for fixed header */}
      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md shadow-sm pt-20">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {project.title}
          </h1>

          {/* Hero Image */}
          <div className="relative w-full h-96 md:h-[500px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Project Overview */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">{t('project.overview')}</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {project.fullDescription}
            </p>
          </section>

          {/* Features */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">{t('project.features')}</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Figma Screenshots - Only show if figmaScreenshots exist and are not empty */}
          {project.figmaScreenshots && project.figmaScreenshots.length > 0 && (
            <section>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Design Process</h2>
              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md p-6 rounded-lg shadow-sm border dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                  Figma Design
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {project.figmaScreenshots.map((screenshot, index) => (
                    <div
                      key={index}
                      className="relative group cursor-pointer"
                      onClick={() => openModal(screenshot)}
                    >
                      <Image
                        src={screenshot}
                        alt={`Figma Design ${index + 1}`}
                        width={400}
                        height={300}
                        className="w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                        <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Additional Screenshots */}
          {project.additionalScreenshots && project.additionalScreenshots.length > 0 && (
            <section>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Project Screenshots</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.additionalScreenshots.map((screenshot, index) => (
                  <div
                    key={index}
                    className="relative group cursor-pointer"
                    onClick={() => openModal(screenshot)}
                  >
                    <Image
                      src={screenshot}
                      alt={`Project Screenshot ${index + 1}`}
                      width={600}
                      height={400}
                      className="w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                      <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Challenge & Solution */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">The Core Story</h2>
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 dark:border-blue-400 p-6 rounded-r-lg mb-6">
              <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-300 mb-3">Tantangan</h3>
              <p className="text-blue-800 dark:text-blue-200">{project.challenge}</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 dark:border-green-400 p-6 rounded-r-lg">
              <h3 className="text-xl font-semibold text-green-900 dark:text-green-300 mb-3">Solusi</h3>
              <p className="text-green-800 dark:text-green-200">{project.solution}</p>
            </div>
          </section>

          {/* Tech Stack */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Tech Stack</h2>
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md p-6 rounded-lg shadow-sm border dark:border-gray-700">
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* My Role */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">My Role & Responsibilities</h2>
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md p-6 rounded-lg shadow-sm border dark:border-gray-700">
              <p className="text-lg text-gray-700 mb-6 font-medium">{project.role}</p>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200 mb-4">Responsibilities:</h3>
              <ul className="space-y-3">
                {project.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Links Section */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Links</h2>
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md p-6 rounded-lg shadow-sm border dark:border-gray-700">
              <div className="flex flex-col sm:flex-row gap-4">
                {project.liveDemoLink && (
                  <a
                    href={project.liveDemoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                )}
                {project.codeLink && (
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-200 flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    View Code
                  </a>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Modal Zoom */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-7xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <Image
              src={selectedImage}
              alt="Zoomed Image"
              width={1200}
              height={800}
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectDetail;
