import React from 'react';

function ExperienceTimeline() {
  const experiences = [
    {
      company: "Adira Finance",
      role: "Software Developer",
      date: "Februari 2023 - Now",
      description: [
        "Fully responsible for the application development lifecycle, from design and implementation to maintenance.",
        "Revamped and modernized legacy systems using cutting-edge technologies, transforming platforms like G-NOW and Riplay into high-performance, scalable solutions.",
        "Optimized and improved system performance on projects such as Enhance Pencairan Dana NDS Fase 3 and Enhancement WMP Fase 1.",
        "Participated in the development of JATI (Jaringan Automotif Terintegrasi Interaktif) to integrate automotive services.",
        "Worked within an Agile team to address technical challenges and ensure timely project completion.",
      ],
    },
  ];

  return (
    <div id="experience" className="md:py-24 px-4 md:px-8">
      {/* Judul */}
      <div className="flex justify-center w-full max-w-[90vw] md:max-w-[70vw] mx-auto mb-12">
        <h3 className="text-4xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-gray-900 via-blue-700 to-purple-700 bg-clip-text text-transparent">
          Work Experience
        </h3>
      </div>

      {/* Wadah utama timeline */}
      <div className="flex justify-center w-full max-w-[90vw] md:max-w-[70vw] mx-auto mb-12">
        {/* Garis vertikal di tengah */}

        {experiences.map((exp, index) => (
          <div key={index} className="mb-10 relative">
            {/* Kotak konten pengalaman */}
            <div className="rounded-lg md:p-8 shadow-md sm:ml-8">
              <div className="flex justify-between items-center mb-2 flex-wrap">
                <h3 className="text-lg md:text-xl font-bold text-gray-800">{exp.company}</h3>
                <span className="inline-flex items-center rounded-md bg-purple-400/10 px-2 py-1 text-xs font-medium text-purple-400 inset-ring inset-ring-purple-400/30">{exp.date}</span>
              </div>
              <p className="text-base font-semibold text-gray-700">{exp.role}</p>
              <ul className="list-disc list-inside mt-2 text-gray-600 space-y-1">
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