import React from 'react';
import Image from 'next/image';

function ProjectsSection() {
  const projects = [
    {
      title: "4c-ilabs",
      description: "A comprehensive learning management system tailored for student lab experiences. Key features include attendance tracking, live Arduino coding, and interactive virtual sessions.",
      image: "/4c-ilabs.png", // Ganti dengan path gambar proyek Anda
      codeLink: "",
    },
    {
      title: "Tukerin",
      description: " A platform for item exchange, auctions, and charitable donations. My role involved building the responsive user interface to simplify item management and facilitate community-based transactions.",
      image: "/tukerin.png", // Ganti dengan path gambar proyek Anda
      codeLink: "https://github.com/orgs/CPI-FS-SDG-12-C/repositories",
    },
    {
      title: "Text-Summarization",
      description: "Developed an AI-based language model application to automatically summarize news articles and long-form texts. Implemented the CLSA (Cross Latent Semantic Analysis) method to extract key information and generate coherent summaries.",
      image: "/text-sumarization.png", // Ganti dengan path gambar proyek Anda
      codeLink: "https://github.com/ArfanDwiSukmajaya/Text-Summarization-CLSA",
    },
    // Tambahkan lebih banyak proyek di sini
  ];

  return (
    <div id="portfolio" className="py-12 md:py-24 px-4 md:px-8">
      {/* Judul "Core Features" / "Portfolio" */}
      <div className="flex justify-center w-full min-w-[70vw] mx-auto mb-12">
        <h3 className="text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-gray-900 via-blue-700 to-purple-700 bg-clip-text text-transparent">
          Portofolio
        </h3>
      </div>

      {/* Wadah utama grid untuk proyek */}
      <div className="w-full max-w-[80vw] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg p-6 border shadow-2xs">
            {/* Gambar atau Thumbnail Proyek */}
            <Image src={project.image} alt={project.title} width={640} height={360} className="w-full h-auto rounded-lg mb-4" />

            {/* Judul dan Deskripsi */}
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">{project.title}</h3>
            <p className="text-base text-gray-600 mb-4">{project.description}</p>

            {/* Tombol Aksi (Opsional) */}
            <div className="flex space-x-4">
              <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:underline">
                Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsSection;