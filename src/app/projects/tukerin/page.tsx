"use client";

import ProjectDetail from '../../component/ProjectDetail';
import { useLanguage } from '../../context/LanguageContext';

export default function TukerinPage() {
  const { t } = useLanguage();

  const projectData = {
    title: t('project.tukerin.title') + " - Item Exchange Platform",
    description: t('project.tukerin.description'),
    fullDescription: t('project.tukerin.full_description'),
    image: "/tukerin.png",
    codeLink: "https://github.com/arfandwisukmajaya/tukerin",
    liveDemoLink: "https://tukerin-azure.vercel.app/",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT Authentication",
      "Chakra UI",
      "Axios",
      "Zustand",
      "React Router",
      "Bcrypt",
      "CORS",
      "Vite"
    ],
    role: t('project.tukerin.role'),
    responsibilities: [
      t('project.tukerin.responsibilities.1'),
      t('project.tukerin.responsibilities.2'),
      t('project.tukerin.responsibilities.3'),
      t('project.tukerin.responsibilities.4'),
      t('project.tukerin.responsibilities.5'),
      t('project.tukerin.responsibilities.6'),
      t('project.tukerin.responsibilities.7'),
      t('project.tukerin.responsibilities.8')
    ],
    challenge: t('project.tukerin.challenge'),
    solution: t('project.tukerin.solution'),
    features: [
      t('project.tukerin.features.1'),
      t('project.tukerin.features.2'),
      t('project.tukerin.features.3'),
      t('project.tukerin.features.4'),
      t('project.tukerin.features.5'),
      t('project.tukerin.features.6'),
      t('project.tukerin.features.7'),
      t('project.tukerin.features.8')
    ],
    technicalHighlights: [
      t('project.tukerin.technical_highlights.1'),
      t('project.tukerin.technical_highlights.2'),
      t('project.tukerin.technical_highlights.3'),
      t('project.tukerin.technical_highlights.4'),
      t('project.tukerin.technical_highlights.5'),
      t('project.tukerin.technical_highlights.6'),
      t('project.tukerin.technical_highlights.7'),
      t('project.tukerin.technical_highlights.8')
    ],
    businessImpact: [
      t('project.tukerin.business_impact.1'),
      t('project.tukerin.business_impact.2'),
      t('project.tukerin.business_impact.3'),
      t('project.tukerin.business_impact.4')
    ],
    figmaScreenshots: [
    ],
    additionalScreenshots: [
    ]
  };

  return <ProjectDetail project={projectData} />;
}
