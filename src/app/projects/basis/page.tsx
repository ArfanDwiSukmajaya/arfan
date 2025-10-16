"use client";

import ProjectDetail from '../../component/ProjectDetail';
import { useLanguage } from '../../context/LanguageContext';

export default function BasisPage() {
  const { t } = useLanguage();

  const projectData = {
    title: t('project.basis.title') + " - Student Discussion Platform",
    description: t('project.basis.description'),
    fullDescription: t('project.basis.full_description'),
    image: "/basis-logo.png",
    codeLink: "https://github.com/rg-km/final-project-engineering-6",
    liveDemoLink: "https://basis-demo.vercel.app/",
    techStack: [
      "React.js",
      "React Router DOM",
      "SCSS/Sass",
      "Material-UI (MUI)",
      "Axios",
      "Zustand",
      "Styled Components",
      "React Scripts",
      "Node.js",
      "JavaScript ES6+",
      "CSS3",
      "HTML5",
      "Responsive Design",
      "Component Architecture",
      "State Management",
      "API Integration"
    ],
    role: t('project.basis.role'),
    responsibilities: [
      t('project.basis.responsibilities.1'),
      t('project.basis.responsibilities.2'),
      t('project.basis.responsibilities.3'),
      t('project.basis.responsibilities.4'),
      t('project.basis.responsibilities.5'),
      t('project.basis.responsibilities.6'),
      t('project.basis.responsibilities.7'),
      t('project.basis.responsibilities.8')
    ],
    challenge: t('project.basis.challenge'),
    solution: t('project.basis.solution'),
    features: [
      t('project.basis.features.1'),
      t('project.basis.features.2'),
      t('project.basis.features.3'),
      t('project.basis.features.4'),
      t('project.basis.features.5'),
      t('project.basis.features.6'),
      t('project.basis.features.7'),
      t('project.basis.features.8')
    ],
    technicalHighlights: [
      t('project.basis.technical_highlights.1'),
      t('project.basis.technical_highlights.2'),
      t('project.basis.technical_highlights.3'),
      t('project.basis.technical_highlights.4'),
      t('project.basis.technical_highlights.5'),
      t('project.basis.technical_highlights.6'),
      t('project.basis.technical_highlights.7'),
      t('project.basis.technical_highlights.8')
    ],
    businessImpact: [
      t('project.basis.business_impact.1'),
      t('project.basis.business_impact.2'),
      t('project.basis.business_impact.3'),
      t('project.basis.business_impact.4')
    ]
  };

  return <ProjectDetail project={projectData} />;
}